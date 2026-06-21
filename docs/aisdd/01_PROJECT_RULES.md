# AISDD - 01_PROJECT_RULES

Este documento define as regras operacionais imutáveis do projeto Portfolio Anderson Matheus Albuquerque (OpsAI Builder). Estas regras são contratos rigorosos que devem ser seguidos por qualquer IA ou desenvolvedor para manter a estrutura saudável e consistente.

## ⚙️ Regras Globais do Projeto
- **Garantir Portabilidade:** O site deve ser totalmente estático e pronto para deploy ou hospedagem servida (como Cloudflare Pages, GitHub Pages ou AI Studio).
- **Zero Servidor/Carga Financeira:** Sem bancos de dados pesados, chamadas pagas de nuvem e servidores backend caros ativos por padrão. Usar Mock reativo no lado do cliente ou dados mockados estáticos no arquivo `portfolioData.ts` para segurança.
- **Idioma Mandatório:** Português do Brasil (pt-BR) para todo o conteúdo legível pelo usuário final.
- **Não Inventar Dados:** Proibido inventar formações acadêmicas fantásticas, certificados que não existem ou marcas/clientes confidenciais da rotina profissional real de Anderson.

## 💻 Convenções Técnicas
- **Tecnologias:** React 19 (Vite), Tailwind CSS 4, Lucide React (ícones), Motion/React (animações).
- **Tipagem Estrita:** TypeScript obrigatório. Sem o uso de `any` implícito.
- **Organização de Modulares:** Componentes de visualização devem ser mantidos de forma modular em `/src/components/`, enquanto os dados dinâmicos do portfólio ficam centralizados em `/src/data/portfolioData.ts` para fácil manutenção e configuração.
- **Imports Limpos:** Imports de React e bibliotecas sempre no topo. De preferência imports nomeados.

## ⚠️ Restrições Críticas (Anti-Alucinações)
- **Não Adicione Componentes Extras sem Pedido:** Não crie páginas redundantes, modais fantasmas ou sub-menus não requisitados. Menos é mais; mantenha-se alinhado ao escopo original de landing page responsiva de página única.
- **Respeito aos Componentes Existentes:** Sempre use `view_file` antes de injetar algo em arquivos existentes. Não remova as tags de IDs ou lógicas interativas incluídas anteriormente (ex: simuladores em tempo real na Hero e Projects).
- **Verificação Contínua:** Rodar o Linter (`npm run lint` ou `tsc --noEmit`) e validar o Build (`npm run build`) após cada alteração incremental.
