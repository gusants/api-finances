/*
  Warnings:

  - You are about to alter the column `taxes` on the `Models` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.

*/
-- AlterTable
ALTER TABLE `Models` MODIFY `taxes` DOUBLE NOT NULL;
