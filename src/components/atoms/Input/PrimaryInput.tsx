import { FC } from 'react';
import Image from 'next/image';
import { useFormContext, FieldValues } from 'react-hook-form';
import { RequiredBadge } from 'components/atoms/Utilities';
import { FieldByType } from 'types/fieldByType';

import styles from 'styles/atoms/input/primaryInput.module.scss';

type Props<T> = {
  name: FieldByType<T, string>;
  placeholder: string;
  path: string;
  type: string;
  errorMessage?: string;
  status: 'mandatory' | 'error' | 'none';
};

const PrimaryInput = <T extends FieldValues = never>(props: Props<T>): ReturnType<FC> => {
  const { name, placeholder, path, type, errorMessage, status } = props;
  const { register } = useFormContext();
  return (
    <div className={styles.input}>
      <input type={type} placeholder={placeholder} {...register(name)} />
      <div className={styles.input__icon}>
        <Image src={path} height={20} width={20} objectFit={'scale-down'} />
      </div>
      {status !== 'none' && (
        <div className={styles.input__icon_status}>
          {status === 'error' ? <Image src={'/errorIcon.png'} height={20} width={20} /> : <RequiredBadge />}
        </div>
      )}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default PrimaryInput;
