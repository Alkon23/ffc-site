
export function ViewToggleButton(props: { onClick: () => void, isOpen: boolean }) {

  return (
    <button onClick={props.onClick} className={`relative border-0 p-0 h-[25px] w-[25px]`} type="button">
      <span className={"block rounded-[2px] h-[2px] w-[25px] bg-black transition-all duration-200 ease-in-out translate-y-1/2 " +
          `${props.isOpen ? "rotate-0" : "-rotate-90"}`}/>
      <span className="block rounded-[2px] h-[2px] w-[25px] bg-black transition-all duration-300 ease-in-out -translate-y-1/2"/>
    </button>
  )

}