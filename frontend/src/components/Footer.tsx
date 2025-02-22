const Footer = () => {
  const anoAtual = new Date().getFullYear();

  return (
    <footer>
      <p>By Lucas Lima e Mateus Neri</p>
      <p>&copy; {anoAtual} | Todos os os direitos reservados.</p>
    </footer>
  )
}

export default Footer;