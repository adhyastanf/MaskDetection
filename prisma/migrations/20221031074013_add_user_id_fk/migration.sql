/*
  Warnings:

  - Added the required column `User_ID` to the `Verifikasi_Masker` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `verifikasi_masker` ADD COLUMN `User_ID` VARCHAR(191) NOT NULL;
