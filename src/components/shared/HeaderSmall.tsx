type HeaderProps = { title: string }

export default function HeaderSmall(props: HeaderProps) {

  return (
    <header>
        <div className="bg-concrete bg-cover bg-no-repeat bg-center h-[calc(100vh/2.5)] relative">
          <h1 className="font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{props.title}</h1>
        </div>
    </header>
  )

}