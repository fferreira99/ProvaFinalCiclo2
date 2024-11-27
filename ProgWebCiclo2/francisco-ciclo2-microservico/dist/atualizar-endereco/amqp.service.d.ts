import { PrismaService } from './prisma.service';
export declare class AmqpService {
    private readonly prismaService;
    private channel;
    constructor(prismaService: PrismaService);
    conectar(): Promise<void>;
    iniciarEscuta(): Promise<void>;
}
