import { ISupportChat } from './support-chat';

enum MessageType {
  TEXT = 'text',
  Image = 'image'
}


interface IMessage {
  sender: string,
  messageType: MessageType,
  recipient: string,
  content: string,
  supportChat: ISupportChat,
  isUpdates: boolean
}

export {
  IMessage,
  MessageType,
};
