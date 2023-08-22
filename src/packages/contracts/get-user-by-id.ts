import { z } from 'zod'

const userCartResponse = z.object({
  productId: z.string().uuid(),
  name: z.string(),
  description: z.string(),
})

export const getUserByIdResponse = z.object({
  user: z.object({
    id: z.string().uuid(),
    username: z.string(),
    email: z.string().email(),
    createdAt: z.date(),
    cart: z.array(userCartResponse)
  })
})