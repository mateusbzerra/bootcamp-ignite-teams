import AsyncStorage from '@react-native-async-storage/async-storage'

import { AppError } from '@services/app-error-handler'

import { PLAYER_COLLECTION } from '@storage/storage.config'

export type PlayerType = {
  name: string
  team: string
  groupId: string
}

export const getPlayersByGroup = async (groupId: string) => {
  try {
    const storageItems = await AsyncStorage.getItem(
      `${PLAYER_COLLECTION}-${groupId}`
    )

    const players: PlayerType[] = storageItems ? JSON.parse(storageItems) : []

    return players
  } catch (error) {
    throw error
  }
}

export const getPlayersByGroupAndTeam = async (
  groupId: string,
  team: string
) => {
  try {
    const players = await getPlayersByGroup(groupId)

    const playersByTeam = players.filter((player) => player.team === team)
    return playersByTeam
  } catch (error) {
    throw error
  }
}

export const addNewPlayer = async (player: PlayerType) => {
  try {
    const playersByGroup = await getPlayersByGroup(player.groupId)

    const playerAlreadyAdded = playersByGroup.filter(
      (item) => item.name === player.name
    )

    if (playerAlreadyAdded.length > 0) {
      throw new AppError('Player already added to a team')
    }

    await AsyncStorage.setItem(
      `${PLAYER_COLLECTION}-${player.groupId}`,
      JSON.stringify([...playersByGroup, player])
    )
  } catch (error) {
    throw error
  }
}

export const removePlayerFromGroup = async (player: PlayerType) => {
  try {
    const playersByGroup = await getPlayersByGroup(player.groupId)

    const filteredPlayers = playersByGroup.filter(
      (playerItem) => playerItem.name !== player.name
    )

    await AsyncStorage.setItem(
      `${PLAYER_COLLECTION}-${player.groupId}`,
      JSON.stringify(filteredPlayers)
    )
  } catch (error) {
    throw error
  }
}
