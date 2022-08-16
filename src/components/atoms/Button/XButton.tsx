import { FC } from 'react';
import { useAtom } from 'jotai';

import { modalContext, listContext, drawerContext } from 'contexts/toggleContext';

import styles from 'styles/atoms/button/xButton.module.scss';

type Props = {
  type: 'modal' | 'list' | 'drawer';
};

const XButton: FC<Props> = (props) => {
  const { type } = props;

  const contextType = type === 'modal' ? modalContext : type === 'drawer' ? drawerContext : listContext;

  const [, setToggle] = useAtom(contextType);

  return <div className={styles.button} onClick={() => setToggle(false)} />;
};

export default XButton;
