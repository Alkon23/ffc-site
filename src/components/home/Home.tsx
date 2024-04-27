import Header from "./Header.tsx";
import {HeroBackground} from "./Hero.tsx";
import {useTranslation} from "react-i18next";
import {useEffect} from "react";
import About from "./sections/About.tsx";
import Methodology from "./sections/Methodology.tsx";
import Services from "./sections/Services.tsx";
import Feedback from "./sections/Feedback.tsx";

export default function Home() {
  const {t} = useTranslation()

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
    <div className="bg-white">
      <Header/>

      <About/>
      <Methodology/>
      <Services/>
      <Feedback/>

      <HeroBackground id="contact-hero" title={t("home.contact.title")} action={t("home.contact.action")}
                      href="/contact" background="bg-concrete bg-cover bg-no-repeat bg-center bg-fixed"
                      desc={t("home.contact.desc")}/>
    </div>
  )
}