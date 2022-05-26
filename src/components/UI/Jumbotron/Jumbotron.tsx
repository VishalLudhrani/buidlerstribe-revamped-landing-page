interface JumbotronProps {
  children: JSX.Element;
}

const Jumbotron: React.FC<JumbotronProps> = ({ children }: JumbotronProps) => {
  return (
    <div className="container mx-auto pt-32 md:pt-48 text-center">
      {children}
    </div>
  )
}

export default Jumbotron;