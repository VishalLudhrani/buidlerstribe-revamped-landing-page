import { FOOTER_COMPANY_LINKS } from "../../../../data";

const CompanyLinks: React.FC = () => {
  return (
    <ul className="list-none mt-2">
      {FOOTER_COMPANY_LINKS.map((item, pos) => (
        <li className="text-dark text-md" key={pos}>
          <a href={item.link}>{item.label}</a>
        </li>
      ))}
    </ul>
  )
}

export default CompanyLinks;