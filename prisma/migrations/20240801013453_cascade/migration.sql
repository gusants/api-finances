-- DropForeignKey
ALTER TABLE `ModelAviation` DROP FOREIGN KEY `ModelAviation_aviationId_fkey`;

-- DropForeignKey
ALTER TABLE `ModelAviation` DROP FOREIGN KEY `ModelAviation_modelId_fkey`;

-- DropForeignKey
ALTER TABLE `ModelDispatch` DROP FOREIGN KEY `ModelDispatch_dispatchId_fkey`;

-- DropForeignKey
ALTER TABLE `ModelDispatch` DROP FOREIGN KEY `ModelDispatch_modelId_fkey`;

-- DropForeignKey
ALTER TABLE `ModelTissues` DROP FOREIGN KEY `ModelTissues_modelId_fkey`;

-- DropForeignKey
ALTER TABLE `ModelTissues` DROP FOREIGN KEY `ModelTissues_tissueId_fkey`;

-- AddForeignKey
ALTER TABLE `ModelTissues` ADD CONSTRAINT `ModelTissues_modelId_fkey` FOREIGN KEY (`modelId`) REFERENCES `Models`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ModelTissues` ADD CONSTRAINT `ModelTissues_tissueId_fkey` FOREIGN KEY (`tissueId`) REFERENCES `Tissues`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ModelDispatch` ADD CONSTRAINT `ModelDispatch_modelId_fkey` FOREIGN KEY (`modelId`) REFERENCES `Models`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ModelDispatch` ADD CONSTRAINT `ModelDispatch_dispatchId_fkey` FOREIGN KEY (`dispatchId`) REFERENCES `Dispatchs`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ModelAviation` ADD CONSTRAINT `ModelAviation_modelId_fkey` FOREIGN KEY (`modelId`) REFERENCES `Models`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ModelAviation` ADD CONSTRAINT `ModelAviation_aviationId_fkey` FOREIGN KEY (`aviationId`) REFERENCES `Aviation`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
