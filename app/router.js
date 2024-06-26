import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('meetings');
  this.route('speakers');
  this.route('books');
  this.route('not-found', {path: '/*path'});
  this.route('edit-book', {path: 'edit-book/:id'});
  this.route('create-book');
});

export default Router;
