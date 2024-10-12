import { createClient } from '@supabase/supabase-js';
import { Database } from './database.types';
import { env } from '@/utils/env';
export const supabase = createClient<Database>(
  env.SUPABASE_URL,
  env.SUPABASE_API_KEY,
);
