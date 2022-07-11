import { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengeContext";
import { Container } from "./styles";

export function ExperienceBar() {
    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext)
    
    const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <Container>
        <span>0 xp</span>
        <div className="experienceBar">
            <div className="experiencePercentage" 
            style={{ width: `${percentToNextLevel}%` }}
        />
            <span 
                className="currentExperience"
                style={{ left: `${percentToNextLevel}%` }}
            >
                {currentExperience} xp
            </span>
        </div>
        <span>{experienceToNextLevel} xp</span>
    </Container>
  )
}