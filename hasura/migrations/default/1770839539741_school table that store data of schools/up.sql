CREATE TABLE platform.schools (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  address TEXT,
  subscription_plan TEXT DEFAULT 'free',
  created_at TIMESTAMP DEFAULT now()
);
