var AppView = Backbone.View.extend({

  initialize: function(params){
    _.bindAll(this, 'render');
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.songQueueView = new SongQueueView({collection: this.model.get('songQueue')});

    this.model.on('change:currentSong', function(model){
      this.playerView.setSong(model.get('currentSong'));
    }, this);

    this.model.get('songQueue').on('add', this.render);
    this.model.get('songQueue').on('remove', this.render);

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
