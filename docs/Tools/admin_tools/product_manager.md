---
title: product_manager
sidebar_position: 2
---

# `tools/admin_tools/product_manager.py`

## O que este módulo faz

Este módulo contém funções para o **admin gerir produtos e tickets**:
- adicionar/remover produtos
- ver stock e informações detalhadas
- verificar tickets pendentes
- aprovar ou rejeitar tickets (e criar produto se aprovado)

Todas as funções usam `input()`/`print()` (interface por terminal).

---

## Função: `adicionar_produto(db)`

### Objetivo
Inserir um novo produto na tabela `produtos`.

### Parâmetros
- `db` (`sqlite3.Connection`)

### Entradas (terminal)
- `nome` (str)
- `preco` (float) — convertido com `float(...)`
- `stock` (int) — convertido com `int(...)`

### O que faz
1. Lê nome/preço/stock
2. Executa `INSERT INTO produtos (nome, preco, stock)`
3. Faz `db.commit()`
4. Em caso de erro SQLite, imprime a exceção

### Tabela usada
- `produtos`

---

## Função: `remover_produto(db)`

### Objetivo
Remover um produto pelo nome.

### Parâmetros
- `db` (`sqlite3.Connection`)

### Entradas
- `nome` (str): nome do produto a remover

### O que faz
1. Executa `DELETE FROM produtos WHERE nome = ?`
2. Faz commit
3. Usa `cursor.rowcount` para dizer se removeu ou não

### Tabela usada
- `produtos`

---

## Função: `ver_stock(db)`

### Objetivo
Listar produtos mostrando nome, preço e stock + indicador "Baixo" se `stock <= 5`.

### Parâmetros
- `db` (`sqlite3.Connection`)

### O que faz
1. `SELECT nome, preco, stock FROM produtos ORDER BY nome`
2. Imprime tabela no terminal
3. Calcula o total de unidades em stock (soma do campo stock)

### Tabela usada
- `produtos`

---

## Função: `ver_informacoes_produtos(db)`

### Objetivo
Mostrar lista detalhada de produtos com ID.

### Parâmetros
- `db` (`sqlite3.Connection`)

### O que faz
1. `SELECT id, nome, preco, stock FROM produtos`
2. Imprime cada produto com:
   - ID
   - Nome
   - Preço
   - Stock

### Tabela usada
- `produtos`

---

## Função: `verificar_tickets_pendentes(db)`

### Objetivo
Verificar e listar tickets de produtos com status `'pendente'`.

### Parâmetros
- `db` (`sqlite3.Connection`)

### O que faz
1. `SELECT id, fornecedor, produto, preco, stock FROM tickets_produto WHERE status='pendente'`
2. Se existirem tickets:
   - imprime os tickets com ID e dados
   - mostra mensagem "Aguarda aprovação do admin..."
3. Se não existirem:
   - imprime que não há tickets pendentes

### Tabela usada
- `tickets_produto`

---

## Função: `aprovar_ticket(db)`

### Objetivo
Permitir ao admin aprovar (A) ou rejeitar (N) um ticket pendente.

### Parâmetros
- `db` (`sqlite3.Connection`)

### Entradas (terminal)
- escolha: `"A"` ou `"N"`
- ticket_id: ID do ticket a processar

### O que faz (fluxo real)
1. Lista tickets pendentes (`tickets_produto` com status `'pendente'`)
2. Pede ao admin se quer Aprovar ou Negar
3. Pede o ID do ticket
4. Confirma que o ticket existe e ainda está pendente
5. Se **aprovar**:
   - `INSERT INTO produtos (nome, preco, stock)` usando dados do ticket
   - `UPDATE tickets_produto SET status='feito'`
6. Se **negar**:
   - `UPDATE tickets_produto SET status='rejeitado'`
7. `db.commit()`

### Tabelas usadas
- `tickets_produto`
- `produtos`

