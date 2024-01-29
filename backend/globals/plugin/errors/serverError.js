import ServerError from "../../utils/server-error.js";

export default function serverError(err) {
    if (err instanceof ServerError) {
        return {
            message: err.message,
            status: err.status
        }
    }
}