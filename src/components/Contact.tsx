import HeaderSmall from "./shared/HeaderSmall.tsx";
import {useTranslation} from "react-i18next";
import {IcEmail, IcExternalLink, IcInstagram, IcTikTok, IcWhatsapp, IcYoutube} from "./shared/Icons.tsx";

export default function Contact() {
  const {t} = useTranslation()

  // https://www.mapimage.com/ For static map image

  return (
    <>
      <HeaderSmall title={t("contact.title")} subtitle={t("nav.contact")}/>
      <div className="flex flex-col text-center lg:text-left lg:flex-row text-black text-xl">
        <div className="bg-white w-full p-10">
          <h2 className="mb-10 font-bold">{t("contact.meet.title")}</h2>
          <p>{t("contact.meet.desc1")}</p>
          <p>{t("contact.meet.desc2")}</p>
          <p>{t("contact.meet.desc3")}
            <a href="https://maps.app.goo.gl/pTBtP3GWPaDSCAY27" target="_blank"
               className="text-primary-default font-semibold hover:underline">{t("contact.meet.addr1")}</a>{t("contact.meet.addr2")}.
          </p>
          {/*<img src="/src/assets/map.png" alt="FFC location"/>*/}
        </div>
        <div className="bg-gray-200 w-full p-10">
          <h2 className="mb-10 font-bold">{t("contact.chat.title")}</h2>
          <p>{t("contact.chat.desc")}</p>
          <br/>
          <ul className="inline-flex flex-col text-2xl">
            <li className="inline-flex items-center">
              <IcWhatsapp className="w-10 h-10 mr-1"/>
              <a href="https://wa.me/34000000000" target="_blank" className="text-primary-default">+34 666 666 666</a>
            </li>
            <li className="inline-flex items-center">
              <IcEmail className="w-10 h-10 mr-2"/>
              <p>ffc.bermeo@gmail.com</p>
            </li>
          </ul>
        </div>
        <div className="bg-white w-full p-10">
          <h2 className="mb-10 font-bold">{t("contact.follow.title")}</h2>
          <p>{t("contact.follow.desc")}</p>
          <br/>
          <ul className="inline-flex flex-col text-2xl">
            <li className="flex items-center">
              <IcInstagram className="w-10 h-10 mr-1"/>
              <a href="" target="_blank" className="hover:text-primary-default">@functionalfitness.center</a>
              <IcExternalLink className="ml-1 text-sm hidden ic-external text-primary-default"/>
            </li>
            <li className="flex items-center">
              <IcTikTok className="w-10 h-10 mr-1"/>
              <a href="" target="_blank" className="hover:text-primary-default">@functionalfitness.center</a>
              <IcExternalLink className="ml-1 text-sm hidden ic-external text-primary-default"/>
            </li>
            <li className="flex items-center">
              <IcYoutube className="w-10 h-10 mr-1"/>
              <a href="" target="_blank" className="hover:text-primary-default">@functionalfitness.center</a>
              <IcExternalLink className="ml-1 text-sm hidden ic-external text-primary-default"/>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}