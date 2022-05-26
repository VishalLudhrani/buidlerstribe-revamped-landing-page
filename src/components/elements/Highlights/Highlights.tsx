import { HIGHLIGHTS } from "../../../../data";

const Highlights: React.FC = () => {
  return (
    <div className="bg-primary text-center text-light mt-[-0.5rem] z-20 relative">
      <div className="p-8 container mx-auto">
        <h1 className="text-3xl font-bold md:text-5xl">Highlights</h1>
      </div>
      <ul className="flex flex-col md:flex-row list-none pb-8 mx-16 lg:w-4/6 lg:mx-auto justify-between sm:mt-8 gap-16">
        {HIGHLIGHTS.map((item, pos) => (
          <li className="flex flex-col" key={pos}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.imgUrl} alt={item.label} width="192px" height="192px" className="mx-auto" />
            <h3 className="text-xl font-bold mt-2">{item.label}</h3>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Highlights;