import ScrollTopButton from "./ScrollTopButton.tsx";
import WhatsAppButton from "./WhatsAppButton.tsx";
import {useState} from "react";

export default function FloatingActions() {

  const isSmallScreen = () => window.innerWidth < 720
  const [isMobile, setIsMobile] = useState(isSmallScreen())
  window.addEventListener("resize", () => setIsMobile(window.innerWidth < 768))

  return (
    <div className="fixed bottom-5 right-5 z-40 drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)]">
      {isMobile ? undefined : <ScrollTopButton/>}
      <WhatsAppButton/>
    </div>
  )
}