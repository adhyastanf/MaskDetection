-- CreateTable
CREATE TABLE `User` (
    `User_Id` INTEGER NOT NULL AUTO_INCREMENT,
    `Nama_Depan` VARCHAR(191) NOT NULL,
    `Nama_Belakang` VARCHAR(191) NOT NULL,
    `birthdate` DATETIME(3) NOT NULL,
    `gender` VARCHAR(191) NOT NULL,
    `Nomor_Telepon` VARCHAR(191) NOT NULL,
    `Email` VARCHAR(191) NOT NULL,
    `Password` VARCHAR(191) NOT NULL,
    `Username` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`User_Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Verifikasi_Masker` (
    `Verified_Id` INTEGER NOT NULL AUTO_INCREMENT,

    PRIMARY KEY (`Verified_Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Security` (
    `Security_Id` INTEGER NOT NULL AUTO_INCREMENT,

    PRIMARY KEY (`Security_Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DataScientist` (
    `DataScientist_Id` INTEGER NOT NULL AUTO_INCREMENT,

    PRIMARY KEY (`DataScientist_Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Data_Harian` (
    `dataHarian_Id` INTEGER NOT NULL AUTO_INCREMENT,
    `Verified_Id` INTEGER NOT NULL,
    `Jumlah` INTEGER NOT NULL,

    PRIMARY KEY (`dataHarian_Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Statistik_Periodik` (
    `Statistik_Id` INTEGER NOT NULL AUTO_INCREMENT,
    `dataHarian_Id` INTEGER NOT NULL,

    PRIMARY KEY (`Statistik_Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Verifikasi_Masker` ADD CONSTRAINT `Verifikasi_Masker_Verified_Id_fkey` FOREIGN KEY (`Verified_Id`) REFERENCES `User`(`User_Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Data_Harian` ADD CONSTRAINT `Data_Harian_Verified_Id_fkey` FOREIGN KEY (`Verified_Id`) REFERENCES `Verifikasi_Masker`(`Verified_Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Statistik_Periodik` ADD CONSTRAINT `Statistik_Periodik_dataHarian_Id_fkey` FOREIGN KEY (`dataHarian_Id`) REFERENCES `Data_Harian`(`dataHarian_Id`) ON DELETE RESTRICT ON UPDATE CASCADE;
