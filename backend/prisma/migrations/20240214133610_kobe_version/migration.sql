/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Etudiant` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[motDePasse]` on the table `Etudiant` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[motDePasse]` on the table `Parent` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `classeId` to the `Etudiant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contact` to the `Etudiant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contactMere` to the `Etudiant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contactPere` to the `Etudiant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dateNaissPersonne` to the `Etudiant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Etudiant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `filiereId` to the `Etudiant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nameMere` to the `Etudiant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `namePere` to the `Etudiant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sexe` to the `Etudiant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Etudiant` ADD COLUMN `classeId` INTEGER NOT NULL,
    ADD COLUMN `contact` VARCHAR(191) NOT NULL,
    ADD COLUMN `contactMere` VARCHAR(191) NOT NULL,
    ADD COLUMN `contactPere` VARCHAR(191) NOT NULL,
    ADD COLUMN `dateInscription` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `dateNaissPersonne` VARCHAR(191) NOT NULL,
    ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `filiereId` INTEGER NOT NULL,
    ADD COLUMN `nameMere` VARCHAR(191) NOT NULL,
    ADD COLUMN `namePere` VARCHAR(191) NOT NULL,
    ADD COLUMN `sexe` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Professeur` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,
    `prenoms` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `motDePasse` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Professeur_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Notification` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `content` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `professeurId` INTEGER NULL,
    `etudiantId` INTEGER NULL,
    `parentId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Note` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `devoir` DOUBLE NOT NULL,
    `examen` DOUBLE NOT NULL,
    `interrogation` DOUBLE NOT NULL,
    `etudiantId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Filiere` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Classe` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Etudiant_email_key` ON `Etudiant`(`email`);

-- CreateIndex
CREATE UNIQUE INDEX `Etudiant_motDePasse_key` ON `Etudiant`(`motDePasse`);

-- CreateIndex
CREATE UNIQUE INDEX `Parent_motDePasse_key` ON `Parent`(`motDePasse`);

-- AddForeignKey
ALTER TABLE `Etudiant` ADD CONSTRAINT `Etudiant_filiereId_fkey` FOREIGN KEY (`filiereId`) REFERENCES `Filiere`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Etudiant` ADD CONSTRAINT `Etudiant_classeId_fkey` FOREIGN KEY (`classeId`) REFERENCES `Classe`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Notification` ADD CONSTRAINT `Notification_professeurId_fkey` FOREIGN KEY (`professeurId`) REFERENCES `Professeur`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Notification` ADD CONSTRAINT `Notification_etudiantId_fkey` FOREIGN KEY (`etudiantId`) REFERENCES `Etudiant`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Notification` ADD CONSTRAINT `Notification_parentId_fkey` FOREIGN KEY (`parentId`) REFERENCES `Parent`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Note` ADD CONSTRAINT `Note_etudiantId_fkey` FOREIGN KEY (`etudiantId`) REFERENCES `Etudiant`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
