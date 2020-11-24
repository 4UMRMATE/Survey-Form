function checkOthersBox() {
  let checkBox = document.querySelector("#other");
  let att = document.createAttribute("checked");
  checkBox.setAttributeNode(att);
  console.log(checkBox);
}
