import { Container, Header, InputHeader } from "./style";
import Logo from '../assets/logo.png'
import Icons from "../Components/IconsHeader";
import Slider from "../Components/Slider";
import BuyPeople from "../Components/BuyPeople";
import Popular from "../Components/Popular"
import Itens from "../Components/Itens"

function Home() {
    return (
        <>
            <Container>
                <Header>
                    <img src={Logo} alt="logo-adidas" />
                    <ul>
                        <li className="bold">CALÇADOS</li>
                        <li className="bold">MULHER</li>
                        <li className="bold">HOMEM</li>
                        <li className="bold">INFANTIL</li>
                        <li>ESPORTES</li>
                        <li>MUNDO ADIDAS</li>
                        <li className="bold-red">OUTLET</li>
                    </ul>
                    <InputHeader placeholder="Procurar" />
                    <Icons />
                </Header>
                <BuyPeople />
                <Slider />
                <Popular />
                <Itens />
            </Container>

        </>
    )
}

export default Home