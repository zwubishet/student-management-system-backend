CREATE TABLE student.grades (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    school_id UUID NOT NULL REFERENCES platform.schools(id) ON DELETE CASCADE,
    student_id UUID NOT NULL REFERENCES school.users(id),
    class_assignment_id UUID NOT NULL REFERENCES school.class_assignments(id),
    
    grade_value NUMERIC(5,2) NOT NULL, -- e.g., 98.50
    weight NUMERIC(3,2) DEFAULT 1.0,   -- For weighted GPA (e.g., Finals = 2.0)
    assessment_name VARCHAR(100),      -- e.g., "Midterm Exam", "Final Project"
    
    graded_by UUID REFERENCES school.users(id), -- Audit: who actually entered the grade
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);
