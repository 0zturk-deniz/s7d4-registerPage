
import { errorMessages } from "../../src/components/Register";
beforeEach(() => {
  cy.visit("http://localhost:5173/");
});
describe('Register Page', () => {
  describe('Error Messages', () => {
    it('name input throws errors for 2 input chars', () => {
      cy.get('[data-cy="ad-input"]').type("de");
      cy.contains(errorMessages.ad);
    });
    it('surname input throws errors for 1 input chars', () => {
      cy.get('[data-cy="soyad-input"]').type("ö");
      cy.contains(errorMessages.soyad);
    });
    it('email input throws errors for emre@wit.', () => {
      cy.get('[data-cy="email-input"]').type("emre@wit.");
      cy.contains(errorMessages.email);
    });
    it('password input throws errors for 1234.', () => {
      cy.get('[data-cy="password-input"]').type("1234");
      cy.contains(errorMessages.password);
    });
    it('button is disabled for unvalidated inputs.', () => {
      cy.get('[data-cy="password-input"]').type("1234");
      cy.get('[data-cy="submit-button"]').should("be.disabled");
    });
  });
  describe('Form inputs validated', () => {
    it('button enabled for validated inputs', () => {
      cy.get('[data-cy="ad-input"]').type("deniz");
      cy.get('[data-cy="soyad-input"]').type("öztürk");
      cy.get('[data-cy="email-input"]').type("emre@wit.com.tr");
      cy.get('[data-cy="password-input"]').type("1234abAc!*");
      cy.get('[data-cy="submit-button"]').should("be.enabled");
    });
    it('submits form on validated input', () => {
      cy.get('[data-cy="ad-input"]').type("deniz");
      cy.get('[data-cy="soyad-input"]').type("öztürk");
      cy.get('[data-cy="email-input"]').type("emre@wit.com.tr");
      cy.get('[data-cy="password-input"]').type("1234abAc!*");
      cy.get('[data-cy="submit-button"]').click();
      cy.get('[data-cy="response-message"]').should("be.visible");
    });
  });
});