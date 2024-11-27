import { Injectable } from '@nestjs/common';
import * as amqp from 'amqplib';

@Injectable()
export class AmqpService {
    private channel: amqp.Channel;

    async conectar() {
        const connection = await amqp.connect('amqp://localhost');
        this.channel = await connection.createChannel();
        const queue = 'atualizarEnderecoQueue';
        await this.channel.assertQueue(queue);
    }

    async enviarMensagem(message: any) {
        if (!this.channel) {
            await this.conectar();
        }
        const queue = 'atualizarEnderecoQueue';
        this.channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)));
        console.log('Mensagem enviada para o RabbitMQ');
    }
}