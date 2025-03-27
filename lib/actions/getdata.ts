import { neon } from "@neondatabase/serverless";
import config from "../config";

export const getRates = async () => {
  const sql = neon(config.env.databaseUrl);
  const response = await sql`SELECT version()`;
  return response[0].version;
};
