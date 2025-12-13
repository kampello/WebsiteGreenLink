---
title: delivery_actions
sidebar_position: 3
---

# tools/fornecedor_tools/delivery_actions.py

## Objetivo do ficheiro

Este ficheiro serve para o fornecedor **registar entregas**.
Aqui é guardada a informação de quando e onde os produtos foram entregues.

---

## Função: `registar_entrega(db, fornecedor_nome)`

### O que faz
Regista uma entrega feita pelo fornecedor.

### Parâmetros
- `db` (`sqlite3.Connection`)
- `fornecedor_nome` (`str`)

### Funcionamento
1. Lista produtos disponíveis
2. Fornecedor escolhe o produto
3. Insere supermercado e data prevista
4. O sistema define:
   - data real (data atual)
   - estado (`no prazo` ou `atrasado`)
5. Guarda na tabela `entregas`

> O estado é calculado comparando a data atual com a data prevista.

### Tabela usada
- `entregas`

---

## Nota de equipa

Este ficheiro é importante para o controlo logístico
e para permitir ao admin acompanhar entregas mais tarde.
