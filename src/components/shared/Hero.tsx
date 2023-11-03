import NavButton from "./NavButton.tsx";

type HeroProps = {
  id: string, title: string, action: string, href: string,
  background: string, img: string, reverse: boolean, desc: string
}

export function HeroBackground(props: HeroProps) {
  return (
    <section id={props.id}>
      <div id={props.id + "-img"} className={props.background + " px-8 py-16"}>
        <div id={props.id + "-content"} className="text-center w-full">
          <h2 className="font-bold">{props.title}</h2>

          <div className="mb-8 mt-4 ">
            <p>{props.desc}</p>
          </div>

          <div>
            <NavButton color="border-white text-white" href={props.href} action={props.action}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export function HeroImage(props: HeroProps) {
  return (
    <section id={props.id} className={props.background}>
      <div className={"flex items-center w-full flex-col " + (props.reverse ? "md:flex-row-reverse" : "md:flex-row")}>
        <div id={props.id + "-content"} className="text-black text-center w-full pt-4 md:pt-0">
          <div className="flex flex-col items-center">

            <h2 className="font-bold">{props.title}</h2>

            <div className="mb-8 mt-4 w-[80%]">
              <p>{props.desc}</p>
            </div>

            <div className="px-5 py-2.5">
              <NavButton href={props.href} action={props.action}/>
            </div>
          </div>
        </div>

        <div id={props.id + "-img"} className="w-1/2 m-4 md:w-auto md:m-0">
          <img src={props.img} alt={props.title}/>
        </div>
      </div>
    </section>
  )
}