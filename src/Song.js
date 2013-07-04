var Song = Backbone.Model.extend({

  play: function(){
    this.trigger('play', this);
    console.log('-->play event');
  }

});
