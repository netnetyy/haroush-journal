import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://jursxevfprsokhvadfyn.supabase.co';
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1cnN4ZXZmcHJzb2todmFkZnluIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA5Mjg1NTYsImV4cCI6MjA5NjUwNDU1Nn0.SGB1FZm-cBKy0aN9oiqI9E8zRjjcK3em7spn8W7BXOI';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
