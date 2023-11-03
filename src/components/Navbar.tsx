import {IcBurger, IcClose, IcEng, IcEsp, IcEus} from "./shared/Icons.tsx";
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {NavLink} from "react-router-dom";

export default function Navbar() {
  const {t} = useTranslation()
  const [isOpaque, setIsOpaque] = useState(true)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", scrollListener)
    return () => window.removeEventListener("scroll", scrollListener)
  })

  const scrollListener = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    winScroll > 100 ? setIsOpaque(false) : setIsOpaque(true)
  }

  const handleClick = () => {
    setIsOpen(isOpen => !isOpen)
  }

  const navigation = [
    {name: t("nav.home"), href: '/'},
    {name: t("nav.about"), href: '/about'},
    {name: t("nav.services"), href: '/services'},
    {name: t("nav.contact"), href: '/contact'},
  ]

  return (
    <nav id="navbar-container" className="sticky top-0 z-20">
      <div className={`${isOpaque ? "bg-opacity-100" : "bg-opacity-80 backdrop-blur-sm"} transition duration-700 bg-amber-600 
      px-16 py-4 flex justify-between items-center`}>

        <NavLink to="/" id="navbar-logo" className="flex items-center">
          <img src="/profile-pic.jpg" alt="FFC logo" className="h-12 w-12"/>
          <span className="font-bold text-2xl hidden sm:block">Functional Fitness Center</span>
        </NavLink>

        <div className="items-baseline">
          <button onClick={handleClick} className="md:hidden text-2xl">
            {isOpen ? <IcClose/> : <IcBurger/>}
          </button>

          <div id="navbar-buttons" className="hidden md:block md:w-auto translate-y-1">
            <ul className="flex flex-row items-center align-top">
              {navigation.map((item) => (
                <li className="ml-1" key={item.name}>
                  <NavLink
                    to={item.href}
                    className={(state) =>
                      (state.isActive ? "" : "after:scale-x-0 after:hover:scale-x-100 ") +
                      "after:pb-2 after:block after:border-b after:border-white after:transition after:duration-300 after:content-[''] font-medium"
                    }>
                  <span className="px-3">
                    {item.name}
                  </span>
                  </NavLink>
                </li>
              ))}
              <li className="ml-2"><LangSelector/></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Hidden vertical navbar for small displays */}
      <div id="navbar-buttons-vertical" className={
        "bg-amber-600 bg-opacity-80 backdrop-blur-sm py-4 mt-2 mx-[0.5rem] w-[calc(100%-1rem)] fixed border border-amber-400 rounded-lg text-center justify-center md:hidden " +
        (isOpen ? "flex" : "hidden")}>
        <ul className="w-1/2">
          {navigation.map((item) => (
            <li className="mt-1" key={item.name}>
              <NavLink
                to={item.href}
                onClick={handleClick}
                className={(state) =>
                  (state.isActive ? "" : "after:scale-x-0 after:hover:scale-x-100 ") +
                  "after:pb-2 after:block after:border-b after:border-white after:transition after:duration-300 after:content-[''] font-medium"
                }>
                  <span className="px-3">
                    {item.name}
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

function LangSelector() {
  const {i18n} = useTranslation()
  const [languages] = useState([
    {flag: <IcEsp/>, code: "es", name: "Espa\u00F1ol"}, // 0 -> selected lang
    {flag: <IcEus/>, code: "eu", name: "Euskara"}, // 1
    {flag: <IcEng/>, code: "en", name: "English"}, // 2
  ])

  const switchLang = (index: number) => {
    i18n.changeLanguage(languages[index].code).then();
    [languages[0], languages[index]] = [languages[index], languages[0]]
  }

  const [isOver, setIsOver] = useState(false)
  const onMouseOver = () => setIsOver(true)
  const onMouseLeave = () => setIsOver(false)

  return (
    <>
      <div id="lang-selector" className="flex items-center justify-center text-3xl md:text-2xl">
        <button title={languages[1].name} onClick={() => switchLang(1)}
                onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}
                className="hover:z-20 hover:scale-150 duration-100">
          {languages[1].flag}
        </button>
        <button title={languages[0].name} id="selected-lang"
                className={(isOver ? "scale-75" : undefined) + " -mx-1.5 z-10 text-6xl md:text-4xl duration-100"}>
          {languages[0].flag}
        </button>
        <button title={languages[2].name} onClick={() => switchLang(2)}
                onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}
                className="hover:z-20 hover:scale-150 duration-100">
          {languages[2].flag}
        </button>
      </div>
    </>
  )
}