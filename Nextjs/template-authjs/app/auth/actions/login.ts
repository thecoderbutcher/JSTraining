'use server'
import * as z from "zod";
import { LoginSchema } from "@/schemas"

export const login = async (values: z.infer<typeof LoginSchema>) => {
    const validateFields = LoginSchema.safeParse(values);

    if(!validateFields.success) return {error:"Invalid fields!"}

    const { email, password } = validateFields.data
    const existingUser = ""

    return {success: "Email sent!"}
}