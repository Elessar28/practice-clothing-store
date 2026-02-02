import style from './SecondGreenSection.module.css'
import ImageCard from '../../shared/ImageCard/ImageCard'

import femaleDocPhoto from '../../app/images/woman-doc-photo.jpg'
import maleDocPhoto from '../../app/images/male-doc-photo.jpg'
import femaleMedicPhoto from '../../app/images/female-med-photo.jpg'

export default function SecondGreenSection() {
    return (
        <section className={style.section}>
            <h2>The World Needs More <br />Physicians. Not Less.</h2>
            <p>
                Attend aims to ease the financial stress that contributes to burnout. 
                Wherever you are in your career, a more successful financial future starts now.
            </p>

            <ul className={style.sectionImages}>
                <li>
                <ImageCard 
                    imageSrc={femaleDocPhoto}
                    altText="Female doctor smiling" 
                    imageWidth={'100%'} 
                    variant="framed"
                />
                <h4>Attending Physicians</h4>
                <p>You can do more than just make up for lost time</p>
                </li>
                <li>
                <ImageCard 
                    imageSrc={maleDocPhoto}
                    altText="Male medical professional smiling"
                    imageWidth={'100%'}
                    variant="framed"
                />
                <h4>Residents & Fellows</h4>
                <p>The time to protect your career is now</p>
                </li>
                <li>
                <ImageCard 
                    imageSrc={femaleMedicPhoto}
                    altText="Female medical professional looking at phone"
                    imageWidth={'100%'}
                    variant="framed"
                />
                <h4>Medical Students</h4>
                <p>The earlier you tend to your finances the better</p>
                </li>
            </ul>


            
        </section>
    )
}