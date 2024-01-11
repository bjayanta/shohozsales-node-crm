import express, {NextFunction, Request, Response} from "express";
import routes from "./routes/routes";
import HttpException from "./utils/http-exception";
import fs from "fs";

const authCheck = require('./middlewares/authCheck')
// import { authCheck } from "./middlewares/authCheck";

const app = express()

// app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended: true,
}))

app.use(authCheck)
app.use(routes)
app.use(express.static('public'))

app.use((err: HttpException, req: Request, res: Response, next: NextFunction) => {
    if (err && err.errorCode) {
        // Set error log
        fs.appendFile('log.txt', `${Date.now()} ${err.message} ${req.path}\n`, (err: any) => {
            if (err) throw err;
        })

        return res.status(err.errorCode).json(err.message);
    } else if(err) {
        return res.status(500).json(err.message);
    }
})

app.listen(3000, () => {
    console.log(`Node API app is running on port 3000`);
});

