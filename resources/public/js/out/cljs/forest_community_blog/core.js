// Compiled by ClojureScript 1.9.562 {}
goog.provide('cljs.forest_community_blog.core');
goog.require('cljs.core');
goog.require('reagent.core');
console.log("Zdarova chuvachok");
cljs.forest_community_blog.core.cool_component = (function cljs$forest_community_blog$core$cool_component(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Coolest component ever"], null)], null);
});
cljs.forest_community_blog.core.start = (function cljs$forest_community_blog$core$start(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.forest_community_blog.core.cool_component], null),document.getElementById("app"));
});
goog.exportSymbol('cljs.forest_community_blog.core.start', cljs.forest_community_blog.core.start);
window.addEventListener("DOMContentLoaded",cljs.forest_community_blog.core.start);

//# sourceMappingURL=core.js.map?rel=1498491039568