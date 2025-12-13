---
title: Toolbox - Cixa de Ferramentas do Sistema
sidebar_position: 1
---

# tools/Toolbox.py

## Objetivo do ficheiro

Este ficheiro funciona como uma **caixa de ferramentas geral** do projeto GreenLink.

A ideia do `Toolbox` é concentrar funções auxiliares ou comuns que podem ser usadas
por várias partes do sistema, evitando código repetido espalhado pelo projeto.

Num trabalho colaborativo, este tipo de ficheiro é importante porque:
- reduz duplicação de código
- facilita manutenção
- cria um ponto único para funções genéricas

---

## Papel no projeto

O `Toolbox.py` não representa um utilizador (como Admin, Cliente ou Fornecedor),
nem um menu principal.

Ele serve como **suporte** para outras partes do sistema,
sendo importado quando é preciso reutilizar alguma funcionalidade comum.

---

## Nota de equipa

Este ficheiro existe para tornar o projeto mais organizado.
Se no futuro for preciso adicionar funções genéricas (ex.: validações, helpers),
elas devem ser colocadas aqui em vez de noutros módulos.
