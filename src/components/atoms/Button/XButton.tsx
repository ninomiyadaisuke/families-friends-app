import { FC } from 'react';
import { useSetAtom } from 'jotai';

import { modalContext, listContext, drawerContext } from 'contexts/toggleContext';

import styles from 'styles/atoms/button/xButton.module.scss';

type Props = {
  type: 'modal' | 'list' | 'drawer';
};

const XButton: FC<Props> = (props) => {
  const { type } = props;

  const contextType = (() => {
    switch (type) {
      case 'modal':
        return modalContext;
      case 'list':
        return listContext;
      case 'drawer':
        return drawerContext;
    }
  })();

  const setToggle = useSetAtom(contextType);

  return <div className={styles.button} onClick={() => setToggle(false)} />;
};

export default XButton;
