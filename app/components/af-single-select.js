import Component from '@ember/component';

export default Component.extend({
    actions: {
        changed(value) {
            this.set('answerValue', value);
        }
    }
});
