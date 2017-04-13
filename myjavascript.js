
new Ajax.Request("mydata.xml",
{
    method: "get",
    onSuccess: getContentOfFile,
    onFailure: displayUnableMethod
}
);

function getContentOfFile(data) {
  console.log(data);
  var categories = data.responseXML.getElementsByTagName("categories");
  console.log(categories);
  console.log(categories["0"].children["0"].innerHTML);
  document.getElementById("inserthere").innerHTML = data.responseText
  console.log(categories["0"].children["1"].innerHTML);
}

function displayUnableMethod() {
  console.log("bad input");
}
