// getting data
var user_data_link = "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json";

async function getUsers(){
    const response = await fetch(user_data_link).then(console.log("Fetched"));
    const data = await response.json();
    console.log(data);
    return data;
}
getUsers();




//wrapper
const wrapper = document.createElement('div');
wrapper.className = 'wrapper';


//main 3 divs for body
// const uiDiv = document.createElement('div');
// uiDiv.className = 'ui-div';
// const users = document.createElement('div');
// users.className = 'users';
// const paginationDiv = document.createElement('div');
// paginationDiv.className = 'pagination-div';
wrapper.innerHTML = `
<header class="ui-div">
    <img src="https://picsum.photos/700/400"></img>
</header>
<article class="users">Article</article>
<footer class="pagination-div">
    <div class="pagination"></div>

</footer>
`
//appending elements
document.body.appendChild(wrapper);
// wrapper.append(uiDiv, users, paginationDiv);




// async function myApi(){
//    const userDataList = await fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json")
//    var data = await userDataList.json();
//    return data;
// }

// const answer = myApi();

// console.log(answer);


