import { PrismaClient } from "@prisma/client";

// Get the global object and create a property to store the Prisma client
const globalForPrisma = global as unknown as { prisma: PrismaClient };

// Create a new Prisma client if it doesn't exist or reuse the existing one
export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient();

// If it's not production, save the Prisma client to the global object
if (process.env.NODE_ENV !== "production")
  globalForPrisma.prisma = prisma;
