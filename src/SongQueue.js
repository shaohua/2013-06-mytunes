var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function(){
      this.playFirst();
    });
  },
  playFirst: function(){
    
  }

});
