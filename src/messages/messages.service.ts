import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Message } from './entities/message.entity';

@Injectable()
export class MessagesService {
  messages: Message[] = [{ name: 'Marius', text: 'hello' }];
  clientUser = {};

  create(createMessageDto: CreateMessageDto) {
    const message = { ...createMessageDto };
    this.messages.push(message);
    return message;
  }

  findAll() {
    return this.messages;
  }

  identify(name: string, clientId: string) {
    this.clientUser[clientId] = name;

    return Object.values(this.clientUser);
  }

  getClientName(clientId: string) {
    return this.clientUser[clientId];
  }

  typing() {
    return `This action sends typing`;
  }
}
