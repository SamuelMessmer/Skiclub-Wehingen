/*
  Warnings:

  - You are about to drop the `LinkData` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `LinkData`;

-- CreateTable
CREATE TABLE `Blog` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `content` MEDIUMTEXT NOT NULL,
    `img` VARCHAR(191) NOT NULL,
    `createdAt` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Blog_title_key`(`title`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
