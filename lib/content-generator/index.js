'use strict';

const StaticSiteJson = require('broccoli-static-site-json');

const contentsJson = new StaticSiteJson('questions', {
  contentFolder: 'questions',
  collate: true,
  attributes: [
    'choices', 
    'hasOther',
    'isRequired', 
    'max',
    'min', 
    'options',
    'question',
    'type'
  ]
});

module.exports = {
  name: require('./package').name,

  isDevelopingAddon() {
    return true;
  },

  treeForPublic() {
    return contentsJson;
  }
};