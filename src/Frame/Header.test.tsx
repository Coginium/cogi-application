import { mount } from '@cypress/react';
import Header from './Header';

it('renders learn react link', () => {
  mount(<Header />);
  cy.get('h1').contains('Cogisphere');
});