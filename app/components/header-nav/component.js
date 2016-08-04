import Ember from 'ember';

let {
  inject,
  computed
  } = Ember;

export default Ember.Component.extend({

  userService: inject.service("user"),

  userName: computed.alias("userService.userName")

});
