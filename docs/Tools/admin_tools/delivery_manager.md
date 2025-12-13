---
title: delivery_manager
sidebar_position: 3
---

# `tools/admin_tools/delivery_manager.py`

## O que este módulo faz

Este módulo permite ao admin **acompanhar entregas** registadas no sistema.

A função principal lê todas as entregas da tabela `entregas` e imprime no terminal:
- datas previstas
- datas reais
- estado (no prazo / atrasado) com um ícone (🟢/🔴)

---

## Função: `ver_entregas(db)`

### Objetivo
Listar todas as entregas ordenadas pela data prevista.

### Parâmetros
- `db` (`sqlite3.Connection`): ligação ativa ao SQLite

### O que faz
1. Executa o `SELECT` na tabela `entregas`, devolvendo:
   - `id`, `produto`, `fornecedor`, `supermercado`, `data_prevista`, `data_real`, `status`
2. Ordena por `date(data_prevista) ASC`
3. Se não houver entregas:
   - imprime "Nenhuma entrega registada ainda."
4. Se houver entregas:
   - imprime bloco formatado por entrega
   - mostra 🟢 se `status == "no prazo"` senão 🔴

### Tabela usada
- `entregas`
