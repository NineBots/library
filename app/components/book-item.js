import Component from '@ember/component';
import {inject as service} from '@ember/service'

export default Component.extend({
    dataService: service('data'),
    actions:{
        deleteBookItem(id){
            this.get("dataService").deleteBook(id);
        }
    }
});
