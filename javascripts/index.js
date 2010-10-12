var canvas, headChanger, torsoChanger, legChanger;


Ext.setup({
  onReady: function() {
    headChanger = new Ext.Panel({
      title: 'Heads',
      html: "heads go here"
    });

    torsoChanger = new Ext.Panel({
      title: 'Torsos',
      html: "torsos go here"
    });

    legChanger = new Ext.Panel({
      title: 'Legs',
      html: "legs go here"
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