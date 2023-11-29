

let arr=[]

let api; axios.get('https://api.escuelajs.co/api/v1/categories')




.then((res)=>{
    api=res.data
    // console.log(api)
    const para=document.querySelector("#para")
    for(let i = 0; i < api.length; i++){
    
    para.innerHTML +=`<div class="card" style="width: 18rem;">
    <img src="${api[i].image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${api[i].name}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <button onclick="abc(${i})" class="btn btn-primary"> BUY NOW </button>
    </div>
  </div>`


    }

})
.catch((err)=>{
    console.log(err)
})


function abc (index){
    arr.push(api[index])
    console.log(arr)
    
}
  