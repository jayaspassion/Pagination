// getting data
var user_data_link = "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json";
var rows = 8;
var pageNumber = 1;


function displayUsers(arr, page, currentRows){
    let currentUsers = arr.slice(((page-1)*currentRows), page*currentRows);
    const users = document.querySelector(".users");
    currentUsers.forEach(user => {
        let userCard = document.createElement('div');
        userCard.className = 'user-card';
        userCard.innerHTML=`
        <div class="user-image"><img src="https://picsum.photos/50"></div>
        
        <div>
        <p>${user.name}</h3>
        <p class="user-email">${user.email}</p>
        </div>
        `;
        users.append(userCard);
    });
}

async function getUsers(){
    const response = await fetch(user_data_link);
    const data = await response.json();
    displayUsers(data, pageNumber, rows);
    console.log(data);
    
}





//wrapper
const wrapper = document.createElement('div');
wrapper.className = 'wrapper';



wrapper.innerHTML = `
<header class="ui-div">
    <img src="https://picsum.photos/700/400"></img>
</header>
<article class="users"></article>
<footer class="pagination-div">
    <div class="pagination"></div>

</footer>
`


//appending elements
document.body.appendChild(wrapper);




getUsers();
