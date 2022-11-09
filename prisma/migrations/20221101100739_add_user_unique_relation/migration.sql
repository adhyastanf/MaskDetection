/*
  Warnings:

  - You are about to drop the column `Verified_Id` on the `data_harian` table. All the data in the column will be lost.
  - You are about to drop the column `User_Id` on the `verifikasi_masker` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[UserHarian_Id]` on the table `Data_Harian` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[Email,Nomor_Telepon,Username]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[UserVerified_Id]` on the table `Verifikasi_Masker` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `UserHarian_Id` to the `Data_Harian` table without a default value. This is not possible if the table is not empty.
  - Added the required column `User_Id` to the `DataScientist` table without a default value. This is not possible if the table is not empty.
  - Added the required column `User_Id` to the `Security` table without a default value. This is not possible if the table is not empty.
  - Added the required column `UserVerified_Id` to the `Verifikasi_Masker` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `data_harian` DROP FOREIGN KEY `Data_Harian_Verified_Id_fkey`;

-- DropForeignKey
ALTER TABLE `verifikasi_masker` DROP FOREIGN KEY `Verifikasi_Masker_User_Id_fkey`;

-- AlterTable
ALTER TABLE `data_harian` DROP COLUMN `Verified_Id`,
    ADD COLUMN `UserHarian_Id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `datascientist` ADD COLUMN `User_Id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `security` ADD COLUMN `User_Id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `verifikasi_masker` DROP COLUMN `User_Id`,
    ADD COLUMN `UserVerified_Id` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Data_Harian_UserHarian_Id_key` ON `Data_Harian`(`UserHarian_Id`);

-- CreateIndex
CREATE UNIQUE INDEX `User_Email_Nomor_Telepon_Username_key` ON `User`(`Email`, `Nomor_Telepon`, `Username`);

-- CreateIndex
CREATE UNIQUE INDEX `Verifikasi_Masker_UserVerified_Id_key` ON `Verifikasi_Masker`(`UserVerified_Id`);

-- AddForeignKey
ALTER TABLE `Verifikasi_Masker` ADD CONSTRAINT `Verifikasi_Masker_UserVerified_Id_fkey` FOREIGN KEY (`UserVerified_Id`) REFERENCES `User`(`User_Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Data_Harian` ADD CONSTRAINT `Data_Harian_UserHarian_Id_fkey` FOREIGN KEY (`UserHarian_Id`) REFERENCES `Verifikasi_Masker`(`UserVerified_Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Security` ADD CONSTRAINT `Security_User_Id_fkey` FOREIGN KEY (`User_Id`) REFERENCES `User`(`User_Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DataScientist` ADD CONSTRAINT `DataScientist_User_Id_fkey` FOREIGN KEY (`User_Id`) REFERENCES `User`(`User_Id`) ON DELETE RESTRICT ON UPDATE CASCADE;
