import {NavLink} from "react-router-dom";
import {IcTriangleDown} from "../shared/Icons.tsx";

type ButtonProps = { text: string, href: string }

export function NavSimpleButton(props: ButtonProps) {

  return (
    <>
      <NavLink
        to={props.href}
        className={(state) =>
          (state.isActive ? "" : "after:scale-x-0 after:hover:scale-x-100 ") +
          "after:pb-2 after:block after:border-b after:border-white after:transition after:duration-300 " +
          "after:content-[''] font-medium"
        }>
          <span className="px-3">
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
      <NavLink
        to={base.href}
        className={(state) =>
          (state.isActive ? "" : "after:scale-x-0 after:group-hover:scale-x-100 ") +
          "after:pb-2 after:block after:border-b after:border-white after:transition after:duration-300 " +
          "after:content-[''] font-medium"
        }>
        <span className="px-3 inline-flex items-baseline">
            {base.text}&nbsp;<IcTriangleDown className="text-2xs"/>
        </span>
      </NavLink>

      {/* Hidden dropdown menu */}
      <div className="hidden group-hover:flex flex-col absolute font-medium pt-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
        {elements.map((element, i) => (
          <div key={element.text} className='transition hover:translate-x-2'>
            <NavLink
              to={base.href + element.href}
              style={setDelay(i)}
              className={`${props.isOpaque ? "bg-opacity-100" : "bg-opacity-80 backdrop-blur-sm"} ` +
                'transition duration-700 bg-primary-default block px-3 first:pt-3 pb-3 opacity-0 group-hover:animate-bounce-left'}>
              <span>{element.text}</span>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  )

}