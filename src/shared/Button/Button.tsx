import styles from './Button.module.css';

type ButtonProps = {
    size?: "sm" | "md" | "lg";
    variant?: "filled" | "transparent";
    children?: React.ReactNode;
}


export default function Button({ size = "md", variant = "filled", children }: ButtonProps) {

    return (
        <button className={`${styles.button} ${styles[size]} ${styles[variant]}`}>
            {children}
        </button>
    );
}

