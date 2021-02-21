let firstimage=document.getElementById('first-image');
let secandimage=document.getElementById('second-image');
let theardimage=document.getElementById('third-image');

let fImageIndex ;
let sImageIndex;
let thImageIndex ;

let attemptscounter=0;
let maxattempts=25;
// let count=0;

function TheImage(name, source) {
    this.name = name;
    this.source = source;
    this.votes = 0;
    TheImage.allimg.push(this);
    this.count=0;
  }
TheImage.allimg=[]

  new TheImage('bag','images/bag.jpg');
  new TheImage('banana','images/banana.jpg');
  new TheImage('bathroom','images/bathroom.jpg');
  new TheImage('boots','images/boots.jpg');
  new TheImage('breakfast','images/breakfast.jpg');
  new TheImage('bubblegum','images/bubblegum.jpg');
  new TheImage('chair','images/chair.jpg');
  new TheImage('cthulhu','images/cthulhu.jpg');
  new TheImage('dog-duck','images/dog-duck.jpg');
  new TheImage('dragon','images/dragon.jpg');
  new TheImage('pen','images/pen.jpg');
  new TheImage('pet-sweep','images/pet-sweep.jpg');
  new TheImage('scissors','images/scissors.jpg');
  new TheImage('shark','images/shark.jpg');
  new TheImage('sweep','images/sweep.png');
  new TheImage('tauntaun','images/tauntaun.jpg');
  new TheImage('unicorn','images/unicorn.jpg');
  new TheImage('usb','images/usb.gif');
  new TheImage('water-can','images/water-can.jpg');
  new TheImage('wine-glass','images/wine-glass.jpg');
  

  function randominex(){
      return Math.floor( Math.random() * TheImage.allimg.length);
    }
    
    function randerdthreeimg (){
        
        fImageIndex =randominex();
        // sImageIndex =randominex();
        // thImageIndex =randominex();
        
        
        do{
            sImageIndex=randominex();
            thImageIndex=randominex();
            // fImageIndex=randominex();
            
            
        }while((fImageIndex === sImageIndex)||(fImageIndex===thImageIndex)||(sImageIndex===thImageIndex)) 
        
        TheImage.allimg
        
           TheImage.allimg[ fImageIndex].count++
           TheImage.allimg[ sImageIndex].count++
           TheImage.allimg[ sImageIndex].count++
   console.log( TheImage.allimg[fImageIndex]);
   console.log( TheImage.allimg[sImageIndex]);
   console.log( TheImage.allimg[thImageIndex]);

   firstimage.src=TheImage.allimg[fImageIndex].source;
   secandimage.src=TheImage.allimg[sImageIndex].source;
   theardimage.src=TheImage.allimg[thImageIndex].source;}

   randerdthreeimg();
//-----------------------------------------------------------

   firstimage.addEventListener('click',userclick);
   secandimage.addEventListener('click',userclick);
   theardimage.addEventListener('click',userclick);

   function userclick(event){
attemptscounter++;
// console.log(event.target.id);

if(attemptscounter<maxattempts){

    if(event.target.id ==='first-image'){
        TheImage.allimg[ fImageIndex].votes++

}else if(event.target.id ==='second-image'){
    TheImage.allimg[ sImageIndex].votes++
}else {
       TheImage.allimg[ sImageIndex].votes++
} randerdthreeimg();
 }
else{

    let list=document.getElementById('results');
    let gotresult;

for(let j=0;j<TheImage.allimg.length;j++){
    gotresult=document.createElement('li');
    list.appendChild(gotresult)
gotresult.textContent=TheImage.allimg[j].name +'    '+ 'has'+'    '+'' +TheImage.allimg[j].votes +'votes' + '   '+'and was seen'+' ' +TheImage.allimg[j].count+' '+'times.'
;


}
firstimage.removeEventListener('click',userclick)
secandimage.removeEventListener('click',userclick)
theardimage.removeEventListener('click',userclick)
}}