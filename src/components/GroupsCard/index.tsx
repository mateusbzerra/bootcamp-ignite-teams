import { TouchableOpacityProps } from 'react-native'
import { UsersThree } from 'phosphor-react-native'

import * as S from './styles'
import { useTheme } from 'styled-components/native'

interface Props extends TouchableOpacityProps {
  title: string
}

export const GroupsCard = ({ title, ...props }: Props) => {
  const { COLORS } = useTheme()
  return (
    <S.Container {...props}>
      <UsersThree weight="fill" size={32} color={COLORS.GREEN_700} />
      <S.Title>{title}</S.Title>
    </S.Container>
  )
}
