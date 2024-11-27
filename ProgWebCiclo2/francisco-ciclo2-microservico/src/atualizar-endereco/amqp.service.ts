import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import * as amqp from 'amqplib';

@Injectable()
export class AmqpService {
    private channel: amqp.Channel;

    constructor(private readonly prismaService: PrismaService) {}

    async conectar() {
        const connection = await amqp.connect('amqp://localhost');
        this.channel = await connection.createChannel();
        const queue = 'atualizarEnderecoQueue';
        await this.channel.assertQueue(queue);
    }

    async iniciarEscuta() {
        if (!this.channel) {
            await this.conectar();
        }
        const queue = 'atualizarEnderecoQueue';

        this.channel.consume(queue, async (msg) => {
            const { cpf, novoEndereco } = JSON.parse(msg.content.toString());
            await this.prismaService.atualizarEndereco(cpf, novoEndereco);
            this.channel.ack(msg);
        });
    }
}
