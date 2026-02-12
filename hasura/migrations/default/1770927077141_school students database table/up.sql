CREATE TABLE student.students (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID UNIQUE REFERENCES school.users(id) ON DELETE CASCADE,
    school_id UUID REFERENCES platform.schools(id),
    grade TEXT,
    created_at TIMESTAMP DEFAULT now()
);
