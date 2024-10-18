import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`

export const Content = styled.SafeAreaView`
  flex: 1;
  margin: 12px 24px 0px;
`
