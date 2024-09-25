import prisma from "./prisma"

export async function getExpenses(userId: string) {
  return await prisma.item.findMany({
    where: {
      userId,
    },
  })
}

export async function createExpense(data: {
  title: string
  amount: number
  userId: string
}) {
  return await prisma.item.create({ data })
}

export async function removeExpense(id: number) {
  return await prisma.item.delete({
    where: { id },
  })
}
