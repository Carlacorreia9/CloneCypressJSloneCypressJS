describe('Testar a Página de Login', () => {
  it('Verificar campos de login e senha', () => {
    cy.visit('https://agendamentocad.jaboatao.pe.gov.br/login/');

    // Verifica o login
    cy.get('#id_sc_field_login', { timeout: 10000 })
      .should('be.visible')
      .type('carla.souza');
    cy.log('Login digitado');

    // Espera 3 segundos para ver se a senha aparece
    cy.wait(3000);

    // Tenta encontrar o campo de senha
    cy.get('input[type="password"]')
      .should('be.visible')
      .type('123456');
    cy.log('Senha digitada');

    // Clica no botão Entrar
    cy.get('input[type="submit"][value="Entrar"]')
      .should('be.visible')
      .click();

    // Verifica se não está mais na tela de login
    cy.url().should('not.include', '/login');
  });
});
