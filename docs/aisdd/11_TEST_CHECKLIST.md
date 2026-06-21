# AISDD - 11_TEST_CHECKLIST

Roteiro completo de testes manuais táticos que garante a estabilidade de produção a cada nova manipulação incremental.

## 🧪 Casos de Teste Essenciais (Critérios de Regressão)

### TC-001: Responsividade do Menu Mobile
1. Reduzir a largura da janela para menos de 768px (Mobile view).
2. Tocar no botão hambúrguer. O menu deve abrir suavemente revelando as seções.
3. Clicar em "Projetos" ou "AISDD". O menu deve fechar imediatamente e rolar a página até a seção âncora correspondente com folga de margem do topo.

### TC-002: Alternador de Abas de Simulação de Projetos
1. Rolar até a seção "Projetos em Desenvolvimento".
2. Clicar sucessivamente em: "Sistema de Roteirização", "Casa em Dia" e "AISDD Framework".
3. Avaliar se o terminal lateral apresenta dados consistentes para cada projeto (Script TMS, Schema Kotlin Room e Document Prompt correspondentes).

### TC-003: Seleção e Leitura de Documentos do AISDD Interactive
1. Rolar até a seção do Framework AISDD.
2. Clicar em qualquer badge de arquivo (Ex: `PROJECT_RULES`, `ACCEPTANCE_CHECKS` ou `HANDOFF`).
3. Validar se o renderizador de Markdown atualiza no sandbox lateral com o título exato do arquivo, o objetivo do envelope e o conteúdo fictício/especificado em menos de 100ms.

### TC-004: Formulário de Contato e Sucesso
1. Inserir Nome fictício e e-mail no formulário de contato.
2. Clicar em "Enviar Mensagem".
3. Validar se o formulário limpa e exibe a tela de Sucesso customizada com o nome do usuário injetado de forma nativa e botão operacional de reset.
