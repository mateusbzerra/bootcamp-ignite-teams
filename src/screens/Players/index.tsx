import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { ButtonIcon } from '@components/ButtonIcon'
import { Filter } from './components/Filter'
import { FlatList } from 'react-native'
import { useState } from 'react'
import { PlayerCard } from './components/PlayerCard'

import * as S from './styles'
import { EmptyListMessage } from '@components/EmptyListMessage'
import { useRoute } from '@react-navigation/native'

type RouteParams = {
  groupName: string
}

export const Players = () => {
  const [selectedTeam, setSelectedTeam] = useState('Team A')
  const [players, setPlayers] = useState([])

  const route = useRoute()

  const routeParams = route.params as RouteParams

  return (
    <S.Container>
      <Header showBackButton />
      <Highlight
        title={routeParams.groupName}
        subtitle="Add Players & Choose Teams"
      />
      <S.InputWrapper>
        <Input placeholder="Player name" />
        <ButtonIcon iconName="add" variant="success" />
      </S.InputWrapper>
      <S.HeadersList>
        <FlatList
          data={['Team A', 'Team B', 'Team C']}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              label={item}
              isActive={selectedTeam === item}
              onPress={() => setSelectedTeam(item)}
            />
          )}
          horizontal
        />
        <S.NumberOfPlayers>12</S.NumberOfPlayers>
      </S.HeadersList>

      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <PlayerCard name={item} />}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <EmptyListMessage message="No players on this team" />
        )}
        contentContainerStyle={[
          { paddingBottom: 50 },
          players.length === 0 && { flex: 1 },
        ]}
      />

      <Button variant="danger" label="Delete Group" />
    </S.Container>
  )
}
