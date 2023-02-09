// Write your code here.
const NavItem = props => {
  const {win, score, bestScore} = props
  const result = win ? (
    <nav>
      <p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        Emoji Game
      </p>
      <div>
        <p>Score:{score}</p>
        <p>Top Score:{bestScore}</p>
      </div>
    </nav>
  ) : (
    <nav>
      <p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        Emoji Game
      </p>
    </nav>
  )

  return result
}

export default NavItem
