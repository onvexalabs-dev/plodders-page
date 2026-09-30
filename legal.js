(function(){
  document.documentElement.classList.add("js");
  var secs = document.querySelectorAll("main > section");
  var links = document.querySelectorAll(".langs a");
  function show(l){
    secs.forEach(function(s){ s.hidden = s.id !== l; });
    links.forEach(function(a){ a.classList.toggle("on", a.dataset.l === l); });
    document.documentElement.lang = l;
  }
  var q = new URLSearchParams(location.search).get("lang");
  var h = location.hash.replace("#","");
  var l = (h === "de" || h === "en") ? h : (q === "de" || q === "en") ? q : null;
  if (!l) { try { var s = localStorage.getItem("plodders_lang"); if (s === "de") l = "de"; } catch(e) {} }
  if (!l) l = ((navigator.language || "en").slice(0,2).toLowerCase() === "de") ? "de" : "en";
  show(l);
  links.forEach(function(a){ a.addEventListener("click", function(e){ e.preventDefault(); show(a.dataset.l); history.replaceState(null, "", "#" + a.dataset.l); }); });
})();
