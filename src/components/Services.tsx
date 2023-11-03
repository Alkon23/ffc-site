import {useTranslation} from "react-i18next";
import HeaderSmall from "./shared/HeaderSmall.tsx";
import NavButton from "./shared/NavButton.tsx";
import {
  IcCalendar,
  IcCardio,
  IcDoubleArrowDown,
  IcDoubleArrowUp,
  IcNeutral,
  IcStrength,
  IcTimer
} from "./shared/Icons.tsx";
import Carousel from "./shared/Carousel.tsx";
import {ReactElement} from "react";

type ServiceElement = {
  id: string,
  title: string,
  desc: string,
  img: string,
  specs?: { duration: string, frequency: string, type: { strength: ReactElement, cardio: ReactElement } }
}
const TypeModifier = {
  PLUS: <IcDoubleArrowUp className="-mr-4 text-green-600"/>,
  MINUS: <IcDoubleArrowDown className="-mr-4 text-red-400"/>,
  NEUTRAL: <IcNeutral className="-mr-2 text-gray-400"/>
}

export default function Services() {
  const {t} = useTranslation()

  const services = [
    {
      id: "services-group",
      title: t("services.group.title"),
      desc: t("services.group.desc"),
      elements: [
        {
          id: "services-group-sg",
          title: t("services.sgym.title"),
          desc: t("services.sgym.desc"),
          img: "/profile-pic.jpg",
          specs: {
            duration: "60 mins",
            frequency: t("services.frequency", {frq: "3"}),
            type: {
              strength: TypeModifier.PLUS,
              cardio: TypeModifier.MINUS
            }
          }
        },
        {
          id: "services-group-oh",
          title: t("services.ohiit.title"),
          desc: t("services.ohiit.desc"),
          img: "/profile-pic.jpg",
          specs: {
            duration: "60 mins",
            frequency: t("services.frequency", {frq: "3"}),
            type: {
              strength: TypeModifier.NEUTRAL,
              cardio: TypeModifier.NEUTRAL
            }
          }
        },
        {
          id: "services-group-ir",
          title: t("services.irun.title"),
          desc: t("services.irun.desc"),
          img: "/profile-pic.jpg",
          specs: {
            duration: "60 mins",
            frequency: t("services.frequency", {frq: "2"}),
            type: {
              strength: TypeModifier.MINUS,
              cardio: TypeModifier.PLUS
            }
          }
        }
      ],
    },
    {
      id: "services-single",
      title: t("services.single.title"),
      desc: t("services.single.desc"),
      elements: [
        {
          id: "services-single-prep",
          title: t("services.prep.title"),
          desc: t("services.prep.desc"),
          img: "/profile-pic.jpg"
        },
        {
          id: "services-single-moni",
          title: t("services.moni.title"),
          desc: t("services.moni.desc"),
          img: "/profile-pic.jpg"
        },
        {
          id: "services-single-coach",
          title: t("services.coach.title"),
          desc: t("services.coach.desc"),
          img: "/profile-pic.jpg"
        }
      ],
    }
  ]

  return (
    <>
      <HeaderSmall title={t("services.title")}/>
      <div id="services-content-group" className="bg-white text-black flex flex-col lg:flex-row">
        {
          services.map((service) => (
            <div key={service.id} id={service.id}
                 className="h-fit m-8 border border-amber-600 shadow-[0_0_10px_2px_rgba(0,0,0,0.3)]">
              <h2 className="text-center mt-2">{service.title}</h2>
              <div className="my-5">
                <div className="flex flex-col md:flex-row text-xl">
                  <div className="md:w-2/3 px-6">
                    <p className="">{service.desc}</p>
                  </div>
                  <div className="pl-8 mt-4 md:mt-0 md:w-1/3 md:border-l border-amber-600">
                    <ul className="marker:content-['✔'] marker:text-green-600">
                      <li>&nbsp;Some sample text</li>
                      <li>&nbsp;Some sample text</li>
                      <li>&nbsp;Some sample text</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8 px-5 py-2.5 text-center">
                  <NavButton href="/contact" action="Start Now"/>
                </div>
              </div>
              <div className="relative">
                <hr className="translate-x-[25%] w-2/3 border-t mb-3"/>
                <Carousel id={service.id} children={service.elements.map(el =>
                  <ServiceElement key={el.id} id={el.id} element={el}/>
                )}/>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

function ServiceElement(props: { id: string, element: ServiceElement }) {
  const {t} = useTranslation()

  return (
    <div>
      <h2 className="text-center">{props.element.title}</h2>
      <div className="px-14 py-4">
        <div>
          <p className="text-xl">{props.element.desc}</p>
        </div>
        {
          props.element.specs ?
            <div className="mt-4 flex flex-col items-center">
              <div className="flex flex-row">
                <IcTimer className="text-5xl"/>
                <span className="text-3xl">{props.element.specs?.duration}</span>
              </div>
              <div className="flex flex-row">
                <IcCalendar className="text-5xl"/>
                <span className="text-3xl">{props.element.specs?.frequency}</span>
              </div>
              <div className="flex text-7xl">
                <span className="flex" title={t("services.strength")}>
                  {props.element.specs.type.strength}<IcStrength/>
                </span>
                <span className="flex" title={t("services.cardio")}>
                  {props.element.specs.type.cardio}<IcCardio/>
                </span>
              </div>
            </div>
            : undefined
        }
      </div>
    </div>
  )
}