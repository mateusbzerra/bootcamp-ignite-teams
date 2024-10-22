import { EmptyListMessage } from '@components/EmptyListMessage'
import * as S from './styles'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { GroupsCard } from '@components/GroupsCard'

import { useState } from 'react'
import { FlatList } from 'react-native'
import { Button, ButtonVariants } from '@components/Button'
import { useNavigation } from '@react-navigation/native'

export const Home = () => {
  const [groups, setGroups] = useState([])

  const navigation = useNavigation()

  const openNewGroupRoute = () => {
    navigation.navigate('NewGroup')
  }

  return (
    <S.Container>
      <Header />
      <Highlight title="Teams" subtitle="Play with your team!" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupsCard title={item} />}
        contentContainerStyle={!groups.length && { flex: 1 }}
        ListEmptyComponent={() => <EmptyListMessage message="No teams found" />}
      />
      <Button
        variant={ButtonVariants.primary}
        label="Add new team"
        onPress={openNewGroupRoute}
      />
    </S.Container>
  )
}
