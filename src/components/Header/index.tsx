import { View, Text, Image } from 'react-native'
import { CaretLeft } from 'phosphor-react-native'

import logoImg from '@assets/Logo.png'
import * as S from './styles'
interface Props {
  showBackButton?: boolean
}
export function Header({ showBackButton }: Props) {
  return (
    <S.Container>
      {showBackButton && (
        <S.BackButton>
          <CaretLeft size={32} color="#fff" />
        </S.BackButton>
      )}
      <Image source={logoImg} />
    </S.Container>
  )
}
