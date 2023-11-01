import {IcCircleUp} from "./shared/Icons.tsx";
import {useEffect, useState} from "react";

export default function ScrollButton() {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", scrollListener)
    return () => window.removeEventListener("scroll", scrollListener)
  })

  const scrollListener = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    winScroll > 100 ? setIsVisible(true) : setIsVisible(false)
  }

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: "smooth"})
  }

  return (
    <div className={`${isVisible ? "scale-100" : "scale-0"} fixed bottom-5 right-5 z-40 transition duration-300`}>
      <button type="button" onClick={scrollToTop}>
        <IcCircleUp className="h-16 w-16 text-amber-600"/>
      </button>
    </div>
  )
}