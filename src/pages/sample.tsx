import type { NextPage } from 'next';
import { InputLabel } from 'components/atoms/Utilities';

const Sample: NextPage = () => {
  return (
    <div>
      <InputLabel label="名前" required={true} />
    </div>
  );
};

export default Sample;
