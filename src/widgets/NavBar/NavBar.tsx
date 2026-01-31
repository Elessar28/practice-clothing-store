import styles from './NavBar.module.css';
import TransparentButton from '../../shared/TransparentButton/TransparentButton';


export default function NavBar() {
    return (
        <div className={styles.navbar}>
            <nav className={styles.center}>
                <a href="">Solution</a>
                <a href="">Learn</a>
                <a href="">Our Mission</a>
            </nav>
            <div className={styles.right}>
                <TransparentButton size="md">Join the Waitlist</TransparentButton>
            </div>
        </div>
    );
}