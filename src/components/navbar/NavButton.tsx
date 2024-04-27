import {NavLink} from "react-router-dom";
import {IcTriangleDown} from "../shared/Icons.tsx";
import {NavHashLink} from "react-router-hash-link";

type ButtonProps = { text: string, href: string, onClick: () => void }

const scrollTo = (e: HTMLElement) => {
  const navbarHeight: number = document.getElementById("navbar-container")?.offsetHeight || 80
  window.scrollTo({top: e.offsetTop - navbarHeight, behavior: "smooth"})
}

export function NavSimpleButton(props: ButtonProps) {

  return (
    <>
      <NavHashLink
        to={props.href}
        scroll={scrollTo}
        onClick={props.onClick}
        className={"after:scale-x-0 after:hover:scale-x-100 " +
          "after:pb-2 after:block after:border-b after:border-white after:transition after:duration-300 " +
          "after:content-[''] font-semibold"
        }>
          <span className="px-3">
            {props.text}
          </span>
      </NavHashLink>
    </>
  )

}

export function NavHighlightButton(props: ButtonProps) {

  return (
    <>
      <NavLink to={props.href} onClick={props.onClick} className="after:pb-2 after:block font-semibold">
          <span className={"px-3 pt-[0.5rem] pb-[calc(0.5rem+2px)] border border-white " +
            "hover:bg-white hover:text-primary-default transition duration-300"}>
            {props.text}
          </span>
      </NavLink>
    </>
  )

}

type MenuButtonProps = { base: ButtonProps, elements: ButtonProps[], isOpaque: boolean }

export function NavMenuButton(props: MenuButtonProps) {
  const {base, elements} = props

  const setDelay = (index: number) => {
    return {animationDelay: `${(index + 1) * 60}ms`}
  }

  return (
    <div className="group">
      <NavHashLink
        to={base.href}
        scroll={scrollTo}
        onClick={base.onClick}
        className={"after:scale-x-0 after:group-hover:scale-x-100 " +
          "after:pb-2 after:block after:border-b after:border-white after:transition after:duration-300 " +
          "after:content-[''] font-semibold"
        }>
        <span className="px-3 inline-flex items-baseline">
            {base.text}&nbsp;<IcTriangleDown className="text-2xs"/>
        </span>
      </NavHashLink>

      {/* Hidden dropdown menu */}
      <div
        className="hidden group-hover:flex flex-col absolute font-semibold pt-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
        {elements.map((element, i) => (
          <div key={element.text} className='transition hover:translate-x-2'>
            <NavLink
              to={base.href.replace('#', '') + element.href}
              onClick={element.onClick}
              style={setDelay(i)}
              className={`${props.isOpaque ? "bg-opacity-100" : "bg-opacity-50"} ` +
                'transition duration-700 bg-primary-default block px-3 first:pt-3 pb-3 opacity-0 group-hover:animate-bounce-left'}>
              <span>{element.text}</span>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  )

}