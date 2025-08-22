import { Container, Content } from "./styles";

function Itens(){
    const categories = [
        {
            title: "Nossos produtos",
            items: ["Tênis", "Roupas", "Acessórios"]
        },
        {
            title: "Futebol",
            items: ["Chuteira Society", "Chuteira Futsal", "Chuteira"]
        },
        {
            title: "Academia e treino",
            items: ["Tênis de academia", "Roupas de academia", "Tênis feminino academia"]
        },
        {
            title: "Corrida",
            items: ["Tênis de corrida", "Tênis para corrida feminino", "Tênis masculino de corrida"]
        }
    ];

    return(
        <Container>
            {categories.map((category, index) => (
                <Content key={index}>
                    <h4>{category.title}</h4>
                    <ul>
                        {category.items.map((item, itemIndex) => (
                            <li key={itemIndex}>{item}</li>
                        ))}
                    </ul>
                </Content>
            ))}
        </Container>
    );
}

export default Itens;