import { mount } from '@cypress/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

describe('Frame.Header', () => {
  
  it('should show the title of the application', () => {
    mount(
      <MemoryRouter 
          initialEntries={["/"]}
          initialIndex={0}
      >
      <Header />
      </MemoryRouter>
    );
    
    cy.get('h1').contains('Cogishpere');
  });
  
  it('should highligh collection when in /collection', () => {
      mount(
        <MemoryRouter 
            initialEntries={["/collection"]}
            initialIndex={0}
        >
        <Header />
        </MemoryRouter>
      );
      
      cy.get('a.active').should('have.attr', 'href', '/collection');
  });
  
  it('should highligh catalogue when in /catalogue', () => {
      mount(
        <MemoryRouter 
            initialEntries={["/catalogue"]}
            initialIndex={0}
        >
        <Header />
        </MemoryRouter>
      );
      
      cy.get('a.active').should('have.attr', 'href', '/catalogue');
  });
});
