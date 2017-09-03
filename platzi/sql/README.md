tipos de tablas en una base datos SQL

**tablas "estables"** => no se modifican mucho
**tablas de operación** => se modifican mucho

## comandos de SQL

`SHOW DATABASES;`: muestra las tablas...

`USE <database>;`: setea una db

`CREATE DATABASE <database>;` crea una base de datos

`CREATE TABLE <table> (args);` crea una tabla, ejemplo

`DESCRIBE <table>`: promt information about the queried table, is the same as `DESC <table>`
```SQL
CREATE TABLE books (
  book_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  publisher_id INTEGER UNSIGNED NOT NULL,
  title VARCHAR(60) NOT NULL,
  author VARCHAR(100) NOT NULL,
  description TEXT,
  price DECIMAL(6,0),
  copies INT NOT NULL DEFAULT 0
);

CREATE TABLE publishers (
  publisher_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  country VARCHAR(20)
);
CREATE TABLE users (
  user_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE
);
CREATE TABLE actions (
  action_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  book_id INTEGER UNSIGNED NOT NULL,
  user_id INTEGER UNSIGNED NOT NULL,
  action_type ENUM('venta','prestamo','devolucion') NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
```
`INSERT`:

```SQL
INSERT INTO users(name, email) VALUES
    ('Ricardo', 'ricardo@hola.com'),
    ('Laura', 'laura@hola.com'),
    ('Jose', 'jose@hola.com'),
    ('Sofia', 'sofia@hola.com'),
    ('Fernanda', 'fernanda@hola.com'),
    ('Jose Guillermo', 'memo@hola.com'),
    ('Maria', 'maria@hola.com'),
    ('Susana', 'susana@hola.com'),
    ('Jorge', 'jorge@hola.com');
INSERT INTO publishers(publisher_id, name, country) VALUES
    (1, 'OReilly', 'USA'),
    (2, 'Santillana', 'Mexico'),
    (3, 'MIT Edu', 'USA'),
    (4, 'UTPC', 'Colombia'),
    (5, 'Platzi', 'USA');
INSERT INTO books(publisher_id, title, author, description, price, copies) VALUES
    (1, 'Mastering MySQL', 'John Goodman', 'Clases de bases de datos usando MySQL', 10.50, 4),
    (2, 'Trigonometria avanzada', 'Pi Tagoras', 'Trigonometria desde sus origenes', 7.30, 2),
    (3, 'Advanced Statistics', 'Carl Gauss', 'De curvas y otras graficas', 23.60, 1),
    (4, 'Redes Avanzadas', 'Tim Bernes-Lee', 'Lo que viene siendo el Internet', 13.50, 4),
    (2, 'Curvas Parabolicas', 'Napoleon TNT', 'Historia de la parabola', 6.99, 10),
    (1, 'Ruby On (the) Road', 'A Miner', 'Un nuevo acercamiento a la programacion', 18.75, 4),
    (1, 'Estudios basicos de estudios', 'John Goodman', 'Clases de datos usando MySQL', 10.50 , 4),
    (4, 'Donde esta Y?', 'John Goodman', 'Clases de datos usando MySQL', 10.50, 4),
    (3, 'Quimica Avanzada', 'John White', 'Profitable studies on chemistry', 45.35, 1),
    (4, 'Graficas Matematicas', 'Rene Descartes', 'De donde viene el plano', 13.99, 7),
    (4, 'Numeros Importantes', 'Leonard Euler', 'De numeros que a veces nos sirven', 10, 3),
    (3, 'Modelado de conocimiento', 'Jack Friedman', 'Una vez adquirido, como se guarda el conocimiento', 29.99, 2),
    (3, 'Teoria de juegos', 'John Nash', 'A o B?', 12.55, 3),
    (1, 'Calculo de variables', 'Brian Kernhigan', 'Programacion mega basica', 9.50, 3),
    (5, 'Produccion de streaming', 'Juan Pablo Rojas', 'De la oficina ala pan', 23.49, 9),
    (5, 'ELearning', 'JFD & DvdH', 'Diseno y ejecucion de educacion online', 23.55, 4),
    (5, 'Pet Caring for Geeks', 'KC', 'Que tu perro aprenda a programar', 18.79, 3 ),
    (1, 'Algebra basica', 'Al Juarismi', 'Esto de encontrar X o Y, dependiendo', 13.50, 8);
```

`TRUNCATE <table>` resets the table but keep it
`DROP TABLE <table>` delete the table
`DELETE * FROM <table>` delete the table information but keeps the metadata
