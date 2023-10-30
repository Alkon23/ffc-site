export default function ColorButton(props: { color?: string, hover?: string, href: string, action: string }) {
  const color = props.color ? props.color : "border-black text-black"
  const hover = props.hover ? props.hover : "hover:bg-amber-600 hover:border-amber-600"

  return (
    <a href={props.href} className={`${color} ${hover} border-2 px-5 py-2.5 font-semibold 
    transition duration-200 hover:text-white focus:ring-4 focus:ring-amber-300`}>
      {props.action}
    </a>
  )
}
