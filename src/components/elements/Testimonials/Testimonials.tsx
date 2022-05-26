import TestimonialList from "./TestimonialList";

const Testimonials: React.FC = () => {
  return (
    <section className="px-12 py-24 bg-dark text-light text-center">
      <div className="sm:w-4/6 mx-auto">
        <h2 className="md:text-5xl text-4xl font-bold">Buidler&apos;s Word</h2>
        <p className="md:text-2xl text-md mt-4">Our north star is how much value we can add to a founder. While we work hard on quantifying it, here is what builders have to say about us.</p>
      </div>
      <TestimonialList />
    </section>
  )
}

export default Testimonials;