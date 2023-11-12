// const btn =document.getElementById("getButton");

// btn.addEventListener('click', () => {
//   console.log('処理を開始します！');

//   fetch("https://jsonplaceholder.typicode.com/users")
// .then((res)=>res.json())
// .then((json)=>console.log(json))
// });


$(function(){
   $("#getButton").on("click", ()=>{
     console.log('処理を開始します！');
   })
})