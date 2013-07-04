var App = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new Song());
    this.set('songQueue', new SongQueue());

    params.library.on('play', function(song){
      this.set('currentSong', song);
      console.log('catch play event in App.js', song, this.get('songQueue').length);
      this.get('songQueue').add(song);
    }, this);

    params.library.on('ended', function(song){
      console.log('catch ended event', song);
    }, this);

    // this.get('songQueue').on('enqueue')

    //params.library is an instance of Songs(collection of Song)
    params.library.on('enqueue', function(song){
      this.get('songQueue').add(song);
      if(this.get('songQueue').length===1){
        this.get('songQueue').at(0).play();
      }
      console.log('App catch enqueue event', this.get('songQueue').length);

    }, this);

    params.library.on('dequeue', function(song){
      this.get('songQueue').remove(song);
      console.log('App catch dequeue event', this.get('songQueue').length);
    }, this);


  }

});
