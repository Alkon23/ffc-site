import ScrollTopButton from "./ScrollTopButton.tsx";
import WhatsAppButton from "./WhatsAppButton.tsx";

export default function FloatingActions() {

  return (
    <div className="fixed bottom-5 right-5 z-40 drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)]">
      <ScrollTopButton/>
      <WhatsAppButton/>
    </div>
  )
}