var SongQueue = Songs.extend({

  initialize: function(){
    //listen to itself and its elements (since itself is a collection)
    this.on('enqueue', this.onEnqueue, this);
    this.on('dequeue', this.onDequeue, this);

  },

  playFirst: function(){
    this.at(0).play();
  },
  
  onEnqueue: function(song){
    console.log('add song');
    this.add(song);
    if(this.length === 1){
      this.playFirst();
    }
  },

  onDequeue: function(song){
      console.log('remove song');
      this.remove(song);
  }

});