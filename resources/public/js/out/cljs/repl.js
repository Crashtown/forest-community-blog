// Compiled by ClojureScript 1.9.562 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35862){
var map__35887 = p__35862;
var map__35887__$1 = ((((!((map__35887 == null)))?((((map__35887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35887.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35887):map__35887);
var m = map__35887__$1;
var n = cljs.core.get.call(null,map__35887__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__35887__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35889_35911 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35890_35912 = null;
var count__35891_35913 = (0);
var i__35892_35914 = (0);
while(true){
if((i__35892_35914 < count__35891_35913)){
var f_35915 = cljs.core._nth.call(null,chunk__35890_35912,i__35892_35914);
cljs.core.println.call(null,"  ",f_35915);

var G__35916 = seq__35889_35911;
var G__35917 = chunk__35890_35912;
var G__35918 = count__35891_35913;
var G__35919 = (i__35892_35914 + (1));
seq__35889_35911 = G__35916;
chunk__35890_35912 = G__35917;
count__35891_35913 = G__35918;
i__35892_35914 = G__35919;
continue;
} else {
var temp__4657__auto___35920 = cljs.core.seq.call(null,seq__35889_35911);
if(temp__4657__auto___35920){
var seq__35889_35921__$1 = temp__4657__auto___35920;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35889_35921__$1)){
var c__27250__auto___35922 = cljs.core.chunk_first.call(null,seq__35889_35921__$1);
var G__35923 = cljs.core.chunk_rest.call(null,seq__35889_35921__$1);
var G__35924 = c__27250__auto___35922;
var G__35925 = cljs.core.count.call(null,c__27250__auto___35922);
var G__35926 = (0);
seq__35889_35911 = G__35923;
chunk__35890_35912 = G__35924;
count__35891_35913 = G__35925;
i__35892_35914 = G__35926;
continue;
} else {
var f_35927 = cljs.core.first.call(null,seq__35889_35921__$1);
cljs.core.println.call(null,"  ",f_35927);

var G__35928 = cljs.core.next.call(null,seq__35889_35921__$1);
var G__35929 = null;
var G__35930 = (0);
var G__35931 = (0);
seq__35889_35911 = G__35928;
chunk__35890_35912 = G__35929;
count__35891_35913 = G__35930;
i__35892_35914 = G__35931;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35932 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__26431__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__26431__auto__)){
return or__26431__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_35932);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_35932)))?cljs.core.second.call(null,arglists_35932):arglists_35932));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35893_35933 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35894_35934 = null;
var count__35895_35935 = (0);
var i__35896_35936 = (0);
while(true){
if((i__35896_35936 < count__35895_35935)){
var vec__35897_35937 = cljs.core._nth.call(null,chunk__35894_35934,i__35896_35936);
var name_35938 = cljs.core.nth.call(null,vec__35897_35937,(0),null);
var map__35900_35939 = cljs.core.nth.call(null,vec__35897_35937,(1),null);
var map__35900_35940__$1 = ((((!((map__35900_35939 == null)))?((((map__35900_35939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35900_35939.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35900_35939):map__35900_35939);
var doc_35941 = cljs.core.get.call(null,map__35900_35940__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35942 = cljs.core.get.call(null,map__35900_35940__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35938);

cljs.core.println.call(null," ",arglists_35942);

if(cljs.core.truth_(doc_35941)){
cljs.core.println.call(null," ",doc_35941);
} else {
}

var G__35943 = seq__35893_35933;
var G__35944 = chunk__35894_35934;
var G__35945 = count__35895_35935;
var G__35946 = (i__35896_35936 + (1));
seq__35893_35933 = G__35943;
chunk__35894_35934 = G__35944;
count__35895_35935 = G__35945;
i__35896_35936 = G__35946;
continue;
} else {
var temp__4657__auto___35947 = cljs.core.seq.call(null,seq__35893_35933);
if(temp__4657__auto___35947){
var seq__35893_35948__$1 = temp__4657__auto___35947;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35893_35948__$1)){
var c__27250__auto___35949 = cljs.core.chunk_first.call(null,seq__35893_35948__$1);
var G__35950 = cljs.core.chunk_rest.call(null,seq__35893_35948__$1);
var G__35951 = c__27250__auto___35949;
var G__35952 = cljs.core.count.call(null,c__27250__auto___35949);
var G__35953 = (0);
seq__35893_35933 = G__35950;
chunk__35894_35934 = G__35951;
count__35895_35935 = G__35952;
i__35896_35936 = G__35953;
continue;
} else {
var vec__35902_35954 = cljs.core.first.call(null,seq__35893_35948__$1);
var name_35955 = cljs.core.nth.call(null,vec__35902_35954,(0),null);
var map__35905_35956 = cljs.core.nth.call(null,vec__35902_35954,(1),null);
var map__35905_35957__$1 = ((((!((map__35905_35956 == null)))?((((map__35905_35956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35905_35956.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35905_35956):map__35905_35956);
var doc_35958 = cljs.core.get.call(null,map__35905_35957__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35959 = cljs.core.get.call(null,map__35905_35957__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35955);

cljs.core.println.call(null," ",arglists_35959);

if(cljs.core.truth_(doc_35958)){
cljs.core.println.call(null," ",doc_35958);
} else {
}

var G__35960 = cljs.core.next.call(null,seq__35893_35948__$1);
var G__35961 = null;
var G__35962 = (0);
var G__35963 = (0);
seq__35893_35933 = G__35960;
chunk__35894_35934 = G__35961;
count__35895_35935 = G__35962;
i__35896_35936 = G__35963;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__35907 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35908 = null;
var count__35909 = (0);
var i__35910 = (0);
while(true){
if((i__35910 < count__35909)){
var role = cljs.core._nth.call(null,chunk__35908,i__35910);
var temp__4657__auto___35964__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___35964__$1)){
var spec_35965 = temp__4657__auto___35964__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_35965));
} else {
}

var G__35966 = seq__35907;
var G__35967 = chunk__35908;
var G__35968 = count__35909;
var G__35969 = (i__35910 + (1));
seq__35907 = G__35966;
chunk__35908 = G__35967;
count__35909 = G__35968;
i__35910 = G__35969;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__35907);
if(temp__4657__auto____$1){
var seq__35907__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35907__$1)){
var c__27250__auto__ = cljs.core.chunk_first.call(null,seq__35907__$1);
var G__35970 = cljs.core.chunk_rest.call(null,seq__35907__$1);
var G__35971 = c__27250__auto__;
var G__35972 = cljs.core.count.call(null,c__27250__auto__);
var G__35973 = (0);
seq__35907 = G__35970;
chunk__35908 = G__35971;
count__35909 = G__35972;
i__35910 = G__35973;
continue;
} else {
var role = cljs.core.first.call(null,seq__35907__$1);
var temp__4657__auto___35974__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___35974__$2)){
var spec_35975 = temp__4657__auto___35974__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_35975));
} else {
}

var G__35976 = cljs.core.next.call(null,seq__35907__$1);
var G__35977 = null;
var G__35978 = (0);
var G__35979 = (0);
seq__35907 = G__35976;
chunk__35908 = G__35977;
count__35909 = G__35978;
i__35910 = G__35979;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1498408752500