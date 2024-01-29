import bcrypt from "bcrypt";

export const generateHash = async (pass) => {
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(pass, salt)

    return hash
}