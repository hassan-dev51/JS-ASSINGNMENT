console.log("This is chp 35-38");
    const str = prompt('Enter a Sentence');

    function capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
    
    const caps = str.split(' ').map(capitalize).join(' ');
   console.log(caps);
