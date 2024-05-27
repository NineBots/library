import Service from '@ember/service';

export default Service.extend({

    async searchAll(search){
        let queryParams = '';
        if(search){
           queryParams = `?q=${search}`;
        }
        let response = await fetch(`http://localhost:3000/books${queryParams}`);
        let data = await response.json();
        return data

    },

    async getBooks(){        
        let response = await fetch(`http://localhost:3000/books`);
        let data = await response.json();
        return data
    },

    async searchTags(tags_search){
        let queryParams = [];
        if(tags_search){
            queryParams = tags_search.split(',');
        }
        let response = await fetch(`http://localhost:3000/books`);
        let data = await response.json();
        let result = data.filter(book => queryParams.every(value => book.tags.includes(value)));
        return result

    },

    getBook(id){
        return fetch(`http://localhost:3000/books/${id}`).then((response) => response.json());
    },

    updateBook(book){
        return fetch(`http://localhost:3000/books/${book.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
        });
    },

    createBook(book){
        return fetch(`http://localhost:3000/books`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
        });
    },

    deleteBook(id){
        return fetch(`http://localhost:3000/books/${id}`, {method:"DELETE"});
    }


});
