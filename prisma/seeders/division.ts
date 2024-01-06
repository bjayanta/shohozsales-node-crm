import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const DivisionSeeder = async () => {
    const data = [
        {"name":"Chattagram", "bn_name":"চট্টগ্রাম", "url":"www.chittagongdiv.gov.bd"},
        {"name":"Rajshahi", "bn_name":"রাজশাহী", "url":"www.rajshahidiv.gov.bd"},
        {"name":"Khulna", "bn_name":"খুলনা", "url":"www.khulnadiv.gov.bd"},
        {"name":"Barisal", "bn_name":"বরিশাল", "url":"www.barisaldiv.gov.bd"},
        {"name":"Sylhet", "bn_name":"সিলেট", "url":"www.sylhetdiv.gov.bd"},
        {"name":"Dhaka", "bn_name":"ঢাকা", "url":"www.dhakadiv.gov.bd"},
        {"name":"Rangpur", "bn_name":"রংপুর", "url":"www.rangpurdiv.gov.bd"},
        {"name":"Mymensingh", "bn_name":"ময়মনসিংহ", "url":"www.mymensinghdiv.gov.bd"}
    ];

    const res = await prisma.division.createMany({
        data,
        skipDuplicates: true
    });

    console.log(res);
}

export default DivisionSeeder;