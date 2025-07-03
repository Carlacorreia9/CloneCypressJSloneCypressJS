/// <reference types="cypress" />

describe('Teste na tela Infex', () => {

    beforeEach(function () {   
        cy.visit('/');
    })

    it('Teste Botão de texto',()=>{
        cy.get('button')
        .contains('Texto')
        .should('be.visible').click();

        /*Verificar texto da página */

        cy.get('div[class="all"]').find('h1[class="title"]')
        .should('have.text', 'Tela de Texto');

        cy.get('div[class="all"]').find('h2[class="subtitle"]')
        .should('have.text', 'Subtítulo da Tela');

        cy.get('div[class="all"]').find('p[class="text"]')
        .should('have.text', 'Texto da Tela');

        cy.get('a[href="https://agendamentocad.jaboatao.pe.gov.br/static/img/logo.png"]').find('button')
        .contains('Voltar').should('be.visible').click();
    })
})