export default function Header() {

  return (
    <header id="header-container">
      <div id="header-image" className="bg-concrete bg-cover bg-no-repeat bg-center h-screen">
        <div id="header-text" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          {/*<h1 className="font-horizon-outlined uppercase green-glow text-9xl/[1.5em]">Building Functional Humans</h1>*/}
            <h1 className="text-[7vw]/[1.5em] font-archivo-black uppercase green-glow tracking-[-0.02em] transform scale-x-[1.4]">
                Building Functional Humans
            </h1>
          {/*<h1 className="font-bungee">Functional Fitness Center</h1>*/}
          {/*<hr className="w-64 h-1 mt-6 mb-4 mx-auto bg-primary-default border-0 rounded"/>*/}
          {/*<h3 className="text-3xl md:text-4xl">Building Functional Humans</h3>*/}
        </div>
      </div>
    </header>
  )
}