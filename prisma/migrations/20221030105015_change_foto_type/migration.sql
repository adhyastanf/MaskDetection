/*
  Warnings:

  - You are about to alter the column `gender` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `TinyInt`.
  - Added the required column `Foto` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `Foto` LONGBLOB NOT NULL,
    MODIFY `gender` BOOLEAN NOT NULL;
