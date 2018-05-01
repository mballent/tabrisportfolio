const {Composite, TextView, ui, Button} = require('tabris');

let composite1 = new Composite({
  left: 0, top: 0, bottom: 0, right: '50%',
  background: '#f3f3f3'
}).appendTo(ui.contentView);

let button1 = new Button({
  left: 0, right: 0, top: '50%',
  alignment: 'center',
  text: 'Composite 1'
}).on('select' ,() => { 
    console.log ("Hello");
    Composite1ColourChange();  
    }) 
    .appendTo(composite1);

let composite2 = new Composite({
  left: '50%', top: 0, bottom: 0, right: 0,
  background: '#eaeaea'
}).appendTo(ui.contentView);

let button2 = new Button({
  left: 0, right: 0, top: '50%',
  alignment: 'center',
  text: 'Composite 2'
}).appendTo(composite2);

function Composite1ColourChange() {
    if (composite1.background = (255, 255, 255, 1)){
    composite1.background = '#eaeaea';
    console.log(composite1.background);
    }
}