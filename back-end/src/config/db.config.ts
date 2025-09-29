import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient({
  log: ["error", "query"],
});

export default prisma;
