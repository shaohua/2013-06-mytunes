var Song = Backbone.Model.extend({

  play: function(){
    this.trigger('play', this);
    console.log('-->play event');
  },

  enqueue: function(){
    this.trigger('enqueue', this);
  },

  dequeue: function(){
    this.trigger('dequeue', this);
  }

});
