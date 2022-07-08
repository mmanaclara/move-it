import Head from 'next/head';

import { CompletedChallenges } from '../src/components/CompletedChallenges';
import { Countdown } from '../src/components/Countdown';
import { ExperienceBar } from '../src/components/ExperienceBar';
import { Profile } from '../src/components/Profile';
import { ChallengeBox } from '../src/components/ChallengeBox';

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
          <ChallengeBox />
        </div>
      </Container>
    </Wrapper>
  )
}
