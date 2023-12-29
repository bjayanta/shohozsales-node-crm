import { PrismaClient } from "@prisma/client";
import TermSeeder from "./term";

const prisma = new PrismaClient();

async function main () {
    // Terms
    await TermSeeder();
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)

        await prisma.$disconnect()
        
        process.exit(1)
    })