import style from './BigWhiteSection.module.css';
import Label from '../../shared/Label/Label';

export default function BigWhiteSection() {
    return (
        <section className={style.section}>
            <Label>Financial Power</Label>
            <h2 className={style.sectionTitle}>Attending to Your <br />Financial Life</h2>
        </section>
    );
}