CREATE TABLE student.enrollments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    school_id UUID NOT NULL REFERENCES platform.schools(id) ON DELETE CASCADE,
    student_id UUID NOT NULL REFERENCES school.users(id),
    classroom_id UUID NOT NULL REFERENCES school.classrooms(id),
    academic_year_id UUID NOT NULL REFERENCES platform.academic_years(id),
    enrollment_date DATE DEFAULT CURRENT_DATE,
    status VARCHAR(20) DEFAULT 'ACTIVE', -- ACTIVE, GRADUATED, DROPPED, SUSPENDED
    
    -- A student can only have one primary enrollment per year
    UNIQUE(student_id, academic_year_id)
);
