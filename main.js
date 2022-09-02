
// Sticky menu background
window.addEventListener('scroll', function() {
    if (window.scrollY > 150) {
      document.querySelector('#navbar').style.opacity = 0.9;
    } else {
      document.querySelector('#navbar').style.opacity = 1;
    }
  });


  
  
  //Smooth Scrolling
  $('#navbar a, .btn').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
  
      const hash = this.hash;
  
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top - 100
        },
        800
      );
    }
  });



   function sConsole(event) {
    event.preventDefault();

   
   var data1= document.getElementById("name");

   var data2= document.getElementById("surname");

   var data3= document.getElementById("email");
  
   var data4= document.getElementById("phone");

   var data5= document.getElementById("message");
  
   console.log("Name:", data1.value,"\n","Surname:", data2.value,"\n","Email:", data3.value ,"\n","Phone Number:",data4.value ,"\n","Message:", data5.value);
  }

