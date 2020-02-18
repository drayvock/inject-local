setTimeout(function() {
  window.addEventListener("load", function() {
    const scriptEle = document.createElement("script");
    scriptEle.src = "http://127.0.0.1:8080/test.js";
    document.body.append(scriptEle);
    const linkEle = document.createElement("link");
    linkEle.rel = "stylesheet";
    linkEle.href = "http://127.0.0.1:8080/test.css";
    document.body.append(linkEle);
  });
}, 2000);
