import style from './Label.module.css';

type LabelProps = {
    children: string;
};

export default function Label({ children }: LabelProps) {
    return (
        <div className={style.label}>
            {children}
        </div>
    );
}