import HeaderSmall from "./shared/HeaderSmall.tsx";
import {IcExternalLink} from "./shared/Icons.tsx";
import {useTranslation} from "react-i18next";

// Possible update: Add gallery with training pictures and/or client reviews
// Possible update: Separate 'Personal' in a new row making it 2x2

export default function About() {
  const {t} = useTranslation()

  const columns = [
    {
      id: "col-trainer",
      title: t("about.trainer.title"),
      desc: t("about.trainer.desc"),
      img: "/profile-pic.jpg",
      href: "https://www.linkedin.com/in/jon-ander-gorro%C3%B1o-a39b241b3/",
      // href: "https://www.instagram.com/j.n_g0rr0/,"
      target: "_blank"
    },
    {
      id: "col-philosophy",
      title: t("about.philosophy.title"),
      desc: t("about.philosophy.desc"),
      img: "/profile-pic.jpg",
      href: undefined,
      target: undefined
    },
    {
      id: "col-services",
      title: t("about.services.title"),
      desc: t("about.services.desc"),
      img: "/profile-pic.jpg",
      href: "/services",
      target: undefined
    },
  ]


  return (
    <>
      <HeaderSmall title={t("about.title")}/>
      <div className="bg-white w-full flex justify-evenly">
        <div id="about-content-group" className="text-black flex flex-col md:flex-row pb-24 pt-8 max-w-7xl">
          {
            columns.map(item => (
              <div key={item.id} id={item.id} className="px-12 py-6 md:px-6">
                <figure className="mb-8 flex justify-evenly"><img className="w-72 md:w-auto" src={item.img} alt={item.title}/></figure>
                <p className="my-4 text-2xl text-amber-600 flex items-center">
                  <a className="border-b border-amber-600" href={item.href} target={item.target}>
                    {item.title}
                  </a>
                  {
                    item.target ? <IcExternalLink className="ml-1 text-sm hidden ic-external"/> : undefined
                  }
                </p>
                <p>{item.desc}</p>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}
