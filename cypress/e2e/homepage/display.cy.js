describe('display the homepage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  it('display the landing page', () => {
    cy.get('h1').contains('The Future of learning is here');
  });
});
