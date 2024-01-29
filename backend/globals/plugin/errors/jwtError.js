import jwt from "jsonwebtoken";

const { JsonWebTokenError } = jwt

export default function jwtError(err) {
    if(err instanceof JsonWebTokenError) {
        return {
            message: err.message,
            status: 500
        }
    }
}