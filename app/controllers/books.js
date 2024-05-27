import Controller from '@ember/controller';
import {inject as service} from '@ember/service'
export default Controller.extend({
    queryParams: ["search", "tags_search"],
    search: '',
    tags_search: '',
    dataService: service('data'),
    actions: {
        
        searchWithFields(e){
            e.preventDefault();

            this.transitionToRoute('books', {"queryParams": {"search": this.get('search')}});
        },

        searchWithTags(e){
            e.preventDefault();

            this.transitionToRoute('books', {"tags_search": this.get('tags_search')});

        },

    },
});
