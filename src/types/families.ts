import { Timestamp } from 'firebase/firestore';

export type Family = {
  uid: string;
  family_id: string;
  zip_code: string;
  address: string;
  created_at: Timestamp;
  updated_at: Timestamp;
};
