function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate() {
  var result = document.querySelector(".result");
  var email = document.querySelector(".input").innerHTML;
  document.querySelector(".result").innerHTML=("");

  if (validateEmail(email)) {
    result.innerHTML=(email + " is valid");
    result.style.color="green";
    return true;
  }

    result.innerHTML=(email + " is not valid, please try again using the format 'xyz@example.com'");
    result.style.color="red";
    return false;

}

document.querySelector(".arrow").addEventListener("click", validate);


// function validateEmail(email) {
//   const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(email);
// }
//
// function validate() {
//   const $result = $(".result");
//   const email = $(".input").val();
//   $result.text("");
//
//   if (validateEmail(email)) {
//     $result.text(email + " is valid :)");
//     $result.css("color", "green");
//   } else {
//     $result.text(email + " is not valid :(");
//     $result.css("color", "red");
//   }
//   return false;
// }
//
// $(".arrow").on("click", validate);
