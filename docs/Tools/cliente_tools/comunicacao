---
title: comunicacao(cliente)
sidebar_position: 1
---

# tools/cliente_tools/comunicacao_Cliente.py

## Objetivo do ficheiro

Este ficheiro trata **toda a comunicação do lado do cliente**.
Aqui ficam as funções que permitem ao cliente enviar mensagens para fornecedores
e ler mensagens que recebeu.

A ideia é separar a comunicação do resto da lógica (pedidos, produtos, etc.),
para o código ficar mais organizado e fácil de manter em equipa.

---

## Função: `enviar_mensagem(db, cliente_nome)`

### O que faz
Permite ao cliente enviar uma mensagem para um fornecedor registado no sistema.

### Parâmetros
- `db` (`sqlite3.Connection`)  
  Ligação ativa à base de dados.
- `cliente_nome` (`str`)  
  Nome do cliente que está a enviar a mensagem.

### Funcionamento
1. Lista todos os utilizadores do tipo `fornecedor`
2. O cliente escolhe o fornecedor destinatário
3. O cliente escreve a mensagem
4. A mensagem é guardada na tabela `mensagens`
5. É feito `commit` na base de dados

### Tabelas usadas
- `utilizadores`
- `mensagens`

---

## Função: `ver_mensagens(db, cliente_nome)`

### O que faz
Mostra as mensagens que o cliente recebeu de fornecedores.

### Parâmetros
- `db` (`sqlite3.Connection`)
- `cliente_nome` (`str`)

### Funcionamento
1. Procura fornecedores que já enviaram mensagens ao cliente
2. Mostra a lista desses fornecedores
3. O cliente escolhe um fornecedor
4. São mostradas todas as mensagens trocadas com esse fornecedor

### Tabelas usadas
- `mensagens`
- `utilizadores`

---
### nota
...