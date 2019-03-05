 Split(['#a', '#b'], {
      minSize:1,
      gutterSize: 5,
      cursor: 'col-resize',
      onHandleClick:function(pair){
        console.log(pair,pair.size-pair.bGutterSize-pair.start)
       // pair.updateOffset(pair.size-pair.bGutterSize);
        pair.updateOffset(1000000);
      }
    })
    
    Split(['#c', '#d'], {
  direction: 'vertical',
  sizes: [25, 75],
  gutterSize: 8,
  cursor: 'row-resize',
      onHandleClick:function(pair){
        console.log(pair)
        pair.updateOffset(pair.aMin);
      }
})
Split(['#e', '#f'], {
  direction: 'vertical',
  sizes: [25, 75],
  gutterSize: 8,
  cursor: 'row-resize',
      onHandleClick:function(pair){
        console.log(pair,pair.size-pair.bGutterSize-pair.start)
        pair.updateOffset(pair.size-pair.bGutterSize-pair.start);
      }
})
