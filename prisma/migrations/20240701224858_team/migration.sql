/*
  Warnings:

  - You are about to drop the column `team` on the `Player` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[teamId]` on the table `Player` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Player" DROP COLUMN "team",
ADD COLUMN     "teamId" INTEGER;

-- CreateTable
CREATE TABLE "Team" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "mainColor" TEXT NOT NULL,
    "secondaryColor" TEXT NOT NULL,
    "playerId" INTEGER NOT NULL,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Team_name_key" ON "Team"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Team_playerId_key" ON "Team"("playerId");

-- CreateIndex
CREATE UNIQUE INDEX "Player_teamId_key" ON "Player"("teamId");

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE SET NULL ON UPDATE CASCADE;
