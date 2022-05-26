import Socials from "./Socials";

const Footer: React.FC = () => {
  return (
    <footer className="container mx-auto lg:px-24 xl:px-48 text-dark">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <section>
          <iframe loading="lazy" src="https://buidlerstribe.substack.com/embed" width="480" height="320" style={{ border: "1px solid rgb(238, 238, 238)", background: "inherit", maxWidth: "100%", maxHeight: "235px", }} frameBorder="0" scrolling="no"></iframe>
        </section>
        <section className="text-center sm:text-right flex flex-col justify-between gap-16 sm:mr-16 mt-12">
          <div>
            <h1 className="text-xl font-bold">Startup/Investor form</h1>
            <p>Get feedback from someone at BuidlersTribe</p>
            <a href="https://app.buidlerstribe.com" className="underline">Click here</a>
          </div>
          <Socials />
        </section>
      </div>
      <p className="text-center p-8">Presentation, Handshake, and Investor icons by <a href="https://www.flaticon.com/authors/good-ware" className="underline">Goodware</a>, <a href="https://www.flaticon.com/authors/smashicons" className="underline">Smashicons</a>, and <a href="https://www.flaticon.com/authors/ultimatearm" className="underline">Ultimatearm</a> on <a href="https://www.flaticon.com/" className="underline">Flaticon</a></p>
    </footer>
  )
}

export default Footer;