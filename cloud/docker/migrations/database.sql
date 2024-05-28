create database if not exists `test`;

use `test`;

create table if not exists `users`
(
    `id` int primary key auto_increment,
    `name` varchar(255) not null,
    `lastname` varchar(255) not null
);

insert into users (id, name, lastname) VALUES (1, 'Manolo', 'Fernandez');
insert into users (id, name, lastname) VALUES (2, 'Abrahán', 'Mesa');
insert into users (id, name, lastname) VALUES (3, 'Juan', 'Martinez');
