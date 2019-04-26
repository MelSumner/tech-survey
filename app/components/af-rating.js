import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    attributeBindings: ['tabindex'],
    tabindex: -1,
    didRender() {
        this.element.focus();
    },

    options: computed('model.{min,max}', function() {
        let options = [];

        for (let i = this.model.min; i <= this.model.max; i++) {
            options.push(i);
        }

        return options;
    }),

    actions: {
        changed(value) {
            this.set('answerValue', value);
        }
    }
});
