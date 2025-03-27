import {
  varchar,
  uuid,
  text,
  integer,
  pgEnum,
  date,
  timestamp,
  pgTable,
  numeric,
  doublePrecision,
} from "drizzle-orm/pg-core";

export const STATUS_ENUM = pgEnum("status", [
  "PENDING",
  "APPROVED",
  "REJECTED",
]);
export const ROLE_ENUM = pgEnum("role", ["USER", "ADMIN"]);

export const users = pgTable("users", {
  id: uuid("id").notNull().primaryKey().defaultRandom().unique(),
  fullName: varchar("full_name", { length: 255 }).notNull(),
  email: text("email").notNull().unique(),
  ghinNumber: integer("ghin_number").notNull().unique(),
  password: text("password").notNull(),
  status: STATUS_ENUM("status").default("PENDING"),
  role: ROLE_ENUM("role").default("USER"),
  lastActivityDate: date("last_activity_date").defaultNow(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});

export const rates = pgTable("greenfee", {
  id: uuid("id").notNull().primaryKey().unique(),
  courseType: varchar({ length: 50 }).notNull(),
  category: varchar({ length: 50 }).notNull(),
  weekday9h: doublePrecision().notNull(),
  weekday18h: doublePrecision().notNull(),
  weekend9h: doublePrecision().notNull(),
  weekend18h: doublePrecision().notNull(),
});
