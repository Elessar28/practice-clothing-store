import styles from './ImageCard.module.css'

type ImageCardProps = {
    imageSrc: string;
    altText: string;
    imageWidth: string;
    variant?: "notFramed" | "framed";
}

export default function ImageCard({ imageSrc, altText, imageWidth, variant = "notFramed" }: ImageCardProps) {
    return (
        <div className={`${styles[variant]}`}>
            <img src={imageSrc} alt={altText} style={{ width: imageWidth }}  />
        </div>
    );
}