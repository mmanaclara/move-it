import { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengeContext";
import { Container } from "./styles";

export function CompletedChallenges() {
  const { challengesCompleted, completeChallenge } = useContext(ChallengesContext);

  return (
    <Container>
        <span>Desafios completos</span>
        <span>{challengesCompleted}</span>
    </Container>
  )
}