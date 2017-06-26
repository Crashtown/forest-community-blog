// Compiled by ClojureScript 1.9.562 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__26431__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__26431__auto__){
return or__26431__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__26431__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, ["svgpan.SvgPan",null,"far.out",null,"cljs.nodejs",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__26431__auto__)){
return or__26431__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__33411_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__33411_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__33416 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__33417 = null;
var count__33418 = (0);
var i__33419 = (0);
while(true){
if((i__33419 < count__33418)){
var n = cljs.core._nth.call(null,chunk__33417,i__33419);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__33420 = seq__33416;
var G__33421 = chunk__33417;
var G__33422 = count__33418;
var G__33423 = (i__33419 + (1));
seq__33416 = G__33420;
chunk__33417 = G__33421;
count__33418 = G__33422;
i__33419 = G__33423;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33416);
if(temp__4657__auto__){
var seq__33416__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33416__$1)){
var c__27250__auto__ = cljs.core.chunk_first.call(null,seq__33416__$1);
var G__33424 = cljs.core.chunk_rest.call(null,seq__33416__$1);
var G__33425 = c__27250__auto__;
var G__33426 = cljs.core.count.call(null,c__27250__auto__);
var G__33427 = (0);
seq__33416 = G__33424;
chunk__33417 = G__33425;
count__33418 = G__33426;
i__33419 = G__33427;
continue;
} else {
var n = cljs.core.first.call(null,seq__33416__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__33428 = cljs.core.next.call(null,seq__33416__$1);
var G__33429 = null;
var G__33430 = (0);
var G__33431 = (0);
seq__33416 = G__33428;
chunk__33417 = G__33429;
count__33418 = G__33430;
i__33419 = G__33431;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__33482_33493 = cljs.core.seq.call(null,deps);
var chunk__33483_33494 = null;
var count__33484_33495 = (0);
var i__33485_33496 = (0);
while(true){
if((i__33485_33496 < count__33484_33495)){
var dep_33497 = cljs.core._nth.call(null,chunk__33483_33494,i__33485_33496);
topo_sort_helper_STAR_.call(null,dep_33497,(depth + (1)),state);

var G__33498 = seq__33482_33493;
var G__33499 = chunk__33483_33494;
var G__33500 = count__33484_33495;
var G__33501 = (i__33485_33496 + (1));
seq__33482_33493 = G__33498;
chunk__33483_33494 = G__33499;
count__33484_33495 = G__33500;
i__33485_33496 = G__33501;
continue;
} else {
var temp__4657__auto___33502 = cljs.core.seq.call(null,seq__33482_33493);
if(temp__4657__auto___33502){
var seq__33482_33503__$1 = temp__4657__auto___33502;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33482_33503__$1)){
var c__27250__auto___33504 = cljs.core.chunk_first.call(null,seq__33482_33503__$1);
var G__33505 = cljs.core.chunk_rest.call(null,seq__33482_33503__$1);
var G__33506 = c__27250__auto___33504;
var G__33507 = cljs.core.count.call(null,c__27250__auto___33504);
var G__33508 = (0);
seq__33482_33493 = G__33505;
chunk__33483_33494 = G__33506;
count__33484_33495 = G__33507;
i__33485_33496 = G__33508;
continue;
} else {
var dep_33509 = cljs.core.first.call(null,seq__33482_33503__$1);
topo_sort_helper_STAR_.call(null,dep_33509,(depth + (1)),state);

var G__33510 = cljs.core.next.call(null,seq__33482_33503__$1);
var G__33511 = null;
var G__33512 = (0);
var G__33513 = (0);
seq__33482_33493 = G__33510;
chunk__33483_33494 = G__33511;
count__33484_33495 = G__33512;
i__33485_33496 = G__33513;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__33486){
var vec__33490 = p__33486;
var seq__33491 = cljs.core.seq.call(null,vec__33490);
var first__33492 = cljs.core.first.call(null,seq__33491);
var seq__33491__$1 = cljs.core.next.call(null,seq__33491);
var x = first__33492;
var xs = seq__33491__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__33490,seq__33491,first__33492,seq__33491__$1,x,xs,get_deps__$1){
return (function (p1__33432_SHARP_){
return clojure.set.difference.call(null,p1__33432_SHARP_,x);
});})(vec__33490,seq__33491,first__33492,seq__33491__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__33526 = cljs.core.seq.call(null,provides);
var chunk__33527 = null;
var count__33528 = (0);
var i__33529 = (0);
while(true){
if((i__33529 < count__33528)){
var prov = cljs.core._nth.call(null,chunk__33527,i__33529);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__33530_33538 = cljs.core.seq.call(null,requires);
var chunk__33531_33539 = null;
var count__33532_33540 = (0);
var i__33533_33541 = (0);
while(true){
if((i__33533_33541 < count__33532_33540)){
var req_33542 = cljs.core._nth.call(null,chunk__33531_33539,i__33533_33541);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33542,prov);

var G__33543 = seq__33530_33538;
var G__33544 = chunk__33531_33539;
var G__33545 = count__33532_33540;
var G__33546 = (i__33533_33541 + (1));
seq__33530_33538 = G__33543;
chunk__33531_33539 = G__33544;
count__33532_33540 = G__33545;
i__33533_33541 = G__33546;
continue;
} else {
var temp__4657__auto___33547 = cljs.core.seq.call(null,seq__33530_33538);
if(temp__4657__auto___33547){
var seq__33530_33548__$1 = temp__4657__auto___33547;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33530_33548__$1)){
var c__27250__auto___33549 = cljs.core.chunk_first.call(null,seq__33530_33548__$1);
var G__33550 = cljs.core.chunk_rest.call(null,seq__33530_33548__$1);
var G__33551 = c__27250__auto___33549;
var G__33552 = cljs.core.count.call(null,c__27250__auto___33549);
var G__33553 = (0);
seq__33530_33538 = G__33550;
chunk__33531_33539 = G__33551;
count__33532_33540 = G__33552;
i__33533_33541 = G__33553;
continue;
} else {
var req_33554 = cljs.core.first.call(null,seq__33530_33548__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33554,prov);

var G__33555 = cljs.core.next.call(null,seq__33530_33548__$1);
var G__33556 = null;
var G__33557 = (0);
var G__33558 = (0);
seq__33530_33538 = G__33555;
chunk__33531_33539 = G__33556;
count__33532_33540 = G__33557;
i__33533_33541 = G__33558;
continue;
}
} else {
}
}
break;
}

var G__33559 = seq__33526;
var G__33560 = chunk__33527;
var G__33561 = count__33528;
var G__33562 = (i__33529 + (1));
seq__33526 = G__33559;
chunk__33527 = G__33560;
count__33528 = G__33561;
i__33529 = G__33562;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33526);
if(temp__4657__auto__){
var seq__33526__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33526__$1)){
var c__27250__auto__ = cljs.core.chunk_first.call(null,seq__33526__$1);
var G__33563 = cljs.core.chunk_rest.call(null,seq__33526__$1);
var G__33564 = c__27250__auto__;
var G__33565 = cljs.core.count.call(null,c__27250__auto__);
var G__33566 = (0);
seq__33526 = G__33563;
chunk__33527 = G__33564;
count__33528 = G__33565;
i__33529 = G__33566;
continue;
} else {
var prov = cljs.core.first.call(null,seq__33526__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__33534_33567 = cljs.core.seq.call(null,requires);
var chunk__33535_33568 = null;
var count__33536_33569 = (0);
var i__33537_33570 = (0);
while(true){
if((i__33537_33570 < count__33536_33569)){
var req_33571 = cljs.core._nth.call(null,chunk__33535_33568,i__33537_33570);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33571,prov);

var G__33572 = seq__33534_33567;
var G__33573 = chunk__33535_33568;
var G__33574 = count__33536_33569;
var G__33575 = (i__33537_33570 + (1));
seq__33534_33567 = G__33572;
chunk__33535_33568 = G__33573;
count__33536_33569 = G__33574;
i__33537_33570 = G__33575;
continue;
} else {
var temp__4657__auto___33576__$1 = cljs.core.seq.call(null,seq__33534_33567);
if(temp__4657__auto___33576__$1){
var seq__33534_33577__$1 = temp__4657__auto___33576__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33534_33577__$1)){
var c__27250__auto___33578 = cljs.core.chunk_first.call(null,seq__33534_33577__$1);
var G__33579 = cljs.core.chunk_rest.call(null,seq__33534_33577__$1);
var G__33580 = c__27250__auto___33578;
var G__33581 = cljs.core.count.call(null,c__27250__auto___33578);
var G__33582 = (0);
seq__33534_33567 = G__33579;
chunk__33535_33568 = G__33580;
count__33536_33569 = G__33581;
i__33537_33570 = G__33582;
continue;
} else {
var req_33583 = cljs.core.first.call(null,seq__33534_33577__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33583,prov);

var G__33584 = cljs.core.next.call(null,seq__33534_33577__$1);
var G__33585 = null;
var G__33586 = (0);
var G__33587 = (0);
seq__33534_33567 = G__33584;
chunk__33535_33568 = G__33585;
count__33536_33569 = G__33586;
i__33537_33570 = G__33587;
continue;
}
} else {
}
}
break;
}

