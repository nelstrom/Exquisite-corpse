var canvas, headChanger, torsoChanger, legChanger;


Ext.setup({
  onReady: function() {
    headChanger = new Ext.Carousel({
      title: 'Heads',
      items: [
        {html: "pigs head"},
        {html: "cows head"}
      ]
    });

    torsoChanger = new Ext.Carousel({
      title: 'Torsos',
      items: [
        {html: "pigs torso"},
        {html: "cows torso"}
      ]
    });

    legChanger = new Ext.Carousel({
      title: 'Legs',
      items: [
        {html: "pigs legs"},
        {html: "cows legs"}
      ]
    });

    canvas = new Ext.Panel({
      fullscreen: true,
      layout: {
        type: 'vbox',
        pack: 'start',
        align: 'stretch'
      },
      defaults: {flex: 1},
      items: [headChanger, torsoChanger, legChanger]
    });

  }
});