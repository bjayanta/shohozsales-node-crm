import { PrismaClient } from "@prisma/client";
import TermSeeder from "./term";
import DivisionSeeder from "./division";
import DistrictSeeder from "./district";
import UpazilaSeeder from "./upazila";
import UnionSeeder from "./union";

const prisma = new PrismaClient();

async function main () {
    // await TermSeeder();
    // await DivisionSeeder();
    // await DistrictSeeder();
    // await UpazilaSeeder();
    await UnionSeeder();
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