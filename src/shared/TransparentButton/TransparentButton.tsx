import styles from './TransparentButton.module.css';

type TransparentButtonProps = {
    size?: "sm" | "md" | "lg";
    children?: React.ReactNode;
}


export default function TransparentButton({ size = "md", children }: TransparentButtonProps) {

    return (
        <button className={`${styles.button} ${styles[size]}`}>
            {children}
        </button>
    );
}

