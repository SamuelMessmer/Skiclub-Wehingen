/*
  Warnings:

  - Added the required column `createdAt` to the `Blog` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Blog` ADD COLUMN `createdAt` VARCHAR(191) NOT NULL;
