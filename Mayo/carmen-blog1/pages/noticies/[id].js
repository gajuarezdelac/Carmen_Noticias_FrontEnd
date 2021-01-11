import getConfig from 'next/config';
import { Container,Carousel,CardColumns } from 'react-bootstrap'
import { UserOutlined } from '@ant-design/icons';

const NoticieId = ({articulo}) => {
  
    const {API_URL} = process.env;

const contentStyle = {
    height: '80vh',
    background: '#333',
  };
  
    
    
const imgResponsive = {
    width: '100%',
    height: '100%',
    margin: "0 auto",
  }
    
    return (
      <div className="container-notice">
        <div className="subcontainer-notice">

          <div className="container-title-notice">
          <h1 className="title-notice">{articulo.Titulo}</h1>
          </div>

       
         
             
    <Carousel className="carousel-notice">
    { articulo.Imagen.map(e =>(
     
     <Carousel.Item key={e.id} style={contentStyle}>
        <img style={imgResponsive}
          className="d-block img-notice"
          src={API_URL + e.url}
          alt="First slide"
        />
      </Carousel.Item>
         ))}
    
    </Carousel>
        
    

          <div className="container-description-notice">
          <p dangerouslySetInnerHTML={{ __html: articulo.Contenido}}></p>
          </div>          
        </div>
       
      </div>
    )
}

const {publicRuntimeConfig} = getConfig();

export async function getServerSideProps(context) {

  const {id} = context.query;
  const res = await fetch(`${publicRuntimeConfig.API_URL}/articulos/${id}`);
  const data = await res.json();

    return {
        props: {
            articulo: data
        }
    }
}

export default NoticieId;