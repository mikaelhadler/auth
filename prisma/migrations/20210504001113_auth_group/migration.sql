-- CreateTable
CREATE TABLE "activities" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "permissions" TEXT[],

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "auth_groups_activities" (
    "id" TEXT NOT NULL,
    "activity_id" TEXT,
    "auth_groups_id" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "auth_groups" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_activitiesToauth_groups" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "activities.name_unique" ON "activities"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_activitiesToauth_groups_AB_unique" ON "_activitiesToauth_groups"("A", "B");

-- CreateIndex
CREATE INDEX "_activitiesToauth_groups_B_index" ON "_activitiesToauth_groups"("B");

-- AddForeignKey
ALTER TABLE "auth_groups_activities" ADD FOREIGN KEY ("activity_id") REFERENCES "activities"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "auth_groups_activities" ADD FOREIGN KEY ("auth_groups_id") REFERENCES "auth_groups"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_activitiesToauth_groups" ADD FOREIGN KEY ("A") REFERENCES "activities"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_activitiesToauth_groups" ADD FOREIGN KEY ("B") REFERENCES "auth_groups"("id") ON DELETE CASCADE ON UPDATE CASCADE;
