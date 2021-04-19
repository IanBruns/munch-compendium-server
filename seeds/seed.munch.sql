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
('Bang Energy'),
('Baskin Robbins'),
('Booster Juice'),
('Boston Market'),
('Boston''s Pizza'),
('Burger King'),
('BurgerFi'),
('Carl''s Jr'),
('Checker''s and Rally''s'),
('Cheez-It'),
('Chick-fil-A'),
('Chicken Guy'),
('Chipotle'),
('Chuck E. Cheese')