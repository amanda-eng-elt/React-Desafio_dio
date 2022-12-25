import React from 'react'
import { Controller } from "react-hook-form";

import { IconContainer,InputContainer,InputText,ErroText} from './styles';

const Input =({leftIcon, name,control, errorMenssege, ...rest}) => {
  return (
        <>
          <InputContainer>        
                {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
                <Controller 
                    name={name}
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => <InputText {...field} {...rest}/>}
                />       
          </InputContainer>

          {errorMenssege ?( <ErroText>{errorMenssege} </ErroText>) : null } 
        
        </> 
  )
}

export {Input}