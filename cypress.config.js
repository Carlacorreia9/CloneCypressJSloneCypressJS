const { defineConfig } = require("cypress");

module.exports = defineConfig({


  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      this.baseUrl = 'https://agendamentocad.jaboatao.pe.gov.br/login/';
      this.chromeWebSecurity = false //desabilita o chrome web security ou seja desabilita o ssl no chrome que é o que faz o agendamento funcionar no chrome e não no firefox ou safari por exemplo que nao aceitam o ssl por padrão. SSL É UM PROTOCOLO DE SEGURAÇÃO QUE FAZ O ENVIO DE DADOS SEGUROS ENTRE UM SERVIDOR E UM CLIENTE.
      this.defaultCommandTimeout = 10000
      this.video = true // habilita o video no cypress
      screenshots = true
      this.pageLoadTimeout = 50000 // tempo de carregamento da pagina
      this.responseTimeout = 50000 // tempo de resposta da pagina api ou banco de dados
      this.numTestsKeptInMemory = 50 // numero de testes mantidos em memoria ao mesmo tempo ao executar os testes em paralelo ou em sequencia no cypress run ou no cypress open
      return config // retorna o config
    },
  },
});
