var modalInfo = {
    1: {
      title: "C Programs Solution",
      info: "C programming language solutions where you can find all c language solutions.",
      link: "https://pandey-sudip.github.io/C-Language-Solutions/",
      github: "https://github.com/pandey-sudip/C-Language-Solutions"
    },
    2: {
      title: "Mero Note",
      info: "A web based note management application using PHP and MySQL. Where you can manage/save your note publickly and privately.",
      link: "http://nwsnotes.eu5.net/",
      github: "https://github.com/Tech-Sikshya/noteapplication"
    },
    3: {
      title: "Image Search Application",
      info: "A web based tool for searching and download high quality and free copyright images.",
      link: "https://pandey959.github.io/image-search/",
      github: "https://github.com/pandey-sudip/Image-Search-Application"
    },
    4: {
      title: "Contact Management Application",
      info: "A simple web based tool built with PHP for manage the users contact where you can do update and delete contact also.",
      link: "#",
      github: "https://github.com/pandey-sudip/cotact-saving-system"
    },
    5: {
      title: "Todo List Management application",
      info: "A simple web based tool built with PHP where you can make list of things what to do and you can also make update or delete the lists.",
      link: "#",
      github: "https://github.com/pandey-sudip/todo-app"
    },
    6: {
      title: "Github profile data fetch",
      info: "A simple web app which can fetch the github user profile data using github user api.",
      link: "https://pandey-sudip.github.io/github-Profile-data-fetch/",
      github: "https://github.com/pandey-sudip/github-Profile-data-fetch"
    }
  };
  
  // Get the modal
  var modal = document.getElementById('preview');
  
  // button that opens the modal
  var btn = document.getElementsByClassName("button");
  
  // <span> that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // open modal 
  for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener("click", function() {
      var project = btn[i].parentElement;
      openModal(project);
    })
  };
  
  function openModal(project){
    var id = project.id;
    var img = project.getElementsByTagName("img")[0].src;
    fillOut(id, img);
    modal.style.display = "block";
    document.getElementsByClassName("modal-content")[0].classList.add("scale");
  }
  
  function fillOut(id, img){
    document.getElementById("title").innerHTML = modalInfo[id].title;
    document.getElementById("info").innerHTML = modalInfo[id].info;
    document.getElementById("img").src = img;
    document.getElementById("live").onclick = function(){
      window.open(modalInfo[id].link,'_blank');
    }
    document.getElementById("github").onclick = function(){
      window.open(modalInfo[id].github,'_blank');
    }
  }
  
  // close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }
  
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }