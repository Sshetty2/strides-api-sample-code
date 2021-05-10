-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS "users";
CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar NOT NULL
);


-- ----------------------------
-- Table structure for passwords
-- ----------------------------
DROP TABLE IF EXISTS "passwords";
CREATE TABLE "passwords" (
  "id" SERIAL PRIMARY KEY,
  "hash" varchar NOT NULL,
  "user_id" INT
);

-- ----------------------------
-- Foreign Keys structure for table passwords
-- ----------------------------
ALTER TABLE "passwords" ADD CONSTRAINT "user" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
