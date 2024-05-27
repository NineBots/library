import Route from '@ember/routing/route';
import {inject as service} from '@ember/service'

export default Route.extend({
    queryParams:{
        search: {
            refreshModel: true
        },
        tags_search: {
            refreshModel: true
        },
    },

    dataService: service('data'),

    model({ search, tags_search }){
        if(search){
            return this.get("dataService").searchAll(search) ;
        }
        else if (tags_search){
            return this.get("dataService").searchTags(tags_search);
        }
        else{
            return this.get("dataService").getBooks();
        }
    },




});
