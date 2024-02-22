import {useTranslation} from "react-i18next";
import HeaderSmall from "../shared/HeaderSmall.tsx";
import {NavLink} from "react-router-dom";

export default function Services() {
  const {t} = useTranslation()

  const services = [
    {
      id: "service-personal",
      title: t("service.personal.title"),
      img: "/profile-pic.jpg",
      href: "/services/personal"
    },
    {
      id: "service-couple",
      title: t("service.couple.title"),
      img: "/profile-pic.jpg",
      href: "/services/couple"
    },
    {
      id: "service-group",
      title: t("service.group.title"),
      img: "/profile-pic.jpg",
      href: "/services/group"
    },
    {
      id: "service-online",
      title: t("service.online.title"),
      img: "/profile-pic.jpg",
      href: "/services/online"
    },
  ]

  return (
    <>
      <HeaderSmall title={t("services.title")} subtitle={t("nav.services.text")}/>
      <div id="services-content-group" className="bg-white text-black flex flex-col md:flex-row justify-evenly p-16">
        {
          services.map(service => (
            <div key={service.id} id={service.id} className="px-12 py-6 md:px-6 flex flex-col flex-wrap items-center">
              <NavLink to={service.href}>
                <img className="w-72 md:w-auto" src={service.img} alt={service.title}/>
              </NavLink>
              <p className="my-4 text-2xl text-primary-default flex items-center border-b border-primary-default">
                <NavLink to={service.href}>
                  {service.title}
                </NavLink>
              </p>
            </div>
          ))
        }
      </div>
    </>
  )
}
