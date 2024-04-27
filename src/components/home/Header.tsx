import {IcArrowRight} from "../shared/Icons.tsx";
import {Link} from "react-router-dom";

export default function Header() {
  // const {t} = useTranslation()

  return (
    <header className="bg-[url('/src/assets/home-bg.jpg')] bg-cover bg-no-repeat bg-center h-[90vh] relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-3xl/[1.5em] md:text-[7vw]/[1.15em]
            font-anton uppercase dark-shadow
            tracking-[0.05em] md:tracking-[-0.0005em] transform scale-x-[1.4]">
          Building Functional Humans
        </h1>
        <h3 className="font-montserrat dark-shadow">
          Programas de entrenamiento respaldados por la ciencia enfocados a mejorar tu salud, bienestar físico y
          vitalidad.
        </h3>
        <div className="mt-10">
          <Link to={'/contact'} className="
            border-2 border-transparent hover:border-primary-default
            bg-primary-default hover:bg-transparent
            text-white font-semibold
            px-5 py-2.5 inline-flex items-center
            transition duration-200
            focus:ring-4 focus:ring-primary-300">
            Comienza Ya &nbsp;<IcArrowRight/>
          </Link>
        </div>
      </div>
      <Separator/>
    </header>
    // <header id="header-container">
    //   <div id="header-image" className="bg-concrete bg-cover bg-no-repeat bg-center h-screen">
    //     <div id="header-text" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center select-none">
    //         <h1 className="text-3xl/[1.5em] md:text-[7vw]/[1.5em]
    //         font-archivo-black uppercase green-glow
    //         tracking-[0.05em] md:tracking-[-0.02em] transform scale-x-[1.4]">
    //             Building Functional Humans
    //         </h1>
    //       {/*<h1 className="font-bungee">Functional Fitness Center</h1>*/}
    //       {/*<hr className="w-64 h-1 mt-6 mb-4 mx-auto bg-primary-default border-0 rounded"/>*/}
    //       {/*<h3 className="text-3xl md:text-4xl">Building Functional Humans</h3>*/}
    //     </div>
    //     <div className="absolute bottom-0 w-full text-center animate-bounce">
    //       <button type="button" className="inline-flex items-center mb-1.5" onClick={onScrollToInfo}>
    //         <IcTriangleDown className="mt-1 text-2xs"/>&nbsp;{t("home.more")}&nbsp;<IcTriangleDown className="mt-1 text-2xs"/>
    //       </button>
    //     </div>
    //   </div>
    // </header>
  )
}

function Separator() {
  return (
    <>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] animate-bounce">
        <svg className="relative block w-[calc(100%+1.3px)] h-[18px]"
             data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M649.97 0L599.91 54.12 550.03 0 0 0 0 120 1200 120 1200 0 649.97 0z" style={{fill: "#FFF"}}></path>
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg className="relative block w-[calc(100%+1.3px)] h-[20px]"
             data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M649.97 0L599.91 54.12 550.03 0 0 0 0 120 1200 120 1200 0 649.97 0z" style={{fill: "#FFF"}}></path>
        </svg>
      </div>
    </>
  )
}