-- CreateTable
CREATE TABLE "as_activities" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "permissions" TEXT[],

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
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("activity_id","auth_groups_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "as_activities.name_unique" ON "as_activities"("name");

-- CreateIndex
CREATE UNIQUE INDEX "as_auth_groups.title_unique" ON "as_auth_groups"("title");

-- AddForeignKey
ALTER TABLE "as_auth_groups_activities" ADD FOREIGN KEY ("activity_id") REFERENCES "as_activities"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "as_auth_groups_activities" ADD FOREIGN KEY ("auth_groups_id") REFERENCES "as_auth_groups"("id") ON DELETE CASCADE ON UPDATE CASCADE;
