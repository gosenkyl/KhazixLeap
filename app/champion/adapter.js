import TeemoShroomsAdapter from '../teemo-shrooms/adapter';

export default TeemoShroomsAdapter.extend({

  buildURL: function(/*modelName, id, snapshot, requestType, query*/){
    return this.get("host") + "/" + this.get("namespace") + "/lol-static-datas/champions";
  }

});
