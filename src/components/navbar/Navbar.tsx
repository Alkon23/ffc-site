import {IcBurger, IcClose} from "../shared/Icons.tsx";
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {NavLink} from "react-router-dom";
import LangSelector from "./LangSelector.tsx";
import {NavMenuButton, NavSimpleButton} from "./NavButton.tsx";

export default function Navbar() {
  const {t} = useTranslation()
  const [isOpaque, setIsOpaque] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", scrollListener)
    return () => window.removeEventListener("scroll", scrollListener)
  })

  const scrollListener = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    winScroll > 200 ? setIsOpaque(true) : setIsOpaque(false)
  }

  const handleClick = () => {
    setIsOpen(isOpen => !isOpen)
  }

  const navigation = [
    {text: t("nav.home"), href: '/', type: 'simple', elements: []},
    {text: t("nav.about"), href: '/about', type: 'simple', elements: []},
    {
      text: t("nav.services.text"), href: '/services', type: 'menu', elements: [
        {text: t("nav.services.personal"), href: '/personal'},
        {text: t("nav.services.couple"), href: '/couple'},
        {text: t("nav.services.group"), href: '/group'},
        {text: t("nav.services.online"), href: '/online'},
      ]
    },
    {text: t("nav.contact"), href: '/contact', type: 'simple', elements: []},
  ]

  return (
    <nav id="navbar-container" className="float-left sticky top-0 z-20 w-full">
      <div id="navbar-content" className={`${isOpaque ? "bg-opacity-100" : "bg-opacity-0"} transition duration-700 bg-primary-default 
      px-16 py-4 flex justify-between items-center`}>

        <NavLink to="/" id="navbar-logo" className="flex items-center">
          <img src="/logo/logo-white-simple.svg" alt="FFC logo" className="h-12 w-12 mr-6 scale-150"/>
          <span className="font-neon-energy-x font-bold text-2xl hidden sm:block md:hidden lg:block">Functional Fitness Center</span>
        </NavLink>

        <div className="items-baseline">
          <button onClick={handleClick} className="md:hidden text-2xl">
            {isOpen ? <IcClose/> : <IcBurger/>}
          </button>

          <div id="navbar-buttons" className="hidden md:block md:w-auto translate-y-1">
            <ul className="flex flex-row items-center align-top">
              {navigation.map((item) => (
                <li className="ml-1" key={item.text}>
                  {item.type === 'simple' ?
                    <NavSimpleButton text={item.text} href={item.href}/> :
                    <NavMenuButton base={{text: item.text, href: item.href}} elements={item.elements} isOpaque={isOpaque}/>
                  }
                </li>
              ))}
              <li className="ml-2"><LangSelector/></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Hidden vertical navbar for small displays */}
      <div id="navbar-buttons-vertical" className={
        "bg-primary-default bg-opacity-80 backdrop-blur-sm py-4 mt-2 mx-[0.5rem] w-[calc(100%-1rem)] fixed border border-primary-400 rounded-lg text-center justify-center md:hidden " +
        (isOpen ? "flex" : "hidden")}>
        <ul className="w-1/2">
          {navigation.map((item) => (
            <li className="mt-1" key={item.text}>
              <NavLink
                to={item.href}
                onClick={handleClick}
                className={(state) =>
                  (state.isActive ? "" : "after:scale-x-0 after:hover:scale-x-100 ") +
                  "after:pb-2 after:block after:border-b after:border-white after:transition after:duration-300 after:content-[''] font-medium"
                }>
                  <span className="px-3">
                    {item.text}
                  </span>
              </NavLink>
            </li>
          ))}
          <li><LangSelector/></li>
        </ul>
      </div>
    </nav>
  )
}
