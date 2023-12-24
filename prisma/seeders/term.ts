import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const TermSeeder = async () => {
    const data = [
        {name: 'Customer', description: 'n/a', texonomy: 'Contact', action_taken_by: {created_by: 1}, business_id: 1},
        {name: 'Supplier', description: 'n/a', texonomy: 'Contact', action_taken_by: {created_by: 1}, business_id: 1},
        {name: 'Administrator', description: 'n/a', texonomy: 'Contact', action_taken_by: {created_by: 1}, business_id: 1},
        {name: 'Employee', description: 'n/a', texonomy: 'Contact', action_taken_by: {created_by: 1}, business_id: 1},
        {name: 'Lead', description: 'n/a', texonomy: 'Contact', action_taken_by: {created_by: 1}, business_id: 1}
    ];

    const res = await prisma.terms.createMany({
        data,
        skipDuplicates: true
    });

    console.log(res);
}

export default TermSeeder;