import '../sass/pages/_banner.scss'


function Banner ({ bannerLogo, title }) {

    return (
        <section>
            <img  src={ bannerLogo } alt='Logo Banner' />
            <h1> { title } </h1>
        </section>
    )
}

export default Banner