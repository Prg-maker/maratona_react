import {
  HStack,
  IconButton,
  VStack,
  useTheme,
  Text as NativeBaseText,
  Heading,
  FlatList,
  Center,
} from "native-base";

import { SignOut , ChatTeardropText } from "phosphor-react-native";

import { useState } from "react";
import Logo from "../assets/logo_secondary.svg";
import { Filter } from "../components/Filter";

import { Order , OrderProps } from "../components/Order";
import { Button } from "../components/Button";

import {useNavigation} from '@react-navigation/native'


export function Home() {
  const { colors } = useTheme();

  const [statusSelected , setStatusSelected] = useState<'open' | 'closed'>('open')
  const [orders , setOrders] = useState<OrderProps[]>([
    {
      id:"45", 
      patrimony:"12",
      status:"open",
      when:"20/20/2020"
    }
  ])

  const navigation = useNavigation()
  function handleNewOrder(){
    navigation.navigate('new')
  }

  function handleOpenDetails(orderId:string){
    navigation.navigate('details', {
      orderId
    })
  }

  return (
    <VStack flex={1} pb={6} bg="gray.700">
      <HStack
        w="full"
        justifyContent="space-between"
        alignItems="center"
        bg="gray.600"
        pt={12}
        pb={5}
        px={6}
      >
        <Logo />

        <IconButton icon={<SignOut size={26} color={colors.gray[300]} />} />
      </HStack>

      <VStack flex={1} px={6}>
        <HStack w="full" mt={8} mb={4} justifyContent="space-between" alignItems='center'>
          
          <Heading color='gray.100'>
            Meus Chamados
          </Heading>

          
          <NativeBaseText color="gray.200">
            3
          </NativeBaseText>

        </HStack>


      <HStack space={3} mb={8}>
        <Filter
          type="open"
          title="em andamento"
          onPress={()=> setStatusSelected('open')}
          isActive={statusSelected === 'open'}
        />
        <Filter
          type="closed"
          title="finalizados"
          onPress={()=> setStatusSelected('closed')}
          isActive={statusSelected === 'closed'}
        />
      </HStack>

      <FlatList
        data={orders}
        keyExtractor={item=> item.id}
        renderItem={({item})=> <Order  data={item}  onPress={()=> handleOpenDetails(item.id)}/>}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom:10}}
        ListEmptyComponent={
          <Center>
            <ChatTeardropText color={colors.gray[300]} size={40}/>
            <NativeBaseText color="gray.300" fontSize="xl" mt={6}  textAlign='center'>
              Você ainda não possui {'\n'}
              solicitações {statusSelected === 'open' ? 'em andamento' : 'finalizadas'}
            </NativeBaseText>
          </Center>
        }
      />
      <Button
        title="Nova solicitação"
        onPress={handleNewOrder}
      />
      </VStack>
   
    </VStack>
  );
}
