import Marquee from "react-fast-marquee";

const feedback = [
  {
    pic: "/profile-pic.jpg",
    name: "Kassandra Salamandra",
    comment: "Olee mi niño"
  },
  {
    pic: "/profile-pic.jpg",
    name: "Kevin A. E.",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  " +
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
]

export default function Feedback() {
  // const {t} = useTranslation()

  return (
    <section className="flex flex-col items-center bg-white mb-8">
      <h2 className="text-black">Opiniones de algunos clientes</h2>
      <Marquee className="py-8 h-fit" autoFill={true} pauseOnHover={true}>
        {feedback.map((item) => (
          <UserFeedback feedback={item}/>
        ))}
      </Marquee>
    </section>
  )
}

function UserFeedback(props: {feedback: any}) {
  return (
    <article className="flex flex-col text-black max-w-sm mx-4 p-8 shadow-md font-montserrat">
      <p className="font-semibold text-lg">"<span className="font-normal text-base">{props.feedback.comment}</span>"</p>
      <figure className="flex items-center mt-6">
        <img src={props.feedback.pic} alt={props.feedback.name} className="w-12 rounded-full mr-3"/>
        <figcaption className="font-semibold">{props.feedback.name}</figcaption>
      </figure>
    </article>
  )
}