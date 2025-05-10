function encryptMessage(msg) {
    return btoa(unescape(encodeURIComponent(msg)));
  }
  function decryptMessage(encoded) {
    return decodeURIComponent(escape(atob(encoded)));
  }
  