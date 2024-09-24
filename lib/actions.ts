"use server"

import { revalidatePath } from "next/cache"
import { createExpense, removeExpense } from "./expenses"

export async function addExpense(formData: FormData) {
  const data = Object.fromEntries(formData.entries())
  const title = data.title as string
  const amount = parseFloat(data.amount as string)

  await createExpense({ title, amount })
  revalidatePath("/")
}

export async function deleteExpense(id: number) {
  await removeExpense(id)
  revalidatePath("/")
}
