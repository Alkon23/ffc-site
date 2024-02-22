type HeaderProps = { title: string, subtitle: string }

export default function HeaderSmall(props: HeaderProps) {

  return (
    <header>
        <div className="bg-concrete bg-cover bg-no-repeat bg-center h-[calc(100vh/2.2)] relative">
          <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center">
            <p className="font-anton tracking-wide uppercase select-none text-8xl text-white relative w-full z-0 ml-40 mt-5">
              {props.title}
              <span className="text-[6.55rem] font-extrabold text-stroke-white opacity-90 absolute -top-14 left-16 -z-10 scale-y-[1.3]">
                {props.subtitle}
              </span>
            </p>
          </div>
        </div>
    </header>
  )

}