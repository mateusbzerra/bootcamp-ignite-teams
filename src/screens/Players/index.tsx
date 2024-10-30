import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { ButtonIcon } from '@components/ButtonIcon'
import { Filter } from './components/Filter'
import { Alert, FlatList, TextInput } from 'react-native'
import { useEffect, useRef, useState } from 'react'
import { PlayerCard } from './components/PlayerCard'

import * as S from './styles'
import { EmptyListMessage } from '@components/EmptyListMessage'
import { useRoute } from '@react-navigation/native'
import {
  getPlayersByGroup,
  PlayerType,
  addNewPlayer,
  getPlayersByGroupAndTeam,
  removePlayerFromGroup,
} from '@storage/players.actions'
import { AppError } from '@services/app-error-handler'

type RouteParams = {
  groupName: string
  groupId: string
}

const ERROR_MESSAGE = 'An error occurred while adding the player'

export const Players = () => {
  const [playerNameInput, setPlayerNameInput] = useState('')
  const [selectedTeam, setSelectedTeam] = useState('Team A')
  const [players, setPlayers] = useState<PlayerType[]>([])

  const playerInputRef = useRef<TextInput>(null)

  const route = useRoute()

  const routeParams = route.params as RouteParams

  const handleAddPlayer = async () => {
    const newPlayer = {
      name: playerNameInput,
      team: selectedTeam,
      groupId: routeParams.groupId,
    }

    try {
      await addNewPlayer(newPlayer)
      setPlayerNameInput('')
      playerInputRef.current?.blur()
      fetchPlayersByTeam()
    } catch (error) {
      const isCustomAppError = error instanceof AppError

      return Alert.alert(
        'New Player',
        isCustomAppError ? error.message : ERROR_MESSAGE
      )
    }
  }

  const handleRemovePlayer = async (player: PlayerType) => {
    try {
      await removePlayerFromGroup(player)
      fetchPlayersByTeam()
    } catch (e) {
      Alert.alert('Remove Player', 'Unable to remove the player!')
    }
  }

  const fetchPlayersByTeam = async () => {
    try {
      const playersList = await getPlayersByGroupAndTeam(
        routeParams.groupId,
        selectedTeam
      )
      setPlayers(playersList)
    } catch (error) {
      Alert.alert('Players', 'Error while fetching players')
    }
  }

  useEffect(() => {
    fetchPlayersByTeam()
  }, [selectedTeam])

  return (
    <S.Container>
      <Header showBackButton />
      <Highlight
        title={routeParams.groupName}
        subtitle="Add Players & Choose Teams"
      />
      <S.InputWrapper>
        <Input
          ref={playerInputRef}
          placeholder="Player name"
          value={playerNameInput}
          onChangeText={setPlayerNameInput}
        />
        <ButtonIcon
          iconName="add"
          disabled={playerNameInput.trim().length < 3}
          variant="success"
          onPress={handleAddPlayer}
        />
      </S.InputWrapper>
      <S.HeadersList>
        <FlatList
          data={['Team A', 'Team B']}
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
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <PlayerCard
            name={item.name}
            onDeletePlayer={() => handleRemovePlayer(item)}
          />
        )}
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
