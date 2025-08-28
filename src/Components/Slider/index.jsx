import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Container, Img, CategoryWrapper } from "./styles";
// Importa os estilos do Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

//import dos tenis
import tenis1 from '../../assets/tenis/tenis1.png';
import tenis2 from '../../assets/tenis/tenis2.png';
import tenis3 from '../../assets/tenis/tenis3.png';
import tenis4 from '../../assets/tenis/tenis4.png';
import tenis5 from '../../assets/tenis/tenis5.png';
import tenis6 from '../../assets/tenis/tenis6.png';
import tenis7 from '../../assets/tenis/tenis7.png';
import tenis8 from '../../assets/tenis/tenis8.png';
import tenis9 from '../../assets/tenis/tenis9.png';
import tenis10 from '../../assets/tenis/tenis10.png';

//import das chuteiras
import chuteira1 from '../../assets/chuteiras/chute1.avif'
import chuteira2 from '../../assets/chuteiras/chute2.avif'
import chuteira3 from '../../assets/chuteiras/chute3.avif'
import chuteira4 from '../../assets/chuteiras/chute4.avif'
import chuteira5 from '../../assets/chuteiras/chute5.avif'
import chuteira6 from '../../assets/chuteiras/chute6.avif'
import chuteira7 from '../../assets/chuteiras/chute7.avif'
import chuteira8 from '../../assets/chuteiras/chute8.avif'
import chuteira9 from '../../assets/chuteiras/chute9.avif'
import chuteira10 from '../../assets/chuteiras/chute10.avif'

function SliderSwiperOrganizado() {
    const categorias = [
        {
            titulo: "Tênis",
            imagens: [tenis1, tenis2, tenis3, tenis4, tenis5, tenis6, tenis7, tenis8, tenis9, tenis10]
        },
        {
            titulo: "Chuteiras", 
            imagens: [chuteira1, chuteira2, chuteira3, chuteira4, chuteira5, chuteira6, chuteira7, chuteira8, chuteira9, chuteira10]
        }
    ];

    // Configuração padrão do Swiper
    const swiperConfig = {
        modules: [Navigation, Pagination, Scrollbar, A11y],
        spaceBetween: 5,
        slidesPerView: 5,
        scrollbar: { draggable: true }
    };

    return (
        <Container>
            {categorias.map((categoria, categoriaIndex) => (
                <CategoryWrapper key={categoriaIndex}>
                    <h2>{categoria.titulo}</h2>
                    <Swiper {...swiperConfig}>
                        {categoria.imagens.map((image, imageIndex) => (
                            <SwiperSlide key={imageIndex}>
                                <Img 
                                    src={image} 
                                    alt={`${categoria.titulo} ${imageIndex + 1}`} 
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </CategoryWrapper>
            ))}
        </Container>
    );
}

export default SliderSwiperOrganizado
