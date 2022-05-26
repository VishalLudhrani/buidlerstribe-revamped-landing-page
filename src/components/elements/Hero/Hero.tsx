import { Jumbotron } from "../../UI";

const Hero: React.FC = () => {
  return (
    <section className="text-dark h-[100vh]" style={{ position: 'relative' }}>
      <div className="z-10" style={{ position: 'relative' }}>
        <Jumbotron>
          <>
            <h1 className="font-bold text-3xl md:text-5xl w-4/6 md:w-full lg:w-4/6 xl:w-3/6 mx-auto">
              Get access to the best investors and VCs in Web3
            </h1>
            <p className="md:text-xl mt-4 md:mt-8 md:w-2/6 xl:w-1/6 mx-auto">
              Be a part of a high-trust network of buidlers.
            </p>
            <button className="text-md bg-primary text-light md:text-2xl p-4 px-12 sm:px-18 md:px-24 mt-4 md:mt-8">I want to get in!</button>
          </>
        </Jumbotron>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/logo-vector.svg"
        alt="Logo vector"
        width="auto"
        height="100vh"
        className="mx-auto mt-[-12rem] sm:mt-[-16rem] md:mt-[-22rem] xl:mt-[-20rem] z-0 blur-sm"
        style={{ position: 'relative' }}
      />
    </section>
  );
};

export default Hero;
