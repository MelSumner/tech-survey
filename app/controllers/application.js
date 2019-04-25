import Controller from '@ember/controller';
import config from 'ember-get-config';

const { survey } = config;

export default Controller.extend({
    config: survey,
});
