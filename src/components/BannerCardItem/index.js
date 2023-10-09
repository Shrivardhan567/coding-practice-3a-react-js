// Write your code here.
import './index.css'

const BannerCardsItem = props => {
  const {cardItem} = props
  const {headerText, description, className} = cardItem
  return (
    <li className={`${className} banner-card-item`}>
      <h1 className="heading">{headerText}</h1>
      <p className="description">{description}</p>
      <button className="show-more-btn" type="button">
        Show More
      </button>
    </li>
  )
}

export default BannerCardsItem
