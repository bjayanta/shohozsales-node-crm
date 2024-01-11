import { PrismaClient } from "@prisma/client";
import { ActionTakenBy, TermInput } from "../models/term.model";
import { JsonObject } from "@prisma/client/runtime/library";

const prisma = new PrismaClient()

// All records
export const records = async () => {
    const terms = await prisma.term.findMany({
        where: {
            parent_id: null
        },
        include: {
            subterms: {
                select: {
                    id: true,
                    name: true,
                    description: true
                }
            },
        }
    })

    return terms;
}

// Store
export const store = async (inputs: TermInput) => {
    const name = inputs.name.trim();
    const action_taken_by = {
        'created_by': Number(inputs.user.id)
    }

    const term = await prisma.term.create({
        data: {
            name,
            description         : inputs.description,
            parent_id           : inputs.parent_id,
            taxonomy            : inputs.taxonomy,
            action_taken_by     : action_taken_by,
            business_id         : Number(inputs.user.businesses[0].id)
        }, 
        include: {
            parent: {
                select: {
                    id: true,
                    name: true,
                    description: true
                }
            }
        }
    })

    return term;
}

// Show
export const show = async (id: number) => {
    const term = await prisma.term.findUnique({
        where: {id: id as number},
        include: {
            parent:{
                select: {
                    id: true,
                    name: true,
                    description: true
                }
            },
            subterms: {
                select: {
                    id: true,
                    name: true,
                    description: true
                }
            }
            
        }
    })

    return term;
}

// Update
export const update = async (inputs: TermInput, id: number) => {
    const name = inputs.name.trim();

    const term = await prisma.term.findUnique({
        where: {id: id},
        select: {
            action_taken_by: true
        }
    })

    const action_taken_by = term?.action_taken_by as JsonObject;
    action_taken_by['updated_by'] = Number(inputs.user.id)

    const data = await prisma.term.update({
        where: {id: id},
        data: {
            name,
            description         : inputs.description,
            parent_id           : inputs.parent_id,
            taxonomy            : inputs.taxonomy,
            action_taken_by     : action_taken_by
        },
        include: {
            parent: {
                select: {
                    id: true,
                    name: true,
                    description: true
                }
            },
            subterms: {
                select: {
                    id: true,
                    name: true,
                    description: true
                }
            }
        }
    })

    return { data }
}

// Remove
export const destroy = async (id: number) => {
    try {
        const data = await prisma.term.delete({
            where: {id: id}
        });

        return { data };
    } catch (error) {
        return {
            message: error
        }
    }
}