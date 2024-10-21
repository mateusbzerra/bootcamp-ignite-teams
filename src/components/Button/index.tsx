import { TouchableOpacityProps } from 'react-native'
import * as S from './styles'

export enum ButtonVariants {
  primary = 'primary',
  secondary = 'secondary',
}

interface Props extends TouchableOpacityProps {
  variant: 'primary' | 'danger'
  label: string
}

export const Button = ({ variant = 'primary', label, ...props }: Props) => {
  return (
    <S.Button variant={variant} {...props}>
      <S.Label>{label}</S.Label>
    </S.Button>
  )
}
