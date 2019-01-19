import {PaymentType} from './PaymentType';

export interface NetBanking {
  amount: number;
  selectedBank: PaymentType;
}
