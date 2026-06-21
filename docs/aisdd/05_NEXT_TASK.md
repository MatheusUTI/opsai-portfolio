# AISDD - 05_NEXT_TASK

Este documento especifica estritamente a próxima alteração sequencial a ser planejada e executada de maneira incremental neste repositório.

## ✅ Ciclo Concluído: Revisão e Preparação para o Cloudflare Pages
O projeto de portfólio completo foi revisado estruturalmente, as metatags foram inseridas em `index.html` e a estrutura de deploy automático foi descrita no `README.md` raiz. O build estático está 100% verde para publicação.

---

## 📌 Próxima Tarefa Proposta (A ser iniciada no Ciclo 03)
Evoluir a interatividade de tomada de decisão do portfólio de Anderson através de uma ferramenta dinâmica que simula o dia a dia na pesagem de cargas e frete.

**Nova Funcionalidade Planejada:**
> **Implementar uma Calculadora de Viabilidade Logística Interativa na seção Áreas de Atuação/Projetos.**

### 🎯 Objetivos específicos da próxima tarefa:
1. Permitir que o usuário insira a distância (km), o valor de mercado de frete oferecido e o peso de carga.
2. Usar uma equação prática simples baseada em consumo médio de diesel de caminhão, pedágios aproximados e diárias para simular a margem de custos real da viagem em tempo real.
3. Expor na tela um indicador ativo: "ROTA LUCRATIVA 🟢" ou "AJUSTAR FRETE 🔴".
4. Garantir que todo esse cálculo aconteça no client-side sem chamadas API custosas ou backend, mantendo a gratuidade no Cloudflare Pages.

### 📝 Escopo do Próximo Incremento
- Criar o arquivo `/src/components/LogisticsCalculator.tsx` ou injetá-lo cirurgicamente como sub-componente na seção `Projects` ou `Areas`.
- Atualizar os dados de exportação em `src/data/portfolioData.ts`.
- Manter o tema "Natural Tones" intacto na calculadora.

