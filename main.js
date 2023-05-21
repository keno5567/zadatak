let form = document.getElementById("form");
let input = document.getElementById("textInput");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("button clicked");
  formValidation();
});

let formValidation = () => {
  if (textInput.value === "") {
    msg.innerHTML = "Post cannot be blank";
    console.log("failure");
  } else {
    console.log("successs");
    msg.innerHTML = "";
    acceptData();
  }
};

let data = {};

let acceptData = () => {
  data["text"] = textInput.value;
  console.log(data);
  createPost();
};

let createPost = () => {
  posts.innerHTML += `
  <div>
    <p>${data.text}</p>
    <span class="options">
    <button onclick="editBtn(this)" type="submit" class="ebtn" id="edit">Edit</button>
    <button onclick="removeBtn(this)" type="submit" class="rbtn" id="removebtn">Remove</button>
    </span>
    </div>
    `;
    input.value = "";
  };
  
  let removeBtn = (e) => {
    e.parentElement.parentElement.remove();
  };
  
  let editBtn = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
  };


  // <i onClick="editPost(this)" class="fas fa-edit"></i>
  // <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>