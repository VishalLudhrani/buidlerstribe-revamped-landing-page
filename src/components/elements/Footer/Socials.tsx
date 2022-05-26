const SOCIALS = [
  {
    icon: (
      <i className="bi-twitter"></i>
    ),
    link: "https://twitter.com/buidlerstribe"
  },
  {
    icon: (
      <i className="bi-linkedin"></i>
    ),
    link: "https://linkedin.com/company/buidlerstribe"
  },
  {
    icon: (
      <i className="bi-youtube"></i>
    ),
    link: "https://www.youtube.com/channel/UCQImRtfkgrbZrJN3Rn3xNfg"
  },
  {
    icon: (
      <i className="bi-discord"></i>
    ),
    link: "https://discord.gg/6fgaefmzQK"
  },
]

const Socials: React.FC = () => {
  return (
    <div className="flex items-center justify-between sm:justify-end text-xl pb-4">
      {SOCIALS.map((item, pos) => (
        <a key={pos} href={item.link} className="mx-3">
          {item.icon}
        </a>
      ))}
    </div>
  )
}

export default Socials;