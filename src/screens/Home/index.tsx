import { EmptyListMessage } from '@components/EmptyListMessage'
import * as S from './styles'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { GroupsCard } from '@components/GroupsCard'

import { useCallback, useState } from 'react'
import { FlatList } from 'react-native'
import { Button, ButtonVariants } from '@components/Button'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { type GroupType, getAllGroups } from '@storage/groups.actions'

export const Home = () => {
  const [groups, setGroups] = useState<GroupType[]>()

  const navigation = useNavigation()

  const openNewGroupRoute = () => {
    navigation.navigate('NewGroup')
  }

  const fetchAllGroups = async () => {
    try {
      const groups = await getAllGroups()
      setGroups(groups)
    } catch (error) {
      console.log({ error })
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchAllGroups()
    }, [])
  )

  const handleOpenGroup = (group: GroupType) => {
    navigation.navigate('Players', { groupId: group.id, groupName: group.name })
  }

  return (
    <S.Container>
      <Header />
      <Highlight title="Teams" subtitle="Play with your team!" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <GroupsCard title={item.name} onPress={() => handleOpenGroup(item)} />
        )}
        contentContainerStyle={!groups && { flex: 1 }}
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
