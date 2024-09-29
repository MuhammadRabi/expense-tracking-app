"use server"

import { revalidatePath } from "next/cache"
import { createExpense, removeExpense } from "./expenses"
import { auth, currentUser } from "@clerk/nextjs/server"
import { createUser, findUser } from "./user"

export async function addExpense(formData: FormData) {
  const data = Object.fromEntries(formData.entries())
  const title = data.title as string
  const amount = parseFloat(data.amount as string)

  const { userId } = auth()
  const user = await currentUser()
  const email = user?.emailAddresses[0].emailAddress
  console.log(email)

  if (userId) {
    const dbUser = await findUser(userId)

    // If user does not exist, save new one to db
    if (!dbUser) {
      await createUser(userId, email!)
    }
    // add user id
    await createExpense({ title, amount, userId })
    revalidatePath("/")
  }
}

export async function deleteExpense(id: number) {
  await removeExpense(id)
  revalidatePath("/")
}
