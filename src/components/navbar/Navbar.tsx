import {IcBurger, IcClose} from "../shared/Icons.tsx";
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {NavLink, useLocation} from "react-router-dom";
import LangSelector from "./LangSelector.tsx";
import {NavMenuButton, NavSimpleButton} from "./NavButton.tsx";

export default function Navbar() {
  const {t} = useTranslation()
  const {pathname} = useLocation()
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

  const handleMenuBlur = () =>{
    setTimeout(() => setIsOpen(false), 100)
  }
  const toggleMobileMenu = () => {
    setIsOpen(isOpen => !isOpen)
  }
  const handleNavigation = (target: string) => {
    if (pathname === target) {
      window.scrollTo({top: 0, behavior: "smooth"})
    }
  }

  const navigation = [
    {text: t("nav.home"), href: '/', type: 'simple', elements: []},
    {text: t("nav.about"), href: '/about', type: 'simple', elements: []},
    {
      text: t("nav.services"), href: '/services', type: 'menu', elements: [
        {text: t("service.personal.title"), href: '/personal'},
        {text: t("service.couple.title"), href: '/couple'},
        {text: t("service.group.title"), href: '/group'},
        {text: t("service.online.title"), href: '/online'},
      ]
    },
    {text: t("nav.contact"), href: '/contact', type: 'simple', elements: []},
  ]

  return (
    <nav id="navbar-container" className="float-left sticky top-0 z-20 w-full">
      <div id="navbar-content" className={`${isOpaque ? "bg-opacity-100" : "bg-opacity-0"} transition duration-700 bg-primary-default 
      px-16 py-4 flex justify-between items-center`}>

        <NavLink to="/" id="navbar-logo" className="flex items-center" onClick={() => handleNavigation("/")}>
          <img src="/logo/logo-white-simple.svg" alt="FFC logo" className="h-12 w-12 mr-6 scale-150"/>
          {pathname === '/' &&
              <span className="font-neon-energy-x font-bold text-2xl hidden sm:block md:hidden lg:block">
                Functional Fitness Center
              </span>
          }
        </NavLink>

        <div className="items-baseline">
          <button onClick={() => {
            toggleMobileMenu()
            setTimeout(() => document.getElementById('navbar-buttons-vertical')?.focus(), 100)
          }} className="md:hidden text-2xl">
            {isOpen ? <IcClose/> : <IcBurger/>}
          </button>

          <div id="navbar-buttons" className="hidden md:block md:w-auto translate-y-1">
            <ul className="flex flex-row items-center align-top">
              {navigation.map((item) => (
                <li className="ml-1" key={item.text}>
                  {item.type === 'simple' ?
                    <NavSimpleButton text={item.text} href={item.href} onClick={() => handleNavigation(item.href)}/>
                    :
                    <NavMenuButton base={{text: item.text, href: item.href, onClick: () => handleNavigation(item.href)}}
                                   elements={item.elements.map((e) => {
                                     return {...e, onClick: () => handleNavigation(e.href)}
                                   })}
                                   isOpaque={isOpaque}/>
                  }
                </li>
              ))}
              <li className="ml-2"><LangSelector/></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Hidden vertical navbar for small displays */}
      <div tabIndex={0} id="navbar-buttons-vertical" onBlur={handleMenuBlur} className={
        "bg-primary-default bg-opacity-80 backdrop-blur-sm " +
        "py-4 mt-2 mx-[0.5rem] w-[calc(100%-1rem)] " +
        "border border-primary-400 rounded-lg " +
        "text-center justify-center " +
        "fixed md:hidden " + (isOpen ? "flex" : "hidden")}>
        <ul className="w-1/2">
          {navigation.map((item) => (
            <li className="mt-1" key={item.text}>
              <NavLink
                to={item.href}
                onClick={() => {
                  toggleMobileMenu()
                  handleNavigation(item.href)
                }}
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
