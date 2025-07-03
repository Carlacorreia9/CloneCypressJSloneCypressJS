/// <reference types="cypress"/>

describe('Testar Tela fa Imagem', () => {

    beforeEach(function () {   
        cy.visit('/');
    })

    it('Teste Botão da Imagem',()=>{

        cy.get('a[href="https://agendamentocad.jaboatao.pe.gov.br/static/img/logo.png"]')
            .should('be.visible').click();

    /** VERIFICA SE O BOTÃO de voltar está visivel na tela */

        cy.get('a[src="https://agendamentocad.jaboatao.pe.gov.br/static/img/logo.png"]')
            .should('be.visible')

    /* Verificar o Titulo da pagina */

        cy.get('h1[class="title"]')
            .should('be.visible')

    /*Verificar se a Imagem existe na tela */

        cy.get('img[src="https://agendamentocad.jaboatao.pe.gov.br/static/img/logo.png"]')
            .should('be.visible')
        
    })
    })
