import { IUser } from './auth';
import { IMessage } from './message';

interface ISupportChat {
  participants: IUser[],
  messages: IMessage[],
  status: ChatStatus,
  topic: ChatTopic
}

enum ChatStatus {
  ACTIVE = 'Active',         // Chat is active and agents are available.
  INACTIVE = 'Inactive',     // Chat is inactive, no agents are available.
  PENDING = 'Pending',       // Chat request is pending, waiting for an agent to respond.
  CLOSED = 'Closed',         // Chat has been closed by either the user or the agent.
}


enum ChatTopic {
  OTHER = 'Other',
  PAYMENT = 'Payment problems',
  FUNCTIONALITY = 'Problems with service functionality',
  ACCOUNT = 'Account issues',
  USAGE = 'Usage',
  BUG_REPORT = 'Bug reports'
}


export {
  ISupportChat,
  ChatStatus,
  ChatTopic
}
