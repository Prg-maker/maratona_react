import {useFonts,   Roboto_400Regular , Roboto_700Bold} from '@expo-google-fonts/roboto'
import {NativeBaseProvider , StatusBar} from 'native-base'

import {THEME}  from './src/styles/theme'

import {Loading} from './src/components/Loading'

import { SingIn } from './src/screens/SingIn';
import { Home } from './src/screens/Home';
import { Register } from './src/screens/Register';
import { Details } from './src/screens/Details';


export default function App() {

  const [fontsLoading] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })

  return (

    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor="transparent"
        translucent
      />

     { fontsLoading?  <Details/> : <Loading/>}

    </NativeBaseProvider>

  );
}

