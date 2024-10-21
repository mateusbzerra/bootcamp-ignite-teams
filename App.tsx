import { ThemeProvider } from 'styled-components'
import theme from './src/theme'
import { Home } from '@screens/Home'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import { Loading } from '@components/Loading'
import { StatusBar } from 'react-native'

import { Routes } from 'src/routes/app.routes'

export default function App() {
  const [isFontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {isFontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  )
}
