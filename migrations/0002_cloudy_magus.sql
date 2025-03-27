ALTER TABLE "public.green_fee_rates" RENAME TO "greenfee";--> statement-breakpoint
ALTER TABLE "greenfee" DROP CONSTRAINT "public.green_fee_rates_id_unique";--> statement-breakpoint
ALTER TABLE "greenfee" ADD CONSTRAINT "greenfee_id_unique" UNIQUE("id");