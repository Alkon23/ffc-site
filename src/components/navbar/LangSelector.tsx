import {useTranslation} from "react-i18next";
import {useState} from "react";
import {IcEng, IcEsp, IcEus} from "../shared/Icons.tsx";

export default function LangSelector() {
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