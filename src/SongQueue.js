var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function(){
      if(this.length===1){
        this.playFirst();
      }
    });

    this.on('ended', this.delSong, this);

  },
  playFirst: function(){
    
  },
  delSong: function(song){
    console.log('delSong', song);
  }

});
