// Compiled by ClojureScript 1.9.562 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('cljs.core.async');
goog.require('goog.string');
goog.require('goog.dom.dataset');
goog.require('goog.object');
goog.require('goog.dom');
goog.require('cljs.pprint');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__27551__auto__ = [];
var len__27544__auto___36002 = arguments.length;
var i__27545__auto___36003 = (0);
while(true){
if((i__27545__auto___36003 < len__27544__auto___36002)){
args__27551__auto__.push((arguments[i__27545__auto___36003]));

var G__36004 = (i__27545__auto___36003 + (1));
i__27545__auto___36003 = G__36004;
continue;
} else {
}
break;
}

var argseq__27552__auto__ = ((((2) < args__27551__auto__.length))?(new cljs.core.IndexedSeq(args__27551__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27552__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__35994_36005 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__35995_36006 = null;
var count__35996_36007 = (0);
var i__35997_36008 = (0);
while(true){
if((i__35997_36008 < count__35996_36007)){
var k_36009 = cljs.core._nth.call(null,chunk__35995_36006,i__35997_36008);
e.setAttribute(cljs.core.name.call(null,k_36009),cljs.core.get.call(null,attrs,k_36009));

var G__36010 = seq__35994_36005;
var G__36011 = chunk__35995_36006;
var G__36012 = count__35996_36007;
var G__36013 = (i__35997_36008 + (1));
seq__35994_36005 = G__36010;
chunk__35995_36006 = G__36011;
count__35996_36007 = G__36012;
i__35997_36008 = G__36013;
continue;
} else {
var temp__4657__auto___36014 = cljs.core.seq.call(null,seq__35994_36005);
if(temp__4657__auto___36014){
var seq__35994_36015__$1 = temp__4657__auto___36014;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35994_36015__$1)){
var c__27250__auto___36016 = cljs.core.chunk_first.call(null,seq__35994_36015__$1);
var G__36017 = cljs.core.chunk_rest.call(null,seq__35994_36015__$1);
var G__36018 = c__27250__auto___36016;
var G__36019 = cljs.core.count.call(null,c__27250__auto___36016);
var G__36020 = (0);
seq__35994_36005 = G__36017;
chunk__35995_36006 = G__36018;
count__35996_36007 = G__36019;
i__35997_36008 = G__36020;
continue;
} else {
var k_36021 = cljs.core.first.call(null,seq__35994_36015__$1);
e.setAttribute(cljs.core.name.call(null,k_36021),cljs.core.get.call(null,attrs,k_36021));

var G__36022 = cljs.core.next.call(null,seq__35994_36015__$1);
var G__36023 = null;
var G__36024 = (0);
var G__36025 = (0);
seq__35994_36005 = G__36022;
chunk__35995_36006 = G__36023;
count__35996_36007 = G__36024;
i__35997_36008 = G__36025;
continue;
}
} else {
}
}
break;
}

var seq__35998_36026 = cljs.core.seq.call(null,children);
var chunk__35999_36027 = null;
var count__36000_36028 = (0);
var i__36001_36029 = (0);
while(true){
if((i__36001_36029 < count__36000_36028)){
var ch_36030 = cljs.core._nth.call(null,chunk__35999_36027,i__36001_36029);
e.appendChild(ch_36030);

var G__36031 = seq__35998_36026;
var G__36032 = chunk__35999_36027;
var G__36033 = count__36000_36028;
var G__36034 = (i__36001_36029 + (1));
seq__35998_36026 = G__36031;
chunk__35999_36027 = G__36032;
count__36000_36028 = G__36033;
i__36001_36029 = G__36034;
continue;
} else {
var temp__4657__auto___36035 = cljs.core.seq.call(null,seq__35998_36026);
if(temp__4657__auto___36035){
var seq__35998_36036__$1 = temp__4657__auto___36035;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35998_36036__$1)){
var c__27250__auto___36037 = cljs.core.chunk_first.call(null,seq__35998_36036__$1);
var G__36038 = cljs.core.chunk_rest.call(null,seq__35998_36036__$1);
var G__36039 = c__27250__auto___36037;
var G__36040 = cljs.core.count.call(null,c__27250__auto___36037);
var G__36041 = (0);
seq__35998_36026 = G__36038;
chunk__35999_36027 = G__36039;
count__36000_36028 = G__36040;
i__36001_36029 = G__36041;
continue;
} else {
var ch_36042 = cljs.core.first.call(null,seq__35998_36036__$1);
e.appendChild(ch_36042);

var G__36043 = cljs.core.next.call(null,seq__35998_36036__$1);
var G__36044 = null;
var G__36045 = (0);
var G__36046 = (0);
seq__35998_36026 = G__36043;
chunk__35999_36027 = G__36044;
count__36000_36028 = G__36045;
i__36001_36029 = G__36046;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq35991){
var G__35992 = cljs.core.first.call(null,seq35991);
var seq35991__$1 = cljs.core.next.call(null,seq35991);
var G__35993 = cljs.core.first.call(null,seq35991__$1);
var seq35991__$2 = cljs.core.next.call(null,seq35991__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__35992,G__35993,seq35991__$2);
});

if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__27364__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__27365__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__27366__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__27367__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__27368__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__27364__auto__,prefer_table__27365__auto__,method_cache__27366__auto__,cached_hierarchy__27367__auto__,hierarchy__27368__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__27364__auto__,prefer_table__27365__auto__,method_cache__27366__auto__,cached_hierarchy__27367__auto__,hierarchy__27368__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__27368__auto__,method_table__27364__auto__,prefer_table__27365__auto__,method_cache__27366__auto__,cached_hierarchy__27367__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine,new cljs.core.Keyword(null,"file-column","file-column",1543934780),dataset.fileColumn], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1("#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cont_id)].join('')))){
var el_36047 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-o-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 13px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("border-top: 1px solid #f5f5f5;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("line-height: 18px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("color: #333;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-family: monospace;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("padding: 0px 10px 0px 70px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("position: fixed;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("bottom: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("left: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("opacity: 0.0;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("box-sizing: border-box;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("z-index: 10000;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-align: left;")].join('')], null));
el_36047.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_36047.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_36047.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_36047);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__36048,st_map){
var map__36055 = p__36048;
var map__36055__$1 = ((((!((map__36055 == null)))?((((map__36055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36055.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36055):map__36055);
var container_el = cljs.core.get.call(null,map__36055__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__36055,map__36055__$1,container_el){
return (function (p__36057){
var vec__36058 = p__36057;
var k = cljs.core.nth.call(null,vec__36058,(0),null);
var v = cljs.core.nth.call(null,vec__36058,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__36055,map__36055__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__36061,dom_str){
var map__36064 = p__36061;
var map__36064__$1 = ((((!((map__36064 == null)))?((((map__36064.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36064.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36064):map__36064);
var c = map__36064__$1;
var content_area_el = cljs.core.get.call(null,map__36064__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__36066){
var map__36069 = p__36066;
var map__36069__$1 = ((((!((map__36069 == null)))?((((map__36069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36069.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36069):map__36069);
var content_area_el = cljs.core.get.call(null,map__36069__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<a style=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1("float: right;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 18px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-decoration: none;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-align: right;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("width: 30px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: 30px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("color: rgba(84,84,84, 0.5);"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("x"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__28644__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28644__auto__){
return (function (){
var f__28645__auto__ = (function (){var switch__28579__auto__ = ((function (c__28644__auto__){
return (function (state_36112){
var state_val_36113 = (state_36112[(1)]);
if((state_val_36113 === (1))){
var inst_36097 = (state_36112[(7)]);
var inst_36097__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_36098 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_36099 = ["10px","10px","100%","68px","1.0"];
var inst_36100 = cljs.core.PersistentHashMap.fromArrays(inst_36098,inst_36099);
var inst_36101 = cljs.core.merge.call(null,inst_36100,style);
var inst_36102 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_36097__$1,inst_36101);
var inst_36103 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_36097__$1,msg);
var inst_36104 = cljs.core.async.timeout.call(null,(300));
var state_36112__$1 = (function (){var statearr_36114 = state_36112;
(statearr_36114[(7)] = inst_36097__$1);

(statearr_36114[(8)] = inst_36103);

(statearr_36114[(9)] = inst_36102);

return statearr_36114;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36112__$1,(2),inst_36104);
} else {
if((state_val_36113 === (2))){
var inst_36097 = (state_36112[(7)]);
var inst_36106 = (state_36112[(2)]);
var inst_36107 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_36108 = ["auto"];
var inst_36109 = cljs.core.PersistentHashMap.fromArrays(inst_36107,inst_36108);
var inst_36110 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_36097,inst_36109);
var state_36112__$1 = (function (){var statearr_36115 = state_36112;
(statearr_36115[(10)] = inst_36106);

return statearr_36115;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36112__$1,inst_36110);
} else {
return null;
}
}
});})(c__28644__auto__))
;
return ((function (switch__28579__auto__,c__28644__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__28580__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__28580__auto____0 = (function (){
var statearr_36119 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36119[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__28580__auto__);

(statearr_36119[(1)] = (1));

return statearr_36119;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__28580__auto____1 = (function (state_36112){
while(true){
var ret_value__28581__auto__ = (function (){try{while(true){
var result__28582__auto__ = switch__28579__auto__.call(null,state_36112);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28582__auto__;
}
break;
}
}catch (e36120){if((e36120 instanceof Object)){
var ex__28583__auto__ = e36120;
var statearr_36121_36123 = state_36112;
(statearr_36121_36123[(5)] = ex__28583__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36112);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36120;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36124 = state_36112;
state_36112 = G__36124;
continue;
} else {
return ret_value__28581__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__28580__auto__ = function(state_36112){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__28580__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__28580__auto____1.call(this,state_36112);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__28580__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__28580__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__28580__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__28580__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__28580__auto__;
})()
;})(switch__28579__auto__,c__28644__auto__))
})();
var state__28646__auto__ = (function (){var statearr_36122 = f__28645__auto__.call(null);
(statearr_36122[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28644__auto__);

return statearr_36122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28646__auto__);
});})(c__28644__auto__))
);

return c__28644__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(var_args){
var args36125 = [];
var len__27544__auto___36128 = arguments.length;
var i__27545__auto___36129 = (0);
while(true){
if((i__27545__auto___36129 < len__27544__auto___36128)){
args36125.push((arguments[i__27545__auto___36129]));

var G__36130 = (i__27545__auto___36129 + (1));
i__27545__auto___36129 = G__36130;
continue;
} else {
}
break;
}

var G__36127 = args36125.length;
switch (G__36127) {
case 1:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36125.length)].join('')));

}
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1 = (function (s){
return figwheel.client.heads_up.heading.call(null,s,"");
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2 = (function (s,sub_head){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 26px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("line-height: 26px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("margin-bottom: 2px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("padding-top: 1px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" <span style=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1("display: inline-block;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 13px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_head),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span></div>")].join('');
});

figwheel.client.heads_up.heading.cljs$lang$maxFixedArity = 2;

figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,column_number,msg){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\"cursor: pointer;\" data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" data-file-line=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" data-file-column=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_number),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg,p__36132){
var map__36135 = p__36132;
var map__36135__$1 = ((((!((map__36135 == null)))?((((map__36135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36135.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36135):map__36135);
var file = cljs.core.get.call(null,map__36135__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__36135__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__36135__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg__$1 = goog.string.htmlEscape(msg);
if(cljs.core.truth_((function (){var or__26431__auto__ = file;
if(cljs.core.truth_(or__26431__auto__)){
return or__26431__auto__;
} else {
return line;
}
})())){
return figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg__$1);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
}
});
figwheel.client.heads_up.escape = (function figwheel$client$heads_up$escape(x){
return goog.string.htmlEscape(x);
});
figwheel.client.heads_up.pad_line_number = (function figwheel$client$heads_up$pad_line_number(n,line_number){
var len = cljs.core.count.call(null,cljs.core.fnil.call(null,cljs.core.str,"").call(null,line_number));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((len < n))?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(n - len)," ")):"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number)].join('');
});
figwheel.client.heads_up.inline_error_line = (function figwheel$client$heads_up$inline_error_line(style,line_number,line){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style='"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(style),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style='color: #757575;'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),cljs.core.str.cljs$core$IFn$_invoke$arity$1("  </span>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,line)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span>")].join('');
});
figwheel.client.heads_up.format_inline_error_line = (function figwheel$client$heads_up$format_inline_error_line(p__36137){
var vec__36144 = p__36137;
var typ = cljs.core.nth.call(null,vec__36144,(0),null);
var line_number = cljs.core.nth.call(null,vec__36144,(1),null);
var line = cljs.core.nth.call(null,vec__36144,(2),null);
var pred__36147 = cljs.core._EQ_;
var expr__36148 = typ;
if(cljs.core.truth_(pred__36147.call(null,new cljs.core.Keyword(null,"code-line","code-line",-2138627853),expr__36148))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #999;",line_number,line);
} else {
if(cljs.core.truth_(pred__36147.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),expr__36148))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #ccc; font-weight: bold;",line_number,line);
} else {
if(cljs.core.truth_(pred__36147.call(null,new cljs.core.Keyword(null,"error-message","error-message",1756021561),expr__36148))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #D07D7D;",line_number,line);
} else {
return figwheel.client.heads_up.inline_error_line.call(null,"color: #666;",line_number,line);
}
}
}
});
figwheel.client.heads_up.pad_line_numbers = (function figwheel$client$heads_up$pad_line_numbers(inline_error){
var max_line_number_length = cljs.core.count.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.second,inline_error)))].join(''));
return cljs.core.map.call(null,((function (max_line_number_length){
return (function (p1__36150_SHARP_){
return cljs.core.update_in.call(null,p1__36150_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.partial.call(null,figwheel.client.heads_up.pad_line_number,max_line_number_length));
});})(max_line_number_length))
,inline_error);
});
figwheel.client.heads_up.format_inline_error = (function figwheel$client$heads_up$format_inline_error(inline_error){
var lines = cljs.core.map.call(null,figwheel.client.heads_up.format_inline_error_line,figwheel.client.heads_up.pad_line_numbers.call(null,inline_error));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<pre style='whitespace:pre; overflow-x: scroll; display:block; font-family:monospace; font-size:0.8em; border-radius: 3px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" line-height: 1.1em; padding: 10px; background-color: rgb(24,26,38); margin-right: 5px'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"\n",lines)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</pre>")].join('');
});
figwheel.client.heads_up.flatten_exception = (function figwheel$client$heads_up$flatten_exception(p1__36151_SHARP_){
return cljs.core.take_while.call(null,cljs.core.some_QMARK_,cljs.core.iterate.call(null,new cljs.core.Keyword(null,"cause","cause",231901252),p1__36151_SHARP_));
});
figwheel.client.heads_up.exception__GT_display_data = (function figwheel$client$heads_up$exception__GT_display_data(p__36154){
var map__36157 = p__36154;
var map__36157__$1 = ((((!((map__36157 == null)))?((((map__36157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36157.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36157):map__36157);
var exception = map__36157__$1;
var message = cljs.core.get.call(null,map__36157__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var failed_loading_clj_file = cljs.core.get.call(null,map__36157__$1,new cljs.core.Keyword(null,"failed-loading-clj-file","failed-loading-clj-file",-1682536481));
var reader_exception = cljs.core.get.call(null,map__36157__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var file = cljs.core.get.call(null,map__36157__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var column = cljs.core.get.call(null,map__36157__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var failed_compiling = cljs.core.get.call(null,map__36157__$1,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503));
var error_inline = cljs.core.get.call(null,map__36157__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var line = cljs.core.get.call(null,map__36157__$1,new cljs.core.Keyword(null,"line","line",212345235));
var class$ = cljs.core.get.call(null,map__36157__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var analysis_exception = cljs.core.get.call(null,map__36157__$1,new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285));
var display_ex_data = cljs.core.get.call(null,map__36157__$1,new cljs.core.Keyword(null,"display-ex-data","display-ex-data",-1611558730));
var last_message = (cljs.core.truth_((function (){var and__26419__auto__ = file;
if(cljs.core.truth_(and__26419__auto__)){
return line;
} else {
return and__26419__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" of file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),(cljs.core.truth_(failed_loading_clj_file)?"Couldn't load Clojure file":(cljs.core.truth_(analysis_exception)?"Could not Analyze":(cljs.core.truth_(reader_exception)?"Could not Read":(cljs.core.truth_(failed_compiling)?"Could not Compile":"Compile Exception"
)))),new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__36157,map__36157__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__36152_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36152_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});})(last_message,map__36157,map__36157__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(class$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,class$)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": ")].join(''):"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style=\"font-weight:bold;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span>")].join(''),(cljs.core.truth_(display_ex_data)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<pre>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.utils.pprint_to_string.call(null,display_ex_data)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</pre>")].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null):cljs.core.map.call(null,((function (last_message,map__36157,map__36157__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__36153_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1__36153_SHARP_))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(p1__36153_SHARP_)))].join('');
});})(last_message,map__36157,map__36157__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,figwheel.client.heads_up.flatten_exception.call(null,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(exception))))),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\"color: #AD4F4F; padding-top: 3px;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.auto_notify_source_file_line = (function figwheel$client$heads_up$auto_notify_source_file_line(p__36159){
var map__36162 = p__36159;
var map__36162__$1 = ((((!((map__36162 == null)))?((((map__36162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36162.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36162):map__36162);
var file = cljs.core.get.call(null,map__36162__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__36162__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__36162__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''),new cljs.core.Keyword(null,"file-line","file-line",-1228823138),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''),new cljs.core.Keyword(null,"file-column","file-column",1543934780),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('')], null));
});
figwheel.client.heads_up.display_exception = (function figwheel$client$heads_up$display_exception(exception_data){
var map__36167 = figwheel.client.heads_up.exception__GT_display_data.call(null,exception_data);
var map__36167__$1 = ((((!((map__36167 == null)))?((((map__36167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36167.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36167):map__36167);
var head = cljs.core.get.call(null,map__36167__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__36167__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__36167__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__36167__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__36167__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__36167__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__36167__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.warning_data__GT_display_data = (function figwheel$client$heads_up$warning_data__GT_display_data(p__36170){
var map__36173 = p__36170;
var map__36173__$1 = ((((!((map__36173 == null)))?((((map__36173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36173.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36173):map__36173);
var warning_data = map__36173__$1;
var file = cljs.core.get.call(null,map__36173__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__36173__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__36173__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__36173__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var error_inline = cljs.core.get.call(null,map__36173__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var last_message = (cljs.core.truth_((function (){var and__26419__auto__ = file;
if(cljs.core.truth_(and__26419__auto__)){
return line;
} else {
return and__26419__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" of file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),"Compile Warning",new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__36173,map__36173__$1,warning_data,file,line,column,message,error_inline){
return (function (p1__36169_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36169_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});})(last_message,map__36173,map__36173__$1,warning_data,file,line,column,message,error_inline))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(message)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style=\"font-weight:bold;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span>")].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null)),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\"color: #AD4F4F; padding-top: 3px; margin-bottom: 10px;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(warning_data){
var map__36177 = figwheel.client.heads_up.warning_data__GT_display_data.call(null,warning_data);
var map__36177__$1 = ((((!((map__36177 == null)))?((((map__36177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36177.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36177):map__36177);
var head = cljs.core.get.call(null,map__36177__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__36177__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__36177__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__36177__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__36177__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__36177__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__36177__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.format_warning_message = (function figwheel$client$heads_up$format_warning_message(p__36179){
var map__36183 = p__36179;
var map__36183__$1 = ((((!((map__36183 == null)))?((((map__36183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36183.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36183):map__36183);
var warning_data = map__36183__$1;
var message = cljs.core.get.call(null,map__36183__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__36183__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__36183__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__36183__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__36185 = message;
var G__36185__$1 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36185),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__36185);
var G__36185__$2 = (cljs.core.truth_((function (){var and__26419__auto__ = line;
if(cljs.core.truth_(and__26419__auto__)){
return column;
} else {
return and__26419__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36185__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):G__36185__$1);
if(cljs.core.truth_(file)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36185__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join('');
} else {
return G__36185__$2;
}
});
figwheel.client.heads_up.append_warning_message = (function figwheel$client$heads_up$append_warning_message(p__36186){
var map__36191 = p__36186;
var map__36191__$1 = ((((!((map__36191 == null)))?((((map__36191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36191.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36191):map__36191);
var warning_data = map__36191__$1;
var message = cljs.core.get.call(null,map__36191__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__36191__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__36191__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__36191__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.truth_(message)){
var map__36193 = figwheel.client.heads_up.ensure_container.call(null);
var map__36193__$1 = ((((!((map__36193 == null)))?((((map__36193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36193.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36193):map__36193);
var content_area_el = cljs.core.get.call(null,map__36193__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = goog.dom.createElement("div");
var child_count = goog.dom.getChildren(content_area_el).length;
if((child_count < (6))){
el.innerHTML = figwheel.client.heads_up.format_line.call(null,figwheel.client.heads_up.format_warning_message.call(null,warning_data),warning_data);

return goog.dom.append(content_area_el,el);
} else {
var temp__4657__auto__ = goog.dom.getLastElementChild(content_area_el);
if(cljs.core.truth_(temp__4657__auto__)){
var last_child = temp__4657__auto__;
var temp__4655__auto__ = goog.dom.dataset.get(last_child,"figwheel_count");
if(cljs.core.truth_(temp__4655__auto__)){
var message_count = temp__4655__auto__;
var message_count__$1 = (parseInt(message_count) + (1));
goog.dom.dataset.set(last_child,"figwheel_count",message_count__$1);

return last_child.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message_count__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" more warnings have not been displayed ...")].join('');
} else {
return goog.dom.append(content_area_el,goog.dom.createDom("div",({"data-figwheel_count": (1), "style": "margin-top: 3px; font-weight: bold"}),"1 more warning that has not been displayed ..."));
}
} else {
return null;
}
}
} else {
return null;
}
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__28644__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28644__auto__){
return (function (){
var f__28645__auto__ = (function (){var switch__28579__auto__ = ((function (c__28644__auto__){
return (function (state_36241){
var state_val_36242 = (state_36241[(1)]);
if((state_val_36242 === (1))){
var inst_36224 = (state_36241[(7)]);
var inst_36224__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_36225 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_36226 = ["0.0"];
var inst_36227 = cljs.core.PersistentHashMap.fromArrays(inst_36225,inst_36226);
var inst_36228 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_36224__$1,inst_36227);
var inst_36229 = cljs.core.async.timeout.call(null,(300));
var state_36241__$1 = (function (){var statearr_36243 = state_36241;
(statearr_36243[(7)] = inst_36224__$1);

(statearr_36243[(8)] = inst_36228);

return statearr_36243;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36241__$1,(2),inst_36229);
} else {
if((state_val_36242 === (2))){
var inst_36224 = (state_36241[(7)]);
var inst_36231 = (state_36241[(2)]);
var inst_36232 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_36233 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_36234 = cljs.core.PersistentHashMap.fromArrays(inst_36232,inst_36233);
var inst_36235 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_36224,inst_36234);
var inst_36236 = cljs.core.async.timeout.call(null,(200));
var state_36241__$1 = (function (){var statearr_36244 = state_36241;
(statearr_36244[(9)] = inst_36235);

(statearr_36244[(10)] = inst_36231);

return statearr_36244;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36241__$1,(3),inst_36236);
} else {
if((state_val_36242 === (3))){
var inst_36224 = (state_36241[(7)]);
var inst_36238 = (state_36241[(2)]);
var inst_36239 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_36224,"");
var state_36241__$1 = (function (){var statearr_36245 = state_36241;
(statearr_36245[(11)] = inst_36238);

return statearr_36245;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36241__$1,inst_36239);
} else {
return null;
}
}
}
});})(c__28644__auto__))
;
return ((function (switch__28579__auto__,c__28644__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__28580__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__28580__auto____0 = (function (){
var statearr_36249 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36249[(0)] = figwheel$client$heads_up$clear_$_state_machine__28580__auto__);

(statearr_36249[(1)] = (1));

return statearr_36249;
});
var figwheel$client$heads_up$clear_$_state_machine__28580__auto____1 = (function (state_36241){
while(true){
var ret_value__28581__auto__ = (function (){try{while(true){
var result__28582__auto__ = switch__28579__auto__.call(null,state_36241);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28582__auto__;
}
break;
}
}catch (e36250){if((e36250 instanceof Object)){
var ex__28583__auto__ = e36250;
var statearr_36251_36253 = state_36241;
(statearr_36251_36253[(5)] = ex__28583__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36250;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36254 = state_36241;
state_36241 = G__36254;
continue;
} else {
return ret_value__28581__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__28580__auto__ = function(state_36241){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__28580__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__28580__auto____1.call(this,state_36241);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$clear_$_state_machine__28580__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__28580__auto____0;
figwheel$client$heads_up$clear_$_state_machine__28580__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__28580__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__28580__auto__;
})()
;})(switch__28579__auto__,c__28644__auto__))
})();
var state__28646__auto__ = (function (){var statearr_36252 = f__28645__auto__.call(null);
(statearr_36252[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28644__auto__);

return statearr_36252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28646__auto__);
});})(c__28644__auto__))
);

return c__28644__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__28644__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28644__auto__){
return (function (){
var f__28645__auto__ = (function (){var switch__28579__auto__ = ((function (c__28644__auto__){
return (function (state_36286){
var state_val_36287 = (state_36286[(1)]);
if((state_val_36287 === (1))){
var inst_36276 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_36286__$1 = state_36286;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36286__$1,(2),inst_36276);
} else {
if((state_val_36287 === (2))){
var inst_36278 = (state_36286[(2)]);
var inst_36279 = cljs.core.async.timeout.call(null,(400));
var state_36286__$1 = (function (){var statearr_36288 = state_36286;
(statearr_36288[(7)] = inst_36278);

return statearr_36288;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36286__$1,(3),inst_36279);
} else {
if((state_val_36287 === (3))){
var inst_36281 = (state_36286[(2)]);
var inst_36282 = figwheel.client.heads_up.clear.call(null);
var state_36286__$1 = (function (){var statearr_36289 = state_36286;
(statearr_36289[(8)] = inst_36281);

return statearr_36289;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36286__$1,(4),inst_36282);
} else {
if((state_val_36287 === (4))){
var inst_36284 = (state_36286[(2)]);
var state_36286__$1 = state_36286;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36286__$1,inst_36284);
} else {
return null;
}
}
}
}
});})(c__28644__auto__))
;
return ((function (switch__28579__auto__,c__28644__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__28580__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__28580__auto____0 = (function (){
var statearr_36293 = [null,null,null,null,null,null,null,null,null];
(statearr_36293[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__28580__auto__);

(statearr_36293[(1)] = (1));

return statearr_36293;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__28580__auto____1 = (function (state_36286){
while(true){
var ret_value__28581__auto__ = (function (){try{while(true){
var result__28582__auto__ = switch__28579__auto__.call(null,state_36286);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28582__auto__;
}
break;
}
}catch (e36294){if((e36294 instanceof Object)){
var ex__28583__auto__ = e36294;
var statearr_36295_36297 = state_36286;
(statearr_36295_36297[(5)] = ex__28583__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36286);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36294;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36298 = state_36286;
state_36286 = G__36298;
continue;
} else {
return ret_value__28581__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__28580__auto__ = function(state_36286){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__28580__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__28580__auto____1.call(this,state_36286);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__28580__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__28580__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__28580__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__28580__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__28580__auto__;
})()
;})(switch__28579__auto__,c__28644__auto__))
})();
var state__28646__auto__ = (function (){var statearr_36296 = f__28645__auto__.call(null);
(statearr_36296[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28644__auto__);

return statearr_36296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28646__auto__);
});})(c__28644__auto__))
);

return c__28644__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";
figwheel.client.heads_up.close_bad_compile_screen = (function figwheel$client$heads_up$close_bad_compile_screen(){
var temp__4657__auto__ = document.getElementById("figwheelFailScreen");
if(cljs.core.truth_(temp__4657__auto__)){
var el = temp__4657__auto__;
return goog.dom.removeNode(el);
} else {
return null;
}
});
figwheel.client.heads_up.bad_compile_screen = (function figwheel$client$heads_up$bad_compile_screen(){
var body = (goog.dom.getElementsByTagNameAndClass("body")[(0)]);
figwheel.client.heads_up.close_bad_compile_screen.call(null);

return goog.dom.append(body,goog.dom.createDom("div",({"id": "figwheelFailScreen", "style": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("background-color: rgba(24, 26, 38, 0.95);"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("position: absolute;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("z-index: 9000;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("width: 100vw;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: 100vh;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("top: 0px; left: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-family: monospace")].join('')}),goog.dom.createDom("div",({"class": "message", "style": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("color: #FFF5DB;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("width: 100vw;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("margin: auto;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("margin-top: 10px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-align: center; "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("padding: 2px 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 13px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("position: relative")].join('')}),goog.dom.createDom("a",({"onclick": ((function (body){
return (function (e){
e.preventDefault();

return figwheel.client.heads_up.close_bad_compile_screen.call(null);
});})(body))
, "href": "javascript:", "style": "position: absolute; right: 10px; top: 10px; color: #666"}),"X"),goog.dom.createDom("h2",({"style": "color: #FFF5DB"}),"Figwheel Says: Your code didn't compile."),goog.dom.createDom("div",({"style": "font-size: 12px"}),goog.dom.createDom("p",({"style": "color: #D07D7D;"}),"Keep trying. This page will auto-refresh when your code compiles successfully.")))));
});

//# sourceMappingURL=heads_up.js.map?rel=1498408752844