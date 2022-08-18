import { atom } from 'jotai';

type ModalType = {
  onClose: (value: string) => void;
  text: string;
};

const onClose = (value: string) => {};

const initialState = {
  onClose,
  text: '',
};

export const modalConfigContext = atom<ModalType>(initialState);
