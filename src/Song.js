var Song = Backbone.Model.extend({

  initialize: function(){
    this.on('play', this.onPlay);
    this.on('ended', this.onEnded);
  },

  play: function(){
    this.trigger('play', this);
    console.log('-->play event');
  },

  enqueue: function(){
    this.trigger('enqueue', this);
    console.log('Song emitting enqueue');
  },

  dequeue: function(){
    this.trigger('dequeue', this);
  },

  onPlay: function(){
    console.log('I captured my own event');
  }

});
