var AppView = Backbone.View.extend({

  initialize: function(params){
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.songQueueView = new SongQueueView({collection: this.model.get('songQueue')});

    this.model.on('change:currentSong', function(model){
      this.playerView.setSong(model.get('currentSong'));
    }, this);

    this.model.get('songQueue').on('add', function(){
      this.songQueueView.render();
    }, this);

    this.model.get('songQueue').on('remove', function(){
      this.songQueueView.render();
    }, this);

  },//end initialize

  render: function(){
    console.log('AppView.render()');
    return this.$el.html([
      this.playerView.$el,
      new LibraryView({collection: this.model.get('library')}).render(),
      this.songQueueView.render()
    ]);
  }

});
