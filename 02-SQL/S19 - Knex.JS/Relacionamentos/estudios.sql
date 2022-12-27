-- knex_test.estudios definition

CREATE TABLE `estudios` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  `game_id` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `estudios_FK` (`game_id`),
  CONSTRAINT `estudios_FK` FOREIGN KEY (`game_id`) REFERENCES `games` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;