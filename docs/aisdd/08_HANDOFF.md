# AISDD - 08_HANDOFF

Este documento descreve como realizar a passagem de bastão sequencial de desenvolvimento para qualquer nova inteligência artificial ou desenvolvedor convidado a continuar o projeto.

## 👋 Olá, Desenvolvedor / Modelo de IA!
O portfólio já está totalmente robusto, linter em dia, com SEO correto e pronto para deploy automático no Cloudflare Pages através do GitHub.

### Para Continuar com Sucesso:
1. Comece lendo minuciosamente o arquivo `/src/data/portfolioData.ts` para entender as variáveis já mapeadas no layout.
2. Certifique-se de não quebrar as lógicas reativas e interativas existentes (como o trocador de abas nos projetos em `/src/components/Projects.tsx` e o selecionador dinâmico de documentações da seção em `/src/components/AISDDSection.tsx`).
3. Todas as dependências externas de ícones já estão bem mapeadas graças ao `lucide-react`. Não use SVGs cruas ou bibliotecas redundantes de gráficos para não inchar o bundle do compilador do Cloudflare Pages.
4. Rode sempre `npm run build` para garantir que novas atualizações de layout não geraram warnings estranhos de TypeScript.
5. Para deploys, siga o roteiro explícito contido no `README.md` localizado na raiz do projeto.


