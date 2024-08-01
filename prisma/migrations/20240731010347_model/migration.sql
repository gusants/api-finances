-- CreateTable
CREATE TABLE `Models` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `molding` INTEGER NOT NULL,
    `pilot` INTEGER NOT NULL,
    `graduation` INTEGER NOT NULL,
    `stylist` INTEGER NOT NULL,
    `quantity` INTEGER NOT NULL,
    `productionPrice` INTEGER NOT NULL,
    `taxes` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ModelTissues` (
    `modelId` VARCHAR(191) NOT NULL,
    `tissueId` VARCHAR(191) NOT NULL,
    `meters` INTEGER NOT NULL,

    PRIMARY KEY (`modelId`, `tissueId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tissues` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `price` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ModelDispatch` (
    `modelId` VARCHAR(191) NOT NULL,
    `dispatchId` VARCHAR(191) NOT NULL,
    `quantity` INTEGER NOT NULL,

    PRIMARY KEY (`modelId`, `dispatchId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Dispatchs` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `price` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ModelAviation` (
    `modelId` VARCHAR(191) NOT NULL,
    `aviationId` VARCHAR(191) NOT NULL,
    `quantity` INTEGER NOT NULL,

    PRIMARY KEY (`modelId`, `aviationId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Aviation` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `price` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ModelTissues` ADD CONSTRAINT `ModelTissues_modelId_fkey` FOREIGN KEY (`modelId`) REFERENCES `Models`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ModelTissues` ADD CONSTRAINT `ModelTissues_tissueId_fkey` FOREIGN KEY (`tissueId`) REFERENCES `Tissues`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ModelDispatch` ADD CONSTRAINT `ModelDispatch_modelId_fkey` FOREIGN KEY (`modelId`) REFERENCES `Models`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ModelDispatch` ADD CONSTRAINT `ModelDispatch_dispatchId_fkey` FOREIGN KEY (`dispatchId`) REFERENCES `Dispatchs`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ModelAviation` ADD CONSTRAINT `ModelAviation_modelId_fkey` FOREIGN KEY (`modelId`) REFERENCES `Models`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ModelAviation` ADD CONSTRAINT `ModelAviation_aviationId_fkey` FOREIGN KEY (`aviationId`) REFERENCES `Aviation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
