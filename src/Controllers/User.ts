import { z } from 'zod'
import generateUniqueId from '../packages/generate-uuid/uuid-generate'

class User {
  async index (request: any, response: any) {
    const id = await generateUniqueId()
    
    const userSchema = z.object({
      id: z.string().uuid(),
      name: z.string(),
      email: z.string().email({ message: "Invalid email" })
    })

    const { name, email } = request.body
    const user = userSchema.parse({id, name, email})

    console.log(user)
    response.send({ message: 'success' })
  }
}

export default new User();
