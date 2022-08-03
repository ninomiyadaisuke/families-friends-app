import { Timestamp } from 'firebase/firestore';

export type HouseholdMember = {
  family_id: string;
  household_member_id: string;
  first_name: string;
  last_name: string;
  first_name_kana: string;
  last_name_kana: string;
  email: string;
  phone_number: string;
  birthday: Date;
  relationship: '世帯主' | '配偶者' | '子供' | '親' | '同居人';
  hobby: string;
  image: {
    id: string;
    path: string;
  };
  created_at: Timestamp;
  updated_at: Timestamp;
};
