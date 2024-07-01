describe('booksApp tests', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  it('open booksApp page', () => {

    cy.get('.text-light > .ml-2').should('contain', 'Books list');

  });

  it('successful login', () => {

    cy.login("bropet@mail.ru", "123");
    
    cy.contains('Добро пожаловать bropet@mail.ru').should('be.visible');
  });

  it("cannot login without email", () => {

    cy.login("", "123");

    cy.get('#mail').then((elements) => {

      expect(elements[0].checkValidity()).to.be.false;
      expect(elements[0].validationMessage).to.be.eql('Заполните это поле.');
    });

  });

  it("cannot login without password", () => {

    cy.login("bropet@mail.ru", "");
  
    cy.get('#pass').then((elements) => {
  
      expect(elements[0].checkValidity()).to.be.false;
      expect(elements[0].validationMessage).to.be.eql('Заполните это поле.');
  
    });
  });

  it("add new book", () => {

    cy.login("bropet@mail.ru", "123");
    cy.contains('Add new').click();
    cy.get('#title').type('Alice\'s Adventures in Wonderland');
    cy.get('#description').type('The story of a girl named Alice who falls through a rabbit hole into a fantasy world of anthropomorphic creatures. There amazing adventures just begin!');
    cy.get('#authors').type('Lewis Carroll');
    cy.contains('Submit').click();
    
    cy.contains('Alice\'s Adventures in Wonderland').should('be.visible');
    cy.contains('Add to favorite').should('be.visible');
  });

  it("be able to download book", () => {

    cy.login("bropet@mail.ru", "123");
    cy.contains('Alice\'s Adventures in Wonderland').click();
        
    cy.contains('Dowload book').should('be.visible');
  });

  it("add book to favorites", () => {

    cy.login("bropet@mail.ru", "123");
    cy.contains('Alice\'s Adventures in Wonderland').should('be.visible');
    cy.contains('Add to favorite').click();
        
    cy.contains('Delete from favorite').should('be.visible');
  });
});
