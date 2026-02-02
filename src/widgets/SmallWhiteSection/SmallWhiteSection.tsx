import style from './SmallWhiteSection.module.css'
import Label from '../../shared/Label/Label'
import Button from '../../shared/Button/Button'

export default function SmallWhiteSection() {
    return (
        <section className={style.section}>
            <Label>Confidence</Label>
            <h2>Knowledge is the <br />Best Medicine</h2>
            <p>Feel late to the game of financial education? 
                You're not alone. 
                Attend breaks it down, makes it easy and gives you confidence that your financial future is in good hands — yours.
            </p>
            <Button size={'lg'}>Learn More</Button>
        </section>
    )
}