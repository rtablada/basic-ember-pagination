import Ember from 'ember';

export default Ember.Controller.extend({
    queryParams: ['page'],
    page: 1,

    actions: {
        togglePage: function() {
            if (this.get('page') == 1) {
                this.set('page', 2);
            } else {
                this.set('page', 1);
            }
        }
    }
})
