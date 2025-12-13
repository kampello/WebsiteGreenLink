---
title: goals_manager
sidebar_position: 4
---

# `tools/admin_tools/goals_manager.py`

## O que este módulo faz

Este módulo permite ao admin trabalhar com **objetivos mensais**, guardados na tabela `objetivos_mensais`:
- definir objetivos (produção, vendas, receita)
- ver objetivos e percentagens de cumprimento

---

## Função: `definir_objetivos(db)`

### Objetivo
Inserir um novo objetivo mensal na tabela `objetivos_mensais`.

### Parâmetros
- `db` (`sqlite3.Connection`)

### Entradas (terminal)
- `mes` (`YYYY-MM`)
- `objetivo_producao` (float)
- `objetivo_vendas` (float)
- `objetivo_receita` (float)

### O que faz
1. Lê valores com `input()`
2. Converte para `float` (produção, vendas e receita)
3. Executa `INSERT INTO objetivos_mensais (...) VALUES (...)`
4. Faz `db.commit()`
5. Imprime confirmação

### Tabela usada
- `objetivos_mensais`

---

## Função: `ver_objetivos(db)`

### Objetivo
Mostrar todos os objetivos mensais e o desempenho.

### Parâmetros
- `db` (`sqlite3.Connection`)

### O que faz
1. `SELECT * FROM objetivos_mensais ORDER BY mes`
2. Se não houver registos → imprime "Nenhum objetivo definido ainda."
3. Para cada mês:
   - lê os campos reais e objetivos
   - calcula percentagens:
     - `pct_prod = (real_prod / obj_prod) * 100` (se `obj_prod != 0`)
     - `pct_vend = (real_vend / obj_vend) * 100` (se `obj_vend != 0`)
     - `pct_rec = (real_rec / obj_rec) * 100` (se `obj_rec != 0`)
4. Imprime resumo por mês

### Tabela usada
- `objetivos_mensais`

> Nota: este módulo assume que a tabela já tem colunas para valores reais (`real_prod`, `real_vend`, `real_rec`).
