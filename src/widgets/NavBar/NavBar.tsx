import styles from './NavBar.module.css';
import Button from '../../shared/Button/Button';


export default function NavBar() {
    return (
        <div className={styles.navbar}>
            <nav className={styles.center}>
                <a href="">Solution</a>
                <a href="">Learn</a>
                <a href="">Our Mission</a>
            </nav>
            <div className={styles.right}>
                <Button size="md" variant="transparent">Join the Waitlist</Button>
            </div>
        </div>
    );
}