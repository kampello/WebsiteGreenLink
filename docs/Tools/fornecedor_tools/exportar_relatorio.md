---
title: exportar_relatorio
sidebar_position: 4
---

# tools/fornecedor_tools/exportar_relatorio.py

## Objetivo do ficheiro

Este ficheiro permite ao fornecedor **gerar um relatório de vendas**,
com quantidades vendidas e receita total.

Serve principalmente para análise e acompanhamento do negócio.

---

## Função: `exportar_relatorio_vendas(db, fornecedor_nome)`

### O que faz
Gera um relatório de vendas no terminal.

### Parâmetros
- `db` (`sqlite3.Connection`)
- `fornecedor_nome` (`str`)

### Funcionamento
1. Percorre todos os produtos
2. Soma:
   - quantidade vendida
   - receita total
3. Mostra relatório por produto
4. Mostra totais no final

### Tabelas usadas
- `produtos`
- `pedidos`

---

## Nota de equipa

Este ficheiro dá ao fornecedor uma visão clara das vendas
sem precisar exportar dados manualmente da base de dados.
