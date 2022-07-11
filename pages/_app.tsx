import { useState } from 'react';
import type { AppProps } from 'next/app';
import { GlobalStyle } from '../src/styles/global';

import { ChallengesProvider } from '../src/contexts/ChallengeContext';

function MyApp({ Component, pageProps }: AppProps) {
  const [level, setLevel] = useState(1)

  function levelUp() {
    setLevel(level + 1)
  }

  return ( 
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}

export default MyApp;
