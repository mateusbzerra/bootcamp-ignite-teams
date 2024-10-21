import styled, { css } from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`
export const Content = styled.View`
  flex: 1;
  padding: 24px;
`
export const InputWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  justify-content: center;
  border-radius: 6px;
`
export const HeadersList = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 32px 0 12px;
`
export const NumberOfPlayers = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`
