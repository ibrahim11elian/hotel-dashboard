import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;

const serviceRoleKey = import.meta.env.VITE_SUPABASE_ROLE_KEY;
const supabase = createClient(supabaseUrl, serviceRoleKey);

export default supabase;
