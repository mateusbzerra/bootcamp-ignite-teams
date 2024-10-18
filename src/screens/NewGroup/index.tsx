import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import * as S from './styles'
import { UsersThree } from 'phosphor-react-native'
import { useTheme } from 'styled-components/native'

import { Button, ButtonVariants } from '@components/Button'
import { SafeAreaView } from 'react-native'
import { Input } from '@components/Input'

export const NewGroup = () => {
  const { COLORS } = useTheme()
  return (
    <S.Container>
      <SafeAreaView style={{ width: '100%', flex: 1 }}>
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
          <Input placeholder="Group name" />
          <Button label="Create" variant={ButtonVariants.primary} />
        </S.Content>
      </SafeAreaView>
    </S.Container>
  )
}
