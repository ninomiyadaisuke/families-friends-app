import { FC } from 'react';
import { useSetAtom } from 'jotai';

import { modalContext, listContext } from 'contexts/toggleContext';
import styles from 'styles/atoms/utilities/overlay.module.scss';

type Props = {
  type: 'modal' | 'list';
};

const Overlay: FC<Props> = (props) => {
  const { type } = props;
  const contextType = type === 'modal' ? modalContext : listContext;
  const setToggle = useSetAtom(contextType);

  return <div className={styles.overlay} onClick={() => setToggle(false)} />;
};

export default Overlay;
