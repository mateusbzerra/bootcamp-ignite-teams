import React from 'react'
import { TextInputProps } from 'react-native'

import * as S from './styles'
import { useTheme } from 'styled-components/native'

interface Props extends TextInputProps {}

export const Input = (props: Props) => {
  const { COLORS } = useTheme()
  return <S.Input placeholderTextColor={COLORS.GRAY_300} {...props}></S.Input>
}
