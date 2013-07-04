var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function(){
      if(this.length===1){
        this.playFirst();
      }
    });

    this.on('ended', this.delSong, this);
    this.on('enqueue', this.onEnqueue, this);

  },
  playFirst: function(){
    this.at(0).play();
  },
  delSong: function(song){
    console.log('delSong', song);
  },
  onEnqueue: function(song){
    // this.add(song);
    // console.log('SongQueue getting enqueue',this.length);
  }

});
