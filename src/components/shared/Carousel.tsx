import {ReactElement, useState} from "react";
import {IcArrowNext, IcArrowPrev} from "./Icons.tsx";

type CarouselProps = { id: string, children: ReactElement[] }
export default function Carousel(props: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  const carouselId = `${props.id}-carousel`
  const totalItems = props.children.length

  let maxHeight = 0
  let maxHeightRef: HTMLDivElement | undefined
  const calcMaxHeight = (ref: HTMLDivElement | null) => {
    const height = ref ? ref.clientHeight : 0
    const larger = height > maxHeight

    if (ref && larger) {
      maxHeight = height

      maxHeightRef?.classList.add("hidden")
      maxHeightRef = ref
    } else {
      ref?.classList.add("hidden")
    }
  }

  const onNext = () => {
    toggleButtons()

    let nextIndex = activeIndex
    nextIndex = ++nextIndex >= totalItems ? 0 : nextIndex
    let prevIndex = activeIndex
    prevIndex = --prevIndex < 0 ? totalItems - 1 : prevIndex

    const displayedItem = document.getElementById(buildItemId(activeIndex))
    const nextItem = document.getElementById(buildItemId(nextIndex));
    const prevItem = document.getElementById(buildItemId(prevIndex));

    (async () => {
      displayedItem?.classList.replace("displayed", "changing")
      nextItem?.classList.replace(getActiveStyles(nextIndex, activeIndex), "displayed")

      await new Promise(f => setTimeout(f, 500))

      prevItem?.classList.replace("hidden-left", "hidden-right")
      displayedItem?.classList.replace("changing", "hidden-left")

      setActiveIndex(nextIndex)
      toggleButtons()
    })()
  }

  const onPrev = () => {
    toggleButtons()

    let prevIndex = activeIndex
    prevIndex = --prevIndex < 0 ? totalItems - 1 : prevIndex
    let prevPrevIndex = prevIndex
    prevPrevIndex = --prevPrevIndex < 0 ? totalItems - 1 : prevPrevIndex

    const displayedItem = document.getElementById(buildItemId(activeIndex))
    const prevItem = document.getElementById(buildItemId(prevIndex))
    const prevPrevItem = document.getElementById(buildItemId(prevPrevIndex));

    (async () => {
      displayedItem?.classList.replace("displayed", "changing")
      prevItem?.classList.replace(getActiveStyles(prevIndex, activeIndex), "displayed")

      await new Promise(f => setTimeout(f, 500))

      prevPrevItem?.classList.replace("hidden-right", "hidden-left")
      displayedItem?.classList.replace("changing", "hidden-right")

      setActiveIndex(prevIndex)
      toggleButtons()
    })()
  }

  const toggleButtons = () => {
    const buttons = document.getElementsByClassName(`${carouselId}-button`)
    const n = buttons.length
    for (let i = 0; i < n; i++) {
      buttons[i].classList.toggle("pointer-events-none")
    }
  }

  const getActiveStyles = (index: number, displayedIndex: number) => {
    if (index === 0) {
      return displayedIndex - 1 === index ? "hidden-left" : "hidden-right"
    }
    return displayedIndex + 1 === index ? "hidden-right" : "hidden-left"
  }

  const carouselItemStyles = (index: number) => {
    return index === 0 ? "displayed" : index === totalItems - 1 ? "hidden-left" : "hidden-right"
  }

  const buildItemId = (index: number) => {
    return `${carouselId}-item-${index}`
  }

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="">
        {
          props.children.map((child, i) => (
            <div key={child.props.id} id={buildItemId(i)}
                 className={`${carouselItemStyles(i)} carousel-item`}>{child}</div>
          ))
        }
        {/* Hidden element for auto resizing */}
        {
          props.children.map((child) => (
            <div key={`${child.props.id}-hidden`} ref={ref => calcMaxHeight(ref)}
                 className="static -z-20">{child}</div>
          ))
        }
      </div>
      <button id={`${carouselId}-prevButton`} type="button" onClick={onPrev}
              className={`${carouselId}-button absolute left-0 top-1/2 -translate-y-1/2 px-2 z-10 h-full transition 
                  duration-200 hover:bg-opacity-20 hover:bg-black`}>
        <IcArrowPrev className="text-amber-600 text-4xl"/>
      </button>
      <button id={`${carouselId}-nextButton`} type="button" onClick={onNext}
              className={`${carouselId}-button absolute right-0 top-1/2 -translate-y-1/2 px-2 z-10 h-full transition 
                  duration-200 hover:bg-opacity-20 hover:bg-black`}>
        <IcArrowNext className="text-amber-600 text-4xl"/>
      </button>
    </div>
  )
}