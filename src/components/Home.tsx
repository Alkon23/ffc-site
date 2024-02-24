import Header from "./shared/Header.tsx";
import {HeroBackground, HeroImage} from "./shared/Hero.tsx";
import {useTranslation} from "react-i18next";
import {useEffect} from "react";
import Marquee from "react-fast-marquee";

export default function Home() {
  const {t} = useTranslation()
  const sections = [
    {
      type: "HeroImage",
      id: "about-hero",
      title: t("home.about.title"),
      action: t("home.about.action"),
      href: "/about",
      background: "bg-white",
      img: "/profile-pic.jpg",
      reverse: false,
      desc: t("home.about.desc")
    },
    {
      type: "HeroImage",
      id: "services-hero",
      title: t("home.services.title"),
      action: t("home.services.action"),
      href: "/services",
      background: "bg-gray-200",
      img: "/profile-pic.jpg",
      reverse: true,
      desc: t("home.services.desc")
    },
    {
      type: "HeroBackground",
      id: "contact-hero",
      title: t("home.contact.title"),
      action: t("home.contact.action"),
      href: "/contact",
      background: "bg-concrete bg-cover bg-no-repeat bg-center bg-fixed",
      img: "/profile-pic.jpg",
      reverse: false,
      desc: t("home.contact.desc")
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('!left-0')
        }
      })
    })
    document.querySelectorAll('.slide-hero').forEach(e => observer.observe(e))
  })

  return (
    <>
      <Header/>
      <Marquee className="bg-primary-default font-archivo-black text-2xl text-outline-black uppercase py-1.5"
               autoFill={true}>
        &nbsp;·&nbsp;{t("home.marquee")}
      </Marquee>

      {sections.map(section => (
        section.type === "HeroImage" ?
          <HeroImage
            key={section.id}
            id={section.id}
            title={section.title}
            action={section.action}
            href={section.href}
            background={section.background}
            img={section.img}
            reverse={section.reverse}
            desc={section.desc}
          />
          :
          <HeroBackground
            key={section.id}
            id={section.id}
            title={section.title}
            action={section.action}
            href={section.href}
            background={section.background}
            img={section.img}
            reverse={section.reverse}
            desc={section.desc}
          />
      ))}
    </>
  )
}