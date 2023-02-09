// Write your code here.
const EmojiCard = props => {
  const {details, onEmoji} = props
  const {emojiUrl, emojiName} = details

  const onSelect = () => {
    onEmoji(details)
  }

  return (
    <li>
      <button type="button" onClick={onSelect}>
        {' '}
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
