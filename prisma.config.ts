import * as dotenv from 'dotenv';
import path from "node:path";
import type { PrismaConfig } from "prisma/config";

dotenv.config({ path: path.resolve(__dirname, '.env') });

export default {
  schema: path.join("src", "shared", "database", "schema"),
} satisfies PrismaConfig;
