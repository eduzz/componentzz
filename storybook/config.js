import { configure, addDecorator } from '@storybook/react';
import GithubCorner from '@personare/react-storybook-decorator-github-corner';

addDecorator(GithubCorner);

function loadStories() {
    require('../stories/Main.js');
}

configure(loadStories, module);
