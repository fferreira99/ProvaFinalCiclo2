import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AmqpService } from './atualizar-endereco/amqp.service';
import { AtualizarEnderecoController } from './atualizar-endereco/atualizar-endereco.controller';

@Module({
  imports: [],
  controllers: [AppController, AtualizarEnderecoController],
  providers: [AppService, AmqpService],
})
export class AppModule {}
