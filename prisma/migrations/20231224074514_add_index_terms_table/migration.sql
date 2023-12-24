-- AlterTable
ALTER TABLE `terms` MODIFY `description` TEXT NULL;

-- CreateIndex
CREATE INDEX `terms_name_texonomy_idx` ON `terms`(`name`, `texonomy`);
