import {useFonts,   Roboto_400Regular , Roboto_700Bold} from '@expo-google-fonts/roboto'
import { SingIn } from './src/screens/SingIn';
import {NativeBaseProvider} from 'native-base'
import {THEME}  from './src/styles/theme'
import {Loading} from './src/components/Loading'


export default function App() {

  const [fontsLoading] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })

  return (

    <NativeBaseProvider theme={THEME}>
     { fontsLoading?  <SingIn/> : <Loading/>}
    </NativeBaseProvider>

  );
}

