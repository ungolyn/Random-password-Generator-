passwordEl = document.getElementById("password1")
passwordEll = document.getElementById("password2")
function randomGen() {
      var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()_-+={[}]|:;<>.?/";
      var lenGen = 15;
      var randomgen = '';
      var raandomgen = '';
      for (var i =0; i<lenGen; i++) {
            var rnum = Math.floor(Math.random()* characters.length);
            randomgen += characters.substring(rnum, rnum+1);
      }
      for (var i =0; i<lenGen; i++) {
            var rnum = Math.floor(Math.random()* characters.length);
            raandomgen += characters.substring(rnum, rnum+1);
      }

      passwordEl.textContent = randomgen 
      passwordEll.textContent = raandomgen


}

