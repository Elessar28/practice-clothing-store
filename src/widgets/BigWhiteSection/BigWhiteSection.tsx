import style from './BigWhiteSection.module.css';
import Label from '../../shared/Label/Label';
import ImageCard from '../../shared/ImageCard/ImageCard';
import RoundButton from '../../shared/RoundButton/RoundButton';
import Button from '../../shared/Button/Button';

import greenPhoneImage from '../../app/images/green-phone-image.png'

export default function BigWhiteSection() {
    return (
        <section className={style.section}>
            <Label>Financial Power</Label>
            <h2 className={style.sectionTitle}>Attending to Your <br />Financial Life</h2>
            <p className={style.sectionText}>
                Physicians shouldn't have to choose between meaning and money — you deserve both. 
                Attend gives you the power to easily manage your finances anytime, anywhere no sacrifice necessary.
            </p>
            <div className={style.sectionContent}>
                <div className={style.leftColumn}>
                    <h3>
                        A Financial Solutions <br />
                        Platform that is...
                    </h3>
                    <ul className={style.sectionList}>
                        <li>
                            <h4>Tailored</h4>
                            <div className={style.buttonContainer}><RoundButton>+</RoundButton></div>
                            <div className={style.separator}></div>
                            <p>Only for physicians — because there's no financial journey quite like yours.</p>
                        </li>
                        <li>
                            <h4>Empowering</h4>
                            <div className={style.buttonContainer}><RoundButton>+</RoundButton></div>
                            <div className={style.separator}></div>
                            <p>The actionable information you need to make smarter financial decisions.</p>
                        </li>
                        <li>
                            <h4>Convenient</h4>
                            <div className={style.buttonContainer}><RoundButton>+</RoundButton></div>
                            <div className={style.separator}></div>
                            <p>Always-on digital solution that fits in seamlessly with your always-on lifestyle.</p>
                        </li>
                    </ul>
                    <Button size={"md"} variant={"transparent"}>Learn More</Button>
                </div>
                <div className={style.rightColumn}>
                    <ImageCard 
                        imageSrc={greenPhoneImage}
                        altText="Financial Power Illustration" 
                        imageWidth={'100%'}
                    />
                </div>
                
            </div>
        </section>
    );
}