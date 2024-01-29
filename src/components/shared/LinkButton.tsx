import {Link} from "react-router-dom";

export default function LinkButton(props: { color?: string, hover?: string, href: string, action: string }) {
  const color = props.color ? props.color : "border-black text-black"
  const hover = props.hover ? props.hover : "hover:bg-primary-default hover:border-primary-default"

  return (
    <Link to={props.href} className={`${color} ${hover} border-2 px-5 py-2.5 font-semibold 
    transition duration-200 hover:text-white focus:ring-4 focus:ring-primary-300`}>
      {props.action}
    </Link>
  )
}
