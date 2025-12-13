---
title: stock
sidebar_position: 2
---

# tools/fornecedor_tools/stock.py

## Objetivo do ficheiro

Este ficheiro permite ao fornecedor **ver e atualizar o stock**
dos produtos que gere.

Toda a lógica relacionada com stock fica aqui,
em vez de estar espalhada pelo projeto.

---

## Função: `ver_stock(db)`

### O que faz
Mostra o stock atual dos produtos.

### Funcionamento
1. Vai à tabela `produtos`
2. Lista nome, preço e stock
3. Mostra tudo formatado no terminal

### Tabela usada
- `produtos`

---

## Função: `atualizar_stock(db)`

### O que faz
Permite alterar a quantidade em stock de um produto.

### Funcionamento
1. Fornecedor escolhe o produto
2. Insere a nova quantidade
3. Atualiza a tabela `produtos`
4. Faz `commit`

### Tabela usada
- `produtos`

---

## Função: `ver_pedidos_recebidos(db, fornecedor_nome)`

### O que faz
Mostra os pedidos feitos aos produtos do fornecedor.

### Funcionamento
1. Filtra pedidos associados ao fornecedor
2. Lista produto, quantidade e estado

### Tabela usada
- `pedidos`

---

## Nota de equipa

Este ficheiro facilita a gestão de stock
e evita que o fornecedor tenha de mexer diretamente na base de dados.
