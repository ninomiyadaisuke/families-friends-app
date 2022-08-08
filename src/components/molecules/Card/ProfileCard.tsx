import { FC } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { PrimaryButton } from 'components/atoms/Button';

import styles from 'styles/molecules/crad/profileCard.module.scss';

type Props = {
  firstName: string;
  lastName: string;
  phoneNumber?: string;
  hobby?: string;
  birthday?: string;
  path?: string;
  relationship: '世帯主' | '配偶者' | '子供' | '親' | '同居人';
};

const ProfileCard: FC<Props> = (props) => {
  const { firstName, lastName, phoneNumber, hobby, birthday, path, relationship } = props;
  const router = useRouter();

  return (
    <div className={styles.card}>
      <div>
        <div className={styles.card__image}>
          <Image src={path ? path : '/profileImae.png'} height={146} width={146} objectFit="cover" />
        </div>
        <p className={styles.card__name}>{`${firstName} ${lastName}`}</p>
        <p className={styles.card__relationship}>{relationship}</p>
        <div className={styles.card__icon} onClick={() => router.push('/')}>
          <Image src={'/editIcon.png'} height={14} width={16} />
        </div>
      </div>
      <div className={styles.card__container}>
        <div className={styles.card__text}>
          <p className={styles.card__text_block}>誕生日: {birthday}</p>
          <p className={styles.card__text_block}>電話番号: {phoneNumber}</p>
          <p className={styles.card__text_block}>趣味: {hobby}</p>
        </div>
        <div className={styles.card__button}>
          <div className={styles.card__button_size}>
            <PrimaryButton type={'light_blue'} label="贈り物登録" onClick={() => router.push('/present')} />
          </div>
          <div className={styles.card__button_size}>
            <PrimaryButton type={'light_blue'} label="贈り物一覧" onClick={() => router.push('/list/present')} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
