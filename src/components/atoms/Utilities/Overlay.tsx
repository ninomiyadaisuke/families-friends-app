import { FC, ReactNode } from 'react';
import { useAtom } from 'jotai';

import { modalContext } from 'contexts/modalContext';
import styles from 'styles/atoms/utilities/overlay.module.scss';

type Props = {
  children?: ReactNode;
};

const Overlay: FC<Props> = (props) => {
  const { children } = props;
  const [showModal, setShowModal] = useAtom(modalContext);

  return (
    <div className={styles.overlay} onClick={() => setShowModal(false)}>
      {children}
    </div>
  );
};

export default Overlay;
