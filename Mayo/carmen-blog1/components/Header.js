import { Navbar,Nav,Container } from 'react-bootstrap'
import Link from 'next/link';
import {useRouter} from 'next/router';

function Header({navigation}) {
  
  const router = useRouter();



  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
   <Container>
   <Link href="/"  passHref><Navbar.Brand><span class="nav-title">Carmen</span> <span class="nav-sub">Noticias</span></Navbar.Brand></Link><Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto"></Nav>
    <Nav>
     
        <Link href="/" passHref><Nav.Link ><span className="nav-item">Noticias</span></Nav.Link></Link>
        <Link href="/contact" passHref><Nav.Link ><span className="nav-item">Contacto</span></Nav.Link></Link>
        <Link href="/about" passHref><Nav.Link ><span className="nav-item">Acerca de</span></Nav.Link></Link>
     
   </Nav>
  </Navbar.Collapse>
   </Container>
</Navbar>

  )
}



export default Header;