---
title: comunicacao(fornecedor)
sidebar_position: 1
---

# tools/fornecedor_tools/comunicacao_Fornecedor.py

## Objetivo do ficheiro

Este ficheiro trata da **comunicação do lado do fornecedor**.
Aqui ficam as funções que permitem ao fornecedor:
- enviar mensagens para clientes
- ler mensagens recebidas
- abrir tickets para adicionar novos produtos

Separar isto num ficheiro próprio ajuda a manter o código limpo
e facilita o trabalho em equipa.

---

## Função: `enviar_mensagem(db, fornecedor_nome)`

### O que faz
Permite ao fornecedor enviar uma mensagem para um cliente.

### Parâmetros
- `db` (`sqlite3.Connection`)
- `fornecedor_nome` (`str`)

### Funcionamento
1. Lista clientes registados
2. Fornecedor escolhe o cliente
3. Escreve a mensagem
4. Guarda na tabela `mensagens`
5. Faz `commit`

### Tabelas usadas
- `utilizadores`
- `mensagens`

---

## Função: `ver_mensagens(db, fornecedor_nome)`

### O que faz
Mostra mensagens enviadas por clientes ao fornecedor.

### Funcionamento
1. Lista clientes que já enviaram mensagens
2. Fornecedor escolhe um cliente
3. Mostra as mensagens trocadas

### Tabelas usadas
- `mensagens`
- `utilizadores`

---

## Função: `abrir_ticket_produto(db, fornecedor_nome)`

### O que faz
Cria um ticket para o admin aprovar um novo produto.

### Funcionamento
1. Fornecedor insere nome, preço e stock
2. Cria registo em `tickets_produto`
3. Status inicial = `"pendente"`

### Tabela usada
- `tickets_produto`

---

## Nota de equipa

Este ficheiro garante que toda a comunicação do fornecedor
fica concentrada num só sítio.
