import { FC, memo } from 'react';
import { RequiredBadge } from 'components/atoms/Utilities';

import styles from 'styles/atoms/utilities/inputLabel.module.scss';

type Props = {
  label: string;
  required: boolean;
};

const InputLabel: FC<Props> = memo((props) => {
  const { label, required } = props;
  return (
    <div className={styles.label}>
      <label htmlFor={label}>{label}</label>
      {required && (
        <div className={styles.label__badge}>
          <RequiredBadge />
        </div>
      )}
    </div>
  );
});

export default InputLabel;
