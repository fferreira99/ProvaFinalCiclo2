"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AtualizarEnderecoController = void 0;
const common_1 = require("@nestjs/common");
const amqp_service_1 = require("./amqp.service");
let AtualizarEnderecoController = class AtualizarEnderecoController {
    constructor(amqpService) {
        this.amqpService = amqpService;
    }
    async atualizarEndereco(body) {
        const { cpf, novoEndereco } = body;
        await this.amqpService.enviarMensagem({ cpf, novoEndereco });
        return { message: 'Mensagem enviada para o microserviço.' };
    }
};
exports.AtualizarEnderecoController = AtualizarEnderecoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AtualizarEnderecoController.prototype, "atualizarEndereco", null);
exports.AtualizarEnderecoController = AtualizarEnderecoController = __decorate([
    (0, common_1.Controller)('atualizarEndereco'),
    __metadata("design:paramtypes", [amqp_service_1.AmqpService])
], AtualizarEnderecoController);
//# sourceMappingURL=atualizar-endereco.controller.js.map