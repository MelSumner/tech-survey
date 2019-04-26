import Route from '@ember/routing/route';

export default Route.extend({
    model(params) {
        let question = this.store.peekRecord('question', params.id);

        if(!question) {
            this.transitionTo('index');
        }

        return question;
    }
});
