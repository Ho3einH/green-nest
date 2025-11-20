import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://sosqovyhxvsonxjqimje.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNvc3FvdnloeHZzb254anFpbWplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM0NTYyODQsImV4cCI6MjA3OTAzMjI4NH0._0-v0lRWIGabiMevEb-yv4Paa3qZvO4kgq8PUcOor9k";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
