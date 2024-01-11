import { Router, Request, Response, NextFunction } from "express";
import { destroy, records, show, store, update } from "../services/term.service";

const router = Router();

// Get a listing of the resource.
router.get('/terms', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const terms = await records()
        res.json({ data: terms })
    } catch (error) {
        next(error);
    }
})

// Store a newly created resource in storage.
router.post('/terms', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const term = await store(req.body)
        res.json({ data: term })
    } catch (error) {
        next(error);
    }
})

// Get the specified resource.
router.get('/terms/:id', async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);

    try {
        const term = await show(id)
        res.json({ term })
    } catch (error) {
        next(error);
    }
})

// Update the specified resource in storage.
router.put('/terms/:id', async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);

    try {
        const term = await update(req.body, id)
        res.json({ term })
    } catch (error) {
        next(error);
    }
})

// Remove the specified resource from storage.
router.delete('/terms/:id', async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);

    try {
        const term = await destroy(id)
        res.json({ term })
    } catch (error) {
        next(error);
    }
})

export default router;