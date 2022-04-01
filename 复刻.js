/*复制邮箱链接 */
function copyToClip(content, message) {
    var aux = document.createElement("input");
    aux.setAttribute("value", content);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
    if (message == null) {
      alert("Geek的邮箱已经复制到剪贴板了！♡(*´∀｀*)人(*´∀｀*)♡");
    } else {
      alert(message);
    }
  }


/*问答 */
var LU = document.querySelector("#lu");
var lu = LU.children;
var flag = 0;
for (var i = 0; i < lu.length; i++) {
  lu[i].onclick = function () {
    if (this.children[1].style.display == "none") {
      this.children[1].style.display = "block";
    } else {
      this.children[1].style.display = "none";
    }
  };
}
