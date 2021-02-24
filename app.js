let firstimage = document.getElementById('first-image');
let secandimage = document.getElementById('second-image');
let theardimage = document.getElementById('third-image');

console.log(localStorage);
let fImageIndex;
let sImageIndex;
let thImageIndex;

let attemptscounter = 0;
let maxattempts = 25;
// let count=0;
let nameofimg = [];
let voteofimg = [];
let showofimg = [];
let data;
let oldindex=[];


function TheImage(name, source) {
  this.name = name;
  this.source = source;
  this.votes = 0;
  TheImage.allimg.push(this);
  this.count = 0;
  nameofimg.push(name);
  // console.log(nameofimg);

}
TheImage.allimg = []



function settingitem(){
  data=JSON.stringify(TheImage.allimg)
  localStorage.setItem('product',data);
}


function getitem() {
let strobj=localStorage.getItem('product');
if (strobj){TheImage.allimg=JSON.parse(strobj)
 }
 
}



new TheImage('bag', 'images/bag.jpg');
new TheImage('banana', 'images/banana.jpg');
new TheImage('bathroom', 'images/bathroom.jpg');
new TheImage('boots', 'images/boots.jpg');
new TheImage('breakfast', 'images/breakfast.jpg');
new TheImage('bubblegum', 'images/bubblegum.jpg');
new TheImage('chair', 'images/chair.jpg');
new TheImage('cthulhu', 'images/cthulhu.jpg');
new TheImage('dog-duck', 'images/dog-duck.jpg');
new TheImage('dragon', 'images/dragon.jpg');
new TheImage('pen', 'images/pen.jpg');
new TheImage('pet-sweep', 'images/pet-sweep.jpg');
new TheImage('scissors', 'images/scissors.jpg');
new TheImage('shark', 'images/shark.jpg');
new TheImage('sweep', 'images/sweep.png');
new TheImage('tauntaun', 'images/tauntaun.jpg');
new TheImage('unicorn', 'images/unicorn.jpg');
new TheImage('usb', 'images/usb.gif');
new TheImage('water-can', 'images/water-can.jpg');
new TheImage('wine-glass', 'images/wine-glass.jpg');



function randominex() {
  return Math.floor(Math.random() * TheImage.allimg.length);
}
function randerdthreeimg() {
 do{ fImageIndex = randominex();
  sImageIndex = randominex();
  thImageIndex = randominex();
  
}while( (fImageIndex ===sImageIndex || fImageIndex === thImageIndex || sImageIndex === thImageIndex)
||oldindex.includes(fImageIndex)||oldindex.includes(sImageIndex)||oldindex.includes(thImageIndex));

TheImage.allimg
firstimage.src = TheImage.allimg[fImageIndex].source;
TheImage.allimg[fImageIndex].count++;
secandimage.src = TheImage.allimg[sImageIndex].source;
TheImage.allimg[sImageIndex].count++;
theardimage.src = TheImage.allimg[thImageIndex].source;
TheImage.allimg[thImageIndex].count++;

oldindex=[fImageIndex,sImageIndex,thImageIndex];

}
randerdthreeimg();



//-----------------------------------------------------------

firstimage.addEventListener('click', userclick);
secandimage.addEventListener('click', userclick);
theardimage.addEventListener('click', userclick);

function userclick(event) {
  attemptscounter++;
  // console.log(event.target.id);

  if (attemptscounter < maxattempts) {

    if (event.target.id === 'first-image') {
      TheImage.allimg[fImageIndex].votes++

    } else if (event.target.id === 'second-image') {
      TheImage.allimg[sImageIndex].votes++
    } else {
      TheImage.allimg[sImageIndex].votes++
    } randerdthreeimg();
  }
  else {

    let list = document.getElementById('results');
    let gotresult;

    for (let j = 0; j < TheImage.allimg.length; j++) {
      gotresult = document.createElement('li');
      list.appendChild(gotresult)

      gotresult.textContent = TheImage.allimg[j].name + '    ' + 'has' + '    ' + '' + TheImage.allimg[j].votes + 'votes' + '   ' + 'and was seen' + ' ' + TheImage.allimg[j].count + ' ' + 'times.'
        ;
      
    }
    firstimage.removeEventListener('click', userclick)
    secandimage.removeEventListener('click', userclick)
    theardimage.removeEventListener('click', userclick)

    for (let i = 0; i < TheImage.allimg.length; i++) {
      voteofimg.push(TheImage.allimg[i].votes);
      showofimg.push(TheImage.allimg[i].count);

    }
    settingitem()

    viewChart();
  }
}


//--------chart---------
function viewChart() {

  let ctx = document.getElementById('myChart').getContext('2d');

  let chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
      labels: nameofimg,

      datasets: [
        {
          label: 'Goat votes',
          backgroundColor: '#0C090A',
          borderColor: '#0C090A',
          data: voteofimg
        },

        {
          label: 'Goat shown',
          backgroundColor: '#FBB117',
          borderColor: '#FBB117',
          data: showofimg
        },


      ]
    },

    options: {}
  });

}getitem();
  