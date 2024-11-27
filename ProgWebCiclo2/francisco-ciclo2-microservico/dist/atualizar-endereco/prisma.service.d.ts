import { PrismaClient } from '@prisma/client';
export declare class PrismaService extends PrismaClient {
    atualizarEndereco(cpf: string, novoEndereco: string): Promise<void>;
}
