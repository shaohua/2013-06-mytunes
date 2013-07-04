var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function(){
      if(this.length===1){
        this.playFirst();
      }
    });
  },
  playFirst: function(){
    
  }

});
