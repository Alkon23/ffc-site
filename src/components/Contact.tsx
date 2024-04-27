import HeaderSmall from "./shared/HeaderSmall.tsx";
import {useTranslation} from "react-i18next";
import {IcEmail, IcExternalLink, IcInstagram, IcTikTok, IcWhatsapp, IcYoutube} from "./shared/Icons.tsx";

export default function Contact() {
  const {t} = useTranslation()
  // https://www.mapimage.com/ For static map image

  return (
    <>
      <HeaderSmall title={t("contact.title")} subtitle={t("nav.contact")}/>
      <div className="flex flex-col text-center lg:text-left lg:flex-row text-black text-lg">
        {/* Meet */}
        <ContactCard title={t("contact.meet.title")}>
          <p>{t("contact.meet.desc1")}</p>
          <p>{t("contact.meet.desc2")}</p>
          <p>{t("contact.meet.desc3")}
            <a href="https://maps.app.goo.gl/pTBtP3GWPaDSCAY27" target="_blank"
               className="text-primary-default font-semibold hover:underline">
              {t("contact.meet.addr1")}
            </a>
            {t("contact.meet.addr2")}.
          </p>
          {/*<img src="/src/assets/map.png" alt="SVF location"/>*/}
        </ContactCard>
        {/* Chat */}
        <ContactCard title={t("contact.chat.title")}>
          <p>{t("contact.chat.desc")}</p>
          <br/>
          <ul className="inline-flex flex-col text-xl">
            <li className="inline-flex items-center">
              <IcWhatsapp className="w-9 h-9 mr-1"/>
              <a href="https://wa.me/34000000000" target="_blank">+34 666 666 666</a>
            </li>
            <li className="inline-flex items-center">
              <IcEmail className="w-9 h-9 mr-2"/>
              <p>contact@scivitalfit.com</p>
            </li>
          </ul>
        </ContactCard>
        {/* Talk */}
        <ContactCard title={t("contact.follow.title")}>
          <p>{t("contact.follow.desc")}</p>
          <br/>
          <ul className="inline-flex flex-col text-xl">
            <li className="flex items-center">
              <IcInstagram className="w-9 h-9 mr-1"/>
              <a href="https://www.instagram.com/scivitalfit/" target="_blank"
                 className="hover:text-primary-default">@scivitalfit</a>
              <IcExternalLink className="ml-1 text-sm hidden ic-external text-primary-default"/>
            </li>
            <li className="flex items-center">
              <IcTikTok className="w-9 h-9 mr-1"/>
              <a href="https://www.instagram.com/scivitalfit/" target="_blank"
                 className="hover:text-primary-default">@scivitalfit</a>
              <IcExternalLink className="ml-1 text-sm hidden ic-external text-primary-default"/>
            </li>
            <li className="flex items-center">
              <IcYoutube className="w-9 h-9 mr-1"/>
              <a href="https://www.instagram.com/scivitalfit/" target="_blank"
                 className="hover:text-primary-default">@scivitalfit</a>
              <IcExternalLink className="ml-1 text-sm hidden ic-external text-primary-default"/>
            </li>
          </ul>
        </ContactCard>
      </div>
    </>
  )
}

function ContactCard(props: { title: string, children: any }) {
  return (
    <div className="bg-gray-200 odd:bg-white w-full px-10 pb-28 pt-20">
      <h2 className="mb-10 text-primary-default font-normal">{props.title}</h2>
      <div className="font-montserrat font-light">
        {props.children}
      </div>
    </div>
  )
}