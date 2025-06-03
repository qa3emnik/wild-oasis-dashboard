import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://hrojoicjxgehvtkgxxlf.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhyb2pvaWNqeGdlaHZ0a2d4eGxmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgyNjA5MTYsImV4cCI6MjA2MzgzNjkxNn0.TsnQaeERWtBXl-E0QKTGk3-axwT21j6ym4yHdCe6MFA";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
