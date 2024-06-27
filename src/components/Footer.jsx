

import Facebook from '../images/Facebook Icon.png'
import Twitter from '../images/Twitter Icon.png'
import Instagram from '../images/Instagram Icon.png'
import GitHub from '../images/GitHub Icon.png'


const Footer = () => {
  return (
    <div>
      <div className="footer">
      <img src={Facebook} alt="image" />
      <img src={Twitter} alt="image" />
      <img src={Instagram} alt="image" />
      <img src={GitHub}alt="image" />
      </div>
    </div>
  )
}

export default Footer
