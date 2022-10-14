import { useState } from "react";
import auth from '@react-native-firebase/auth'
import {Alert} from 'react-native'

import { VStack , Heading, Icon , useTheme} from "native-base";
import Logo from '../assets/logo_primary.svg'

import { Input } from "../components/Input";
import {Envelope, Key} from 'phosphor-react-native'
import { Button } from "../components/Button";

export function SingIn(){

  const {colors} = useTheme()

  const [email ,setEmail] = useState('')
  const [ password ,setPassword] = useState('')

  function handleSingIn(){
    if(!email || !password){
      return Alert.alert('Entrar', 'Informe e-mail e senha')
    }


  }

  return(
    <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>

      <Logo/>

      <Heading color='gray.100' fontSize="xl" mt={20} mb={6}>
        Acesse sua conta 
      </Heading>

      <Input 
        placeholder="E-mail"
        mb={4}
        InputLeftElement={<Icon ml={4} as={<Envelope color={colors.gray[300]}/>}/>}
        onChangeText={setEmail}
      />
      <Input 
        mb={8}
        placeholder="Senha"
        InputLeftElement={<Icon ml={4} as={<Key color={colors.gray[300]}/>}/>}
        secureTextEntry
        onChangeText={setPassword}
      />

      <Button
        title="Entrar"
        w='full'
        onPress={handleSingIn}
      />

    </VStack>
  )
}