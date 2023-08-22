import { v4 as uuidv4 } from 'uuid'

function generateUniqueId () {
  const id: string = uuidv4()
  return id
}

export default generateUniqueId