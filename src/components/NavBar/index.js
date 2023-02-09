// Write your code here.
import './index.css'

const NavItem = props => {
  const {win, score, bestScore} = props
  const result =
    win && score !== 12 ? (
      <nav>
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1>Emoji Game</h1>
        <div className="scores">
          <p>Score: {score}</p>
          <p>Top Score: {bestScore}</p>
        </div>
      </nav>
    ) : (
      <nav>
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1>Emoji Game</h1>
      </nav>
    )

  return result
}

export default NavItem
