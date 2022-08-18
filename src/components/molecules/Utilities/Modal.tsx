import { FC, useCallback } from 'react';
import { useAtomValue, useSetAtom } from 'jotai';

import { XButton, PrimaryButton } from 'components/atoms/Button';
import { TextArea } from 'components/atoms/Texts';
import { Overlay } from 'components/atoms/Utilities';
import { modalContext } from 'contexts/toggleContext';
import { modalConfigContext } from 'contexts/modalTextContext';

import styles from 'styles/molecules/utilities/modal.module.scss';

const Modal: FC = () => {
  const showModal = useAtomValue(modalContext);
  const modalConfig = useAtomValue(modalConfigContext);
  const closeModal = useSetAtom(modalContext);

  const cancelClick = useCallback(() => {
    modalConfig.onClose('cancel');
    closeModal(false);
  }, [closeModal, modalConfig]);

  const confirmClick = useCallback(() => {
    modalConfig.onClose('ok');
    closeModal(false);
  }, [closeModal, modalConfig]);

  return (
    <>
      {showModal && (
        <>
          <Overlay type="modal" />
          <div className={styles.modal}>
            <div className={styles.modal__cancel}>
              <XButton type="modal" />
            </div>
            <div className={styles.modal__container}>
              <TextArea className={styles.modal__text} text={modalConfig.text} />
              <div className={styles.modal__button}>
                <div className={styles.modal__button_size}>
                  <PrimaryButton type="outline" label="戻る" onClick={cancelClick} />
                </div>
                <div className={styles.modal__button_size}>
                  <PrimaryButton type="navy" label="確定" onClick={confirmClick} />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Modal;
