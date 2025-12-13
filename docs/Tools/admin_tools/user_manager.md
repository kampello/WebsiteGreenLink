---
title: user_manager
sidebar_position: 1
---

# `tools/admin_tools/user_manager.py`

## O que este módulo faz

Este módulo concentra as operações de **gestão de utilizadores** no GreenLink:
- criar utilizadores
- apagar utilizadores
- pesquisar utilizadores

Todas as funções recebem uma ligação `db` (SQLite) e fazem `input()`/`print()` para interagir pelo terminal.

---

## Função: `criar_utilizador(db)`

### Objetivo
Criar um novo registo na tabela `utilizadores`.

### Parâmetros
- `db` (`sqlite3.Connection`): ligação ativa à base de dados

### Entradas pedidas ao utilizador (terminal)
- `nome`: nome do novo utilizador
- `senha`: senha do utilizador
- `tipo`: tipo do utilizador (`admin`, `cliente` ou `fornecedor`)

### O que faz (passo a passo)
1. Lê `nome`, `senha`, `tipo` com `input()`
2. Faz `INSERT INTO utilizadores (nome, senha, tipo)`
3. `db.commit()` para gravar
4. Se houver erro de SQLite, apanha `sqlite3.Error` e imprime a mensagem

### Tabela usada
- `utilizadores`

---

## Função: `apagar_utilizador(db)`

### Objetivo
Apagar um utilizador da tabela `utilizadores` pelo nome.

### Parâmetros
- `db` (`sqlite3.Connection`)

### Entradas (terminal)
- `nome`: nome do utilizador a remover

### O que faz
1. Executa `DELETE FROM utilizadores WHERE nome = ?`
2. Faz `commit`
3. Usa `cursor.rowcount` para confirmar se apagou alguém:
   - `> 0` → apagou
   - `0` → não encontrou o utilizador

### Tabela usada
- `utilizadores`

---

## Função: `pesquisar_utilizador(db)`

### Objetivo
Pesquisar utilizadores cujo nome contenha um termo.

### Parâmetros
- `db` (`sqlite3.Connection`)

### Entradas (terminal)
- `nome`: termo parcial a pesquisar

### O que faz
1. Executa:
   - `SELECT id, nome, tipo FROM utilizadores WHERE nome LIKE %termo%`
2. Mostra lista de resultados (id, nome, tipo)
3. Se não houver resultados, imprime aviso

### Tabela usada
- `utilizadores`
