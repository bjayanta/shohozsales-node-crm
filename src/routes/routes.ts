import { Router } from "express";

import termController from "../controllers/term.controller";
import contactController from "../controllers/contact.controller";

const api = Router()
    .use(termController)
    .use(contactController);

export default Router().use('/api', api);