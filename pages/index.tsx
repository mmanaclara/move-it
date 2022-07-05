import { CompletedChallenges } from '../src/components/CompletedChallenges';
import { Countdown } from '../src/components/Countdown';
import { ExperienceBar } from '../src/components/ExperienceBar';
import { Profile } from '../src/components/Profile';

import Head from 'next/head';

import { Wrapper, Container } from '../src/styles';

export default function Home() {
  return (
    <Wrapper>
        <Head>
          <title>Início | move.it</title>
        </Head>
      <ExperienceBar />

      <Container>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>

        <div className="leftContainer">
          Right Container
        </div>
      </Container>
    </Wrapper>
  )
}
