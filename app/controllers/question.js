import Controller, { inject as controller } from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
    application: controller(),

    allQuestions: computed('application.model.[]', function() {
        return this.application.model.toArray();
    }),

    questionName: computed('model', function() {
      return this.model.id.split('-').slice(1).join(' ');
    }),

    questionNumber: computed('model', 'allQuestions.[]', function() {
      return this.allQuestions.indexOf(this.model) + 1;
    }),

    prevQuestion: computed('model', 'allQuestions.[]', function (){
      let index = this.allQuestions.indexOf(this.model);
      
      if (index === 0) {
        return null;
      } else {
        return this.allQuestions[index - 1];
      }
    }), 

    nextQuestion: computed('model', 'allQuestions.[]', function (){
      let index = this.allQuestions.indexOf(this.model);
      
      if (index >= this.allQuestions.length) {
        return null;
      } else {
        return this.allQuestions[index + 1];
      }
    }), 
});
