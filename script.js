// // let data = [];
// //     fetch('https://jsonplaceholder.typicode.com/posts')
// //     .then(res => res.json())
// //     .then(result => console.log(result));


//     // console.log('it\'s running first')

//     // console.log(data)
//     const data = [];
//     const searchInput = document.querySelector('#searchInput');
//     const container = document.querySelector('.container');
    
  

//    // fetch data from server
//     async function fetchData(){
//         try{
//             container.innerHTML = "<p>Loding...<p>"
//             const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//             const result = await res.json();
//             container.innerHTML = "";
//             return result;
//         }catch(error){
//             console.log(error);
//         }
            
//     }
//     const users = async () => {
//         const re = await fetchData();
//         renderHtml(re);
//         searchText(re)
//     } 

//     function renderHtml(data){
//         const displayData = Array.isArray(data) ? data.map(user => `<p class="para" style="color:red">${user.title}</p>`).join("") : "<p>No Valid Data</p>"
//         container.innerHTML =  displayData;
//         // searchText(data);
//     }

//     function filterItmes(e){
//         searchText(e.target.value)
//    }


//    function searchText(data , text){
//     console.log(data ,text)
//       return data.filter(user => user.title.toLowerCase().includes(text))
//    }


//     searchInput.addEventListener('keydown' , filterItmes);

// //   users();


// var str = "juber-khan";
// console.log(str.substring(0,4));  // jube
// console.log(str.substring(1,5));  // uber
// console.log(str.substring(1));  // uber-khan


const obj = {
    name : "juber", 
    age : 23,
    role : "Developer"
}


const newObj = Object.entries(obj);
console.log(newObj);