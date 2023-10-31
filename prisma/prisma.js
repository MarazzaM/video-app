const { PrismaClient } = require('@prisma/client');

function prismaClientSingleton() {
  return new PrismaClient();
}

const globalForPrisma = globalThis;
const prisma = globalForPrisma.prisma || prismaClientSingleton();

module.exports = prisma;

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}
