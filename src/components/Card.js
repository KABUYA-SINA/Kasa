import '../sass/pages/_card.scss'
import { Link } from 'react-router-dom'





function Card ( {id, cover, title } ){
    return (
        <Link to={`/SinglePage/${id}`}>
            <div key={id} className='articles-boxes'>
                <img src={cover} alt='Logo location' />
                <h2>{title}</h2>
            </div>
        </Link>

    )
}






export default Card 