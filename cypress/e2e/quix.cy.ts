describe('Quiz e2e test', () => {
    beforeEach(() => {
        cy.visit("http://localhost:3001/");
    });

    it('should start the quiz when I click the "Start Quiz" button', () => {
        //Arrange
        //Act
        cy.get('button').contains('Start Quiz').click();
        //Assert
        cy.get('button').contains('1').should("be.visible");
    });

    it('should display my score when I reach the end of the quiz', () => {
        //Arrange
        cy.get('button').contains('Start Quiz').click();
        //Act
        for (let i = 0; i < 10; i++) {
            cy.get('button').contains('1').click();
        }
        //Assert
        cy.get(".alert-success").should("be.visible").and('contain', 'Your score');
    });

    it('should start back at the beginning when you press the "start another quiz" button', () => {
        //Arrange
        cy.get('button').contains('Start Quiz').click();
        //Act
        for (let i = 0; i < 10; i++) {
            cy.get('button').contains('1').click();
        }
        cy.get('button').contains('Take New Quiz').click();
        cy.get('button').contains('1').should("be.visible");
    })
});