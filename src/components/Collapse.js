

export default function Collapse( {collapseLogo, title} ) {

  return (
        <div className="boxes">
            <section>
                <h1>{title='Fiabilié'}</h1>
                <img src={ collapseLogo } alt='arrow' />
            </section>

            <section>
                <h1>{title='Respect'}</h1>
                <img src={ collapseLogo } alt='arrow'/>
            </section>

            <section>
                <h1>{title='Service'}</h1>
                <img src={ collapseLogo } alt='arrow'/>
            </section>

            <section>
                <h1>{title='Responsabilité'}</h1>
                <img src={ collapseLogo } alt='arrow' />
            </section>
        </div>
  )
}
//Fiabilié
//Respect
//Service
//Responsabilité