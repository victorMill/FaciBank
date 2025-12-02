🧍 ClienteService

Objetivo: Gerenciar o ciclo de vida dos clientes.

Regras:

Criação de cliente

E-mail deve ser único.

CPF deve ser único e válido.

Nome e data de nascimento são obrigatórios.

Ao criar cliente, cria-se automaticamente um registro de status ativo.

Senha deve ser validada e hasheada (bcrypt).

Atualização de dados

Somente campos não sensíveis (nome, telefone, endereço) podem ser alterados.

E-mail e CPF não podem ser alterados após criação.

Caso haja tentativa de alteração, lançar ConflictError.

Desativação

Cliente não pode ser deletado (soft delete → flag ativo = false).

Antes da desativação, verificar se:

Há contas ativas com saldo positivo (impedir).

Há transações pendentes (impedir).

Busca

Buscar por ID, CPF ou e-mail.

Retornar apenas clientes ativos, a menos que o parâmetro incluirInativos seja explícito.

🏦 ContaService

Objetivo: Lidar com contas bancárias vinculadas a clientes.

Regras:

-Criação de conta

Cada cliente pode ter no máximo 1 conta corrente e 1 conta poupança.

Número da conta deve ser único.

Saldo inicial deve ser 0.

Conta deve estar vinculada a um cliente ativo.

-Atualização

Tipo de conta (corrente/poupança) não pode ser alterado.

Somente o status (ativa/inativa) pode ser atualizado internamente pelo banco.

-Encerramento

Só pode ser encerrada se o saldo for 0 e não houver transações pendentes.

-Consulta

Buscar por número da conta, cliente ou tipo.

Se o cliente for inativo, impedir acesso às contas.

💸 TransacaoService

Objetivo: Gerenciar movimentações financeiras entre contas.

Regras:

Depósito

Apenas contas ativas podem receber depósito.

Valor mínimo: R$ 1,00.

Valor máximo: R$ 10.000,00 por operação.

Registrar log e histórico com timestamp.

Saque

Conta deve estar ativa e saldo suficiente.

Valor mínimo: R$ 20,00.

Saques acima de R$ 5.000 exigem autenticação reforçada (ex: token 2FA).

Transferência

Conta origem e destino devem estar ativas.

Não pode transferir para a mesma conta.

Taxa de 1% se destino for de outro banco.

Registrar operação em ambas as contas.

Reversão

Somente admins podem reverter transações.

Só é possível reverter transações do mesmo dia.

Registrar motivo e ID da reversão.

🔐 AutenticacaoService

Objetivo: Garantir login seguro e tokens válidos.

Regras:

Login

Verificar se cliente existe e está ativo.

Validar senha (bcrypt.compare).

Gerar token JWT com expiração de 24h.

Renovação de token

Requer token de refresh válido.

Regenerar token de acesso.

Logout

Invalida o token de refresh atual.

📊 RelatorioService

Objetivo: Gerar relatórios e extratos.

Regras:

Extrato

Filtrar por período e tipo de transação.

Permitir exportar em PDF ou CSV.

Garantir que apenas o dono da conta ou o admin possa consultar.

Relatórios administrativos

Somente admins.

Permitir ver volume total de transações, saldos médios e clientes ativos.
