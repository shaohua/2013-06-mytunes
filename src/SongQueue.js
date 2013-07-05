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
    console.log('added song');
    if(this.length === 1){
      this.playFirst();
    }
  },

  onDequeue: function(song){
      console.log('remove song');
      this.remove(song);
  }

});