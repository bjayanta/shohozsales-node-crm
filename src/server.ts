import express, {NextFunction, Request, Response} from "express";
import routes from "./routes/routes";
import HttpException from "./utils/http-exception";
import fs from "fs";

const app = express()

// app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended: true,
}))

app.use((req: Request, res: Response, next: NextFunction) => {
    fs.appendFile('log.txt', `${Date.now()} ${req.ip} ${req.method} ${req.path}\n`, (err: any) => {
        if (err) throw err;
    })

    return next()
})

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

app.use((err: HttpException, req: Request, res: Response, next: NextFunction) => {
    if (err && err.errorCode) {
        return res.status(err.errorCode).json(err.message);
    } else if(err) {
        return res.status(500).json(err.message);
    }
})

app.listen(3000, () => {
    console.log(`Node API app is running on port 3000`);
});

