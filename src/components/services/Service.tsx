import HeaderSmall from "../shared/HeaderSmall.tsx";
import {useTranslation} from "react-i18next";
import TransTextContainer from "../shared/TransTextContainer.tsx";

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
      <HeaderSmall title={t(service.title)} subtitle={t("nav.services")}/>
      <div id="services-content-group" className="bg-white text-black p-6 px-4 md:px-20">
        <div className="flex flex-col md:flex-row">
          <img src={service.img} alt={t(service.title)}/>
          <div className="flex flex-col w-full p-8">
            <h3 className="font-semibold text-center mb-12">{t(service.subtitle)}</h3>
            <ul className="marker:content-['✔'] marker:text-secondary text-xl md:ml-16">
              {
                service.perks.map((perk: string, i: number) => (
                  <li key={`perk-${i}`} className="mb-3 pl-2">{t(perk)}</li>
                ))
              }
            </ul>
          </div>
        </div>
        <div className="mt-36 mb-28 text-lg">
          {
            subServices.map(({key, title, desc}) => (
              <TransTextContainer key={key} title={title} content={desc} />
            ))
          }
        </div>
      </div>
    </>
  )
}