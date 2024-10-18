import * as S from './styles'

interface Props {
  message: string
}

export const EmptyListMessage = ({ message }: Props) => {
  return (
    <S.Container>
      <S.Message>{message}</S.Message>
    </S.Container>
  )
}
