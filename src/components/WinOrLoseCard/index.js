// Write your code here.
const GameResult = props => {
  const {win, score, play} = props
  const onPlay = () => {
    play()
  }
  if (win && score === 12) {
    return (
      <div>
        <div>
          <h1>You Won</h1>
          <p>Score</p>
          <p>{score}/12</p>
          <button onClick={onPlay} type="button">
            Play Again
          </button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          alt="won"
        />
      </div>
    )
    // eslint-disable-next-line no-else-return
  } else if (!win) {
    return (
      <div>
        <div>
          <h1>You Lose</h1>
          <p>Score</p>
          <p>{score}/12</p>
          <button onClick={onPlay} type="button">
            Play Again
          </button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
          alt="lose"
        />
      </div>
    )
  } else {
    return ''
  }
}

export default GameResult
