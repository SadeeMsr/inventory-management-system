/*
  Warnings:

  - You are about to drop the column `decription` on the `Products` table. All the data in the column will be lost.
  - Made the column `name` on table `Products` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Products" DROP COLUMN "decription",
ADD COLUMN     "description" TEXT,
ALTER COLUMN "name" SET NOT NULL;
