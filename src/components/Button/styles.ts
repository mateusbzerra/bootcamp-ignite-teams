import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { ButtonVariants } from './'

interface Props {
  variant: ButtonVariants
}

export const Button = styled(TouchableOpacity)<Props>`
  width: 100%;
  height: 100%;
  max-height: 56px;
  background-color: ${({ theme, variant }) =>
    variant === 'primary' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};
  justify-content: center;
  align-items: center;
  border-radius: 6px;
`

export const Label = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`
