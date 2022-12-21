## Comandos Básicos

> Criar banco de dados
CREATE DATABASE nome_do_banco;

> Mostrar bancos já criados
SHOW DATABASES;

> Selecionar um banco criado
USE nome_do_banco;

> Criar uma tabela
CREATE TABLE nome_da_tabela(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT(3),
);

> Mostrar tabelas já criados
SHOW TABLES;

> Inserir dados na tabela
INSERT INTO nome_da_tabela(nome, email, idade) VALUES(
    "Vinicius",
    "email@email.com",
    29
);

> Listar todos os dados da tabela
SELECT * FROM nome_da_tabela;

> Listar apenas o usuário com idade = 8
SELECT * FROM nome_do_usuario WHERE idade=8;

> Deletar registro da tabela
DELETE FROM nome_da_tabela -> deleta toda a tabela
DELETE FROM nome_da_tabela WHERE nome = "Vinicius" -> deleta apenas o registro que possui a condição necessária

> Atualizar registro da tabela
UPDATE nome_da_tabela SET nome = "nome_teste"; -> todos os registros com essa condição serão atualizados
UPDATE nome_da_tabela SET nome = "nome_teste" WHERE NOME = "Vinicius"; -> somente o registro com essa condição será atualizado