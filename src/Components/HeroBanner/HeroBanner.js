import "./HeroBanner.css"

const HeroBanner = (props) => {
    return(
        <div>
            <article>
	<figure>
		<img src='https://unsplash.it/450/800?image=508' alt />
	</figure>
	<section>
			<div>
				<h1>Scrolling half by half</h1>
				<p>Made in pure #CSS and almost all is "old properties" method. And a bit imagination.<br/>
				Yes, the flexbox is old now.</p>
			</div>
	</section>
	
	<figure>
		<img src='https://unsplash.it/450/800?image=817' alt />
	</figure>
	<section>
		<div>
			<h2>I'm Kseso,<br/>
			&ldquo;a #obCSServer&rdquo;</h2>
			<p>Ramajero Argonauta, Enredique Amanuense de #CSS.</p>
		</div>
	</section>
	
</article>
        </div>
    )
    }
    
    export default HeroBanner