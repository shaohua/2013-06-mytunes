var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    console.log('SongQueueView initialize');
    this.collection.on('ended', function(){
      console.log('SongQueueView, ended event');
    }, this);
  },

  render: function() {
    console.log('SongQueueView.render()');
    this.$el.children().detach();

    return this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});