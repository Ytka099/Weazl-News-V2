import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Profile = {
  id: string;
  full_name: string;
  employee_number: string;
  rank_number: number;
  rank_name: string;
  department: string;
  bio: string;
  avatar_url: string | null;
  settings: Record<string, boolean>;
};

export type Rank = { rank_number: number; rank_name: string; requirements: string };
export type PromotionRequest = {
  id: string;
  employee_id: string;
  requested_rank: number;
  reason: string;
  status: 'pending' | 'approved' | 'rejected';
  reviewed_by: string | null;
  reviewed_at: string | null;
  reviewer_note: string;
  created_at: string;
};
export type Notification = {
  id: string;
  notification_type: string;
  title: string;
  body: string;
  read_at: string | null;
  created_at: string;
};
export type Article = {
  id: string;
  author_id: string;
  title: string;
  summary: string;
  status: 'draft' | 'review' | 'published';
  category: string;
  created_at: string;
  updated_at: string;
};
export type EditorialEvent = {
  id: string;
  created_by: string;
  title: string;
  event_time: string;
  location: string;
  event_type: string;
};
