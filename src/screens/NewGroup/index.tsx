import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import * as S from './styles'
import { UsersThree } from 'phosphor-react-native'
import { useTheme } from 'styled-components/native'

import { Button, ButtonVariants } from '@components/Button'
import { SafeAreaView, View } from 'react-native'
import { Input } from '@components/Input'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'

export const NewGroup = () => {
  const { COLORS } = useTheme()

  const [inputValue, setInputValue] = useState('')

  const navigation = useNavigation()

  const openPlayersScreen = () => {
    navigation.navigate('Players', { groupName: inputValue })
  }

  return (
    <S.Container>
      <Header showBackButton />
      <S.Content>
        <UsersThree
          style={{ alignSelf: 'center' }}
          size={56}
          color={COLORS.GREEN_700}
        />
        <Highlight
          title="New Group"
          subtitle="Create a group to add new players"
        />
        <Input
          value={inputValue}
          onChangeText={setInputValue}
          placeholder="Group name"
          autoCorrect={false}
        />
        <S.StyledButton
          label="Create"
          disabled={inputValue.length < 3}
          variant={ButtonVariants.primary}
          onPress={openPlayersScreen}
        />
      </S.Content>
    </S.Container>
  )
}
