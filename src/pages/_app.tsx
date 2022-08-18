import type { AppProps } from 'next/app';

import { Modal } from 'components/molecules/Utilities';

import '../styles/base.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Modal />
    </>
  );
}

export default MyApp;
