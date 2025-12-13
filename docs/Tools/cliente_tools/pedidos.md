---
title: pedidos
sidebar_position: 2
---

# tools/cliente_tools/pedidos.py

## Objetivo do ficheiro

Este ficheiro contém **toda a lógica relacionada com pedidos feitos pelos clientes**.

Aqui o cliente pode:
- ver produtos disponíveis
- fazer um pedido
- consultar pedidos já realizados

Separar isto num ficheiro próprio ajuda no trabalho em grupo,
porque tudo o que é “pedido” está num só sítio.

---

## Função: `ver_produtos_disponiveis(db)`

### O que faz
Mostra apenas os produtos que têm stock disponível.

### Parâmetros
- `db` (`sqlite3.Connection`)

### Funcionamento
1. Vai à tabela `produtos`
2. Filtra apenas produtos com `stock > 0`
3. Mostra nome, preço e quantidade disponível

### Tabela usada
- `produtos`

---

## Função: `fazer_pedido(db, cliente_nome)`

### O que faz
Permite ao cliente criar um novo pedido, se houver stock suficiente.

### Parâmetros
- `db` (`sqlite3.Connection`)
- `cliente_nome` (`str`)

### Funcionamento
1. O cliente escolhe o produto e a quantidade
2. O sistema verifica se existe stock suficiente
3. Se existir:
   - cria um registo na tabela `pedidos`
   - estado inicial = `"pendente"`
4. Se não existir:
   - mostra aviso de erro

### Tabelas usadas
- `produtos`
- `pedidos`

---

## Função: `ver_pedidos(db, cliente_nome)`

### O que faz
Mostra todos os pedidos feitos por um cliente.

### Parâmetros
- `db` (`sqlite3.Connection`)
- `cliente_nome` (`str`)

### Funcionamento
1. Procura pedidos onde `cliente = cliente_nome`
2. Mostra:
   - ID
   - Produto
   - Quantidade
   - Estado do pedido

### Tabela usada
- `pedidos`

---

## Nota de equipa

Este ficheiro é importante porque concentra a lógica dos pedidos.
Se algum dia mudarmos a forma como os pedidos funcionam,
não precisamos mexer na classe `Cliente` nem noutros módulos.
