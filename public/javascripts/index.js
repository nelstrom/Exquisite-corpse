var canvas, headChanger, torsoChanger, legChanger, attributionPanel;

Ext.setup({
  onReady: function() {
    headChanger = new Ext.Carousel({
      title: 'Heads',
      items: [
        {cls: "head-1 head"},
        {cls: "head-2 head"},
        {cls: "head-3 head"},
        {cls: "head-4 head"},
        {cls: "head-5 head"}
      ]
    });

    torsoChanger = new Ext.Carousel({
      title: 'Torsos',
      items: [
      {cls: "torso-1 torso"},
      {cls: "torso-2 torso"},
      {cls: "torso-3 torso"},
      {cls: "torso-4 torso"},
      {cls: "torso-5 torso"}
      ]
    });

    legChanger = new Ext.Carousel({
      title: 'Legs',
      items: [
      {cls: "legs-1 legs"},
      {cls: "legs-2 legs"},
      {cls: "legs-3 legs"},
      {cls: "legs-4 legs"},
      {cls: "legs-5 legs"}
      ]
    });
    
    attributionPanel = new Ext.Panel({
      dock: 'bottom',
      html: '<div id="credits"><p class="builder">Built by <a href="http://drewneil.com">Drew Neil</a></p><p class="illustrator">Illustrations by <a href="http://www.veryworrying.com/">Laurie Pink</a></p></div>'
    });

    canvas = new Ext.Panel({
      fullscreen: true,
      layout: {
        type: 'vbox',
        pack: 'start',
        align: 'stretch'
      },
      defaults: {flex: 1},
      items: [headChanger, torsoChanger, legChanger],
      dockedItems: [attributionPanel]
    });

  }
});