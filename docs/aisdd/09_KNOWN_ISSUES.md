# AISDD - 09_KNOWN_ISSUES

Mapeamento ativo de comportamentos ou defeitos potenciais em cenários de uso atípicos do repositório.

## 🐛 Pontos de Atenção Detectados

### 1. Comportamento Responsivo em Dispositivos Ultra-Pequenos (Ex: iPhone SE)
- **Descrição:** O simulador do Semi-TMS no painel lateral de Projetos exibe blocos de tabelas e códigos de importação que podem gerar barra de scroll horizontal se o visor possuir largura inferior a 340px.
- **Solução Atual:** Foi aplicado `overflow-x-auto` no container para garantir que a quebra não quebre a estrutura global do site. Para as próximas iterações de responsividade fina, avaliar a ocultação de colunas menos críticas no mobile.

### 2. scrollY dinâmico do Header transparente no iOS Safari
- **Descrição:** Algumas versões mais antigas do Safari Mobile demoram um pequeno delay para registrar o evento `window.scrollY > 20`, gerando leve atraso na transição do fundo transparente para o cinza-escuro/branco.
- **Tratamento:** O código utiliza `backdrop-blur-md` e classe de transição rápida de 300ms, o que suaviza consideravelmente a renderização nestes dispositivos móveis.
