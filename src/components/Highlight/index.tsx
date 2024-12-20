import * as S from './styles'

interface Props {
  title: string
  subtitle: string
}

export const Highlight = ({ title, subtitle }: Props) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
    </S.Container>
  )
}
