import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  choices: DS.attr(),
  hasOther: DS.attr(),
  max: DS.attr('number', { defaultValue: 5 }),
  min: DS.attr('number', { defaultValue: 1 }),
  type: DS.attr(),
});
