import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
    async atualizarEndereco(cpf: string, novoEndereco: string) {
        await this.cNH.update({
            where: { cpf },
            data: { endereco: novoEndereco },
        });
        console.log(`Endereço atualizado para o CPF: ${cpf}`);
    }
}
