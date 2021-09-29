//create first nav to display options-> download app/trackorder/support 
var firstNav = document.createElement("ul");
document.body.prepend(firstNav);
document.getElementsByTagName("ul")[0].setAttribute("class", "first_nav");

for(var i=0; i<3; i++)
{
    var list_element = document.createElement("li");
    list_element.className = "nav-item";
    firstNav.appendChild(list_element);
}

//set link and class to anchor tag

var firstNav_ele1 = Object.assign(document.createElement('button'), {
    id: 'firstNav_id1',
    // class: 'firstNav_class',
    href: 'https://www.google.com/',
    innerHTML: 'Download App'
  });

  var firstNav_ele2 = Object.assign(document.createElement('button'), {
    id: 'firstNav_id2',
    // class: 'firstNav_class',
    href: 'https://www.google.com/',
    innerHTML: 'Track Order'
  });

  var firstNav_ele3 = Object.assign(document.createElement('button'), {
    id: 'firstNav_id3',
    // class: 'firstNav_class',
    href: 'https://www.google.com/',
    innerHTML: 'Help'
  });




  document.getElementsByTagName("li")[0].appendChild(firstNav_ele1);
  document.getElementsByTagName("li")[1].appendChild(firstNav_ele2);
  document.getElementsByTagName("li")[2].appendChild(firstNav_ele3);

  document.getElementsByTagName("button")[0].setAttribute("class", "firstNav_class");
  document.getElementsByTagName("button")[1].setAttribute("class", "firstNav_class");
  document.getElementsByTagName("button")[2].setAttribute("class", "firstNav_class");

//create second  nav
var secondNav = document.createElement("ul");
firstNav.after(secondNav);
document.getElementsByTagName("ul")[1].setAttribute("class", "second_nav");

//create list elements for second nav

for(var i=0; i<4; i++)
{
    var list_element2 = document.createElement("li");
    list_element2.className = "nav-item";
    secondNav.appendChild(list_element2);
}

//set link and class to anchor tag second nav
var searchBar = Object.assign(document.createElement('input'), {
  id: 'search_bar',
  // class: 'secNav_class',
  // href: 'https://www.google.com/',
  placeholder: 'Search Here'
});
var secNav_ele1 = Object.assign(document.createElement('button'), {
    id: 'secNav_id1',
    type: 'text',
    // class: 'secNav_class',
    innerHTML: 'Sign In' 
  });

  var secNav_ele2 = Object.assign(document.createElement('button'), {
    id: 'secNav_id2',
    // class: 'secNav_class',
    // href: 'https://www.google.com/',
    innerHTML: 'Add to Cart'
  });

  var secNav_ele3 = Object.assign(document.createElement('button'), {
    id: 'secNav_id3',
    // class: 'secNav_class',
    // href: 'https://www.google.com/',
    innerHTML: 'Favourites'
  });

// //second  nav
// var secondNav = document.createElement("ul");
// firstNav.after(secondNav);


  document.getElementsByTagName("li")[3].appendChild(searchBar);
  document.getElementsByTagName("li")[4].appendChild(secNav_ele1);
  document.getElementsByTagName("li")[5].appendChild(secNav_ele2);
  document.getElementsByTagName("li")[6].appendChild(secNav_ele3);

  document.getElementsByTagName("button")[3].setAttribute("class", "secNav_class");
  document.getElementsByTagName("button")[4].setAttribute("class", "secNav_class");
  document.getElementsByTagName("button")[5].setAttribute("class", "secNav_class");
//main div
  var mainDivele = document.createElement("div");
  secondNav.after(mainDivele);
  var mainDiv = document.getElementsByTagName("div")[0].setAttribute("id", "main_div");
  console.log("div :" +mainDiv);
  // var mainDIv = document.getElementById("manin_div");
  

//defining an async function to fetch url and covert it to json() format
async function getApi() {
    const url = "http://makeup-api.herokuapp.com/api/v1/products.json";
    fetch(url)
    .then( res => {
        res.json()
    .then( data => {
        console.log(data);
        getData(data);
    })
    })
//.then is invoked response if fetch(url) is successfull
    //   .then( function (response) {
    //     data = response.json();   
    //     return data;   
    // })
    // .then( function (response){
    //     getData(response);
    // })
//.catch is invoked if response is not successfull i.e.,rejection,so it catches err
    .catch(function (err){
        console.log("Error Mesage : " +err);
  });
    
}

function getData(response) {
    console.log("hai");
    // const objectCollection = {};
    var objectLength = response.length;
    // console.log("len : " +objectLength);
    // console.log(response[0]);
    
    // var objectElement = document.createElement("div");
    // main_div.appendChild(objectElement);
    // objectElement.className = "card-div";
    
    for(i=0; i<objectLength;)
    {
        console.log("for i 1 : " +i);
        var rowDiv = document.createElement("div");
        rowDiv.setAttribute("class", "card_group");
        mainDivele.appendChild(rowDiv);
        console.log("for i 2 : " +i);
        for(j=0; j<4; j++)
        {
          console.log("for j 1 : " +i);
          var subCard = document.createElement("div");
          subCard.setAttribute("class", "sub_card");
          rowDiv.appendChild(subCard);
          //image src
          var imgSec = document.createElement("img");
          imgSec.setAttribute("class", "imgClass");
          subCard.appendChild(imgSec);
          document.getElementsByClassName("imgClass")[i].src = response[i].image_link;
          
          //product link
          // var linkSec = document.createElement("a");
          // // linkSec.className = "linkClass";
          // imgSec.setAttribute("class", "linkClass");
          // imgSec.appendChild(linkSec);
          // document.getElementsByClassName("linkClass")[i].href = response[i].product_link;
         
          var bodySec = document.createElement("div");
          bodySec.setAttribute("class", "bodyClass");
          imgSec.after(bodySec); 
          //appending body element
          bodySec.innerText = response[i].name;
          //description
          var para = document.createElement("p");
          para.setAttribute("class", "paraClass");
          para.innerText = response[i].id;
          bodySec.appendChild(para);
          var hSec = document.createElement("h5");
          hSec.setAttribute("class", "bodyClass");
          hSec.innerText = response[i].brand;
          para.after(hSec); 
          //footer part
          //calculate equalent rupees value for $
          var footerSec = document.createElement("div");
          footerSec.setAttribute("class", "footerClass");
          footerSec.innerText = response[i].price_sign + response[i].price + response[i].currency;
          bodySec.after(footerSec);
          i++;
        }
    }
}
getApi(); 