import { View, Text, TouchableOpacityProps } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { useTheme } from 'styled-components/native'

interface Props extends TouchableOpacityProps {
  variant: 'success' | 'danger'
  iconName: keyof typeof MaterialIcons.glyphMap
}

import * as S from './styles'

export const ButtonIcon = ({ variant, iconName, ...props }: Props) => {
  const { COLORS } = useTheme()

  const isDangerVariant = variant === 'danger'

  const iconColor = isDangerVariant ? COLORS.RED : COLORS.GREEN_700

  return (
    <S.Container {...props}>
      <MaterialIcons name={iconName} size={24} color={iconColor} />
    </S.Container>
  )
}
