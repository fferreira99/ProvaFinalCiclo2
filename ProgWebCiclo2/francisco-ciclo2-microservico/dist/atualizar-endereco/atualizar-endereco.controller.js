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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AtualizarEnderecoController = void 0;
const common_1 = require("@nestjs/common");
const amqp_service_1 = require("./amqp.service");
const prisma_service_1 = require("./prisma.service");
let AtualizarEnderecoController = class AtualizarEnderecoController {
    constructor(amqpService, prismaService) {
        this.amqpService = amqpService;
        this.prismaService = prismaService;
    }
    async onModuleInit() {
        await this.amqpService.iniciarEscuta();
    }
};
exports.AtualizarEnderecoController = AtualizarEnderecoController;
exports.AtualizarEnderecoController = AtualizarEnderecoController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [amqp_service_1.AmqpService,
        prisma_service_1.PrismaService])
], AtualizarEnderecoController);
//# sourceMappingURL=atualizar-endereco.controller.js.map