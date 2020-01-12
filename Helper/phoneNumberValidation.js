export default function(phone) {
  var phoneno = /^\+?(2507)\)?([0-9]{8})$/;
  if (phone.match(phoneno)) {
    return true;
  } else {
    return false;
  }
}
