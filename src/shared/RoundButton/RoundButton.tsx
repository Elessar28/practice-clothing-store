import style from './RoundButton.module.css'

type RoundButtonProps = {
    children?: React.ReactNode;
}

export default function RoundButton({ children }: RoundButtonProps) {
    return (
        <button className={style.roundButton}>
            {children}
        </button>
    );
}