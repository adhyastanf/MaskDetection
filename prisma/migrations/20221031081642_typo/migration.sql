/*
  Warnings:

  - You are about to drop the column `User_ID` on the `verifikasi_masker` table. All the data in the column will be lost.
  - Added the required column `User_Id` to the `Verifikasi_Masker` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `verifikasi_masker` DROP COLUMN `User_ID`,
    ADD COLUMN `User_Id` VARCHAR(191) NOT NULL;
