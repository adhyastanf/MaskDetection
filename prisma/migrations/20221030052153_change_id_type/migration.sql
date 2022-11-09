/*
  Warnings:

  - The primary key for the `data_harian` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `datascientist` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `security` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `statistik_periodik` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `user` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `verifikasi_masker` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE `data_harian` DROP FOREIGN KEY `Data_Harian_Verified_Id_fkey`;

-- DropForeignKey
ALTER TABLE `statistik_periodik` DROP FOREIGN KEY `Statistik_Periodik_dataHarian_Id_fkey`;

-- DropForeignKey
ALTER TABLE `verifikasi_masker` DROP FOREIGN KEY `Verifikasi_Masker_Verified_Id_fkey`;

-- AlterTable
ALTER TABLE `data_harian` DROP PRIMARY KEY,
    MODIFY `dataHarian_Id` VARCHAR(191) NOT NULL,
    MODIFY `Verified_Id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`dataHarian_Id`);

-- AlterTable
ALTER TABLE `datascientist` DROP PRIMARY KEY,
    MODIFY `DataScientist_Id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`DataScientist_Id`);

-- AlterTable
ALTER TABLE `security` DROP PRIMARY KEY,
    MODIFY `Security_Id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`Security_Id`);

-- AlterTable
ALTER TABLE `statistik_periodik` DROP PRIMARY KEY,
    MODIFY `Statistik_Id` VARCHAR(191) NOT NULL,
    MODIFY `dataHarian_Id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`Statistik_Id`);

-- AlterTable
ALTER TABLE `user` DROP PRIMARY KEY,
    MODIFY `User_Id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`User_Id`);

-- AlterTable
ALTER TABLE `verifikasi_masker` DROP PRIMARY KEY,
    MODIFY `Verified_Id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`Verified_Id`);

-- AddForeignKey
ALTER TABLE `Verifikasi_Masker` ADD CONSTRAINT `Verifikasi_Masker_Verified_Id_fkey` FOREIGN KEY (`Verified_Id`) REFERENCES `User`(`User_Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Data_Harian` ADD CONSTRAINT `Data_Harian_Verified_Id_fkey` FOREIGN KEY (`Verified_Id`) REFERENCES `Verifikasi_Masker`(`Verified_Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Statistik_Periodik` ADD CONSTRAINT `Statistik_Periodik_dataHarian_Id_fkey` FOREIGN KEY (`dataHarian_Id`) REFERENCES `Data_Harian`(`dataHarian_Id`) ON DELETE RESTRICT ON UPDATE CASCADE;
