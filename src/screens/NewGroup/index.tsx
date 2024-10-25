import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import * as S from './styles'
import { UsersThree } from 'phosphor-react-native'
import { useTheme } from 'styled-components/native'

import { ButtonVariants } from '@components/Button'

import { Input } from '@components/Input'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { generateUuid } from '@services/generate-uuid'
import * as groupActions from '@storage/groups.actions'
import { AppError } from '@services/app-error-handler'
import { Alert } from 'react-native'

const ERROR_MESSAGE = 'An error occurred while creating the group'

export const NewGroup = () => {
  const { COLORS } = useTheme()

  const [inputValue, setInputValue] = useState('')

  const navigation = useNavigation()

  const handleCreateNewGroup = async () => {
    const groupId = generateUuid()
    try {
      await groupActions.createNewGroup({ id: groupId, name: inputValue })
      navigation.navigate('Players', { groupName: inputValue, groupId })
    } catch (error) {
      const isCustomAppError = error instanceof AppError

      return Alert.alert(
        'New group',
        isCustomAppError ? error.message : ERROR_MESSAGE
      )
    }
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
          disabled={inputValue.trim().length < 3}
          variant={ButtonVariants.primary}
          onPress={handleCreateNewGroup}
        />
      </S.Content>
    </S.Container>
  )
}
