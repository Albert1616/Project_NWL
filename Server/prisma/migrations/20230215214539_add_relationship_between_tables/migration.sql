/*
  Warnings:

  - Added the required column `habitId` to the `habits_week` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Day_habit" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "id_day" TEXT NOT NULL,
    "id_habit" TEXT NOT NULL,
    CONSTRAINT "Day_habit_id_day_fkey" FOREIGN KEY ("id_day") REFERENCES "days" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Day_habit_id_habit_fkey" FOREIGN KEY ("id_habit") REFERENCES "habits" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Day_habit" ("id", "id_day", "id_habit") SELECT "id", "id_day", "id_habit" FROM "Day_habit";
DROP TABLE "Day_habit";
ALTER TABLE "new_Day_habit" RENAME TO "Day_habit";
CREATE UNIQUE INDEX "Day_habit_id_day_id_habit_key" ON "Day_habit"("id_day", "id_habit");
CREATE TABLE "new_habits_week" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "id_habit" TEXT NOT NULL,
    "week_day" INTEGER NOT NULL,
    "habitId" TEXT NOT NULL,
    CONSTRAINT "habits_week_habitId_fkey" FOREIGN KEY ("habitId") REFERENCES "habits" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_habits_week" ("id", "id_habit", "week_day") SELECT "id", "id_habit", "week_day" FROM "habits_week";
DROP TABLE "habits_week";
ALTER TABLE "new_habits_week" RENAME TO "habits_week";
CREATE UNIQUE INDEX "habits_week_id_habit_week_day_key" ON "habits_week"("id_habit", "week_day");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
