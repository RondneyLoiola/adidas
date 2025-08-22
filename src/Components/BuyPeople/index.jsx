import { Box, BoxContent, Container, Title } from "./styles";

// Importar todas as imagens (mais compatível com Vite)
import mujer from '../../assets/pessoas/mujer.png'
import men from '../../assets/pessoas/men.png'
import nina from '../../assets/pessoas/nina.png'
import nino from '../../assets/pessoas/nino.png'
import girl from '../../assets/pessoas/girl.png'
import all from '../../assets/pessoas/all.png'

function BuyPeople() {
    // Mapeamento das imagens com chaves que podem ter espaços
    const images = { 
        "mujer": mujer,
        "men": men, 
        "nina": nina,
        "nino": nino,
        "girl": girl,
        "ver tudo": all  // Exemplo com espaço
    };
    
    // Dados estruturados
    const pessoas = [
        { img: "mujer", label: "Mulher" },
        { img: "men", label: "Homem" },
        { img: "nina", label: "Meninas" },
        { img: "nino", label: "Meninos" },
        { img: "girl", label: "Adolescentes" },
        { img: "ver tudo", label: "Ver tudo" }
    ];

    return (
        <Container>
            <Title>Para quem você está comprando?</Title>
            
            <BoxContent>
                {pessoas.map((pessoa, index) => (
                    <Box key={index}>
                        <img 
                            src={images[pessoa.img]} 
                            alt={`Categoria ${pessoa.label}`} 
                        />
                        <h4>{pessoa.label}</h4>
                    </Box>
                ))}
            </BoxContent>
        </Container>
    );
}

export default BuyPeople;