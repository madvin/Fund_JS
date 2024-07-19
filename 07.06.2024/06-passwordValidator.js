function passValidate(pass) {

  function lengthOfPass(pass) {
    if (pass.length >= 6 && pass.length <= 10) {   
        return true;
    } else {
        console.log("Password must be between 6 and 10 characters");
        return false;
    }
  }
  function passAlphaNumeral(pass) {
const pattern = /^[A-Za-z0-9]+$/;
    if (pattern.test(pass)) {
      return true;
    } else {
      console.log("Password must consist only of letters and digits");
      return false;
    }
  }

  function checkMin2Digits(pass) {

    const pattern = /[0-9]{2,}/;

    if (pattern.test(pass)) {
      return true;
    } else {
      console.log("Password must have at least 2 digits");
      return false;
    }
}
const isLenght = lengthOfPass(pass);
const isAlphaNumer = passAlphaNumeral(pass);
const is2Digits = checkMin2Digits(pass);

  if (isLenght && isAlphaNumer && is2Digits) {
    console.log("Password is valid");
  }

}
passValidate('MyPass123');
