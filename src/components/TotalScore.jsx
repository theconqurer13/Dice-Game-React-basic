
import styled from 'styled-components'
const TotalScore = () => {
  return (
    <ScoreContainer>
       <div className="score">
        0
       </div>
       <p>Total Score</p>
    </ScoreContainer>
  )
}

export default TotalScore;

const ScoreContainer = styled.div`
    .score{
        font-size: 90px;
        display: flex;
        align-items: center;
        justify-content: center;
        /* background-color:yellow; */
    }
    p{
        font-size:24px;
        font-weight:500px;
        white-space:nowrap;
    }
    max-width:120px;
    padding-left:10px

`