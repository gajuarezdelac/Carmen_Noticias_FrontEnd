import {useRouter} from 'next/router';
import fetch from 'isomorphic-unfetch';
import { Container,Button } from 'react-bootstrap'

export default function Pagination({articulos,page,numberOfNoticies}) {
   
 const router = useRouter();
 const lastPage = Math.ceil(numberOfNoticies / 3);

  return (
    <Container>
      <ul>
      {articulos.map(articulo =>(
        <li key={articulo.id}>
            <h4>{articulo.Titulo}</h4>
        </li>
      ))}
      
     <button onClick={() => router.push(`/noticies/pagination?page=${page - 1}`)}  disabled={page <= 1} >Previous</button>
     <button onClick={() => router.push(`/noticies/pagination?page=${page + 1}`)} disabled={page >= lastPage}>Next</button>
     </ul>

    </Container>
  )
}

export async function getServerSideProps({ query: {page= 1} }) {
 
  const start = +page === 1 ? 0 : (+page - 1) * 3

  const {API_URL} = process.env;
  

  const numberOfNoticiesResponse = await fetch(`${API_URL}/articulos/count`)
  const numberOfNoticies = await numberOfNoticiesResponse.json()


  const res = await fetch(`${API_URL}/articulos?_limit=3&_start=${start}`);
  const data = await res.json();

  
  return {
    props: {
      articulos: data,
      page: +page,
      numberOfNoticies
    }
  }
}
