import React from 'react'
import { FiThumbsUp} from 'react-icons/fi'
import { CardContainer,Content,HasInfo,ImageBackground,PostInfo,UserInfo,UserPicture} from'./styles'

const Card = () =>{
  return (
    <CardContainer>
        <ImageBackground  src="data:image/png;base64,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"/>
        <Content>
            <UserInfo>
                <UserPicture src='https://avatars.githubusercontent.com/u/45184516?v=4'/>
                <div>
                    <h4>Pablo Henrique</h4>
                    <p>hà 8 Minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de HTML e CSS</h4>
                <p> Projeto feitoo curso de html e css no bootcamp dio do 
                    Global avanade ... <strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #Javascript</h4>
                <p>
                    <FiThumbsUp /> 10
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export {Card}
