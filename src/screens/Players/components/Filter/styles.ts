import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

export interface FilterStyleProps {
  isActive: boolean
}

export const Container = styled(TouchableOpacity)<FilterStyleProps>`
  ${({ isActive, theme }) =>
    isActive &&
    css`
      border: 1px solid ${theme.COLORS.GREEN_700};
    `}

  border-radius: 4px;
  margin-right: 12px;
  width: 76px;
  height: 38px;

  align-items: center;
  justify-content: center;
`
export const Label = styled.Text`
  ${({ theme }) =>
    css`
      font-family: ${theme.FONT_FAMILY.BOLD};
      font-size: ${theme.FONT_SIZE.SM}px;
      color: ${theme.COLORS.WHITE};
      text-transform: uppercase;
    `}
`
