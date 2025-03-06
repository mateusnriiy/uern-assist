# Modelagem do Banco de Dados

**Documentação da modelagem do banco de dados do UERN-Assist. Atualmente, o projeto está em fase inicial contendo uma única tabela para armazenamento das solicitações de suporte.**

## 🎯 Tabela: `Solicitacoes`

| Nome do Campo | Tipo de Dados    | Restrições          |      Descrição          |
|---------------|------------------|---------------------|-------------------------|
| `Id`          | `INT`            | `PRIM. KEY ID(1,1)` | Id  único da solicitação|
| `Nome`        | `VARCHAR(255)`   | `NOT NULL`          | Nome do solicitante     |
| `PcId`        | `VARCHAR(255)`   | `NOT NULL`          | Id do computador        |
| `FeedBack`    | `TEXT`           | `NOT NULL`          | Descrição do problema   |
| `Departamento`| `VARCHAR(255)`   | `NULL`              | Departamento relacionado|
| `Status`      | `VARCHAR(50)`    | `DEFAULT 'Pendente'`| Status da solicitação   |
| `DataCriacao` | `DATETIME`       | `DEFAULT GETDATE()` | Data de criação         |

---

## 📌 Melhorias Futuras

**Futuramente, haverá autenticação de usuário, com níveis de restrições, para poder realizar alterações dos status de cada solicitação, excluir, entre outras funcionalidades. Abaixo as possíveis próximas tabelas a serem criadas:**

- **Autenticação de Usuários** (Tabela `Usuarios`)
- **Histórico de Alterações** (Tabela `HistoricoSolicitacoes`)