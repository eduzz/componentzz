import React from 'react';
import ExampleComponent from '../src/ExampleComponent';
import ProfessionalCard from '../src/cards/ProfessionalCard';
import { storiesOf } from '@storybook/react';

storiesOf('Example Component', module)
    .add('example component', () => (
        <ExampleComponent text="First" />
    ))
    .add('example component 2', () => (
        <ExampleComponent text="Second" />
    ))

storiesOf('Professional Card', module)
    .add('example 1', () => (
        <ProfessionalCard name="Jonathas Rodrigues" profession="Front end developer" phone="9999999" email="jonathasprodrigues@gmail.com"site="http://jonathasrodrigues.com.br" />
    ));