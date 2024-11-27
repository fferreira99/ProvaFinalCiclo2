export declare class AmqpService {
    private channel;
    conectar(): Promise<void>;
    enviarMensagem(message: any): Promise<void>;
}
