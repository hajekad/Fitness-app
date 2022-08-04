-- Remove conflicting tables
DROP TABLE IF EXISTS "user" CASCADE;
DROP TABLE IF EXISTS "walk" CASCADE;
-- End of removing

CREATE TABLE "user" (
                    id_user BIGSERIAL NOT NULL PRIMARY KEY,
                    birth_year INTEGER NOT NULL,
                    sex VARCHAR(256) NOT NULL,
                    educational_attainment VARCHAR(256) NOT NULL,
                    anamneza TEXT,
                    smoker BOOLEAN,
                    athlete BOOLEAN
);
ALTER TABLE "user" ADD CONSTRAINT "pk_user" PRIMARY KEY (id_user);

CREATE TABLE "walk" (
                    id_walk BIGSERIAL NOT NULL PRIMARY KEY,
                    date DATE NOT NULL,
                    id_user INTEGER NOT NULL,
                    distance INTEGER NOT NULL,
                    start_lat INTEGER NOT NULL,
                    start_long INTEGER NOT NULL,
                    end_lat INTEGER NOT NULL,
                    end_long INTEGER NOT NULL
);
ALTER TABLE "walk" ADD CONSTRAINT "pk_walk" PRIMARY KEY (id_walk, id_user);

ALTER TABLE "walk" ADD CONSTRAINT "fk_walk_user" FOREIGN KEY (id_user) REFERENCES "user" (id_user) ON DELETE CASCADE;