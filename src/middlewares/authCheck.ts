import { NextFunction, Response } from "express"
import { getUserFromToken } from "../services/user.service";
import { CustomRequest } from "../utils/request";

module.exports = function authCheck(req: CustomRequest, res: Response, next: NextFunction) {
    // get the authorization token
    const token = req.headers.authorization;

    // look up the user based on the token
    getUserFromToken(token)
        .then(response => {
            // append the user object the the request object
            req.body.user = response.data

            // console.log(req.body.user);
            
            // call next middleware in the stack
            next();
        })
        .catch((error: any) => {
            console.log(error.code, error.message);

            // if the authorization token is invalid or missing returning a 401 error
            res.status(401).json({
                message: "Unauthorized"
            })
        })
}

/*
export const authCheck = (req: CustomRequest, res: Response, next: NextFunction) => {
    // get the authorization token
    const token = req.headers.authorization;

    // look up the user based on the token
    getUserFromToken(token)
        .then(response => {
            // append the user object the the request object
            req.user = response.data

            // console.log(req.user);
            
            // call next middleware in the stack
            next();
        })
        .catch((error: any) => {
            console.log(error.code, error.message);

            // if the authorization token is invalid or missing returning a 401 error
            res.status(401).json({
                message: "Unauthorized"
            })
        })
    
    return next();
}
*/
