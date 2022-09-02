function yearConf(no) {
  let x = new Date().getFullYear();
  x = parseInt(x);
  return (document.getElementById(`${no}`).textContent = `   ${x}  `);
}
yearConf("year");
yearConf("yearM");
