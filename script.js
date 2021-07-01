// getting data
var user_data_link =
  "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json";
var rows = 8;
const initialPage = 1;
var pageNumber = initialPage;
var totalNumberOfUsers = 100;
var numberOfPages = Math.ceil(totalNumberOfUsers / rows);
console.log(numberOfPages);

//from the total users build and disply required users in page
//according to page numbers and rows
function displayUsers(arr, page, currentRows) {
  let currentUsers = arr.slice((page - 1) * currentRows, page * currentRows);
  const users = document.querySelector(".users");
  users.innerHTML=``;
  createPagination();
  currentUsers.forEach((user) => {
    let userCard = document.createElement("div");
    userCard.className = "user-card";
    userCard.innerHTML = `
        <div class="user-image"><img src="https://picsum.photos/50"></div>
        
        <div>
        <p>${user.name}</h3>
        <p class="user-email">${user.email}</p>
        </div>
        `;
    users.append(userCard);
  });
}

// function to get list of users
async function getUsers() {
  const response = await fetch(user_data_link);
  const data = await response.json();
  displayUsers(data, pageNumber, rows);
}

//wrapper
const wrapper = document.createElement("div");
wrapper.className = "wrapper";
wrapper.innerHTML = `
<header class="ui-div">
    <img src="https://picsum.photos/700/400"></img>
</header>
<article class="users"></article>
<footer class="pagination-div">
    <ul class="pagination">

    </ul>       

</footer>
`;

//create pagination
function createPagination() {
  const paginationList = document.querySelector(".pagination");
  paginationList.innerHTML=``;
  let page = document.createElement("li");
  page.innerHTML = `
    <a class="previousPage" onclick="currentPage(${pageNumber- 1})">«</a>
        `;
  paginationList.append(page);

//   for (let i = 0; i <= numberOfPages; i++) {
//     page = document.createElement("li"); 
//     if((i+1) === pageNumber){
//         page.innerHTML = `
//         <a class="active" id="page${i + 1}" onclick="currentPage(${i + 1})">${i + 1}</a>
//     `; 
//     }
//     else{
//         page.innerHTML = `
//             <a id="page${i + 1}" onclick="currentPage(${i + 1})">${i + 1}</a>
//         `;
//     }
//     paginationList.append(page);
//   }

for (let i = pageNumber-3; i <= pageNumber+2; i++) {
    if(i>=0 && i<=numberOfPages){
    page = document.createElement("li");
    if((i+1) === pageNumber){
        page.innerHTML = `
        <a class="active" id="page${i + 1}" onclick="currentPage(${i + 1})">${i + 1}</a>
    `; 
    }
    else{
        page.innerHTML = `
            <a id="page${i + 1}" onclick="currentPage(${i + 1})">${i + 1}</a>
        `;
    }
    paginationList.append(page);
    }
  }






  page.innerHTML = `
    <a class="nextPage" onclick="currentPage(${pageNumber+ 1})">»</a>
        `;
  paginationList.append(page);
}

//appending elements
document.body.appendChild(wrapper);

getUsers();

function currentPage(p){
    if(p>0 && p<=numberOfPages){ 
    pageNumber = p;
    getUsers();
    }
}