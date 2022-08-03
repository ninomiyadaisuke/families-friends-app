import { Timestamp } from 'firebase/firestore';

export type Transaction = {
  uid: string;
  transaction_id: string;
  transaction_type: 'プレゼント' | 'お年玉';
  present_type: '貰った' | '渡した';
  date: Date;
  present_name: string;
  image: {
    id: string;
    path: string;
  };
  sender: {
    member_id: string;
    sender_first_name: string;
    sender_last_name: string;
  };
  receiver: {
    member_id: string;
    receiver_first_name: string;
    receiver_last_name: string;
  };
  price: number;
  description: string;
  created_at: Timestamp;
  updated_at: Timestamp;
};
