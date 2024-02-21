import {IcWhatsapp} from "../shared/Icons.tsx";
import {useTranslation} from "react-i18next";

export default function WhatsAppButton() {
  const {t} = useTranslation()
  const messages = [
    {msg: t('contact.whatsapp.message1'), delay: 'group-hover:delay-[180ms]'},
    {msg: t('contact.whatsapp.message2'), delay: 'group-hover:delay-[120ms]'},
    {msg: t('contact.whatsapp.message3'), delay: 'group-hover:delay-[60ms]'},
  ]

  const buildHref = (msg: string) => `https://wa.me/34000000000?text=${encodeURI(msg)}`

  return (
    <div>
      <div className="relative group">
        <span className="h-16 w-16 rounded-full bg-secondary flex justify-center items-center">
          <IcWhatsapp className="text-white text-4xl"/>
        </span>
        <div className="absolute right-[calc(100%+1.25rem)] -top-[calc(100%+2rem)] w-max
        transition-visibility group-hover:transition-none">
          <div className="flex flex-col drop-shadow-[0_0_2px_rgba(0,0,0,0.3)]">
            {
              messages.map(({msg, delay}, i) => (
                <a href={buildHref(msg)} target="_blank" key={`whatsapp-msg-${i}`}
                   className={"mt-[0.18rem] transition-visibility " + delay}>
                  <div className={"bg-gray-50 hover:bg-secondary text-black p-2 rounded-lg " +
                    `${i === messages.length - 1 ? 'chat-flush' : ''}`}>
                    <p>{msg}</p>
                  </div>
                </a>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}