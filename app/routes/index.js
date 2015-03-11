import Ember from 'ember';

export default Ember.Route.extend({
    queryParams: {
        page: {
            refreshModel: true
        }
    },
    model: function (params) {
        console.log(params);
        return this.store.findQuery('post', {
            page: params.page
        });
    }
});
