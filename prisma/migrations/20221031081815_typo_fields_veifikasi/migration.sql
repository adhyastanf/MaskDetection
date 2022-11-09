-- DropForeignKey
ALTER TABLE `verifikasi_masker` DROP FOREIGN KEY `Verifikasi_Masker_Verified_Id_fkey`;

-- AddForeignKey
ALTER TABLE `Verifikasi_Masker` ADD CONSTRAINT `Verifikasi_Masker_User_Id_fkey` FOREIGN KEY (`User_Id`) REFERENCES `User`(`User_Id`) ON DELETE RESTRICT ON UPDATE CASCADE;
