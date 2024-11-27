import { Controller } from '@nestjs/common';
import { AmqpService } from './amqp.service';
import { PrismaService } from './prisma.service';

@Controller()
export class AtualizarEnderecoController {
    constructor(
        private readonly amqpService: AmqpService,
        private readonly prismaService: PrismaService
    ) {}

    async onModuleInit() {
        await this.amqpService.iniciarEscuta();
    }
}
