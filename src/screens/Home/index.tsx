import { EmptyListMessage } from '@components/EmptyListMessage'
import * as S from './styles'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { GroupsCard } from '@components/GroupsCard'

import { useState } from 'react'
import { FlatList } from 'react-native'
import { Button, ButtonVariants } from '@components/Button'

export const Home = () => {
  const [groups, setGroups] = useState([])
  return (
    <S.Container>
      <S.Content>
        <Header />
        <Highlight title="Teams" subtitle="Play with your team!" />
        <FlatList
          data={groups}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <GroupsCard title={item} />}
          contentContainerStyle={!groups.length && { flex: 1 }}
          ListEmptyComponent={() => (
            <EmptyListMessage message="No teams found" />
          )}
        />
        <Button
          variant={ButtonVariants.primary}
          label="Add new team"
          onPress={() => {}}
        />
      </S.Content>
    </S.Container>
  )
}
