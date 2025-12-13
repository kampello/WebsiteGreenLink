---
title: Main
sidebar_position: 2
---

# main.py

## Objetivo do ficheiro

O ficheiro `main.py` é o **ponto de entrada do sistema GreenLink**.

É aqui que:
- a base de dados é inicializada
- o utilizador faz login
- o tipo de utilizador é identificado
- o controlo é passado para o painel correto (Admin, Cliente ou Fornecedor)

Em termos simples: **o programa começa sempre aqui**.

---

## O que o `main.py` faz

De forma geral, o fluxo do programa é o seguinte:

1. Abre a ligação à base de dados SQLite
2. Pede credenciais ao utilizador (login)
3. Verifica o tipo de utilizador
4. Cria o objeto correspondente:
   - `Admin`
   - `Cliente`
   - `Fornecedor`
5. Chama o método `menu()` da classe correta
6. Mantém o sistema em execução até o utilizador sair

---

## Papel no trabalho colaborativo

O `main.py` foi pensado para:
- não conter lógica de negócio pesada
- apenas coordenar o fluxo do sistema

Toda a lógica específica fica:
- nas classes (`classes/`)
- nas ferramentas (`tools/`)

Isto facilita o trabalho em equipa, porque:
- mexer no login não afeta pedidos ou produtos
- cada pessoa pode trabalhar num módulo diferente

---

## Dependências principais

O `main.py` depende de:
- `classes.admin.Admin`
- `classes.cliente.Cliente`
- `classes.fornecedor.Fornecedor`
- base de dados SQLite (`greenlink.db`)

---

## Nota final

Se o sistema não arranca ou o login falha,
o primeiro ficheiro a verificar deve ser sempre o `main.py`,
porque ele controla toda a entrada do programa.
