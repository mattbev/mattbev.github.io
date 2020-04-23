function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function skip(id){
    var div = document.getElementById(id);
    var px = div.offsetHeight;
    
    await sleep(750);
    window.scroll(0, px);
}
    