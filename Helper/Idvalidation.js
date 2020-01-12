export default function(nationalId) {
    var id = /([0-9]{16})$/;
    if (nationalId.match(id)) {
      return true;
    } else {
      return false;
    }
  }
  