'use strict';

const { readdirSync } = require('fs');
const { join } = require('path');

module.exports = {
  description: 'a blueprint to help you generate tech-survey questions',

  locals(options) {
    // Return custom template variables here.
    return {
      questiontype: options.type
    };
  },

  fileMapTokens(options) {
    // Return custom tokens to be replaced in your files
    return {
      __number__(options) {
        let existingFiles = readdirSync(join(process.cwd(), 'questions'));

        let numbers = existingFiles.map((filename) => {
          return parseInt(filename.split('-')[0])
        });

        let highestNumber = Math.max(...numbers);

        // Logic to determine value goes here
        return (highestNumber + 1).toString().padStart(2, '0');
      }
    };
  },

  // afterInstall(options) {
  //   // Perform extra work here.
  // }
};
