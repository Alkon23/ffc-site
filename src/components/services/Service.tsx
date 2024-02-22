import HeaderSmall from "../shared/HeaderSmall.tsx";
import {Trans, useTranslation} from "react-i18next";

export enum SERVICES {
  Personal,
  Couple,
  Group,
  Online
}

const services: { [key in SERVICES]: any } = {
  [SERVICES.Personal]: {
    title: "service.personal.title",
    subtitle: "service.personal.subtitle",
    img: "/profile-pic.jpg",
    perks: [
      "service.perks.interview",
      "service.perks.routine",
      "service.perks.followup",
      "service.perks.coach",
      "service.perks.whatsapp",
      "service.perks.location",
      "service.perks.home",
    ]
  },
  [SERVICES.Couple]: {
    title: "service.couple.title",
    subtitle: "service.couple.subtitle",
    img: "/profile-pic.jpg",
    perks: [
      "service.perks.interview",
      "service.perks.routine",
      "service.perks.followup",
      "service.perks.coach",
      "service.perks.whatsapp",
      "service.perks.location",
      "service.perks.home",
      "service.perks.couple",
    ]
  },
  [SERVICES.Group]: {
    title: "service.group.title",
    subtitle: "service.group.subtitle",
    img: "/profile-pic.jpg",
    perks: [
      "service.perks.interview",
      "service.perks.followup",
      "service.perks.whatsapp",
      "service.perks.location",
    ]
  },
  [SERVICES.Online]: {
    title: "service.online.title",
    subtitle: "service.online.subtitle",
    img: "/profile-pic.jpg",
    perks: [
      "service.perks.interview",
      "service.perks.routine",
      "service.perks.followup",
      "service.perks.whatsapp",
      "service.perks.online",
    ]
  }
}
const subServices = [
  {
    title: "service.subservice.personalize.title",
    desc: "service.subservice.personalize.desc",
    img: "/profile-pic.jpg",
    key: "service-personalized"
  },
  {
    title: "service.subservice.routine.title",
    desc: "service.subservice.routine.desc",
    img: "/profile-pic.jpg",
    key: "service-routine"
  },
  {
    title: "service.subservice.followup.title",
    desc: "service.subservice.followup.desc",
    img: "/profile-pic.jpg",
    key: "service-followup"
  },
]

export default function Service(props: { type: SERVICES }) {
  const {t} = useTranslation()
  const service = services[props.type]

  return (
    <>
      <HeaderSmall title={t(service.title)} subtitle={t("nav.services.text")}/>
      <div id="services-content-group" className="bg-white text-black p-6">
        <div className="flex flex-row">
          <img src={service.img} alt={t(service.title)} className="ml-16"/>
          <div className="flex flex-col w-full p-8">
            <h3 className="font-medium text-center mb-12">{t(service.subtitle)}</h3>
            <ul className="marker:content-['✔'] marker:text-secondary text-xl ml-16">
              {
                service.perks.map((perk: string) => (
                  <li className="mb-3">&nbsp;{t(perk)}</li>
                ))
              }
            </ul>
          </div>
        </div>
        <div className="mt-36 ml-16 text-lg">
          {
            subServices.map(subService => (
              <div key={subService.key}>
                <hr className="w-2/4 h-[1px] mt-6 mb-4 mx-auto bg-gray-300 border-0 rounded first:hidden"/>
                <div className="flex flex-row items-center my-8">
                  <div className="flex flex-col mr-12">
                    <h3 className="underline">{t(subService.title)}</h3>
                    <br/>
                    <p><Trans i18nKey={subService.desc}/></p>
                  </div>
                  <img src={subService.img} alt={t(subService.title)} className="w-64"/>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}