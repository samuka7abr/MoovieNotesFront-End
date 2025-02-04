import { Container } from "./styles";
import { Header } from '../../components/Header'
import { Moovie } from "../../components/Moovie";
import { Button } from '../../components/Button'

export function Home(){
   return(
    <Container>
        <Header />
        <div>
            <h1>Meus Filmes</h1>
            <Button className="button"to="/new" title="Adicionar Filme"/>
        </div>
        <main>
            
            <Moovie  to="/details/${5}"
                data={{
                title: 'Django Libre',
                rating: 4,
                description: 'Django, um escravo liberto por um caçador de recompensas chamado Dr. King Schultz, embarca em uma jornada de vingança e redenção no sul dos Estados Unidos, pouco antes da Guerra Civil. Schultz busca capturar os irmãos Brittle...',
                tags: [
                    { id: '1', name: 'Ação' },
                    { id: '2', name: 'História' },
                    { id: '3', name: 'Faroeste' }
                    ]
                }}
            />
            <Moovie
                data={{
                title: 'Django Libre',
                rating: 4,
                description: 'Django, um escravo liberto por um caçador de recompensas chamado Dr. King Schultz, embarca em uma jornada de vingança e redenção no sul dos Estados Unidos, pouco antes da Guerra Civil. Schultz busca capturar os irmãos Brittle...',
                tags: [
                    { id: '1', name: 'Ação' },
                    { id: '2', name: 'História' },
                    { id: '3', name: 'Faroeste' }
                    ]
                }}
            />
        </main>
    </Container>
   ) 
}