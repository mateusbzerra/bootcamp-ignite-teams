import { TouchableOpacityProps } from 'react-native'
import { UsersThree } from 'phosphor-react-native'

import theme from 'src/theme'
import * as S from './styles'

interface Props extends TouchableOpacityProps {
  title: string
}

export const GroupsCard = ({ title, ...props }: Props) => {
  return (
    <S.Container {...props}>
      <UsersThree weight="fill" size={32} color={theme.COLORS.GREEN_700} />
      <S.Title>{title}</S.Title>
    </S.Container>
  )
}
