-- 1. Academic Years (e.g., 2025-2026)
CREATE TABLE platform.academic_years (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    school_id UUID NOT NULL REFERENCES platform.schools(id) ON DELETE CASCADE,
    name VARCHAR(50) NOT NULL, -- e.g., "Fall 2025"
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    is_current BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT now(),
    UNIQUE(school_id, name)
);

-- 2. Classrooms/Grade Levels (e.g., Grade 10-A, Room 302)
CREATE TABLE school.classrooms (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    school_id UUID NOT NULL REFERENCES platform.schools(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL, 
    capacity INTEGER,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- 3. Subjects (e.g., Advanced Mathematics, World History)
CREATE TABLE school.subjects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    school_id UUID NOT NULL REFERENCES platform.schools(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    code VARCHAR(20), -- e.g., MATH-101
    description TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);
