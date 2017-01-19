'use-strict';

app.component('homecomp', {

  templateUrl: 'components/homecomp.html',
  controller: function() {
    this.user = { name: 'world' };
  }

});
