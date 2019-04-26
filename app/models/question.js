import DS from 'ember-data';
import { computed } from '@ember/object';
const { Model } = DS;

export default Model.extend({
  content: DS.attr(),
  hasOther: DS.attr(),
  html: DS.attr(),
  isRequired: DS.attr(),
  max: DS.attr('number', { defaultValue: 5 }),
  min: DS.attr('number', { defaultValue: 1 }),
  options: DS.attr(),
  question: DS.attr(),
  type: DS.attr(),

  questionName: computed('id', function() {
    return this.id.split('-').slice(1).join('-');
  }),
});
