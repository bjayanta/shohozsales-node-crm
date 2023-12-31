import { Router, Request, Response, NextFunction } from "express";
import { records } from "../services/term.service";

const router = Router();

router.post('/contacts', async (req: Request, res: Response, next: NextFunction) => {
    try {
        res.json({
            test: 123
        })
    } catch (error) {
        next(error);
    }
})

export default router;