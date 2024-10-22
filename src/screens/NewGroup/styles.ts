import { Button } from '@components/Button'
import { TouchableOpacityProps } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 0px 24px 24px;
`

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`

export const StyledButton = styled(Button)<TouchableOpacityProps>`
  margin-top: 16px;
  ${({ disabled, theme }) =>
    disabled &&
    css`
      opacity: 0.2;
    `}
`
