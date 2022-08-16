import type { NextPage } from 'next';
import { Overlay } from 'components/atoms/Utilities';
import { XButton } from 'components/atoms/Button';

const Sample: NextPage = () => {
  return (
    <div>
      {/* <Overlay /> */}
      <XButton type="modal" />
    </div>
  );
};

export default Sample;
