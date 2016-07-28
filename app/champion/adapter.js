import RiotAdapter from '../riot/adapter';

export default RiotAdapter.extend({

  buildURL: function(/*modelName, id, snapshot, requestType, query*/){
    return this.get("host") + "/" + this.get("namespace") + "/lol-static-datas/champions";
  }

});
