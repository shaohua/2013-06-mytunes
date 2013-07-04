var App = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new Song());
    this.set('songQueue', new SongQueue());

    params.library.on('play', function(song){
      this.set('currentSong', song);
    }, this);

    //params.library is an instance of Songs(collection of Song)
    //works with library view
    //where two model-view pairs interact
    params.library.on('enqueue', function(song){
      this.get('songQueue').add(song);
    }, this);

  }

});
