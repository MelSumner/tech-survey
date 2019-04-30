import Component from '@ember/component';

export default Component.extend({
    actions: {
        changed(value) {
            let values;
            if (!this.answerValue) {
                values = [value];
            } else if (this.answerValue.includes(value)) {
                values = [...this.answerValue.filter(item => item !== value)];
            } else {
                values = [...this.answerValue, value];
            }

            this.set('answerValue', values);
        }
    }
});
