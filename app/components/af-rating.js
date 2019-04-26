import Component from '@ember/component';

export default Component.extend({
    attributeBindings: ['tabindex'],
    tabindex: -1,
    didRender() {
        this.element.focus();
    }
});
