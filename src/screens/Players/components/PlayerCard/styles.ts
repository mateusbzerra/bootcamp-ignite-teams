import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  height: 56px;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
  margin-bottom: 16px;
  padding-left: 16px;
`

export const PlayerName = styled.Text`
  flex: 1;
  color: ${({ theme }) => theme.COLORS.WHITE};
  margin-left: 8px;
`
