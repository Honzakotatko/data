const content = document.getElementById("content")


window.onload= async () =>{
try{
const file = await fetch("./res/data/books.json");
const data = await file.json();

console.log(data);
console.log(data.author);
console.log(data.books);
console.log(data.price);

data.books.forEach((book) => {

content.innerHTML +=`


<h1>Name: ${book.name}</h1>
<p>Release date: ${book.release_date}</p>
<p>Price: ${book.price}</p>
`;
/*
data.books.forEach((book) => {
   Object.entries(book).forEach((bookData) => {
    console.log((bookData[0]))
    console.log((bookData[1]))
    
   });
   */
});
}
catch(err){
console.log(err)
}
}
