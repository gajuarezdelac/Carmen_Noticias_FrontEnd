
import { Card,Button,Badge } from 'react-bootstrap'
import Link from 'next/link';

const CardComponent = ({articulos}) => {

  const {API_URL} = process.env;
  
    
    return (
    <Card style={{ width: '24rem', marginTop:"10px",marginBottom:"20px"}}>{articulos.Imagen[0]  && 
    (<Card.Img alt="Imagen de referencia" variant="top" src={API_URL + articulos.Imagen[0].url} />)}
    <Card.Body>
      <Card.Title>{articulos.Titulo}</Card.Title>
      <Card.Subtitle  style={{ marginBottom:"3px"}}>{articulos.Titulo}</Card.Subtitle>
      <Card.Text>
        {articulos.Contenido.toString().substring(0,200)}
      </Card.Text>  
      <Badge variant="success" style={{ marginBottom:"7px"}}>{articulos.Titulo}</Badge><br/>
      <Link href="/noticies/[id]" as={`/noticies/${articulos.id}`} passHref>
      <Button variant="primary">Ver mas</Button>
      </Link>
    </Card.Body>
  </Card>
    );
}

export default CardComponent;

