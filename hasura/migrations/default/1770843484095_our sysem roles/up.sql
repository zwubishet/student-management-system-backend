CREATE SCHEMA IF NOT EXISTS school;

CREATE TABLE school.roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT UNIQUE NOT NULL
);

-- Insert default roles
INSERT INTO school.roles (name) VALUES
('SUPER_ADMIN'),
('SCHOOL_ADMIN'),
('TEACHER'),
('STUDENT');
