import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateModelDto, UpdateModelDto } from './model.dto';
import { PrismaService } from 'src/prisma.service';
import { ModelMapper } from './model.mapper';

@Injectable()
export class ModelService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly modelMapper: ModelMapper,
  ) {}
  async createOne(dto: CreateModelDto) {
    return await this.prismaService.models.create({
      data: {
        graduation: dto.graduation / dto.quantity,
        molding: dto.molding / dto.quantity,
        name: dto.name,
        pilot: dto.pilot / dto.quantity,
        stylist: dto.stylist / dto.quantity,
        productionPrice: dto.productionPrice,
        quantity: dto.quantity,
        taxes: dto.taxes ?? 0.06,
        aviation: {
          createMany: {
            data: dto.aviation.map(({ id, quantity }) => ({
              aviationId: id,
              quantity,
            })),
          },
        },
        dispatch: {
          createMany: {
            data: dto.dispatch.map(({ id, quantity }) => ({
              dispatchId: id,
              quantity,
            })),
          },
        },
        tissues: {
          createMany: {
            data: dto.tissues.map(({ id, meters }) => ({
              tissueId: id,
              meters,
            })),
          },
        },
      },
    });
  }

  async findOne(id: string) {
    const model = await this.prismaService.models.findFirst({
      where: { id },
      include: {
        aviation: { include: { aviation: true } },
        dispatch: { include: { dispatch: true } },
        tissues: { include: { tissue: true } },
      },
    });
    if (!model) throw new NotFoundException();
    return this.modelMapper.map(model);
  }

  async findMany() {
    const models = await this.prismaService.models.findMany();
    return models.map((model) => this.modelMapper.map(model));
  }

  async updateOne(id: string, dto: UpdateModelDto) {
    await this.prismaService.models.update({
      where: { id },
      data: {
        ...dto,
        tissues: {
          update: dto.tissues?.map((tissue) => ({
            where: { modelId_tissueId: { modelId: id, tissueId: tissue.id } },
            data: { meters: tissue.meters },
          })),
        },
        aviation: {
          update: dto.aviation?.map((aviation) => ({
            where: {
              modelId_aviationId: { modelId: id, aviationId: aviation.id },
            },
            data: { quantity: aviation.quantity },
          })),
        },
        dispatch: {
          update: dto.dispatch?.map((dispatch) => ({
            where: {
              modelId_dispatchId: { modelId: id, dispatchId: dispatch.id },
            },
            data: { quantity: dispatch.quantity },
          })),
        },
      },
    });
  }

  async deleteOne(id: string) {
    await this.prismaService.models.delete({ where: { id } });
  }
}
