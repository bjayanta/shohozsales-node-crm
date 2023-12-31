import { PrismaClient } from "@prisma/client";
import express, {NextFunction, Request, Response} from "express";
import routes from "./routes/routes";
import HttpException from "./utils/http-exception";

const prisma = new PrismaClient()
const app = express()

// app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended: true,
}))
app.use(routes)
app.use(express.static('public'))

// Routes
app.get('/', (req: Request, res: Response) => {
    res.json({
        message: 'Hello World!'
    });
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

app.use((err: HttpException, req: Request, res: Response, next: NextFunction) => {
    if (err && err.errorCode) {
        res.status(err.errorCode).json(err.message);
    } else if(err) {
        res.status(500).json(err.message);
    }
})

app.listen(3000, () => {
    console.log(`Node API app is running on port 3000`);
});

