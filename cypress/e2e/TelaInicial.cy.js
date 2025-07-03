/// <reference types="cypress" />

describe('Testar Tela Inicial do Site', () => {

    beforeEach(function () {   
        cy.visit('/');
    })

context('Validação de Elementos na Página Inicial',()=>{  // context cria um bloco de teste que pode ser utilizado para agrupar os testes em um contexto especifico que pode ser utilizado para agrupar os testes em um contexto especifico que pode ser utilizado para agrupar os testes em um contexto especifico.

    it('Validar Titulo H1',()=>{

        cy.get('h1')
            .contains('Tela Inicial').should('have.text', 'Tela Inicial');

    })

// Validar Botão
     it('Validar Botão na tela',()=>{

        // Botão de voltar
        cy.get('a[href="./login.html"]').as('BtnVoltar') //.log('Botão Voltar Vísivel') é inspecionador 
            .should('be.visible').click()
        cy.log('Botão Voltar Vísivel')

        //cy.pause(2000) // Pausa o teste por 2 segundos

        cy.get('a[href="texto.html"]').as('BtnTexto') // O texto.html representa o botão de texto do site é inspecionador
            .should('be.visible').click()
        cy.log('Botão Texto Vísivel')


        cy.get('a[href="imagem.html"]').as('BtnImagem')  // O imagem.html representa o botão de imagem do site é inspecionador
            .should('be.visible').click()
        cy.log('Botão Imagem Vísivel')

        cy.get('input[btnCadastrarSalvar]').as('BtnSalvar') // O input[btnCadastrarSalvar] representa o botão de salvar do site é inspecionador
            .should('be.visible').should('have.value', 'Cadastrar').click()
        cy.log('Botão Salvar Vísivel')
        
    })

    // Validar Campo
    it('Validar campo',()=>{

        cy.get('input[id="txtNome"]')
            .should('be.visible')

        cy.get('input[id="numero"]')
            .should('be.visible')

        cy.get('input[id="dtpDataNascimento"]')
            .should('be.visible')

    })
    
// Validar Checkbox
   it('Validar Checkbox',()=>{

        cy.get('input[id="rdMasculino"]')
            .should('have.value', 'male').should('be.visible')
            

        cy.get('input[id="rdFeminino"]')
            .should('have.value', 'female').should('be.visible')

    })

// Validar Tabela
    it('Validar Tabelas',()=>{

        cy.get('h2')
            .contains('Tabelas').should('have.text', 'Tabelas');

        cy.get('tr').find(th).eq(0).should('have.text', 'Nome')
        cy.get('tr').find(th).eq(1).should('have.text', 'Idade')
        cy.get('tr').find(th).eq(2).should('have.text', 'Sexo')
        cy.get('tr').find(th).eq(3).should('have.text', 'Email')
        cy.get('tr').find(th).eq(4).should('have.text', 'Senha')
        cy.get('tr').find(th).eq(5).should('have.text', 'Telefone')


    })

    })


// Cadastrar Usuario ação para cadastrar um novo usuario
context('Cadastrando Usuario',()=>{

    cy.get('input[id=txtNome]')
        .click().type('Cypress').should('have.value', 'Cypress');
    cy.log('Nome digitado');


})

})

