const Footer = () => {
  const anoAtual = new Date().getFullYear();

  return (
    <footer>
      <p>Desenvolvido por alunos para alunos 🤟</p>
      <p>&copy; {anoAtual} | Todos os os direitos reservados.</p>
    </footer>
  )
}

export default Footer;