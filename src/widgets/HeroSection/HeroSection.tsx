import styles from './HeroSection.module.css';
import ImageCard from '../../shared/ImageCard/ImageCard';
import Button from '../../shared/Button/Button';

import heroDoctorImage from '../../app/images/hero-doctor-image.png';
import heroPeopleImage from '../../app/images/hero-people-image.png';

export default function HeroSection() {
    return (
        <div className={styles.heroSection}>
            <div className={styles.left}>
                <h1>Take Care<br /> of You</h1>
                <p>Meet the modern finance platform created for physicians,<br /> by physicians. Your path to financial independence is here.</p>
                <Button size='lg' variant='filled'>Join the Waitlist</Button>
            </div>

            <div className={styles.right}>
                <div>
                    <ImageCard
                        imageSrc={heroDoctorImage}
                        altText='A doctor with a stethoscope'
                        imageWidth={'25em'}
                    />
                </div>
                <div className={styles.overlayImage}>
                    <ImageCard
                        imageSrc={heroPeopleImage}
                        altText='A couple of people are reading from phone.'
                        imageWidth={'22em'}
                    />
                </div>
            </div>
            
        </div>
    );
}