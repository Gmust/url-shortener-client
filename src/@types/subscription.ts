import { IUser } from './auth';

enum Plan {
  FREE = 'Free',
  ADMIN = 'Admin',
  PREMIUM = 'Premium'
}


interface ISubscription {
  plan: Plan,
  startDate: string,
  endDate: string | null,
  user: IUser,
  stripeSubscriptionId: string | null
}


export {
  ISubscription,
  Plan,
};
