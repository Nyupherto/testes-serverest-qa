import {Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

let urlApi;
let response;

Given("que eu possuo o ID de um usuário não cadastrado", () => {
    urlApi = "https://serverest.dev/usuarios/bF65Cfrr0lKjaAkZ";
});
When("eu buscar pelas informações do usuário via API", () => {
  cy.request({
    method: "GET",
    url: urlApi,
    failOnStatusCode: false
  }).then((res) => {
    response = res;
  });
});
Then("a requisição deve falhar com o código {int}", (statusCode) => {
  expect(response.status).to.eq(statusCode);
});
Then("o sistema deve avisar {string}", (mensagem) => {
  const respostaEmTexto = JSON.stringify(response.body);
  expect(respostaEmTexto).to.include(mensagem);
});
