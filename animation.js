const heading = document.querySelectorAll('h1');
console.log(heading);

let index = 0;
function addStyle(){
console.log('callind second')
}

function removeStyle(callback){
    console.log('callind first')
    setTimeout(() => {
        callback();

    },1000)
    //   heading[index].style.top = "100%";
//   index++;
}
 

setInterval(() => {
    removeStyle(addStyle);
} , 1000);
