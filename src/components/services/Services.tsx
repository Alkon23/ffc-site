import {Trans, useTranslation} from "react-i18next";
import HeaderSmall from "../shared/HeaderSmall.tsx";
import {NavLink} from "react-router-dom";

export default function Services() {
  const {t} = useTranslation()

  const services = [
    {
      id: "service-personal",
      title: "service.personal.title",
      desc: "service.personal.desc",
      img: "/profile-pic.jpg",
      href: "/services/personal"
    },
    {
      id: "service-couple",
      title: "service.couple.title",
      desc: "service.couple.desc",
      img: "/profile-pic.jpg",
      href: "/services/couple"
    },
    {
      id: "service-group",
      title: "service.group.title",
      desc: "service.group.desc",
      img: "/profile-pic.jpg",
      href: "/services/group"
    },
    {
      id: "service-online",
      title: "service.online.title",
      desc: "service.online.desc",
      img: "/profile-pic.jpg",
      href: "/services/online"
    },
  ]

  return (
    <>
      <HeaderSmall title={t("services.title")} subtitle={t("nav.services")}/>
      <div id="services-content-group" className="bg-white text-black flex flex-wrap flex-col md:flex-row justify-evenly p-16">
        {
          services.map(service => (
            <ServiceCard key={service.id} service={service}/>
          ))
        }
      </div>
    </>
  )
}

function ServiceCard(props: {service: {id:string, title:string, desc:string, img:string, href:string}}) {
  const {t} = useTranslation()
  const {service} = props

  return (
    <div id={service.id} className="px-12 py-6 md:px-6
    flex flex-col md:basis-[45%] min-[1400px]:basis-1/4
    items-center
    transition ease-in-out duration-300 hover:shadow-xl">
      <NavLink to={service.href}>
        <img className="w-72 md:w-auto" src={service.img} alt={t(service.title)}/>
      </NavLink>
      <p className="my-4 text-2xl text-primary-default flex items-center border-b border-primary-default">
        <NavLink to={service.href}>
          {t(service.title)}
        </NavLink>
      </p>
      <p className="font-montserrat font-light text-center"><Trans i18nKey={service.desc}/></p>
    </div>
  )
}