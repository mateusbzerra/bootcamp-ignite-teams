import React, { forwardRef } from 'react'
import { TextInput, TextInputProps } from 'react-native'

import * as S from './styles'
import { useTheme } from 'styled-components/native'

export const Input = forwardRef(
  (props: TextInputProps, ref: React.ForwardedRef<TextInput>) => {
    const { COLORS } = useTheme()
    return (
      <S.Input
        ref={ref}
        placeholderTextColor={COLORS.GRAY_300}
        {...props}
      ></S.Input>
    )
  }
)
