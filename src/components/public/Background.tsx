import backgroundImage from '../img/数学背景.jpg'
import '../css/Background.css'

const Background = () => { 
  return (
    <div className='background'>
        {Array.from({length: 10},(_, i) => (
            <>
            <div className='odd'>
                {Array.from({length: 10},(_,index) => (
                    <img key={`${i-index}`} src={backgroundImage} alt='背景画像' />
                ))}
            </div>
            <div className='even'>
                {Array.from({length: 10},(_,index) => (
                    <img key={`${i-index}`} src={backgroundImage} alt='背景画像' />
                ))}
            </div>
            </>
        ))}
    </div>
  )
}

export default Background
