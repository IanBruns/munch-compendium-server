BEGIN;

TRUNCATE
posts,
brands
RESTART IDENTITY CASCADE;

INSERT INTO brands (brand_name)
VALUES
('4 Rivers Smokehouse'),
('7-Eleven'),
('A&W'),
('Applebee''s'),
('Arby''s'),