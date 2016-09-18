import Ember from 'ember';
import DS from 'ember-data';
import Image from '../objects/image';

let { isNone } = Ember;

export default DS.Transform.extend({

  deserialize: function (serialized) {

    let image = Image.create({
      full: serialized.full,
      group: serialized.group,
      h: serialized.h,
      sprite: serialized.sprite,
      w: serialized.w,
      x: serialized.x,
      y: serialized.y
    });


    return image;
  },

  serialize: function (deserialized) {

    if (isNone(deserialized) || (typeof deserialized === "string")) {
      return deserialized;
    }

    return JSON.stringify(deserialized);
  }

});
