var canvas, headChanger, torsoChanger, legChanger;


Ext.setup({
  onReady: function() {
    headChanger = new Ext.Carousel({
      title: 'Heads',
      items: [
        {html: "<img src='/images/1-exquisite-heads.png'/>"},
        {html: "<img src='/images/2-exquisite-heads.png'/>"},
        {html: "<img src='/images/3-exquisite-heads.png'/>"},
        {html: "<img src='/images/4-exquisite-heads.png'/>"},
        {html: "<img src='/images/5-exquisite-heads.png'/>"}
      ]
    });

    torsoChanger = new Ext.Carousel({
      title: 'Torsos',
      items: [
      {html: "<img src='/images/1-exquisite-torsos.png'/>"},
      {html: "<img src='/images/2-exquisite-torsos.png'/>"},
      {html: "<img src='/images/3-exquisite-torsos.png'/>"},
      {html: "<img src='/images/4-exquisite-torsos.png'/>"},
      {html: "<img src='/images/5-exquisite-torsos.png'/>"}
      ]
    });

    legChanger = new Ext.Carousel({
      title: 'Legs',
      items: [
      {html: "<img src='/images/1-exquisite-legs.png'/>"},
      {html: "<img src='/images/2-exquisite-legs.png'/>"},
      {html: "<img src='/images/3-exquisite-legs.png'/>"},
      {html: "<img src='/images/4-exquisite-legs.png'/>"},
      {html: "<img src='/images/5-exquisite-legs.png'/>"}
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