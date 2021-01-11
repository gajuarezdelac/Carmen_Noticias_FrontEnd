import {useRouter} from 'next/router';
import fetch from 'isomorphic-unfetch';
import { Container,Button,Col,Form,Carousel,CardColumns } from 'react-bootstrap'
import {useState} from 'react';
import CardComponent from 'components/Card';

export default function About({articulos}) {

  const router = useRouter();
  console.log(articulos)
  const [searchTerm,setSearchTerm] = useState('');
  const {API_URL} = process.env;

  
  const contentStyle = {
    height: '80vh',
    background: '#333',
  };
  
  const imgResponsive = {
    width: '100%',
    height: 'auto',
    margin: "0 auto",
  }
  


  return (
    <div>
     <Carousel>
    { articulos.slice(0,3).map(e =>(
     
     <Carousel.Item style={contentStyle}>
       {e.Imagen[0].url  &&
        <img style={imgResponsive}
        className="d-block"
        src={API_URL + e.Imagen[0].url}
        alt="First slide"
      />
       } 
         <Carousel.Caption>
      <h2 className="text-white">{e.Titulo}</h2>
      <h5 className="text-white">{e.Contenido.toString().substring(0,400) + '....'}
      </h5>
    </Carousel.Caption>
      </Carousel.Item>
         ))}
    </Carousel>
   
    <Col xs={12} md={8} className="form-input">
    <Form.Control size="lg" type="text" placeholder="Buscador de noticias" onChange={event => {setSearchTerm(event.target.value)}}/>
    </Col>

      
<CardColumns style={{marginBottom:"150px"}}>
{articulos.filter((val) => {
                    if(searchTerm == ''){
                        return val;
                    }else if(val.Titulo.toLowerCase().includes(searchTerm.toLowerCase())){
                       return val;
                    }
                }).map(articulo =>(
      <Col key={articulo.id} xs={{ span: 24}} sm={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
        <CardComponent articulos={articulo}/>
      </Col>
      ))}
</CardColumns>




    </div>
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
