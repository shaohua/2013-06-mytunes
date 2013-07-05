var Song = Backbone.Model.extend({

  initialize: function(){
    this.on('ended', this.dequeue, this); //when ended, remove the song
  },

  play: function(){
    this.trigger('play', this);
  },

  ended: function(){
    this.trigger('ended', this);
  },

  enqueue: function(){
    this.trigger('enqueue', this);
  },

  dequeue: function(){
    this.trigger('dequeue', this);
  }
});
