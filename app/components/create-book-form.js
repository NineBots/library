import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({

    didReceiveAttrs(){
        this._super(...arguments);
        this.setProperties({
            id: this.get('book.id'),
            name: this.get('book.name'),
            author: this.get('book.author'),
            pages: this.get('book.pages'),
            description: this.get('book.description'),
            photo: this.get('book.photo'),
            tags: this.get('book.tags'),
            rating: this.get('book.rating')
        });
    },

    listTags: computed('tags', function() {
        if(typeof this.get('tags') === 'string'){
            return this.get('tags').split(',');
        }
        else{
            return this.get('tags');
        }
    }),

    actions:{
        submitForm(e){
            e.preventDefault();
                
            this.onsubmit({
                id: this.get('id'),
                name: this.get('name'),
                author: this.get('author'),
                pages: this.get('pages'),
                description: this.get('description'),
                photo: this.get('photo'),
                tags: this.get('tags').split(','),
                rating: this.get('rating') ? this.get('rating') : 0 
            });
        },
    }
});