var G__33588 = cljs.core.next.call(null,seq__33526__$1);
var G__33589 = null;
var G__33590 = (0);
var G__33591 = (0);
seq__33526 = G__33588;
chunk__33527 = G__33589;
count__33528 = G__33590;
i__33529 = G__33591;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__33596_33600 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__33597_33601 = null;
var count__33598_33602 = (0);
var i__33599_33603 = (0);
while(true){
if((i__33599_33603 < count__33598_33602)){
var ns_33604 = cljs.core._nth.call(null,chunk__33597_33601,i__33599_33603);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_33604);

var G__33605 = seq__33596_33600;
var G__33606 = chunk__33597_33601;
var G__33607 = count__33598_33602;
var G__33608 = (i__33599_33603 + (1));
seq__33596_33600 = G__33605;
chunk__33597_33601 = G__33606;
count__33598_33602 = G__33607;
i__33599_33603 = G__33608;
continue;
} else {
var temp__4657__auto___33609 = cljs.core.seq.call(null,seq__33596_33600);
if(temp__4657__auto___33609){
var seq__33596_33610__$1 = temp__4657__auto___33609;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33596_33610__$1)){
var c__27250__auto___33611 = cljs.core.chunk_first.call(null,seq__33596_33610__$1);
var G__33612 = cljs.core.chunk_rest.call(null,seq__33596_33610__$1);
var G__33613 = c__27250__auto___33611;
var G__33614 = cljs.core.count.call(null,c__27250__auto___33611);
var G__33615 = (0);
seq__33596_33600 = G__33612;
chunk__33597_33601 = G__33613;
count__33598_33602 = G__33614;
i__33599_33603 = G__33615;
continue;
} else {
var ns_33616 = cljs.core.first.call(null,seq__33596_33610__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_33616);

var G__33617 = cljs.core.next.call(null,seq__33596_33610__$1);
var G__33618 = null;
var G__33619 = (0);
var G__33620 = (0);
seq__33596_33600 = G__33617;
chunk__33597_33601 = G__33618;
count__33598_33602 = G__33619;
i__33599_33603 = G__33620;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__26431__auto__ = goog.require__;
if(cljs.core.truth_(or__26431__auto__)){
return or__26431__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__33621__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__33621 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33622__i = 0, G__33622__a = new Array(arguments.length -  0);
while (G__33622__i < G__33622__a.length) {G__33622__a[G__33622__i] = arguments[G__33622__i + 0]; ++G__33622__i;}
  args = new cljs.core.IndexedSeq(G__33622__a,0,null);
} 
return G__33621__delegate.call(this,args);};
G__33621.cljs$lang$maxFixedArity = 0;
G__33621.cljs$lang$applyTo = (function (arglist__33623){
var args = cljs.core.seq(arglist__33623);
return G__33621__delegate(args);
});
G__33621.cljs$core$IFn$_invoke$arity$variadic = G__33621__delegate;
return G__33621;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__33624 = cljs.core._EQ_;
var expr__33625 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__33624.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__33625))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__33624,expr__33625){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__33624,expr__33625))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__33624,expr__33625){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e33627){if((e33627 instanceof Error)){
var e = e33627;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e33627;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__33624,expr__33625))
} else {
if(cljs.core.truth_(pred__33624.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__33625))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__33624.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__33625))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__33624.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__33625))){
return ((function (pred__33624,expr__33625){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e33628){if((e33628 instanceof Error)){
var e = e33628;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e33628;

}
}})());
});
;})(pred__33624,expr__33625))
} else {
return ((function (pred__33624,expr__33625){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__33624,expr__33625))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__33629,callback){
var map__33632 = p__33629;
var map__33632__$1 = ((((!((map__33632 == null)))?((((map__33632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33632.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33632):map__33632);
var file_msg = map__33632__$1;
var request_url = cljs.core.get.call(null,map__33632__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__33632,map__33632__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__33632,map__33632__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__28644__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28644__auto__){
return (function (){
var f__28645__auto__ = (function (){var switch__28579__auto__ = ((function (c__28644__auto__){
return (function (state_33656){
var state_val_33657 = (state_33656[(1)]);
if((state_val_33657 === (7))){
var inst_33652 = (state_33656[(2)]);
var state_33656__$1 = state_33656;
var statearr_33658_33678 = state_33656__$1;
(statearr_33658_33678[(2)] = inst_33652);

(statearr_33658_33678[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33657 === (1))){
var state_33656__$1 = state_33656;
var statearr_33659_33679 = state_33656__$1;
(statearr_33659_33679[(2)] = null);

(statearr_33659_33679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33657 === (4))){
var inst_33636 = (state_33656[(7)]);
var inst_33636__$1 = (state_33656[(2)]);
var state_33656__$1 = (function (){var statearr_33660 = state_33656;
(statearr_33660[(7)] = inst_33636__$1);

return statearr_33660;
})();
if(cljs.core.truth_(inst_33636__$1)){
var statearr_33661_33680 = state_33656__$1;
(statearr_33661_33680[(1)] = (5));

} else {
var statearr_33662_33681 = state_33656__$1;
(statearr_33662_33681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33657 === (6))){
var state_33656__$1 = state_33656;
var statearr_33663_33682 = state_33656__$1;
(statearr_33663_33682[(2)] = null);

(statearr_33663_33682[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33657 === (3))){
var inst_33654 = (state_33656[(2)]);
var state_33656__$1 = state_33656;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33656__$1,inst_33654);
} else {
if((state_val_33657 === (2))){
var state_33656__$1 = state_33656;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33656__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_33657 === (11))){
var inst_33648 = (state_33656[(2)]);
var state_33656__$1 = (function (){var statearr_33664 = state_33656;
(statearr_33664[(8)] = inst_33648);

return statearr_33664;
})();
var statearr_33665_33683 = state_33656__$1;
(statearr_33665_33683[(2)] = null);

(statearr_33665_33683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33657 === (9))){
var inst_33640 = (state_33656[(9)]);
var inst_33642 = (state_33656[(10)]);
var inst_33644 = inst_33642.call(null,inst_33640);
var state_33656__$1 = state_33656;
var statearr_33666_33684 = state_33656__$1;
(statearr_33666_33684[(2)] = inst_33644);

(statearr_33666_33684[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33657 === (5))){
var inst_33636 = (state_33656[(7)]);
var inst_33638 = figwheel.client.file_reloading.blocking_load.call(null,inst_33636);
var state_33656__$1 = state_33656;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33656__$1,(8),inst_33638);
} else {
if((state_val_33657 === (10))){
var inst_33640 = (state_33656[(9)]);
var inst_33646 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_33640);
var state_33656__$1 = state_33656;
var statearr_33667_33685 = state_33656__$1;
(statearr_33667_33685[(2)] = inst_33646);

(statearr_33667_33685[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33657 === (8))){
var inst_33636 = (state_33656[(7)]);
var inst_33642 = (state_33656[(10)]);
var inst_33640 = (state_33656[(2)]);
var inst_33641 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_33642__$1 = cljs.core.get.call(null,inst_33641,inst_33636);
var state_33656__$1 = (function (){var statearr_33668 = state_33656;
(statearr_33668[(9)] = inst_33640);

(statearr_33668[(10)] = inst_33642__$1);

return statearr_33668;
})();
if(cljs.core.truth_(inst_33642__$1)){
var statearr_33669_33686 = state_33656__$1;
(statearr_33669_33686[(1)] = (9));

} else {
var statearr_33670_33687 = state_33656__$1;
(statearr_33670_33687[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__28644__auto__))
;
return ((function (switch__28579__auto__,c__28644__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__28580__auto__ = null;
var figwheel$client$file_reloading$state_machine__28580__auto____0 = (function (){
var statearr_33674 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33674[(0)] = figwheel$client$file_reloading$state_machine__28580__auto__);

(statearr_33674[(1)] = (1));

return statearr_33674;
});
var figwheel$client$file_reloading$state_machine__28580__auto____1 = (function (state_33656){
while(true){
var ret_value__28581__auto__ = (function (){try{while(true){
var result__28582__auto__ = switch__28579__auto__.call(null,state_33656);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28582__auto__;
}
break;
}
}catch (e33675){if((e33675 instanceof Object)){
var ex__28583__auto__ = e33675;
var statearr_33676_33688 = state_33656;
(statearr_33676_33688[(5)] = ex__28583__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33656);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33675;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33689 = state_33656;
state_33656 = G__33689;
continue;
} else {
return ret_value__28581__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__28580__auto__ = function(state_33656){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__28580__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__28580__auto____1.call(this,state_33656);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__28580__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__28580__auto____0;
figwheel$client$file_reloading$state_machine__28580__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__28580__auto____1;
return figwheel$client$file_reloading$state_machine__28580__auto__;
})()
;})(switch__28579__auto__,c__28644__auto__))
})();
var state__28646__auto__ = (function (){var statearr_33677 = f__28645__auto__.call(null);
(statearr_33677[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28644__auto__);

return statearr_33677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28646__auto__);
});})(c__28644__auto__))
);

return c__28644__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__33690,callback){
var map__33693 = p__33690;
var map__33693__$1 = ((((!((map__33693 == null)))?((((map__33693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33693.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33693):map__33693);
var file_msg = map__33693__$1;
var namespace = cljs.core.get.call(null,map__33693__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__33693,map__33693__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__33693,map__33693__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__33695){
var map__33698 = p__33695;
var map__33698__$1 = ((((!((map__33698 == null)))?((((map__33698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33698.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33698):map__33698);
var file_msg = map__33698__$1;
var namespace = cljs.core.get.call(null,map__33698__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__33700){
var map__33703 = p__33700;
var map__33703__$1 = ((((!((map__33703 == null)))?((((map__33703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33703.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33703):map__33703);
var file_msg = map__33703__$1;
var namespace = cljs.core.get.call(null,map__33703__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__26419__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__26419__auto__){
var or__26431__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__26431__auto__)){
return or__26431__auto__;
} else {
var or__26431__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__26431__auto____$1)){
return or__26431__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__26419__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__33705,callback){
var map__33708 = p__33705;
var map__33708__$1 = ((((!((map__33708 == null)))?((((map__33708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33708.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33708):map__33708);
var file_msg = map__33708__$1;
var request_url = cljs.core.get.call(null,map__33708__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__33708__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not trying to load file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__28644__auto___33812 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28644__auto___33812,out){
return (function (){
var f__28645__auto__ = (function (){var switch__28579__auto__ = ((function (c__28644__auto___33812,out){
return (function (state_33794){
var state_val_33795 = (state_33794[(1)]);
if((state_val_33795 === (1))){
var inst_33768 = cljs.core.seq.call(null,files);
var inst_33769 = cljs.core.first.call(null,inst_33768);
var inst_33770 = cljs.core.next.call(null,inst_33768);
var inst_33771 = files;
var state_33794__$1 = (function (){var statearr_33796 = state_33794;
(statearr_33796[(7)] = inst_33770);

(statearr_33796[(8)] = inst_33769);

(statearr_33796[(9)] = inst_33771);

return statearr_33796;
})();
var statearr_33797_33813 = state_33794__$1;
(statearr_33797_33813[(2)] = null);

(statearr_33797_33813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33795 === (2))){
var inst_33777 = (state_33794[(10)]);
var inst_33771 = (state_33794[(9)]);
var inst_33776 = cljs.core.seq.call(null,inst_33771);
var inst_33777__$1 = cljs.core.first.call(null,inst_33776);
var inst_33778 = cljs.core.next.call(null,inst_33776);
var inst_33779 = (inst_33777__$1 == null);
var inst_33780 = cljs.core.not.call(null,inst_33779);
var state_33794__$1 = (function (){var statearr_33798 = state_33794;
(statearr_33798[(11)] = inst_33778);

(statearr_33798[(10)] = inst_33777__$1);

return statearr_33798;
})();
if(inst_33780){
var statearr_33799_33814 = state_33794__$1;
(statearr_33799_33814[(1)] = (4));

} else {
var statearr_33800_33815 = state_33794__$1;
(statearr_33800_33815[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33795 === (3))){
var inst_33792 = (state_33794[(2)]);
var state_33794__$1 = state_33794;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33794__$1,inst_33792);
} else {
if((state_val_33795 === (4))){
var inst_33777 = (state_33794[(10)]);
var inst_33782 = figwheel.client.file_reloading.reload_js_file.call(null,inst_33777);
var state_33794__$1 = state_33794;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33794__$1,(7),inst_33782);
} else {
if((state_val_33795 === (5))){
var inst_33788 = cljs.core.async.close_BANG_.call(null,out);
var state_33794__$1 = state_33794;
var statearr_33801_33816 = state_33794__$1;
(statearr_33801_33816[(2)] = inst_33788);

(statearr_33801_33816[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33795 === (6))){
var inst_33790 = (state_33794[(2)]);
var state_33794__$1 = state_33794;
var statearr_33802_33817 = state_33794__$1;
(statearr_33802_33817[(2)] = inst_33790);

(statearr_33802_33817[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33795 === (7))){
var inst_33778 = (state_33794[(11)]);
var inst_33784 = (state_33794[(2)]);
var inst_33785 = cljs.core.async.put_BANG_.call(null,out,inst_33784);
var inst_33771 = inst_33778;
var state_33794__$1 = (function (){var statearr_33803 = state_33794;
(statearr_33803[(9)] = inst_33771);

(statearr_33803[(12)] = inst_33785);

return statearr_33803;
})();
var statearr_33804_33818 = state_33794__$1;
(statearr_33804_33818[(2)] = null);

(statearr_33804_33818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__28644__auto___33812,out))
;
return ((function (switch__28579__auto__,c__28644__auto___33812,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28580__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28580__auto____0 = (function (){
var statearr_33808 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33808[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28580__auto__);

(statearr_33808[(1)] = (1));

return statearr_33808;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28580__auto____1 = (function (state_33794){
while(true){
var ret_value__28581__auto__ = (function (){try{while(true){
var result__28582__auto__ = switch__28579__auto__.call(null,state_33794);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28582__auto__;
}
break;
}
}catch (e33809){if((e33809 instanceof Object)){
var ex__28583__auto__ = e33809;
var statearr_33810_33819 = state_33794;
(statearr_33810_33819[(5)] = ex__28583__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33794);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33809;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33820 = state_33794;
state_33794 = G__33820;
continue;
} else {
return ret_value__28581__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28580__auto__ = function(state_33794){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28580__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28580__auto____1.call(this,state_33794);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28580__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28580__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28580__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28580__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28580__auto__;
})()
;})(switch__28579__auto__,c__28644__auto___33812,out))
})();
var state__28646__auto__ = (function (){var statearr_33811 = f__28645__auto__.call(null);
(statearr_33811[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28644__auto___33812);

return statearr_33811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28646__auto__);
});})(c__28644__auto___33812,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__33821,opts){
var map__33825 = p__33821;
var map__33825__$1 = ((((!((map__33825 == null)))?((((map__33825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33825.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33825):map__33825);
var eval_body = cljs.core.get.call(null,map__33825__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__33825__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__26419__auto__ = eval_body;
if(cljs.core.truth_(and__26419__auto__)){
return typeof eval_body === 'string';
} else {
return and__26419__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Evaling file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e33827){var e = e33827;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to evaluate "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__33828_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33828_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__33837){
var vec__33838 = p__33837;
var k = cljs.core.nth.call(null,vec__33838,(0),null);
var v = cljs.core.nth.call(null,vec__33838,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__33841){
var vec__33842 = p__33841;
var k = cljs.core.nth.call(null,vec__33842,(0),null);
var v = cljs.core.nth.call(null,vec__33842,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__33848,p__33849){
var map__34097 = p__33848;
var map__34097__$1 = ((((!((map__34097 == null)))?((((map__34097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34097.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34097):map__34097);
var opts = map__34097__$1;
var before_jsload = cljs.core.get.call(null,map__34097__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__34097__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__34097__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__34098 = p__33849;
var map__34098__$1 = ((((!((map__34098 == null)))?((((map__34098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34098.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34098):map__34098);
var msg = map__34098__$1;
var files = cljs.core.get.call(null,map__34098__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__34098__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__34098__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28644__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28644__auto__,map__34097,map__34097__$1,opts,before_jsload,on_jsload,reload_dependents,map__34098,map__34098__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__28645__auto__ = (function (){var switch__28579__auto__ = ((function (c__28644__auto__,map__34097,map__34097__$1,opts,before_jsload,on_jsload,reload_dependents,map__34098,map__34098__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_34252){
var state_val_34253 = (state_34252[(1)]);
if((state_val_34253 === (7))){
var inst_34115 = (state_34252[(7)]);
var inst_34113 = (state_34252[(8)]);
var inst_34112 = (state_34252[(9)]);
var inst_34114 = (state_34252[(10)]);
var inst_34120 = cljs.core._nth.call(null,inst_34113,inst_34115);
var inst_34121 = figwheel.client.file_reloading.eval_body.call(null,inst_34120,opts);
var inst_34122 = (inst_34115 + (1));
var tmp34254 = inst_34113;
var tmp34255 = inst_34112;
var tmp34256 = inst_34114;
var inst_34112__$1 = tmp34255;
var inst_34113__$1 = tmp34254;
var inst_34114__$1 = tmp34256;
var inst_34115__$1 = inst_34122;
var state_34252__$1 = (function (){var statearr_34257 = state_34252;
(statearr_34257[(7)] = inst_34115__$1);

(statearr_34257[(11)] = inst_34121);

(statearr_34257[(8)] = inst_34113__$1);

(statearr_34257[(9)] = inst_34112__$1);

(statearr_34257[(10)] = inst_34114__$1);

return statearr_34257;
})();
var statearr_34258_34344 = state_34252__$1;
(statearr_34258_34344[(2)] = null);

(statearr_34258_34344[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34253 === (20))){
var inst_34155 = (state_34252[(12)]);
var inst_34163 = figwheel.client.file_reloading.sort_files.call(null,inst_34155);
var state_34252__$1 = state_34252;
var statearr_34259_34345 = state_34252__$1;
(statearr_34259_34345[(2)] = inst_34163);

(statearr_34259_34345[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34253 === (27))){
var state_34252__$1 = state_34252;
var statearr_34260_34346 = state_34252__$1;
(statearr_34260_34346[(2)] = null);

(statearr_34260_34346[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34253 === (1))){
var inst_34104 = (state_34252[(13)]);
var inst_34101 = before_jsload.call(null,files);
var inst_34102 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_34103 = (function (){return ((function (inst_34104,inst_34101,inst_34102,state_val_34253,c__28644__auto__,map__34097,map__34097__$1,opts,before_jsload,on_jsload,reload_dependents,map__34098,map__34098__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33845_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33845_SHARP_);
});
;})(inst_34104,inst_34101,inst_34102,state_val_34253,c__28644__auto__,map__34097,map__34097__$1,opts,before_jsload,on_jsload,reload_dependents,map__34098,map__34098__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34104__$1 = cljs.core.filter.call(null,inst_34103,files);
var inst_34105 = cljs.core.not_empty.call(null,inst_34104__$1);
var state_34252__$1 = (function (){var statearr_34261 = state_34252;
(statearr_34261[(14)] = inst_34101);

(statearr_34261[(13)] = inst_34104__$1);

(statearr_34261[(15)] = inst_34102);

return statearr_34261;
})();
if(cljs.core.truth_(inst_34105)){
var statearr_34262_34347 = state_34252__$1;
(statearr_34262_34347[(1)] = (2));

} else {
var statearr_34263_34348 = state_34252__$1;
(statearr_34263_34348[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34253 === (24))){
var state_34252__$1 = state_34252;
var statearr_34264_34349 = state_34252__$1;
(statearr_34264_34349[(2)] = null);

(statearr_34264_34349[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34253 === (39))){
var inst_34205 = (state_34252[(16)]);
var state_34252__$1 = state_34252;
var statearr_34265_34350 = state_34252__$1;
(statearr_34265_34350[(2)] = inst_34205);

(statearr_34265_34350[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34253 === (46))){
var inst_34247 = (state_34252[(2)]);
var state_34252__$1 = state_34252;
var statearr_34266_34351 = state_34252__$1;
(statearr_34266_34351[(2)] = inst_34247);

(statearr_34266_34351[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34253 === (4))){
var inst_34149 = (state_34252[(2)]);
var inst_34150 = cljs.core.List.EMPTY;
var inst_34151 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_34150);
var inst_34152 = (function (){return ((function (inst_34149,inst_34150,inst_34151,state_val_34253,c__28644__auto__,map__34097,map__34097__$1,opts,before_jsload,on_jsload,reload_dependents,map__34098,map__34098__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33846_SHARP_){
var and__26419__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33846_SHARP_);
if(cljs.core.truth_(and__26419__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33846_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__33846_SHARP_)));
} else {
return and__26419__auto__;
}
});
;})(inst_34149,inst_34150,inst_34151,state_val_34253,c__28644__auto__,map__34097,map__34097__$1,opts,before_jsload,on_jsload,reload_dependents,map__34098,map__34098__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34153 = cljs.core.filter.call(null,inst_34152,files);
var inst_34154 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_34155 = cljs.core.concat.call(null,inst_34153,inst_34154);
var state_34252__$1 = (function (){var statearr_34267 = state_34252;
(statearr_34267[(17)] = inst_34149);

(statearr_34267[(18)] = inst_34151);

(statearr_34267[(12)] = inst_34155);

return statearr_34267;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_34268_34352 = state_34252__$1;
(statearr_34268_34352[(1)] = (16));

} else {
var statearr_34269_34353 = state_34252__$1;
(statearr_34269_34353[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34253 === (15))){
var inst_34139 = (state_34252[(2)]);
var state_34252__$1 = state_34252;
var statearr_34270_34354 = state_34252__$1;
(statearr_34270_34354[(2)] = inst_34139);

(statearr_34270_34354[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34253 === (21))){
var inst_34165 = (state_34252[(19)]);
var inst_34165__$1 = (state_34252[(2)]);
var inst_34166 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_34165__$1);
var state_34252__$1 = (function (){var statearr_34271 = state_34252;
(statearr_34271[(19)] = inst_34165__$1);

return statearr_34271;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34252__$1,(22),inst_34166);
} else {
if((state_val_34253 === (31))){
var inst_34250 = (state_34252[(2)]);
var state_34252__$1 = state_34252;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34252__$1,inst_34250);
} else {
if((state_val_34253 === (32))){
var inst_34205 = (state_34252[(16)]);
var inst_34210 = inst_34205.cljs$lang$protocol_mask$partition0$;
var inst_34211 = (inst_34210 & (64));
var inst_34212 = inst_34205.cljs$core$ISeq$;
var inst_34213 = (cljs.core.PROTOCOL_SENTINEL === inst_34212);
var inst_34214 = (inst_34211) || (inst_34213);
var state_34252__$1 = state_34252;
if(cljs.core.truth_(inst_34214)){
var statearr_34272_34355 = state_34252__$1;
(statearr_34272_34355[(1)] = (35));

} else {
var statearr_34273_34356 = state_34252__$1;
(statearr_34273_34356[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34253 === (40))){
var inst_34227 = (state_34252[(20)]);
var inst_34226 = (state_34252[(2)]);
var inst_34227__$1 = cljs.core.get.call(null,inst_34226,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_34228 = cljs.core.get.call(null,inst_34226,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_34229 = cljs.core.not_empty.call(null,inst_34227__$1);
var state_34252__$1 = (function (){var statearr_34274 = state_34252;
(statearr_34274[(20)] = inst_34227__$1);

(statearr_34274[(21)] = inst_34228);

return statearr_34274;
})();
if(cljs.core.truth_(inst_34229)){
var statearr_34275_34357 = state_34252__$1;
(statearr_34275_34357[(1)] = (41));

} else {
var statearr_34276_34358 = state_34252__$1;
(statearr_34276_34358[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34253 === (33))){
var state_34252__$1 = state_34252;
var statearr_34277_34359 = state_34252__$1;
(statearr_34277_34359[(2)] = false);

(statearr_34277_34359[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34253 === (13))){
var inst_34125 = (state_34252[(22)]);
var inst_34129 = cljs.core.chunk_first.call(null,inst_34125);
var inst_34130 = cljs.core.chunk_rest.call(null,inst_34125);
var inst_34131 = cljs.core.count.call(null,inst_34129);
var inst_34112 = inst_34130;
var inst_34113 = inst_34129;
var inst_34114 = inst_34131;
var inst_34115 = (0);
var state_34252__$1 = (function (){var statearr_34278 = state_34252;
(statearr_34278[(7)] = inst_34115);

(statearr_34278[(8)] = inst_34113);

(statearr_34278[(9)] = inst_34112);

(statearr_34278[(10)] = inst_34114);

return statearr_34278;
})();
var statearr_34279_34360 = state_34252__$1;
(statearr_34279_34360[(2)] = null);

(statearr_34279_34360[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34253 === (22))){
var inst_34165 = (state_34252[(19)]);
var inst_34169 = (state_34252[(23)]);
var inst_34168 = (state_34252[(24)]);
var inst_34173 = (state_34252[(25)]);
var inst_34168__$1 = (state_34252[(2)]);
var inst_34169__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34168__$1);
var inst_34170 = (function (){var all_files = inst_34165;
var res_SINGLEQUOTE_ = inst_34168__$1;
var res = inst_34169__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_34165,inst_34169,inst_34168,inst_34173,inst_34168__$1,inst_34169__$1,state_val_34253,c__28644__auto__,map__34097,map__34097__$1,opts,before_jsload,on_jsload,reload_dependents,map__34098,map__34098__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33847_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__33847_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_34165,inst_34169,inst_34168,inst_34173,inst_34168__$1,inst_34169__$1,state_val_34253,c__28644__auto__,map__34097,map__34097__$1,opts,before_jsload,on_jsload,reload_dependents,map__34098,map__34098__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34171 = cljs.core.filter.call(null,inst_34170,inst_34168__$1);
var inst_34172 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_34173__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34172);
var inst_34174 = cljs.core.not_empty.call(null,inst_34173__$1);
var state_34252__$1 = (function (){var statearr_34280 = state_34252;
(statearr_34280[(26)] = inst_34171);

(statearr_34280[(23)] = inst_34169__$1);

(statearr_34280[(24)] = inst_34168__$1);

(statearr_34280[(25)] = inst_34173__$1);

return statearr_34280;
})();
if(cljs.core.truth_(inst_34174)){
var statearr_34281_34361 = state_34252__$1;
(statearr_34281_34361[(1)] = (23));

} else {
var statearr_34282_34362 = state_34252__$1;
(statearr_34282_34362[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34253 === (36))){
var state_34252__$1 = state_34252;
var statearr_34283_34363 = state_34252__$1;
(statearr_34283_34363[(2)] = false);

(statearr_34283_34363[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34253 === (41))){
var inst_34227 = (state_34252[(20)]);
var inst_34231 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_34232 = cljs.core.map.call(null,inst_34231,inst_34227);
var inst_34233 = cljs.core.pr_str.call(null,inst_34232);
var inst_34234 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34233)].join('');
var inst_34235 = figwheel.client.utils.log.call(null,inst_34234);
var state_34252__$1 = state_34252;
var statearr_34284_34364 = state_34252__$1;
(statearr_34284_34364[(2)] = inst_34235);

(statearr_34284_34364[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34253 === (43))){
var inst_34228 = (state_34252[(21)]);
var inst_34238 = (state_34252[(2)]);
var inst_34239 = cljs.core.not_empty.call(null,inst_34228);
var state_34252__$1 = (function (){var statearr_34285 = state_34252;
(statearr_34285[(27)] = inst_34238);

return statearr_34285;
})();
if(cljs.core.truth_(inst_34239)){
var statearr_34286_34365 = state_34252__$1;
(statearr_34286_34365[(1)] = (44));

} else {
var statearr_34287_34366 = state_34252__$1;
(statearr_34287_34366[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34253 === (29))){
var inst_34165 = (state_34252[(19)]);
var inst_34171 = (state_34252[(26)]);
var inst_34169 = (state_34252[(23)]);
var inst_34205 = (state_34252[(16)]);
var inst_34168 = (state_34252[(24)]);
var inst_34173 = (state_34252[(25)]);
var inst_34201 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_34204 = (function (){var all_files = inst_34165;
var res_SINGLEQUOTE_ = inst_34168;
var res = inst_34169;
var files_not_loaded = inst_34171;
var dependencies_that_loaded = inst_34173;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34165,inst_34171,inst_34169,inst_34205,inst_34168,inst_34173,inst_34201,state_val_34253,c__28644__auto__,map__34097,map__34097__$1,opts,before_jsload,on_jsload,reload_dependents,map__34098,map__34098__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34203){
var map__34288 = p__34203;
var map__34288__$1 = ((((!((map__34288 == null)))?((((map__34288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34288.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34288):map__34288);
var namespace = cljs.core.get.call(null,map__34288__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34165,inst_34171,inst_34169,inst_34205,inst_34168,inst_34173,inst_34201,state_val_34253,c__28644__auto__,map__34097,map__34097__$1,opts,before_jsload,on_jsload,reload_dependents,map__34098,map__34098__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34205__$1 = cljs.core.group_by.call(null,inst_34204,inst_34171);
var inst_34207 = (inst_34205__$1 == null);
var inst_34208 = cljs.core.not.call(null,inst_34207);
var state_34252__$1 = (function (){var statearr_34290 = state_34252;
(statearr_34290[(16)] = inst_34205__$1);

(statearr_34290[(28)] = inst_34201);

return statearr_34290;
})();
if(inst_34208){
var statearr_34291_34367 = state_34252__$1;
(statearr_34291_34367[(1)] = (32));

} else {
var statearr_34292_34368 = state_34252__$1;
(statearr_34292_34368[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34253 === (44))){
var inst_34228 = (state_34252[(21)]);
var inst_34241 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34228);
var inst_34242 = cljs.core.pr_str.call(null,inst_34241);
var inst_34243 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34242)].join('');
var inst_34244 = figwheel.client.utils.log.call(null,inst_34243);
var state_34252__$1 = state_34252;
var statearr_34293_34369 = state_34252__$1;
(statearr_34293_34369[(2)] = inst_34244);

(statearr_34293_34369[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34253 === (6))){
var inst_34146 = (state_34252[(2)]);
var state_34252__$1 = state_34252;
var statearr_34294_34370 = state_34252__$1;
(statearr_34294_34370[(2)] = inst_34146);

(statearr_34294_34370[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34253 === (28))){
var inst_34171 = (state_34252[(26)]);
var inst_34198 = (state_34252[(2)]);
var inst_34199 = cljs.core.not_empty.call(null,inst_34171);
var state_34252__$1 = (function (){var statearr_34295 = state_34252;
(statearr_34295[(29)] = inst_34198);

return statearr_34295;
})();
if(cljs.core.truth_(inst_34199)){
var statearr_34296_34371 = state_34252__$1;
(statearr_34296_34371[(1)] = (29));

} else {
var statearr_34297_34372 = state_34252__$1;
(statearr_34297_34372[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34253 === (25))){
var inst_34169 = (state_34252[(23)]);
var inst_34185 = (state_34252[(2)]);
var inst_34186 = cljs.core.not_empty.call(null,inst_34169);
var state_34252__$1 = (function (){var statearr_34298 = state_34252;
(statearr_34298[(30)] = inst_34185);

return statearr_34298;
})();
if(cljs.core.truth_(inst_34186)){
var statearr_34299_34373 = state_34252__$1;
(statearr_34299_34373[(1)] = (26));

} else {
var statearr_34300_34374 = state_34252__$1;
(statearr_34300_34374[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34253 === (34))){
var inst_34221 = (state_34252[(2)]);
var state_34252__$1 = state_34252;
if(cljs.core.truth_(inst_34221)){
var statearr_34301_34375 = state_34252__$1;
(statearr_34301_34375[(1)] = (38));

} else {
var statearr_34302_34376 = state_34252__$1;
(statearr_34302_34376[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34253 === (17))){
var state_34252__$1 = state_34252;
var statearr_34303_34377 = state_34252__$1;
(statearr_34303_34377[(2)] = recompile_dependents);

(statearr_34303_34377[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34253 === (3))){
var state_34252__$1 = state_34252;
var statearr_34304_34378 = state_34252__$1;
(statearr_34304_34378[(2)] = null);

(statearr_34304_34378[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34253 === (12))){
var inst_34142 = (state_34252[(2)]);
var state_34252__$1 = state_34252;
var statearr_34305_34379 = state_34252__$1;
(statearr_34305_34379[(2)] = inst_34142);

(statearr_34305_34379[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34253 === (2))){
var inst_34104 = (state_34252[(13)]);
var inst_34111 = cljs.core.seq.call(null,inst_34104);
var inst_34112 = inst_34111;
var inst_34113 = null;
var inst_34114 = (0);
var inst_34115 = (0);
var state_34252__$1 = (function (){var statearr_34306 = state_34252;
(statearr_34306[(7)] = inst_34115);

(statearr_34306[(8)] = inst_34113);

(statearr_34306[(9)] = inst_34112);

(statearr_34306[(10)] = inst_34114);

return statearr_34306;
})();
var statearr_34307_34380 = state_34252__$1;
(statearr_34307_34380[(2)] = null);

(statearr_34307_34380[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34253 === (23))){
var inst_34165 = (state_34252[(19)]);
var inst_34171 = (state_34252[(26)]);
var inst_34169 = (state_34252[(23)]);
var inst_34168 = (state_34252[(24)]);
var inst_34173 = (state_34252[(25)]);
var inst_34176 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_34178 = (function (){var all_files = inst_34165;
var res_SINGLEQUOTE_ = inst_34168;
var res = inst_34169;
var files_not_loaded = inst_34171;
var dependencies_that_loaded = inst_34173;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34165,inst_34171,inst_34169,inst_34168,inst_34173,inst_34176,state_val_34253,c__28644__auto__,map__34097,map__34097__$1,opts,before_jsload,on_jsload,reload_dependents,map__34098,map__34098__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34177){
var map__34308 = p__34177;
var map__34308__$1 = ((((!((map__34308 == null)))?((((map__34308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34308.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34308):map__34308);
var request_url = cljs.core.get.call(null,map__34308__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34165,inst_34171,inst_34169,inst_34168,inst_34173,inst_34176,state_val_34253,c__28644__auto__,map__34097,map__34097__$1,opts,before_jsload,on_jsload,reload_dependents,map__34098,map__34098__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34179 = cljs.core.reverse.call(null,inst_34173);
var inst_34180 = cljs.core.map.call(null,inst_34178,inst_34179);
var inst_34181 = cljs.core.pr_str.call(null,inst_34180);
var inst_34182 = figwheel.client.utils.log.call(null,inst_34181);
var state_34252__$1 = (function (){var statearr_34310 = state_34252;
(statearr_34310[(31)] = inst_34176);

return statearr_34310;
})();
var statearr_34311_34381 = state_34252__$1;
(statearr_34311_34381[(2)] = inst_34182);

(statearr_34311_34381[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34253 === (35))){
var state_34252__$1 = state_34252;
var statearr_34312_34382 = state_34252__$1;
(statearr_34312_34382[(2)] = true);

(statearr_34312_34382[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34253 === (19))){
var inst_34155 = (state_34252[(12)]);
var inst_34161 = figwheel.client.file_reloading.expand_files.call(null,inst_34155);
var state_34252__$1 = state_34252;
var statearr_34313_34383 = state_34252__$1;
(statearr_34313_34383[(2)] = inst_34161);

(statearr_34313_34383[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34253 === (11))){
var state_34252__$1 = state_34252;
var statearr_34314_34384 = state_34252__$1;
(statearr_34314_34384[(2)] = null);

(statearr_34314_34384[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34253 === (9))){
var inst_34144 = (state_34252[(2)]);
var state_34252__$1 = state_34252;
var statearr_34315_34385 = state_34252__$1;
(statearr_34315_34385[(2)] = inst_34144);

(statearr_34315_34385[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34253 === (5))){
var inst_34115 = (state_34252[(7)]);
var inst_34114 = (state_34252[(10)]);
var inst_34117 = (inst_34115 < inst_34114);
var inst_34118 = inst_34117;
var state_34252__$1 = state_34252;
if(cljs.core.truth_(inst_34118)){
var statearr_34316_34386 = state_34252__$1;
(statearr_34316_34386[(1)] = (7));

} else {
var statearr_34317_34387 = state_34252__$1;
(statearr_34317_34387[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34253 === (14))){
var inst_34125 = (state_34252[(22)]);
var inst_34134 = cljs.core.first.call(null,inst_34125);
var inst_34135 = figwheel.client.file_reloading.eval_body.call(null,inst_34134,opts);
var inst_34136 = cljs.core.next.call(null,inst_34125);
var inst_34112 = inst_34136;
var inst_34113 = null;
var inst_34114 = (0);
var inst_34115 = (0);
var state_34252__$1 = (function (){var statearr_34318 = state_34252;
(statearr_34318[(7)] = inst_34115);

(statearr_34318[(8)] = inst_34113);

(statearr_34318[(32)] = inst_34135);

(statearr_34318[(9)] = inst_34112);

(statearr_34318[(10)] = inst_34114);

return statearr_34318;
})();
var statearr_34319_34388 = state_34252__$1;
(statearr_34319_34388[(2)] = null);

(statearr_34319_34388[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34253 === (45))){
var state_34252__$1 = state_34252;
var statearr_34320_34389 = state_34252__$1;
(statearr_34320_34389[(2)] = null);

(statearr_34320_34389[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34253 === (26))){
var inst_34165 = (state_34252[(19)]);
var inst_34171 = (state_34252[(26)]);
var inst_34169 = (state_34252[(23)]);
var inst_34168 = (state_34252[(24)]);
var inst_34173 = (state_34252[(25)]);
var inst_34188 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_34190 = (function (){var all_files = inst_34165;
var res_SINGLEQUOTE_ = inst_34168;
var res = inst_34169;
var files_not_loaded = inst_34171;
var dependencies_that_loaded = inst_34173;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34165,inst_34171,inst_34169,inst_34168,inst_34173,inst_34188,state_val_34253,c__28644__auto__,map__34097,map__34097__$1,opts,before_jsload,on_jsload,reload_dependents,map__34098,map__34098__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34189){
var map__34321 = p__34189;
var map__34321__$1 = ((((!((map__34321 == null)))?((((map__34321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34321.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34321):map__34321);
var namespace = cljs.core.get.call(null,map__34321__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__34321__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34165,inst_34171,inst_34169,inst_34168,inst_34173,inst_34188,state_val_34253,c__28644__auto__,map__34097,map__34097__$1,opts,before_jsload,on_jsload,reload_dependents,map__34098,map__34098__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34191 = cljs.core.map.call(null,inst_34190,inst_34169);
var inst_34192 = cljs.core.pr_str.call(null,inst_34191);
var inst_34193 = figwheel.client.utils.log.call(null,inst_34192);
var inst_34194 = (function (){var all_files = inst_34165;
var res_SINGLEQUOTE_ = inst_34168;
var res = inst_34169;
var files_not_loaded = inst_34171;
var dependencies_that_loaded = inst_34173;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34165,inst_34171,inst_34169,inst_34168,inst_34173,inst_34188,inst_34190,inst_34191,inst_34192,inst_34193,state_val_34253,c__28644__auto__,map__34097,map__34097__$1,opts,before_jsload,on_jsload,reload_dependents,map__34098,map__34098__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34165,inst_34171,inst_34169,inst_34168,inst_34173,inst_34188,inst_34190,inst_34191,inst_34192,inst_34193,state_val_34253,c__28644__auto__,map__34097,map__34097__$1,opts,before_jsload,on_jsload,reload_dependents,map__34098,map__34098__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34195 = setTimeout(inst_34194,(10));
var state_34252__$1 = (function (){var statearr_34323 = state_34252;
(statearr_34323[(33)] = inst_34193);

(statearr_34323[(34)] = inst_34188);

return statearr_34323;
})();
var statearr_34324_34390 = state_34252__$1;
(statearr_34324_34390[(2)] = inst_34195);

(statearr_34324_34390[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34253 === (16))){
var state_34252__$1 = state_34252;
var statearr_34325_34391 = state_34252__$1;
(statearr_34325_34391[(2)] = reload_dependents);

(statearr_34325_34391[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34253 === (38))){
var inst_34205 = (state_34252[(16)]);
var inst_34223 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34205);
var state_34252__$1 = state_34252;
var statearr_34326_34392 = state_34252__$1;
(statearr_34326_34392[(2)] = inst_34223);

(statearr_34326_34392[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34253 === (30))){
var state_34252__$1 = state_34252;
var statearr_34327_34393 = state_34252__$1;
(statearr_34327_34393[(2)] = null);

(statearr_34327_34393[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34253 === (10))){
var inst_34125 = (state_34252[(22)]);
var inst_34127 = cljs.core.chunked_seq_QMARK_.call(null,inst_34125);
var state_34252__$1 = state_34252;
if(inst_34127){
var statearr_34328_34394 = state_34252__$1;
(statearr_34328_34394[(1)] = (13));

} else {
var statearr_34329_34395 = state_34252__$1;
(statearr_34329_34395[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34253 === (18))){
var inst_34159 = (state_34252[(2)]);
var state_34252__$1 = state_34252;
if(cljs.core.truth_(inst_34159)){
var statearr_34330_34396 = state_34252__$1;
(statearr_34330_34396[(1)] = (19));

} else {
var statearr_34331_34397 = state_34252__$1;
(statearr_34331_34397[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34253 === (42))){
var state_34252__$1 = state_34252;
var statearr_34332_34398 = state_34252__$1;
(statearr_34332_34398[(2)] = null);

(statearr_34332_34398[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34253 === (37))){
var inst_34218 = (state_34252[(2)]);
var state_34252__$1 = state_34252;
var statearr_34333_34399 = state_34252__$1;
(statearr_34333_34399[(2)] = inst_34218);

(statearr_34333_34399[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34253 === (8))){
var inst_34112 = (state_34252[(9)]);
var inst_34125 = (state_34252[(22)]);
var inst_34125__$1 = cljs.core.seq.call(null,inst_34112);
var state_34252__$1 = (function (){var statearr_34334 = state_34252;
(statearr_34334[(22)] = inst_34125__$1);

return statearr_34334;
})();
if(inst_34125__$1){
var statearr_34335_34400 = state_34252__$1;
(statearr_34335_34400[(1)] = (10));

} else {
var statearr_34336_34401 = state_34252__$1;
(statearr_34336_34401[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28644__auto__,map__34097,map__34097__$1,opts,before_jsload,on_jsload,reload_dependents,map__34098,map__34098__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__28579__auto__,c__28644__auto__,map__34097,map__34097__$1,opts,before_jsload,on_jsload,reload_dependents,map__34098,map__34098__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28580__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28580__auto____0 = (function (){
var statearr_34340 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34340[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28580__auto__);

(statearr_34340[(1)] = (1));

return statearr_34340;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28580__auto____1 = (function (state_34252){
while(true){
var ret_value__28581__auto__ = (function (){try{while(true){
var result__28582__auto__ = switch__28579__auto__.call(null,state_34252);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28582__auto__;
}
break;
}
}catch (e34341){if((e34341 instanceof Object)){
var ex__28583__auto__ = e34341;
var statearr_34342_34402 = state_34252;
(statearr_34342_34402[(5)] = ex__28583__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34252);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34341;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34403 = state_34252;
state_34252 = G__34403;
continue;
} else {
return ret_value__28581__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28580__auto__ = function(state_34252){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28580__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28580__auto____1.call(this,state_34252);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28580__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28580__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28580__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28580__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28580__auto__;
})()
;})(switch__28579__auto__,c__28644__auto__,map__34097,map__34097__$1,opts,before_jsload,on_jsload,reload_dependents,map__34098,map__34098__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__28646__auto__ = (function (){var statearr_34343 = f__28645__auto__.call(null);
(statearr_34343[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28644__auto__);

return statearr_34343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28646__auto__);
});})(c__28644__auto__,map__34097,map__34097__$1,opts,before_jsload,on_jsload,reload_dependents,map__34098,map__34098__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28644__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__34406,link){
var map__34409 = p__34406;
var map__34409__$1 = ((((!((map__34409 == null)))?((((map__34409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34409.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34409):map__34409);
var file = cljs.core.get.call(null,map__34409__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__34409,map__34409__$1,file){
return (function (p1__34404_SHARP_,p2__34405_SHARP_){
if(cljs.core._EQ_.call(null,p1__34404_SHARP_,p2__34405_SHARP_)){
return p1__34404_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__34409,map__34409__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__34415){
var map__34416 = p__34415;
var map__34416__$1 = ((((!((map__34416 == null)))?((((map__34416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34416.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34416):map__34416);
var match_length = cljs.core.get.call(null,map__34416__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__34416__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__34411_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__34411_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__34418_SHARP_,p2__34419_SHARP_){
return cljs.core.assoc.call(null,p1__34418_SHARP_,cljs.core.get.call(null,p2__34419_SHARP_,key),p2__34419_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_34420 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_34420);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_34420);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__34421,p__34422){
var map__34427 = p__34421;
var map__34427__$1 = ((((!((map__34427 == null)))?((((map__34427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34427.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34427):map__34427);
var on_cssload = cljs.core.get.call(null,map__34427__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__34428 = p__34422;
var map__34428__$1 = ((((!((map__34428 == null)))?((((map__34428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34428.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34428):map__34428);
var files_msg = map__34428__$1;
var files = cljs.core.get.call(null,map__34428__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1498408749784