import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://kaxvhmuiuwbvhwprmodt.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtheHZobXVpdXdidmh3cHJtb2R0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk1MzY0ODMsImV4cCI6MTk5NTExMjQ4M30.Kgo5mH-A7vE-F1Wlqo-yjUp7uFjd-tqNmfhkbKDPvNw"
);
