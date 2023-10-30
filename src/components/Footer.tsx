import {IcExternalLink, IcInstagram, IcTikTok, IcYoutube} from "./shared/Icons.tsx";
import {useState} from "react";
import {useTranslation} from "react-i18next";

const socials = [
  {
    icon: <IcInstagram/>,
    name: "Instagram",
    href: "https://www.instagram.com/functionalfitness.center/"
  },
  {
    icon: <IcTikTok/>,
    name: "TikTok",
    href: "https://www.instagram.com/functionalfitness.center/"
  },
  {
    icon: <IcYoutube/>,
    name: "Youtube",
    href: "https://www.instagram.com/functionalfitness.center/"
  },
]

export default function Footer() {
  const {t} = useTranslation()

  // Avoid loading two images (although one is hidden) all the time
  const isSmallScreen = () => window.innerWidth < 720
  const [isMobile, setIsMobile] = useState(isSmallScreen())

  window.addEventListener("resize", () => setIsMobile(window.innerWidth < 768))

  return (
    <footer className="pt-16 pb-20">
      <div className="flex flex-col md:flex-row items-center md:items-stretch justify-around text-gray-500">
        <div id="footer-location">
          <h3 className="text-2xl text-white pb-1 mb-4 border-b-2">{t("footer.find")}</h3>
          <p>{t("footer.find_address1")}</p>
          <p>{t("footer.find_address2")}</p>
        </div>

        {
          isMobile ? undefined :
            <div id="footer-img" className="hidden md:block">
              <img src="/src/assets/profile-pic.jpg" alt="FFC logo" className="w-36 h-36"/>
            </div>
        }

        <div id="footer-social" className="py-8 md:p-0">
          <h3 className="text-2xl text-white pb-1 mb-4 border-b-2">{t("footer.socials")}</h3>
          <ul>
            {socials.map(item => (
              <li key={item.name}>
                <a href={item.href} target="_blank" className="flex items-center hover:text-amber-500">
                  {item.icon}<span className="mx-1">{item.name}</span><IcExternalLink/>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {
          !isMobile ? undefined :
            <div id="footer-img" className="block md:hidden">
              <img src="/src/assets/profile-pic.jpg" alt="FFC logo" className="w-36 h-36"/>
            </div>
        }
      </div>
    </footer>
  )
}
