import type { AppProps } from 'next/app';
import { GlobalStyle } from '../src/styles/global';

import { ChallengesProvider } from '../src/contexts/ChallengeContext';
import { useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [level, setLevel] = useState(1)

  function levelUp() {
    setLevel(level + 1)
  }

  return ( 
    <ChallengesProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </ChallengesProvider>
  )
}

export default MyApp;
