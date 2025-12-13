---
title: Produto
sidebar_position: 1
---

# `classes/produto.py`

## O que este módulo faz

Este ficheiro define a classe `Produto`, uma estrutura simples para representar um produto no GreenLink.

Ele serve para guardar informação de um produto em memória (nome, preço e stock).  
Não tem menu, não faz prints e **não fala diretamente com a base de dados**.

---

## Classe `Produto`

### Objetivo
Guardar os dados essenciais de um produto:
- nome
- preço unitário
- stock disponível

### `__init__(nome, preco, stock)`

Cria um novo produto com os valores recebidos.

**Parâmetros**
- `nome` (`str`): nome do produto (ex.: `"Brócolos"`)
- `preco` (`float`): preço unitário (ex.: `2.50`)
- `stock` (`int`): quantidade em stock (ex.: `100`)

**O que guarda**
- `self.nome`
- `self.preco`
- `self.stock`
