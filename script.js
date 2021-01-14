var p = `{
    "photos": [
        {
          "src": "Florence.jpeg",
          "title": "Florencia",
          "description": "Florencie je metropola talianského Toskánska, ležiaca na rieke Arno."
        },
        {
          "src": "Prague.jpeg",
          "title": "Praha",
          "description":"xxxxxxxHistorické centrum mesta s jedinečnou panorámou Pražského hradu je pamiatkovou rezerváciou UNESCO."
        },
        {
          "src": "Krakow.jpeg",
          "title": "Krakow",
          "description": "Krakov je jedným z najdôležitejších poľských turistických centier. V Krakove sa nachádza vyše 6 tisíc historických objektov."
        },     
        {
          "src": "Benatky2.jpg",
          "title": "Benátky",
          "description": "Benátky (tal. Venezia, v benátskom nárečí Venezsia) sú hlavné mesto severotalianskeho regiónu Benátsko."
        },      
        {
          "src": "Newyork2.jpg",
          "title": "New York",
          "description": "Brooklynský most je jeden z najstarších visutých mostov v Spojených štátov amerických. "
        }      
      ]
  }`
  
  var foto = JSON.parse(p);
  var slideIndex = 1;
  
  var timer = false;
  
  window.onload = function(e){ 
      srcPhoto = nacitajFotky();
      nacitajModal();
      nacitajSlajdy(slideIndex);
  }
  
  function nacitajFotky(){
      var i;
      for(i= 0; i < foto.photos.length; i++){
          console.log(foto.photos[i].src);
          
          var image1 = document.createElement("img");
          image1.setAttribute("src", foto.photos[i].src);
          image1.setAttribute("onclick", "otvorModal(); slideIndex = "+ (i+1) +"; nacitajSlajdy(slideIndex);");
          
          var gal = document.getElementById("gallery");
          var li = document.createElement("li");
          
          gal.appendChild(li);
          li.appendChild(image1);
      }
  }
  
  function nacitajModal(){
      for(i = 0; i < foto.photos.length; i++){
          var modal = document.getElementById("modal-vnutro");
          var slajd = document.createElement("div");
          slajd.setAttribute("class", "slajd");
          slajd.setAttribute("style", "display: none");
          
          var image2 = document.createElement("img");
          image2.setAttribute("src", foto.photos[i].src);
          image2.setAttribute("class", "modal-fotka");
          
          var popis = document.createElement("a");
          popis.setAttribute("class", "popisFotky");
          popis.innerHTML = foto.photos[i].description;
          
          var nazov = document.createElement("b");
          nazov.setAttribute("class", "nazovFotky");
          nazov.innerHTML = foto.photos[i].title;
          
          var dolava = document.createElement("c");
          dolava.setAttribute("class", "pred");
          dolava.setAttribute("onclick", "plusSlajdy(-1)");
          dolava.innerHTML = "&#10094;";
  
          var doprava = document.createElement("c");
          doprava.setAttribute("class","nasl");
          doprava.setAttribute("onclick", "plusSlajdy(1)");
          doprava.innerHTML = "&#10095;";
          
          modal.appendChild(slajd);
          slajd.appendChild(nazov);
          slajd.appendChild(image2); 
          slajd.appendChild(popis);
          slajd.appendChild(dolava);
          slajd.appendChild(doprava);
      }
  }
  
  function otvorModal(){
    document.getElementById('mojModal').style.display = "block";
  }
  
  function zavriModal(){
      stopSlideshow();
      document.getElementById('mojModal').style.display = "none";
  }
  
  function nacitajSlajdy(n){
      var i;
      var slajdy = document.getElementsByClassName("slajd");
      
      
      if (n > slajdy.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slajdy.length}
  
      console.log('Prikaz slide ' + slideIndex);
  
  
      for (i = 0; i < slajdy.length; i++) {
          slajdy[i].style.display = "none";
          }
      
      slajdy[slideIndex-1].style.display = "block";
  }
  
  function plusSlajdy(n) {
    nacitajSlajdy(slideIndex += n);
  }
  
  function startSlideshow(){
      console.log("start slideshow...");
      timer = window.setInterval(function() { plusSlajdy(1); }, 2000);	
  
      var control = document.getElementById("controll");
      controll.setAttribute("class", "stop");
      controll.setAttribute("onclick", "stopSlideshow();");
  }
  
  function stopSlideshow()
  {
      clearInterval(timer);
      var control = document.getElementById("controll");
      controll.setAttribute("class", "play");
      controll.setAttribute("onclick", "startSlideshow();");
  }