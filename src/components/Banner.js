import '../sass/pages/_banner.scss'
import { useState } from 'react'


function Banner ({ bannerLogo, title, nextText }) {
    const [text, setText ] = useState(true)
     const TextTitle = title ? (<div className='flex'><h1>{title}</h1> <span className='flex-child'>{nextText}</span></div>) : ''

    return (
        <section>
            <img  src={ bannerLogo } alt='banner logo' />
            {text && TextTitle }
        </section>
    )
}

export default Banner