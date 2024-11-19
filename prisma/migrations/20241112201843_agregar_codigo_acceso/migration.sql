/*
  Warnings:

  - A unique constraint covering the columns `[codigoAccesoId]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `usuario` ADD COLUMN `codigoAccesoId` INTEGER NULL;

-- CreateTable
CREATE TABLE `CodigoAcceso` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `codigo` VARCHAR(191) NOT NULL,
    `usado` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `CodigoAcceso_codigo_key`(`codigo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Usuario_codigoAccesoId_key` ON `Usuario`(`codigoAccesoId`);

-- AddForeignKey
ALTER TABLE `Usuario` ADD CONSTRAINT `Usuario_codigoAccesoId_fkey` FOREIGN KEY (`codigoAccesoId`) REFERENCES `CodigoAcceso`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
