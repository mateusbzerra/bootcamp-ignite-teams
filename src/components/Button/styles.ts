import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'
import { ButtonVariants } from './'

interface Props {
  variant: 'primary' | 'danger'
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
  ${({ theme }) => css`
    text-align: center;
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`
