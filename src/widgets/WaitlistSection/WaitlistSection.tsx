import style from './WaitlistSection.module.css'
import ImageCard from '../../shared/ImageCard/ImageCard'
import Button from '../../shared/Button/Button'
import { useState } from 'react'

import womanImage from '../../app/images/woman-with-phone-image.png'

export default function WaitlistSection() {
    const [pressedAttendingButton, setPressedAttendingButton] = useState<boolean>(false)
    const [pressedFellowButton, setPressedFellowButton] = useState<boolean>(false)
    const [pressedResidentButton, setPressedResidentButton] = useState<boolean>(false)
    const [pressedMedicalStudentButton, setPressedMedicalStudentButton] = useState<boolean>(false)

    return (
        <section className={style.section}>
            <div className={style.sectionContent}>
                <div className={style.leftColumn}>
                    <h2>Join the <br />Waitlist</h2>
                    <input 
                        type="text" 
                        placeholder='Enter your name...'
                    />
                    <input 
                        type="text" 
                        placeholder='...your age...'
                    />
                    <input 
                        type="text" 
                        placeholder='...your goals'
                    />
                    <h4>I am a(n)</h4>
                    <div className={style.buttonsContainer}>
                        <Button 
                            size={'sm'} 
                            variant={pressedAttendingButton ? 'pressed' : 'not-pressed'} 
                            onClick={() => setPressedAttendingButton(prev => !prev)}
                        >  
                            Attending
                        </Button>
                        <Button 
                            size={'sm'} 
                            variant={pressedFellowButton ? 'pressed' : 'not-pressed'} 
                            onClick={() => setPressedFellowButton(prev => !prev)}
                        >
                            Fellow
                        </Button>
                        <Button 
                            size={'sm'} 
                            variant={pressedResidentButton ? 'pressed' : 'not-pressed'} 
                            onClick={() => setPressedResidentButton(prev => !prev)}
                        >
                            Resident
                        </Button>
                        <Button 
                            size={'sm'} 
                            variant={pressedMedicalStudentButton ? 'pressed' : 'not-pressed'} 
                            onClick={() => setPressedMedicalStudentButton(prev => !prev )}
                        >
                            Medical Student
                        </Button>
                    </div>
                </div>

                <div className={style.rightColumn}>
                    <ImageCard
                        imageSrc={womanImage}
                        altText='A woman searching something in her phone'
                        imageWidth={'100%'}
                    />
                </div>
            </div>
        </section>
    )
}
