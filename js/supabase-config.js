import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://qyryocrqmfurtswnirhq.supabase.co'
const supabaseKey = 'sb_publishable_w_JEAPUsj4A3lUvVI-QOoQ_AB67GjN3'

export const supabase = createClient(supabaseUrl, supabaseKey)
