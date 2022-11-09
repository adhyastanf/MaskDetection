/*
  Warnings:

  - A unique constraint covering the columns `[Nomor_Telepon]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[Email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[Username]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `User_Email_Nomor_Telepon_Username_key` ON `user`;

-- CreateIndex
CREATE UNIQUE INDEX `User_Nomor_Telepon_key` ON `User`(`Nomor_Telepon`);

-- CreateIndex
CREATE UNIQUE INDEX `User_Email_key` ON `User`(`Email`);

-- CreateIndex
CREATE UNIQUE INDEX `User_Username_key` ON `User`(`Username`);
