import { z } from 'zod'

const schema = z.object({
  SUPABASE_SERVICE_ROLE: z.string(),
  SUPABASE_URL: z.string(),
  SUPABASE_API_KEY: z.string(),
})

export const env = schema.parse(process.env)
