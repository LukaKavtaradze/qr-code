
import Image from '../assets/image-qr-code.png'


function Card() {

    return(
        <div className="qr-card">
            <img className='code' src={Image} alt="qr-code-scanning"/>
        </div>
    )
}

export default Card
