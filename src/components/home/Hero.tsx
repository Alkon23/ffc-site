import LinkButton from "../shared/LinkButton.tsx";

type HeroProps = {
  id: string, title: string, action: string, href: string,
  background: string, img?: string, reverse?: boolean, desc: string
}

export function HeroBackground(props: HeroProps) {
  return (
    <section id={props.id}>
      <div id={props.id + "-img"} className={props.background + " px-8 py-16"}>
        <div id={props.id + "-content"} className="text-center w-full">
          <h2>{props.title}</h2>

          <div className="mb-8 mt-4 ">
            <p className="font-montserrat">{props.desc}</p>
          </div>

          <div>
            <LinkButton color="border-white text-white" href={props.href} action={props.action}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export function HeroImage(props: HeroProps) {
  return (
    <section id={props.id} className={`${props.background} w-full md:h-[45vh] relative overflow-hidden`}>
      <div className={`w-full h-full md:absolute ${props.reverse ? 'md:left-[100%]' : 'md:-left-[100%]'} ` +
        "transition-all ease-out duration-[1250ms] slide-hero"}>

        <div className={"flex items-center w-full h-full flex-col " +
          (props.reverse ? "md:flex-row-reverse" : "md:flex-row")}>
          <div id={props.id + "-content"} className="text-black text-center w-full pt-4 md:pt-0">
            <div className="flex flex-col items-center">

              <h2>{props.title}</h2>

              <div className="mb-8 mt-4 w-[80%]">
                <p className="font-montserrat">{props.desc}</p>
              </div>

              <div className="px-5 py-2.5">
                <LinkButton href={props.href} action={props.action}/>
              </div>
            </div>
          </div>

          <div id={props.id + "-img"} className="h-full m-4 md:m-0">
            <img src={props.img} alt={props.title} className="md:max-w-none h-full aspect-square"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export function HeroBoxes(props: { boxes: { key: string, title: string, desc: string }[] }) {
  return (
    <section className="w-full flex bg-white text-black p-28 relative">
      {props.boxes.map(box => (
        <div key={box.key} className="bg-transparent m-8 p-8 text-center border-2 border-primary-400 shadow-black shadow-2xl]">
          <h2>{box.title}</h2>
          <div className="mt-6 mb-2">
            <p className="font-montserrat">{box.desc}</p>
          </div>
        </div>
      ))}
      {/*<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10*/}
      {/*font-anton font-extrabold text-[14rem] text-stroke-white opacity-20">*/}
      {/*  <span>S•V•F</span>*/}
      {/*</div>*/}
    </section>
  )
}