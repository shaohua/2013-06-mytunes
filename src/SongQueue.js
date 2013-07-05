var SongQueue = Songs.extend({

  initialize: function(){
    //listen to itself and its elements (since itself is a collection)
    this.on('add', this.onAdd, this);
    this.on('dequeue', this.onDequeue, this);

  },

  playFirst: function(){
    this.at(0).play();
  },
  
  onAdd: function(song){
    if(this.length === 1){
      this.playFirst();
    }
  },

  onDequeue: function(song){
      this.remove(song);
      if(this.length){
        this.playFirst();
      }
  }

});