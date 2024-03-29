type HeaderProps = { title: string, subtitle: string }

export default function HeaderSmall(props: HeaderProps) {

  return (
    <header>
        <div className="bg-concrete bg-cover bg-no-repeat bg-center h-[calc(100vh/2.2)] relative">
          <div className="w-full h-full pt-6 absolute top-0 left-0 flex justify-center items-center">
            <p className="font-anton tracking-wide uppercase select-none
            text-5xl md:text-8xl text-white
            relative w-full z-0 ml-10 md:ml-20 lg:ml-40 mt-10 md:mt-5">
              {props.title}
              <span className="font-extrabold text-4xl md:text-[6.55rem]
              text-stroke-white opacity-90 tracking-wider md:tracking-wide
              absolute -top-8 md:-top-14 left-10 md:left-16 -z-10 scale-y-[1.3]">
                {props.subtitle}
              </span>
            </p>
          </div>
        </div>
    </header>
  )

}