/*
  Warnings:

  - You are about to drop the `habits_week` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "habits_week";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "habit_week_days" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "id_habit" TEXT NOT NULL,
    "week_day" INTEGER NOT NULL,
    CONSTRAINT "habit_week_days_id_habit_fkey" FOREIGN KEY ("id_habit") REFERENCES "habits" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "habit_week_days_id_habit_week_day_key" ON "habit_week_days"("id_habit", "week_day");
