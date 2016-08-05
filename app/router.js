import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('champions');
  this.route('buy');
  this.route('pick');
  this.route('ban');
  this.route('home', {path: ''});
  this.route('owned');
  this.route('practice');
});

export default Router;
