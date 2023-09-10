// Write your code here.
import './index.css'

const banner = props => {
  const {bannerDetails} = props
  const {id, headerText, description, className} = bannerDetails
  console.log(id)

  return (
    <li className={className}>
      <h1>{headerText}</h1>
      <p>{description}</p>
      <button>Show More</button>
    </li>
  )
}

export default banner
