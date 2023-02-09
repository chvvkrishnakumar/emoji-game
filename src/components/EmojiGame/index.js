import {Component} from 'react'
import EmojiCard from '../EmojiCard/index'
import GameResult from '../WinOrLoseCard/index'
import NavItem from '../NavBar/index'
import './index.css'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.
 
*/

// Write your code here.
class EmojiGame extends Component {
  state = {
    score: 0,
    bestScore: 0,
    win: true,
    selectedEmojis: [],
  }

  onEmoji = item => {
    const {selectedEmojis} = this.state
    const filt = selectedEmojis.filter(each => each.id === item.id)
    console.log(filt)

    if (filt.length !== 0) {
      this.setState({win: false})
    } else {
      this.setState(prevState => ({
        selectedEmojis: [...prevState.selectedEmojis, item],
        score: prevState.score + 1,
        win: true,
      }))
    }
  }

  play = () => {
    const {score, bestScore} = this.state
    if (score > bestScore) {
      this.setState({bestScore: score})
    }
    this.setState({score: 0, win: true, selectedEmojis: []})
  }

  render() {
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }
    const {score, bestScore, win} = this.state
    const suffled = shuffledEmojisList()
    const result =
      !win || score === 12 ? (
        <GameResult win={win} score={score} play={this.play} />
      ) : (
        <ul className="emoji-container">
          {suffled.map(each => (
            <EmojiCard onEmoji={this.onEmoji} details={each} key={each.id} />
          ))}
        </ul>
      )

    return (
      <div>
        <NavItem win={win} score={score} bestScore={bestScore} />
        <div className="main">{result}</div>
      </div>
    )
  }
}

export default EmojiGame
