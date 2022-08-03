import { Timestamp } from 'firebase/firestore';

export type User = {
  uid: string;
  family_id: string;
  email: string;
  phone_number: string;
  first_name: string;
  last_name: string;
  first_name_kana: string;
  last_name_kana: string;
  birthday: Date;
  relationship: '世帯主' | '配偶者' | '子供' | '親' | '同居人';
  zip_code: string;
  address: string;
  hobby: string;
  image: {
    id: string;
    path: string;
  };
  created_at: Timestamp;
  updated_at: Timestamp;
};
