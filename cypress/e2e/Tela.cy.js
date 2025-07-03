describe('Teste a Página de Login', () => {
    it('Verificar campos de login e senha', () => {
        cy.visit('/'); // Acessa a URL da aplicação ou rota desejada e também o diretorios que deseja acessar ex: /login ou /cadastro

        cy.get('input[id="login"]')
            .should('be.visible')

        cy.get('input[id="login"]')
            .click().type('carla.souza').should('have.value', 'carla.souza');
        cy.log('Login digitado');

        cy.get('input[id="senha"]')
            .should('be.visible')

        cy.get('input[id="senha"]')
            .click().type('123456').should('have.value', '123456');
        cy.log('Senha digitada');

        /* VERIFICA QUE A IMAGEM DO PROJETO EXISTE */
        cy.get('img[src="https://agendamentocad.jaboatao.pe.gov.br/static/img/logo.png"]')
            .should('be.visible')

        cy.get('img[class="margin-left"]')
            .should('be.visible')

        /* VERIFICA SE O BOTÃO ENTRAR, SALVAR , LOGIN, E OUTRAS  EXISTE  */

        cy.get('input[value="Entrar"]').contains('Entrar')
            .should('be.visible').click();





    
           

       
    });
});