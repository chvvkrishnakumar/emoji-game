// Write your code here.
import './index.css'

const GameResult = props => {
  const {win, score, play} = props
  const onPlay = () => {
    play()
  }
  if (win && score === 12) {
    return (
      <div className="win-lose">
        <div>
          <h1>You Won</h1>
          <p>Best Score</p>
          <p className="score">{score}/12</p>
          <button className="btn" onClick={onPlay} type="button">
            Play Again
          </button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          alt="win or lose"
        />
      </div>
    )
    // eslint-disable-next-line no-else-return
  } else if (!win) {
    return (
      <div className="win-lose">
        <div>
          <h1>You Lose</h1>
          <p>Score</p>
          <p className="score">{score}/12</p>
          <button className="btn" onClick={onPlay} type="button">
            Play Again
          </button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
          alt="win or lose"
        />
      </div>
    )
  } else {
    return ''
  }
}

export default GameResult
