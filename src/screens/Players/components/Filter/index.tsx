import { View, Text, TouchableOpacityProps } from 'react-native'
import React from 'react'

interface Props extends TouchableOpacityProps {
  isActive: boolean
  label: string
}

import * as S from './styles'

export const Filter = ({ isActive = false, label, ...props }: Props) => {
  return (
    <S.Container isActive={isActive} {...props}>
      <S.Label>{label}</S.Label>
    </S.Container>
  )
}
