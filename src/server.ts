import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient()
const app = express()

app.use(express.json())
app.use(express.urlencoded({
    extended: true,
}))

// Routes
app.get('/', (req: any, res: any) => {
    res.send('Hello node api.');
});

app.get('/blog', (req:any, res:any) => {
    res.send('Hello blog. I am Jayanta.');
});

app.post('/',async (req: any, res: any) => {
    try {
        const term = await prisma.term.create({
            data: req.body
        })

        res.status(200).send(term)
    } catch (error) {
        res.status(500).send(null)
    }
})

app.listen(3000, () => {
    console.log(`Node API app is running on port 3000`);
});

