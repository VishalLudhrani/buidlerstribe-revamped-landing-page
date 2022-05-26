interface JumbotronProps {
  children: JSX.Element;
}

const Jumbotron: React.FC<JumbotronProps> = ({ children }: JumbotronProps) => {
  return (
    <div className="container mx-auto pt-24 md:pt-32 text-center">
      {children}
    </div>
  )
}

export default Jumbotron;