import prisma from "./prisma"

export async function findUser(userId: string) {
  const dbUser = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  })
  return dbUser
}
export async function createUser(userId: string, email: string) {
  await prisma.user.create({
    data: {
      id: userId,
      email,
    },
  })
}
