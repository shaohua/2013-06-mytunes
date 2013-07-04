var App = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new Song());
    this.set('songQueue', new SongQueue());

    params.library.on('play', function(song){
      this.set('currentSong', song);
      console.log('catch play event', song);
    }, this);

    params.library.on('ended', function(song){
      console.log('catch ended event', song);
    }, this);

  }

});
