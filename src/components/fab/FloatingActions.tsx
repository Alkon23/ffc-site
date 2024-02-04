import ScrollTopButton from "./ScrollTopButton.tsx";
import WhatsAppButton from "./WhatsAppButton.tsx";

export default function FloatingActions() {

  return (
    <div className={"fixed bottom-5 right-5 z-40"}>
      <ScrollTopButton/>
      <WhatsAppButton/>
    </div>
  )
}