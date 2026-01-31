// import styles from './ImageCard.module.css'

type ImageCardProps = {
    imageSrc: string;
    altText: string;
    imageWidth: string;
}

export default function ImageCard({ imageSrc, altText, imageWidth }: ImageCardProps) {
    return (
        <div>
            <img src={imageSrc} alt={altText} style={{ width: imageWidth }} />
        </div>
    );
}