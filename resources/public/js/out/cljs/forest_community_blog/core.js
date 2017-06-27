// Compiled by ClojureScript 1.9.562 {}
goog.provide('cljs.forest_community_blog.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
console.log("Zdarova chuvachok");
if(typeof cljs.forest_community_blog.core.posts !== 'undefined'){
} else {
cljs.forest_community_blog.core.posts = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
cljs.forest_community_blog.core.get_posts_BANG_ = (function cljs$forest_community_blog$core$get_posts_BANG_(){
var c__28675__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28675__auto__){
return (function (){
var f__28676__auto__ = (function (){var switch__28654__auto__ = ((function (c__28675__auto__){
return (function (state_31484){
var state_val_31485 = (state_31484[(1)]);
if((state_val_31485 === (1))){
var inst_31472 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_31473 = ["content-type"];
var inst_31474 = ["application/json"];
var inst_31475 = cljs.core.PersistentHashMap.fromArrays(inst_31473,inst_31474);
var inst_31476 = [false,inst_31475];
var inst_31477 = cljs.core.PersistentHashMap.fromArrays(inst_31472,inst_31476);
var inst_31478 = cljs_http.client.get.call(null,"http://localhost:3000/posts",inst_31477);
var state_31484__$1 = state_31484;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31484__$1,(2),inst_31478);
} else {
if((state_val_31485 === (2))){
var inst_31480 = (state_31484[(2)]);
var inst_31481 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_31480);
var inst_31482 = cljs.core.reset_BANG_.call(null,cljs.forest_community_blog.core.posts,inst_31481);
var state_31484__$1 = state_31484;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31484__$1,inst_31482);
} else {
return null;
}
}
});})(c__28675__auto__))
;
return ((function (switch__28654__auto__,c__28675__auto__){
return (function() {
var cljs$forest_community_blog$core$get_posts_BANG__$_state_machine__28655__auto__ = null;
var cljs$forest_community_blog$core$get_posts_BANG__$_state_machine__28655__auto____0 = (function (){
var statearr_31489 = [null,null,null,null,null,null,null];
(statearr_31489[(0)] = cljs$forest_community_blog$core$get_posts_BANG__$_state_machine__28655__auto__);

(statearr_31489[(1)] = (1));

return statearr_31489;
});
var cljs$forest_community_blog$core$get_posts_BANG__$_state_machine__28655__auto____1 = (function (state_31484){
while(true){
var ret_value__28656__auto__ = (function (){try{while(true){
var result__28657__auto__ = switch__28654__auto__.call(null,state_31484);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28657__auto__;
}
break;
}
}catch (e31490){if((e31490 instanceof Object)){
var ex__28658__auto__ = e31490;
var statearr_31491_31493 = state_31484;
(statearr_31491_31493[(5)] = ex__28658__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31484);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31490;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31494 = state_31484;
state_31484 = G__31494;
continue;
} else {
return ret_value__28656__auto__;
}
break;
}
});
cljs$forest_community_blog$core$get_posts_BANG__$_state_machine__28655__auto__ = function(state_31484){
switch(arguments.length){
case 0:
return cljs$forest_community_blog$core$get_posts_BANG__$_state_machine__28655__auto____0.call(this);
case 1:
return cljs$forest_community_blog$core$get_posts_BANG__$_state_machine__28655__auto____1.call(this,state_31484);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$forest_community_blog$core$get_posts_BANG__$_state_machine__28655__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$forest_community_blog$core$get_posts_BANG__$_state_machine__28655__auto____0;
cljs$forest_community_blog$core$get_posts_BANG__$_state_machine__28655__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$forest_community_blog$core$get_posts_BANG__$_state_machine__28655__auto____1;
return cljs$forest_community_blog$core$get_posts_BANG__$_state_machine__28655__auto__;
})()
;})(switch__28654__auto__,c__28675__auto__))
})();
var state__28677__auto__ = (function (){var statearr_31492 = f__28676__auto__.call(null);
(statearr_31492[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28675__auto__);

return statearr_31492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28677__auto__);
});})(c__28675__auto__))
);

return c__28675__auto__;
});
cljs.forest_community_blog.core.get_posts_BANG_.call(null);
cljs.forest_community_blog.core.navigation = (function cljs$forest_community_blog$core$navigation(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.navbar.navbar-inverse.navbar-fixed-top","nav.navbar.navbar-inverse.navbar-fixed-top",1741778939),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"role","role",-736691072),"navigation"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-header","div.navbar-header",-515823511),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.navbar-toggle","button.navbar-toggle",1737318847),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"data-toggle","data-toggle",436966687),"collapse",new cljs.core.Keyword(null,"data-target","data-target",-113904678),"#bs-example-navbar-collapse-1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.sr-only","span.sr-only",2081743235),"Toggle navigation"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.icon-bar","span.icon-bar",618689172)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.icon-bar","span.icon-bar",618689172)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.icon-bar","span.icon-bar",618689172)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.navbar-brand","a.navbar-brand",691442118),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),"Forest community"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#bs-example-navbar-collapse-1.collapse.navbar-collapse","div#bs-example-navbar-collapse-1.collapse.navbar-collapse",-1218627155),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.nav.navbar-nav","ul.nav.navbar-nav",1805559761),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),"About"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),"Software Development"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),"Music Production"], null)], null)], null)], null)], null)], null);
});
cljs.forest_community_blog.core.pager = (function cljs$forest_community_blog$core$pager(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.pager","ul.pager",-917591390),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.previous","li.previous",2111068045),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),"Older"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.next","li.next",-1856344692),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),"Newer"], null)], null)], null);
});
cljs.forest_community_blog.core.blog_post = (function cljs$forest_community_blog$core$blog_post(p__31495){
var map__31498 = p__31495;
var map__31498__$1 = ((((!((map__31498 == null)))?((((map__31498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31498.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31498):map__31498);
var body = cljs.core.get.call(null,map__31498__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var title = cljs.core.get.call(null,map__31498__$1,new cljs.core.Keyword(null,"title","title",636505583));
var created_at = cljs.core.get.call(null,map__31498__$1,new cljs.core.Keyword(null,"created_at","created_at",1484050750));
var updated_at = cljs.core.get.call(null,map__31498__$1,new cljs.core.Keyword(null,"updated_at","updated_at",-460224592));
var head_image = cljs.core.get.call(null,map__31498__$1,new cljs.core.Keyword(null,"head_image","head_image",-1566728244));
var id = cljs.core.get.call(null,map__31498__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.lead","p.lead",-1826375077),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["by",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),"Anton"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-time","span.glyphicon.glyphicon-time",-1479228285)], null),created_at], null),(cljs.core.truth_(head_image)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.img-responsive","img.img-responsive",1870698920),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),head_image,new cljs.core.Keyword(null,"alt","alt",-3214426),""], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),body], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-primary","a.btn.btn-primary",-495454127),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),"Read More",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-chevron-right","span.glyphicon.glyphicon-chevron-right",-701366114)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null)], null);
});
cljs.forest_community_blog.core.blog_entries_column = (function cljs$forest_community_blog$core$blog_entries_column(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-8.col-md-offset-2","div.col-md-8.col-md-offset-2",140139886),(function (){var iter__27227__auto__ = (function cljs$forest_community_blog$core$blog_entries_column_$_iter__31504(s__31505){
return (new cljs.core.LazySeq(null,(function (){
var s__31505__$1 = s__31505;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__31505__$1);
if(temp__4657__auto__){
var s__31505__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31505__$2)){
var c__27225__auto__ = cljs.core.chunk_first.call(null,s__31505__$2);
var size__27226__auto__ = cljs.core.count.call(null,c__27225__auto__);
var b__31507 = cljs.core.chunk_buffer.call(null,size__27226__auto__);
if((function (){var i__31506 = (0);
while(true){
if((i__31506 < size__27226__auto__)){
var post = cljs.core._nth.call(null,c__27225__auto__,i__31506);
cljs.core.chunk_append.call(null,b__31507,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.forest_community_blog.core.blog_post,post], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(post)], null)));

var G__31508 = (i__31506 + (1));
i__31506 = G__31508;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31507),cljs$forest_community_blog$core$blog_entries_column_$_iter__31504.call(null,cljs.core.chunk_rest.call(null,s__31505__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31507),null);
}
} else {
var post = cljs.core.first.call(null,s__31505__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.forest_community_blog.core.blog_post,post], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(post)], null)),cljs$forest_community_blog$core$blog_entries_column_$_iter__31504.call(null,cljs.core.rest.call(null,s__31505__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__27227__auto__.call(null,cljs.core.deref.call(null,cljs.forest_community_blog.core.posts));
})()], null);
});
cljs.forest_community_blog.core.search = (function cljs$forest_community_blog$core$search(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.well","div.well",-752456960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Blog Search"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group","div.input-group",-2073660476),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"text"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-btn","span.input-group-btn",358441272),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default","button.btn.btn-default",-991846011),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"button"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-search","span.glyphicon.glyphicon-search",-1963773053)], null)], null)], null)], null)], null);
});
cljs.forest_community_blog.core.categories = (function cljs$forest_community_blog$core$categories(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.well","div.well",-752456960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Blog Categories"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-6","div.col-lg-6",-987495203),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.list-unstyled","ul.list-unstyled",1077310460),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),"Development"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-6","div.col-lg-6",-987495203),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.list-unstyled","ul.list-unstyled",1077310460),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),"Music"], null)], null)], null)], null)], null)], null);
});
cljs.forest_community_blog.core.sidebar_widgets_column = (function cljs$forest_community_blog$core$sidebar_widgets_column(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-4","div.col-md-4",864652098),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.forest_community_blog.core.search], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.forest_community_blog.core.categories], null)], null);
});
cljs.forest_community_blog.core.page_content = (function cljs$forest_community_blog$core$page_content(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.forest_community_blog.core.blog_entries_column], null)], null)], null);
});
cljs.forest_community_blog.core.root_component = (function cljs$forest_community_blog$core$root_component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.root","div.root",2120930743),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.forest_community_blog.core.navigation], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.forest_community_blog.core.page_content], null)], null);
});
cljs.forest_community_blog.core.start = (function cljs$forest_community_blog$core$start(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.forest_community_blog.core.root_component], null),document.getElementById("app"));
});
goog.exportSymbol('cljs.forest_community_blog.core.start', cljs.forest_community_blog.core.start);
window.addEventListener("DOMContentLoaded",cljs.forest_community_blog.core.start);

//# sourceMappingURL=core.js.map?rel=1498524420711