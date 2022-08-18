import { HTMLInputTypeAttribute } from 'react';
import Image from 'next/image';
import { useFormContext, FieldValues } from 'react-hook-form';
import { FieldByType } from 'types/fieldByType';

import styles from 'styles/atoms/input/roundedInput.module.scss';

type Props<T> = {
  name: FieldByType<T, string>;
  placeholder: string;
  type: HTMLInputTypeAttribute;
  errorMessage?: string;
  iconIncluded: boolean;
};

const RoundedInput = <T extends FieldValues = never>(props: Props<T>) => {
  const { name, placeholder, type, errorMessage, iconIncluded } = props;

  const { register } = useFormContext();
  return (
    <div className={styles.input}>
      <input type={type} placeholder={placeholder} {...register(name)} />
      {iconIncluded && (
        <div className={styles.input__icon}>
          <Image src={'/userIcon.png'} height={20} width={20} objectFit={'scale-down'} />
        </div>
      )}

      {errorMessage && (
        <>
          <div className={styles.input__icon_status}>
            <Image src={'/errorIcon.png'} height={20} width={20} />
          </div>
          <p className={styles.input__error}>{errorMessage}</p>
        </>
      )}
    </div>
  );
};

export default RoundedInput;
