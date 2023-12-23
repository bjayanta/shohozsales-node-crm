-- AlterTable
ALTER TABLE `terms` ADD COLUMN `action_taken_by` JSON NULL,
    ADD COLUMN `business_id` INTEGER NULL;
