import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://wpcdbmqdozcclcbaevsh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndwY2RibXFkb3pjY2xjYmFldnNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM1NjYwNDgsImV4cCI6MjAwOTE0MjA0OH0.xu978uQA25sgnr4dybZ-VMDxB-eh0TG4sXZLzSCZ8i8";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
