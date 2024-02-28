/*
  Warnings:

  - You are about to alter the column `dateNaissPersonne` on the `Etudiant` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.
  - You are about to drop the column `matricule` on the `Parent` table. All the data in the column will be lost.
  - You are about to drop the column `motDePasse` on the `Parent` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[username]` on the table `Parent` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[password]` on the table `Parent` will be added. If there are existing duplicate values, this will fail.
  - Made the column `parentId` on table `Etudiant` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `password` to the `Parent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `Parent` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Etudiant` DROP FOREIGN KEY `Etudiant_parentId_fkey`;

-- DropIndex
DROP INDEX `Parent_matricule_key` ON `Parent`;

-- DropIndex
DROP INDEX `Parent_motDePasse_key` ON `Parent`;

-- AlterTable
ALTER TABLE `Etudiant` ADD COLUMN `isActive` BOOLEAN NOT NULL DEFAULT true,
    MODIFY `parentId` INTEGER NOT NULL,
    MODIFY `dateNaissPersonne` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `Parent` DROP COLUMN `matricule`,
    DROP COLUMN `motDePasse`,
    ADD COLUMN `password` VARCHAR(191) NOT NULL,
    ADD COLUMN `username` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Parent_username_key` ON `Parent`(`username`);

-- CreateIndex
CREATE UNIQUE INDEX `Parent_password_key` ON `Parent`(`password`);

-- AddForeignKey
ALTER TABLE `Etudiant` ADD CONSTRAINT `Etudiant_parentId_fkey` FOREIGN KEY (`parentId`) REFERENCES `Parent`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
