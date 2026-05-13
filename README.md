<p align="center">
# GitParty
</p>

<p align="center">
  Plataforma moderna de gerenciamento de eventos, inscrições e organização de participantes.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Em%20Desenvolvimento-6C3CF7">
  <img src="https://img.shields.io/badge/Node.js-Backend-2563EB">
</p>

---

#  Sobre o Projeto

O **GitParty** é uma plataforma web desenvolvida para gerenciamento de eventos com controle de inscrições e capacidade limitada.

O sistema permite que organizadores criem e administrem eventos enquanto participantes podem realizar inscrições, acompanhar status e visualizar eventos disponíveis em tempo real.

A aplicação foi projetada utilizando conceitos modernos de UI/UX, priorizando:

- Organização visual
- Navegação intuitiva
- Responsividade
- Performance
- Experiência do usuário
- Interface moderna e profissional

O protótipo inicial da interface foi desenvolvido utilizando o **Google Stitch**.

---

#  Funcionalidades

##  Autenticação
- Cadastro de usuários
- Login com autenticação
- Controle de sessão
- Área do usuário

---

##  Gerenciamento de Eventos
- Criar eventos
- Editar eventos
- Cancelar eventos
- Encerrar eventos
- Controle de capacidade máxima
- Upload de imagens

---

##  Sistema de Inscrição
- Inscrição em eventos
- Lista de espera automática
- Cancelamento de inscrição
- Atualização de status em tempo real

---

##  Painel Administrativo
- Dashboard administrativo
- Lista de inscritos
- Gerenciamento de participantes
- Controle de vagas

---

##  Interface Interativa
- Toasts de confirmação
- Feedback visual
- Modais de confirmação
- Empty states
- Layout responsivo

---

#  Tecnologias Utilizadas

## Front-end
```txt
HTML
CSS
JavaScript
```

## Back-end
```txt
Node.js
Express
```

## Banco de Dados
```txt
MySQL
Prisma ORM
```

## Ferramentas
```txt
Git
GitHub
VS Code
Google Stitch
Figma
```


---

#  Tela de Login / Cadastro

Sistema responsável pela autenticação e criação de contas.

## Elementos
```txt
• Campo de e-mail
• Campo de senha
• Campo de nome
• Botão de login
• Botão de cadastro
• Alternância entre login e cadastro
• Feedback visual
```

---

# Dashboard do Usuário

Área principal com listagem de eventos disponíveis.

## Elementos
```txt
• Cards de eventos
• Imagem do evento
• Título
• Data
• Local
• Status do evento
• Botão “Inscrever-se”
• Feedback de vagas
```

## Filtros
```txt
ATIVO
CANCELADO
ENCERRADO
```

## Minhas Inscrições
```txt
CONFIRMADA
LISTA_ESPERA
CANCELADA
```

---

#  Detalhe do Evento

Tela completa de informações do evento.

## Elementos
```txt
• Banner do evento
• Título
• Descrição
• Data
• Local
• Barra de progresso
• Quantidade de inscritos
• Capacidade máxima
• Botão de inscrição
• Botão de cancelamento
```

---

#  Painel Administrativo

Área de gerenciamento dos eventos.

## Recursos
```txt
• Criar evento
• Editar evento
• Cancelar evento
• Encerrar evento
• Gerenciar inscritos
• Atualizar status
• Lista de espera
```

---

#  Componentes Globais

```txt
• Header responsivo
• Navegação principal
• Avatar do usuário
• Toast notifications
• Modal de confirmação
• Empty states
```

---

#  Estilo Visual

## Características
```txt
• Interface moderna
• Layout minimalista
• Cards arredondados
• Sombras suaves
• Espaçamento generoso
• Grid responsivo
• Componentes organizados
```

---

#  Paleta de Cores

| Tipo | Código |
|------|------|
| Roxo Principal | `#6C3CF7` |
| Azul Profundo | `#2563EB` |
| Âmbar/Laranja | `#F59E0B` |
| Fundo Claro | `#F3F4F6` |
| Texto Escuro | `#1F2937` |
| Verde Status | `#10B981` |
| Amarelo Status | `#FBBF24` |
| Vermelho Status | `#EF4444` |

---

---

#  Público-Alvo

```txt
• Organizadores de eventos universitários
• Organizadores corporativos
• Eventos culturais
• Equipes administrativas
• Participantes de eventos
```

## Faixa Etária
```txt
18–40 anos
```

---

#  Prompt Utilizado no Google Stitch

```txt
 Descrição do Projeto

Sistema web de gerenciamento de eventos com cadastro de usuários, criação e administração de eventos, controle de inscrições e lista de espera.

A plataforma permite que organizadores criem eventos com capacidade limitada, e que participantes se inscrevam, visualizem status (confirmada, lista de espera ou cancelada) e acompanhem os eventos disponíveis.

 Telas e Elementos

1. Tela de Login / Cadastro

- Formulário de login (e-mail + senha)
- Formulário de cadastro (nome, e-mail, senha)
- Botão de alternância entre login e cadastro

2. Dashboard do Usuário

- Lista de eventos disponíveis
- Cards com título, data, local, status e imagem
- Filtro por status:
  • ATIVO
  • CANCELADO
  • ENCERRADO

- Botão “Inscrever-se”
- Feedback de vagas disponíveis

- Seção “Minhas Inscrições”
  • CONFIRMADA
  • LISTA_ESPERA
  • CANCELADA

3. Detalhe do Evento

- Imagem de capa
- Título
- Descrição
- Data
- Local
- Barra de progresso de capacidade
- Botão de inscrição
- Botão de cancelamento
- Status em destaque

4. Painel do Administrador

- Tabela de eventos
- Criar evento
- Editar evento
- Cancelar evento
- Encerrar evento

- Formulário:
  • Título
  • Descrição
  • Data
  • Local
  • Capacidade máxima
  • Upload de imagens

- Lista de inscritos
- Status da inscrição
- Data de inscrição
- Botão para mover usuário da lista de espera

5. Componentes Globais

- Header com navegação
- Avatar do usuário
- Toast notifications
- Modal de confirmação
- Empty states

 Estilo e Cor

Estilo:
- Moderno
- Limpo
- Profissional

Inspirado em:
- Sympla
- Eventbrite
- Linear
- Notion

Paleta:
- Roxo #6C3CF7
- Azul #2563EB
- Âmbar #F59E0B
- Cinza #F3F4F6
- Texto #1F2937

Status:
- Verde #10B981
- Amarelo #FBBF24
- Vermelho #EF4444

Tipografia:
- Inter
- DM Sans

Layout:
- Cards arredondados
- Sombras suaves
- Grid responsivo
- Espaçamento generoso
```

---

---

# 🔗 Referências

```txt
Sympla
Eventbrite
Linear
Notion
Tailwind UI
shadcn/ui
Lucide Icons
Heroicons
```

---

GitHub:
```txt
https://github.com/julianopls
```
