CREATE TABLE "public.green_fee_rates" (
	"id" uuid PRIMARY KEY NOT NULL,
	"courseType" varchar(50) NOT NULL,
	"category" varchar(50) NOT NULL,
	"weekday9h" double precision NOT NULL,
	"weekday18h" double precision NOT NULL,
	"weekend9h" double precision NOT NULL,
	"weekend18h" double precision NOT NULL,
	CONSTRAINT "public.green_fee_rates_id_unique" UNIQUE("id")
);
