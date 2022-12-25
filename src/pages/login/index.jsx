import {useNavigate} from 'react-router-dom'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input} from '../../components/Input'
import { MdEmail, MdLock}  from 'react-icons/md'
import { useForm } from "react-hook-form";

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { api } from '../../services/api'

import {Column,Container,CriarText,EsqueciText,Row,SubtitleLogin,Title,TitleLogin,Wraper} from './styles';

const schema = yup.object({
    email: yup.string().email("Email invalido").required('Campo Obrigatorio'),
    password : yup.string().min(3,'No minimo 3 Caracters').required('Campo Obrigatorio'),
  }).required();


const Login = () => {

    const { control, handleSubmit,formState: { errors} } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',    });

    

    const onSubmit = async formData => {

        try {
            
            const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
            if (data.length === 1) {
                navigate('/feed')
            } else {
                alert('Usuario não encontrado, tente novamente')
            }

        } catch{
            alert('Houve um erro, tente novamente.')
            
        }

    };

    const navigate = useNavigate();

   

    return(
        <>
        <Header/>
        <Container>
                <Column>
                    <Title>
                    A plataforma para você aprender com experts,
                     dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                    </Title>                           
                </Column>
                <Column>    
                    <Wraper>
                        <TitleLogin>Faça Seu Cadastro</TitleLogin>
                        <SubtitleLogin>Faça seu Login e Make the chage._</SubtitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <Input name="email" errorMenssege={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail/>}/>
                            <Input name="password" errorMenssege={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock/>}/>
                            <Button title="Entrar" variant='secondary'  type="submit"/>
                        </form>
                        <Row>
                            <EsqueciText> Esqueci Minha Senha</EsqueciText>
                            <CriarText> Criar Conta</CriarText>
                        </Row>
                    </Wraper>  
                                    
                </Column>
        </Container>
        </>
    )

}

export { Login }