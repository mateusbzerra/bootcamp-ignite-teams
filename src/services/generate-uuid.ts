import uuid from 'react-native-uuid'

export const generateUuid = () => {
  const randomId = uuid.v4()

  return randomId.toString()
}
