import CompanyLinks from "./CompanyLinks";
import Socials from "./Socials";

const Footer: React.FC = () => {
  return (
    <footer className="container mx-auto lg:px-24 xl:px-48 text-dark">
      <div className="flex flex-col lg:flex-row justify-between items-top gap-x-4">
        <section className="text-center lg:text-left flex flex-col justify-between mt-12">
          <div>
            <h1 className="text-xl font-bold">Startup/Investor form</h1>
            <p className="text-md mt-2">Get feedback from someone at BuidlersTribe</p>
            <a href="https://app.buidlerstribe.com" className="underline">Click here</a>
          </div>
          <div className="lg:block hidden">
            <Socials />
          </div>
        </section>
        <section className="text-center lg:text-left mt-2 sm:mt-12">
          <h2 className="text-xl font-bold">Company</h2>
          <CompanyLinks />
        </section>
        <section className="mx-auto lg:mx-2">
          <iframe loading="lazy" src="https://buidlerstribe.substack.com/embed" width="480" height="320" style={{ border: "1px solid rgb(238, 238, 238)", background: "inherit", maxWidth: "100%", maxHeight: "235px", }} frameBorder="0" scrolling="no"></iframe>
        </section>
      </div>
      <div className="block lg:hidden mt-4">
        <Socials />
      </div>
      <p className="text-center p-8">Presentation, Handshake, and Investor icons by <a href="https://www.flaticon.com/authors/good-ware" className="underline">Goodware</a>, <a href="https://www.flaticon.com/authors/smashicons" className="underline">Smashicons</a>, and <a href="https://www.flaticon.com/authors/ultimatearm" className="underline">Ultimatearm</a> on <a href="https://www.flaticon.com/" className="underline">Flaticon</a></p>
    </footer>
  )
}

export default Footer;