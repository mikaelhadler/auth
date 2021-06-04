-- CreateEnum
CREATE TYPE "as_account_status_enum" AS ENUM ('WAITING_FOR_APPROVAL', 'APPROVED', 'REPROVED', 'BLOCKED');

-- CreateEnum
CREATE TYPE "as_authentication_status_enum" AS ENUM ('ONLINE', 'OFFLINE', 'BLOCKED', 'CREATED');

-- CreateTable
CREATE TABLE "as_accounts" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "status" "as_account_status_enum" NOT NULL DEFAULT E'WAITING_FOR_APPROVAL',
    "address_id" TEXT,
    "authentication_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "as_activities" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "permissions" TEXT[],

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "as_address" (
    "id" TEXT NOT NULL,
    "street" TEXT,
    "suite" TEXT,
    "city" TEXT,
    "zip_code" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "as_auth_groups" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "as_auth_groups_activities" (
    "activity_id" TEXT NOT NULL,
    "auth_groups_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("activity_id","auth_groups_id")
);

-- CreateTable
CREATE TABLE "as_auth_groups_authentications" (
    "auth_groups_id" TEXT NOT NULL,
    "authentication_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("authentication_id","auth_groups_id")
);

-- CreateTable
CREATE TABLE "as_authentications" (
    "id" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "attempts" INTEGER NOT NULL,
    "session_limit" INTEGER NOT NULL DEFAULT 1,
    "status" "as_authentication_status_enum" NOT NULL DEFAULT E'CREATED',
    "active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "as_account_id" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "as_accounts.username_unique" ON "as_accounts"("username");

-- CreateIndex
CREATE UNIQUE INDEX "as_accounts.email_unique" ON "as_accounts"("email");

-- CreateIndex
CREATE UNIQUE INDEX "as_activities.name_unique" ON "as_activities"("name");

-- CreateIndex
CREATE UNIQUE INDEX "as_auth_groups.title_unique" ON "as_auth_groups"("title");

-- CreateIndex
CREATE UNIQUE INDEX "as_authentications.as_account_id_unique" ON "as_authentications"("as_account_id");

-- AddForeignKey
ALTER TABLE "as_accounts" ADD FOREIGN KEY ("address_id") REFERENCES "as_address"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "as_accounts" ADD FOREIGN KEY ("authentication_id") REFERENCES "as_authentications"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "as_auth_groups_authentications" ADD FOREIGN KEY ("auth_groups_id") REFERENCES "as_auth_groups"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "as_auth_groups_authentications" ADD FOREIGN KEY ("authentication_id") REFERENCES "as_authentications"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "as_authentications" ADD FOREIGN KEY ("as_account_id") REFERENCES "as_accounts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "as_auth_groups_activities" ADD FOREIGN KEY ("activity_id") REFERENCES "as_activities"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "as_auth_groups_activities" ADD FOREIGN KEY ("auth_groups_id") REFERENCES "as_auth_groups"("id") ON DELETE CASCADE ON UPDATE CASCADE;
