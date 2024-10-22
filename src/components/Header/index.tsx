import { View, Text, Image } from 'react-native'
import { CaretLeft } from 'phosphor-react-native'

import logoImg from '@assets/Logo.png'
import * as S from './styles'
import { useNavigation } from '@react-navigation/native'
interface Props {
  showBackButton?: boolean
}
export function Header({ showBackButton }: Props) {
  const navigation = useNavigation()

  const goToHomeScreen = () => {
    navigation.navigate('Home')
  }

  return (
    <S.Container>
      {showBackButton && (
        <S.BackButton onPress={goToHomeScreen}>
          <CaretLeft size={32} color="#fff" />
        </S.BackButton>
      )}
      <Image source={logoImg} />
    </S.Container>
  )
}
