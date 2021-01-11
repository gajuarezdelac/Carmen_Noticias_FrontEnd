import Footer from 'components/Footer';
import {Button } from 'react-bootstrap'
import Link from 'next/link';


export default function Home({articulos}) {
 
  const {API_URL} = process.env;
  
  return (  
      
     <>
     
     <header class="masthead">
  <div class="container h-100">
    <div class="row h-100 align-items-center">
      <div class="col-12 text-center">
        <h1 class="font-weight-light">Bienvenido a <span className="CarmenEncabeza">Carmen Noticias</span></h1>
        <p class="lead">Las noticias mas recientes de la comunidad  </p>
      </div>
    </div>
  </div>
</header>


     <main class="main">
    <section class="cards">
    <div class="cards">
        {
          articulos.slice(0,3).map(e => (
            <div class="card shadow">
                <div class="img-card">
                    <img src={API_URL + e.Imagen[0].url} alt="" />
                </div>
                <div class="title-card"><h4>{e.Titulo}</h4></div>
                <div class="text-card"><p>
                    {e.Contenido.toString().substring(0,200) + '....'}    
                </p></div>
                <Link href="/noticies/[id]" as={`/noticies/${e.id}`} passHref>
                <Button variant="primary">Ver articulo</Button>
      </Link>
              
            </div>
          ))
        }
    </div>
 </section>

   
 <section class="resume">
        <div class="text-resume">
            <h2>Seamos mas concientes</h2>
                <p>
                    Para poder combatir, solucionar y ganar la batalla ante los problemas
                     ambientales originados por el ser humano, es necesario y fundamental hoy
                      más que nunca, despertar esa conciencia en las sociedades ante la realidad
                       ambiental que está degradando el único hogar como el Planeta Tierra, la salud 
                    y la calidad de vida de toda la humanidad.
                </p>  
        </div>
        <div class="img-resume">
            <img src="https://campeche.s3.amazonaws.com/wp-content/uploads/2018/10/23061235/fotonota-14.jpg" alt="" />
        </div>
     </section>

     <section class="back">
         <div class="contacto">
         <article>

        <h3>Deseas conocer mas</h3>
        <p>Si te gustaria recibir mas información sobre nuevos articulos cada semana, pero sobre todo tener el conocimiento
            para llevar conciencia hacia las demas personas. <strong>ven y unete!</strong>.
        </p>         

        <a href="contact.html" class="btn">Unete</a>
         </article>
        </div>
     </section>
     </main>
     </>
 )
}


export async function getServerSideProps() {
    const {API_URL} = process.env;
    const res = await fetch(`${API_URL}/articulos`);
    const data = await res.json();
  
    return {
      props: {
        articulos: data
      }
    }
  
  }
