/// <reference types="cypress" />

/* Qual a diferença entre o timeout e o wait */
// O timeout define o tempo de espera para uma determinada ação, enquanto o wait define o tempo de espera para um elemento específico.

describe('Teste Utilizando Wait Timeout', () => {
    it('Utilizando Wait e Timeout', () => {
        cy.visit('/');
/* Vamos ver a diferenca entre o timeout e o wait  com o html do campo de pesquisa */

        cy.get('input[id="search"]').should('be.visible').type('Cypress'); // o timeout define o tempo de espera para a acao de digitar na pesquisa, enquanto o wait define o tempo de espera para o elemento especifico de pesquisa.
        cy.get('input[id="search"]').should('be.visible').type('Cypress').wait(3000).should('have.value', 'Cypress'); // o wait define o tempo de espera para o elemento especifico de pesquisa.



        // Comandos de pesquisa do google
        cy.get('#APjFqb') // O #APjFqb representa o campo de pesquisa do google foi modo responsivo e o wait define o tempo de espera para o elemento especifico de pesquisa.
        .should('be.visible').type('Automação de Testes').wait(3000).should('have.value', 'Automação de Testes');


        // Botão de pesquisa do google
        /* Vamos ver a diferenca entre o timeout e o wait com o html do botão de pesquisa */
        cy.get('.FPdoLc > center > .gNO89b' , {timeout: 30000}) // O .FPdoLc > center > .gNO89b representa o botão de pesquisa do google foi modo responsivo e o wait define o tempo de espera para o elemento especifico de pesquisa.
        .should('be.visible').click({force: true})

 
         
    
       
    })
})


/* 
🧠 Conceitos básicos
✅ timeout
É o tempo máximo que o Cypress vai esperar até que uma ação ou condição seja satisfeita.
Exemplo: esperar até que um elemento apareça na tela, ou que um texto esteja visível.
É configurado com:

cy.get('input[name="pesquisa"]', { timeout: 30000 }) // espera até 30 segundos o input aparecer
✅ wait
wait é um comando explícito de espera.

Você pode usar:
    cy.wait(3000) → espera 3 segundos, sem verificar nada.
    cy.wait('@alias') → espera uma requisição XHR ou interceptação de rede terminar.
Muito usado para garantir que algo carregou no backend antes de continuar.

📊 Comparação direta
Conceito	timeout	wait

O que é? Tempo máximo para uma ação automática	Espera explícita e manual

Quando usar? Quando Cypress precisa verificar algo	Quando você precisa pausar ou aguardar algo

Exemplo	cy.get('.botao', { timeout: 10000 })	cy.wait(3000) ou cy.wait('@getDados')

Recomendações	Ideal para esperar elementos aparecerem	Evite usar com tempo fixo; prefira intercepts

💡 Exemplo prático:
Imagine um campo de pesquisa que aparece com atraso após o carregamento:

Espera até 30 segundos para o input aparecer
    y.get('input[name="pesquisa"]', { timeout: 30000 }).type('exemplo')

Agora, com wait:
Espera 3 segundos fixos antes de procurar o input
    cy.wait(3000)
    cy.get('input[name="pesquisa"]').type('exemplo')
    
Diferença-chave:
Com timeout, o Cypress verifica repetidamente se o elemento apareceu até o tempo máximo (de forma inteligente).

Com wait, o Cypress apenas espera aquele tempo, mesmo que o elemento já tenha carregado antes.

✅ Boas práticas:
Prefira timeout ajustado ao invés de cy.wait(3000) para deixar os testes mais rápidos e resilientes.

Use cy.wait('@alias') com cy.intercept() para sincronizar com requisições reais da aplicação.
         */