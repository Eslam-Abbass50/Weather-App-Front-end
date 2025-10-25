var trendingMovies = [];
var Links = document.querySelectorAll(".navLink");
for (var i = 0; i < Links.length; i++) {
  Links[i].addEventListener("click", function (eventInfo){
    var Category = eventInfo.target.getAttribute("movie");
    getData(Category);
  });
}
async function getData(movieCategory) {
  var request = await fetch(
    `https://api.themoviedb.org/3/movie/${movieCategory}?api_key=eba8b9a7199efdcb0ca1f96879b83c44`

    
  );
  var myData = await request.json();
  trendingMovies =await myData.results;
  displayPoster();
}
getData("upcoming");
function displayPoster() {
  var cartona = ``;
  for (var i = 0; i < trendingMovies.length; i++) {
    cartona += `
    <div class="col-lg-4 col-md-6 col-sm-12 my-3  shadow"">
        <div class="item shadow rounded">
            <img src='https://image.tmdb.org/t/p/w500/${trendingMovies[i].poster_path}' class='w-100 img-fluid rounded' />
            <div class="overlay d-flex align-items-center justify-content-center">
            <div class='Description'>
                <h2 class="fw-100 ">${trendingMovies[i].title}</h2>
                <p class="lead">${trendingMovies[i].overview}</p>
                <p ">Rate: ${trendingMovies[i].vote_average}</p>
                <p >${trendingMovies[i].release_date}</p>
            </div>  
            
            </div>
             
        </div>
    </div>
    `;
  }
  document.getElementById("rowData").innerHTML = cartona;
}
var name = document.getElementById("name");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var age = document.getElementById("age");
var password = document.getElementById("password");
var rePassword = document.getElementById("repassword");

function validName() {
  var regex = /^[A-Za-z\s]{5,20}$/;
  var testValid = false;
  if (regex.test(name.value) == true) {
    document.getElementById("alertName").style.display = "none";
    testValid = true;
  } else {
    document.getElementById("alertName").style.display = "block";
    testValid = false;
  }
  return testValid;
}

function validEmail() {
  var regex = /^[A-Za-z_]{3,10}@[a-zA-Z]{3,7}\.[a-zA-Z]{2,3}$/;
  var testValid = false;
  if (regex.test(email.value) == true) {
    document.getElementById("alertEmail").style.display = "none";
    testValid = true;
  } else {
    document.getElementById("alertEmail").style.display = "block";
    testValid = false;
  }
  return testValid;
}

function validPhone() {
  var regex = /^(010|011|012|015)[0-9]{8}$/;
  var testValid = false;
  if (regex.test(phone.value) == true) {
    document.getElementById("alertPhone").style.display = "none";
    testValid = true;
  } else {
    document.getElementById("alertPhone").style.display = "block";
    testValid = false;
  }
  return testValid;
}


function validAge() {
  var regex = /^[1-90]{0,2}$/;
  var testValid = false;
  if (regex.test(inputAge.value) == true) {
    document.getElementById("alertAge").style.display = "none";
    testValid = true;
  } else {
    document.getElementById("alertAge").style.display = "block";
    testValid = false;
  }
  return testValid;
}


function password() {
  var regex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  var testValid = false;
  if (regex.test(inputPassword.value) == true) {
    document.getElementById("alertPassword").style.display = "none";
    testValid = true;
  } else {
    document.getElementById("alertPassword").style.display = "block";
    testValid = false;
  }
  return testValid;
}


function rePassword() {
  var regex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  var testValid = false;
  if (regex.test(inputRePassword.value) == true) {
    document.getElementById("alertRePassword").style.display = "none";
    testValid = true;
  } else {
    document.getElementById("alertRePassword").style.display = "block";
    testValid = false;
  }
  return testValid;
}

$(".LinksNav").click(function () {
  let leftNav = $(".outerBox").css("left");
  let innerBoxWidth = $(".innerBox").outerWidth();
  if (leftNav == "0px") {
    $(".outerBox").animate({ left: `${innerBoxWidth}px` }, 500);
  } else {
    $(".outerBox").animate({ left: `0px` }, 500);
  }
});
var searchInput = document.getElementById('searchMovies');
function searchData(){
    var searchValue = searchInput.value;
    var cartona = '';
    for (let i = 0; i < trendingMovies.length; i++) {
        if(trendingMovies[i].title.toLowerCase().includes(searchValue.toLowerCase()))
        {
            cartona += `
            <div class=" col-lg-4 col-md-6 col-sm-12 my-3  shadow"">
                <div class="item shadow rounded">
                    <img src='https://image.tmdb.org/t/p/w500${trendingMovies[i].poster_path}' class='w-100 img-fluid rounded' />
                    <div class="overlay d-flex align-items-center justify-content-center">
                    <div class='caption'>
                        <h2>${trendingMovies[i].title}</h2>
                        <p>${trendingMovies[i].overview}</p>
                        <p>Rate: ${trendingMovies[i].vote_average}</p>
                        <p>${trendingMovies[i].release_date}</p>
                    </div> 
                    </div>  
                </div>
            </div>
            `;
          }
        }
        document.getElementById("rowData").innerHTML = cartona;
}

$('.LinksNav').click(function(){
    $(".innerBox .item1").animate({ opacity: "1",paddingTop: "20px"},1500),
    $(".innerBox .item2").animate({ opacity: "1",paddingTop: "20px"},1600),
    $(".innerBox .item3").animate({ opacity: "1",paddingTop: "20px"},1700),
    $(".innerBox .item4").animate({ opacity: "1",paddingTop: "20px"},1800),
    $(".innerBox .item5").animate({ opacity: "1",paddingTop: "20px"},1900),
    $(".innerBox .item6").animate({ opacity: "1",paddingTop: "20px"},2000)
})
    