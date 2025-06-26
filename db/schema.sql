DROP TABLE IF EXISTS employees;

create Table employees(
  id serial primary key,
  name text,
  birthday date,
  salary integer
)
