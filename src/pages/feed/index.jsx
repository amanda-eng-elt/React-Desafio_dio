import {Link} from 'react-router-dom'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import {Card} from '../../components/Card'
import {UserInfo} from '../../components/UserInfo'

import bannerImage from '../../assets/Banner.png'

import {Container,Title,Column,TitleHighlight} from './styles';

const Feed= () => {
    return(
        <>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feeds</Title>
                <Card />
                <Card />
                
                
            </Column>
            <Column flex={1}>
                <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
                <UserInfo percentual={80} nome = "Pablo Henrique" image = "https://avatars.githubusercontent.com/u/45184516?v=4" />
                <UserInfo percentual={30} nome = "Pablo Henrique" image = "https://avatars.githubusercontent.com/u/45184516?v=4" />
                <UserInfo percentual={15} nome = "Pablo Henrique" image = "https://avatars.githubusercontent.com/u/45184516?v=4" />
                <UserInfo percentual={29} nome = "Pablo Henrique" image = "https://avatars.githubusercontent.com/u/45184516?v=4" />
                <UserInfo percentual={70} nome = "Pablo Henrique" image = "https://avatars.githubusercontent.com/u/45184516?v=4" />
                <UserInfo percentual={79} nome = "Pablo Henrique" image = "https://avatars.githubusercontent.com/u/45184516?v=4" />
                <UserInfo percentual={69} nome = "Pablo Henrique" image = "https://avatars.githubusercontent.com/u/45184516?v=4" />
                <UserInfo percentual={99} nome = "Pablo Henrique" image = "https://avatars.githubusercontent.com/u/45184516?v=4" />
                <UserInfo percentual={8} nome = "Pablo Henrique" image = "https://avatars.githubusercontent.com/u/45184516?v=4" />
        
            </Column>
        </Container>
        </>
    )

}

export { Feed}