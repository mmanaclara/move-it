import { Container } from "./styles";

export function ExperienceBar() {
  return (
    <Container>
        <span>0 xp</span>
        <div className="experienceBar">
            <div className="experiencePercentage" 
            style={{width: '50%'}}
        />
            <span 
                className="currentExperience"
                style={{ left: '50%'}}
            >
                300 xp
            </span>
        </div>
        <span>600 xp</span>
    </Container>
  )
}