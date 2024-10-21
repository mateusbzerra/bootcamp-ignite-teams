import { View, Text } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import * as S from './styles'
import { useTheme } from 'styled-components/native'
import { ButtonIcon } from '@components/ButtonIcon'

interface Props {
  name: string
  onDeletePlayer?: () => void
}

export const PlayerCard = ({ name, onDeletePlayer }: Props) => {
  const { COLORS } = useTheme()
  return (
    <S.Container>
      <MaterialIcons name="person" size={24} color={COLORS.GRAY_200} />
      <S.PlayerName>{name}</S.PlayerName>
      <ButtonIcon variant="danger" iconName="close" onPress={onDeletePlayer} />
    </S.Container>
  )
}
