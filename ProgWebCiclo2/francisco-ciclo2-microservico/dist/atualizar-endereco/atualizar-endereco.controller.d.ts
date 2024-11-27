import { AmqpService } from './amqp.service';
import { PrismaService } from './prisma.service';
export declare class AtualizarEnderecoController {
    private readonly amqpService;
    private readonly prismaService;
    constructor(amqpService: AmqpService, prismaService: PrismaService);
    onModuleInit(): Promise<void>;
}
