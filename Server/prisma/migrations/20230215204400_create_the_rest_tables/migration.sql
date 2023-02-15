-- CreateTable
CREATE TABLE "habits_week" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "id_habit" TEXT NOT NULL,
    "week_day" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "days" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "date" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Day_habit" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "id_day" TEXT NOT NULL,
    "id_habit" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "habits_week_id_habit_week_day_key" ON "habits_week"("id_habit", "week_day");

-- CreateIndex
CREATE UNIQUE INDEX "days_date_key" ON "days"("date");

-- CreateIndex
CREATE UNIQUE INDEX "Day_habit_id_day_id_habit_key" ON "Day_habit"("id_day", "id_habit");
