import '../sass/pages/_card.scss'

function Card ( {id, cover, title } ){
    return (

        <div key={id} className='articles-boxes'>
            <img src={cover} alt='Logo location' />
            <h2>{title}</h2>
        </div>

    )
}






export default Card 