import NavBar from "../widgets/NavBar/NavBar";
import HeroSection from "../widgets/HeroSection/HeroSection";
import FirstGreenSection from "../widgets/FIrstGreenSection/FirstGreenSection";
import BigWhiteSection from "../widgets/BigWhiteSection/BigWhiteSection";
import SecondGreenSection from "../widgets/SecondGreenSection/SecondGreenSection";
import SmallWhiteSection from "../widgets/SmallWhiteSection/SmallWhiteSection";
import WaitlistSection from "../widgets/WaitlistSection/WaitlistSection";

export default function MainPage() {
    return (
        <div>
            <NavBar />
            <HeroSection />
            <FirstGreenSection />
            <BigWhiteSection />
            <SecondGreenSection />
            <SmallWhiteSection />
            <WaitlistSection />
        </div>
    );
}