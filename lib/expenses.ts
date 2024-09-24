import prisma from "./prisma"

export async function getExpenses() {
  return await prisma.item.findMany()
}

export async function createExpense(data: { title: string; amount: number }) {
  return await prisma.item.create({ data })
}

export async function removeExpense(id: number) {
  return await prisma.item.delete({
    where: { id },
  })
}
