-- Remove conflicting tables
DROP TABLE IF EXISTS "user" CASCADE;
DROP TABLE IF EXISTS "user_weight" CASCADE;
-- End of removing

CREATE TABLE "user"(
                     id_user SERIAL NOT NULL,
                     name VARCHAR(64) NOT NULL,
                     email VARCHAR(64) NOT NULL,
                     password VARCHAR(256) NOT NULL,
                     birth_date DATE NOT NULL,
                     height INTEGER NOT NULL,
                     gender VARCHAR(32) NOT NULL
);
ALTER TABLE "user" ADD CONSTRAINT "pk_user" PRIMARY KEY (id_user);

CREATE TABLE "user_weight" (
                             date DATE NOT NULL,
                             id_user INTEGER NOT NULL,
                             weight DOUBLE PRECISION NOT NULL
);
ALTER TABLE "user_weight" ADD CONSTRAINT "pk_user_weight" PRIMARY KEY (date, id_user);

ALTER TABLE "user_weight" ADD CONSTRAINT "fk_user_weight_user" FOREIGN KEY (id_user) REFERENCES "user" (id_user) ON DELETE CASCADE;
