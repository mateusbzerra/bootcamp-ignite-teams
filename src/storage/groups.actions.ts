import AsyncStorage from '@react-native-async-storage/async-storage'
import { GROUP_COLLECTION } from './storage.config'
import { AppError } from '@services/app-error-handler'

export interface GroupType {
  id: string
  name: string
}

export const getAllGroups = async () => {
  try {
    const storageItems = await AsyncStorage.getItem(GROUP_COLLECTION)

    if (!storageItems) return []

    const groups: GroupType[] = JSON.parse(storageItems)
    return groups
  } catch (error) {
    throw error
  }
}

export const getGroupById = async (groupId: string) => {
  try {
    const groups = await getAllGroups()

    return groups.find((group) => group.id === groupId)
  } catch (error) {
    throw error
  }
}

export const createNewGroup = async (group: GroupType) => {
  try {
    const currentData: GroupType[] = await getAllGroups()

    const isGroupAlreadyCreated = currentData.some(
      (groups) => groups.name === group.name
    )

    if (isGroupAlreadyCreated) {
      throw new AppError('Group already exists')
    }

    await AsyncStorage.setItem(
      GROUP_COLLECTION,
      JSON.stringify([...currentData, group])
    )
  } catch (error) {
    throw error
  }
}

export const deleteGroup = async (groupId: string) => {
  try {
    const currentData: GroupType[] = await getAllGroups()
    await AsyncStorage.setItem(
      GROUP_COLLECTION,
      JSON.stringify([...currentData.filter((item) => item.id !== groupId)])
    )
  } catch (error) {
    throw error
  }
}
