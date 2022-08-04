import { FC } from 'react';

import styles from 'styles/atoms/button/primaryButton.module.scss';

type Props = {
  onClick: () => void;
  label: string;
  type: 'navy' | 'wine_red' | 'light_blue' | 'outline';
};

const PrimaryButton: FC<Props> = (props) => {
  const { onClick, label, type } = props;
  const className = (() => {
    switch (type) {
      case 'navy':
        return `${styles.button__navy}`;
      case 'wine_red':
        return `${styles.button__wine_red}`;
      case 'light_blue':
        return `${styles.button__light_blue}`;
      case 'outline':
        return `${styles.button__outline}`;
      default:
        const check: never = type;
    }
  })();
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};
export default PrimaryButton;
