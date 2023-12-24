-- DropIndex
DROP INDEX `terms_name_texonomy_idx` ON `terms`;

-- CreateIndex
CREATE INDEX `terms_name_created_at_idx` ON `terms`(`name`, `created_at`);

-- CreateIndex
CREATE INDEX `terms_texonomy_created_at_idx` ON `terms`(`texonomy`, `created_at`);
