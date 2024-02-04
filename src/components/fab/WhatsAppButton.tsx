import {IcWhatsapp} from "../shared/Icons.tsx";
import {useTranslation} from "react-i18next";

export default function WhatsAppButton() {
  const {t} = useTranslation()
  const message = encodeURI(t("contact.whatsapp.message"))

  return (
    <div>
      <a className="h-16 w-16 rounded-full bg-secondary flex justify-center items-center"
         href={`https://wa.me/34000000000?text=${message}`} target="_blank">
        <IcWhatsapp className="text-white text-4xl"/>
      </a>
    </div>
  )
}