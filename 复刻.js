
window.onload = function () {
  /*复制邮箱链接 */
  var btn = document.getElementById("a2");
  var content = "newthread_geek@outlook.com";
  btn.onclick = function copyToClip() {
    var aux = document.createElement("input");
    aux.setAttribute("value", content);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
      alert("Geek的邮箱已经复制到剪贴板了！♡(*´∀｀*)人(*´∀｀*)♡");
  }

  /*问答 */
  var ul = document.getElementById("QA-ul");
  var ulChildren = ul.children;
  for (var i = 0; i < ulChildren.length; i++) {
    ulChildren[i].onclick = function (event) {
      event = event || window.event;
      if(event.target.className == "QA-a"){
        if (this.children[1].style.display == "none") {
          this.children[1].style.display = "block";
        } else {
          this.children[1].style.display = "none";
        }
      };
      };
  }

  /*丝滑跳转*/
  var about = document.getElementById("about");
  var aboutusplace = document.getElementById("aboutusplace");
  about.onclick = function(){
    aboutusplace.scrollIntoView({behavior:"smooth"}) ;
  };

  var introduction = document.getElementById("introduction");
  var pass = document.getElementById("pass");
  introduction.onclick = function(event){
    event = event || window.event;
    if(event.target.className == "intro_a"){
      pass.scrollIntoView({behavior:"smooth"}) ;
    };
    
  };

  var qa = document.getElementById("qa");
  var QAplace = document.getElementById("QAplace");
  qa.onclick = function(){
    QAplace.scrollIntoView({behavior:"smooth"}) ;
  };

  var contact = document.getElementById("contact");
  var contactplace = document.getElementById("contactplace");
  contact.onclick = function(){
    contactplace.scrollIntoView({behavior:"smooth"}) ;
  };

  var pointer2 = document.getElementById("pointer2");
  var top = document.getElementById("top");
  pointer2.onclick = function(){
    top.scrollIntoView({behavior:"smooth"}) ;
  };
};



