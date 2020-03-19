import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import 'semantic-ui-css/semantic.min.css';
import '../src/index.css';

addDecorator(withKnobs);
