import styles from './FirstGreenSection.module.css';
import ImageCard from '../../shared/ImageCard/ImageCard';

import womanImage from '../../app/images/first-section-woman.png';

export default function FirstGreenSection() {
    return (
        <section className={styles.section}>
            <h2 className={styles.sectionTitle}>The Financial Independence<br /> Platform for Physicians</h2>
            <p className={styles.sectionText}>
                Doctors make so many sacrifices for the greater good, including their own financial wellbeing. 
                Attend is a comprehensive digital finance platform designed to change that. 
                Now you can take care of yourself as well as you take care of your patients.
            </p>
            <div className={styles.sectionImage}>
                <ImageCard 
                    imageSrc={womanImage} 
                    altText="A woman smiles."
                    imageWidth={'100%'}
                />
            </div>
            <div className={styles.whiteSection}>
                
            </div>
            
        </section>
    );
}