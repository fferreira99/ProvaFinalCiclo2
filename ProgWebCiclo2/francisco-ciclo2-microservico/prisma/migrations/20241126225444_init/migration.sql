/*
  Warnings:

  - A unique constraint covering the columns `[cpf]` on the table `CNH` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `CNH_cpf_key` ON `CNH`(`cpf`);
