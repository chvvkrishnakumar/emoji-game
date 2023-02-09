// Write your code here.
const EmojiCard = props => {
  const {details, onEmoji} = props
  const {emojiUrl, emojiName} = details

  const onSelect = () => {
    onEmoji(details)
  }

  return (
    <li>
      <img onClick={onSelect} src={emojiUrl} alt={emojiName} />
    </li>
  )
}

export default EmojiCard
