import { PrismaClient } from "@prisma/client";
import { TermInput } from "../models/term.model";

const prisma = new PrismaClient()

// All records
export const records = async () => {
    const terms = await prisma.term.findMany({
        where: {parent_id: null},
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

    const term = await prisma.term.create({
        data: {
            name,
            description         : inputs.description,
            parent_id           : inputs.parent_id,
            texonomy            : inputs.texonomy,
            action_taken_by     : inputs.action_taken_by,
            business_id         : inputs.business_id,
            deleted_at          : inputs.deleted_at
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

    const term = await prisma.term.update({
        where: {id: id},
        data: {
            name,
            description         : inputs.description,
            parent_id           : inputs.parent_id,
            texonomy            : inputs.texonomy,
            action_taken_by     : inputs.action_taken_by,
            business_id         : inputs.business_id,
            deleted_at          : inputs.deleted_at
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

    return term
}

// Remove
export const destroy = async (id: number) => {
    const term = await prisma.term.delete({
        where: {id: id}
    });

    return term;
}