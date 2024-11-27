import { AmqpService } from './amqp.service';
export declare class AtualizarEnderecoController {
    private readonly amqpService;
    constructor(amqpService: AmqpService);
    atualizarEndereco(body: {
        cpf: string;
        novoEndereco: string;
    }): Promise<{
        message: string;
    }>;
}
