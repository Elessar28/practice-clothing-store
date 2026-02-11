import styles from './Button.module.css';

type ButtonProps = {
    size?: "sm" | "md" | "lg";
    variant?: "filled" | "transparent" | "pressed" | "not-pressed";
    onClick?: () => void;
    children?: React.ReactNode;
}


export default function Button({ size = "md", variant = "filled", onClick, children }: ButtonProps) {

    return (
        <button onClick={onClick} className={`${styles.button} ${styles[size]} ${styles[variant]}`}>
            {children}
        </button>
    );
}

