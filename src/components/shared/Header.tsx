export default function Header() {

  return (
    <header id="header-container">
      <div id="header-image" className="bg-concrete bg-cover bg-no-repeat bg-center h-screen">
        <div id="header-text" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="font-bungee">Functional Fitness Center</h1>
          <hr className="w-64 h-1 mt-6 mb-4 mx-auto bg-amber-600 border-0 rounded"/>
          <h3 className="text-4xl">Building Functional Humans</h3>
        </div>
      </div>
    </header>
  )
}