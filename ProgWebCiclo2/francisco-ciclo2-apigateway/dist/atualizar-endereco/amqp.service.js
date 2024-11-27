"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmqpService = void 0;
const common_1 = require("@nestjs/common");
const amqp = require("amqplib");
let AmqpService = class AmqpService {
    async conectar() {
        const connection = await amqp.connect('amqp://localhost');
        this.channel = await connection.createChannel();
        const queue = 'atualizarEnderecoQueue';
        await this.channel.assertQueue(queue);
    }
    async enviarMensagem(message) {
        if (!this.channel) {
            await this.conectar();
        }
        const queue = 'atualizarEnderecoQueue';
        this.channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)));
        console.log('Mensagem enviada para o RabbitMQ');
    }
};
exports.AmqpService = AmqpService;
exports.AmqpService = AmqpService = __decorate([
    (0, common_1.Injectable)()
], AmqpService);
//# sourceMappingURL=amqp.service.js.map