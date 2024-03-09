import {useState} from "react";

export function ViewToggleButton(props: { onClick: () => void }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(isOpen => !isOpen)
    props.onClick()
  }

  return (
    <button onClick={handleClick} className={`relative border-0 p-0 h-[25px] w-[25px]`} type="button">
      <span className={"block rounded-[2px] h-[2px] w-[25px] bg-black transition-all duration-200 ease-in-out translate-y-1/2 " +
          `${isOpen ? "rotate-0" : "-rotate-90"}`}/>
      <span className="block rounded-[2px] h-[2px] w-[25px] bg-black -translate-y-1/2"/>
    </button>
  )

}