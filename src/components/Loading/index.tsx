import { ActivityIndicator } from 'react-native'

import * as S from './styles'

export const Loading = () => {
  return (
    <S.Container>
      <ActivityIndicator color="white" size="large" />
    </S.Container>
  )
}
