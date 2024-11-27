import { Controller, Post, Body } from '@nestjs/common';
import { AmqpService } from './amqp.service';

@Controller('atualizarEndereco')
export class AtualizarEnderecoController {
    constructor(private readonly amqpService: AmqpService) {}

    @Post()
    async atualizarEndereco(@Body() body: { cpf: string, novoEndereco: string }) {
        const { cpf, novoEndereco } = body;
        await this.amqpService.enviarMensagem({ cpf, novoEndereco });
        return { message: 'Mensagem enviada para o microserviço.' };
    }
}