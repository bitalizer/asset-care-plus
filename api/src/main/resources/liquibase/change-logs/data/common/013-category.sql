INSERT INTO category (id, name, parent_category_id, created_by) VALUES (1, 'Work Orders', NULL, 1);
INSERT INTO category (id, name, parent_category_id, created_by) VALUES (2, 'Damage', 1, 1);
INSERT INTO category (id, name, parent_category_id, created_by) VALUES (3, 'Inspection', 1, 1);
INSERT INTO category (id, name, parent_category_id, created_by) VALUES (4, 'Meter Reading', 1, 1);
INSERT INTO category (id, name, parent_category_id, created_by) VALUES (5, 'None', 1, 1);
INSERT INTO category (id, name, parent_category_id, created_by) VALUES (6, 'Preventative', 1, 1);
INSERT INTO category (id, name, parent_category_id, created_by) VALUES (7, 'Project', 1, 1);
INSERT INTO category (id, name, parent_category_id, created_by) VALUES (8, 'Safety', 1, 1);
INSERT INTO category (id, name, parent_category_id, created_by) VALUES (9, 'Upgrade', 1, 1);

INSERT INTO category (id, name, parent_category_id, created_by) VALUES (10, 'Assets', NULL, 1);
INSERT INTO category (id, name, parent_category_id, created_by) VALUES (11, 'Electronics', 10, 1);
INSERT INTO category (id, name, parent_category_id, created_by) VALUES (12, 'Vehicles', 10, 1);
INSERT INTO category (id, name, parent_category_id, created_by) VALUES (13, 'Furniture', 10, 1);

INSERT INTO category (id, name, parent_category_id, created_by) VALUES (14, 'Purchase Orders', NULL, 1);
INSERT INTO category (id, name, parent_category_id, created_by) VALUES (15, 'Damage', 14, 1);
INSERT INTO category (id, name, parent_category_id, created_by) VALUES (16, 'Inspection', 14, 1);
INSERT INTO category (id, name, parent_category_id, created_by) VALUES (17, 'Meter Reading', 14, 1);
INSERT INTO category (id, name, parent_category_id, created_by) VALUES (18, 'None', 14, 1);
INSERT INTO category (id, name, parent_category_id, created_by) VALUES (19, 'Preventative', 14, 1);

INSERT INTO category (id, name, parent_category_id, created_by) VALUES (20, 'Meters', NULL, 1);
INSERT INTO category (id, name, parent_category_id, created_by) VALUES (21, 'Ambient', 20, 1);

INSERT INTO category (id, name, parent_category_id, created_by) VALUES (22, 'Timers', NULL, 1);
INSERT INTO category (id, name, parent_category_id, created_by) VALUES (23, 'Vendor Time', 22, 1);
INSERT INTO category (id, name, parent_category_id, created_by) VALUES (24, 'Wrench Time', 22, 1);
INSERT INTO category (id, name, parent_category_id, created_by) VALUES (25, 'Other Time', 22, 1);
INSERT INTO category (id, name, parent_category_id, created_by) VALUES (26, 'Inspection Time', 22, 1);
INSERT INTO category (id, name, parent_category_id, created_by) VALUES (27, 'Drive Time', 22, 1);