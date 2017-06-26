// Compiled by ClojureScript 1.9.562 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.10";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args36301 = [];
var len__27544__auto___36304 = arguments.length;
var i__27545__auto___36305 = (0);
while(true){
if((i__27545__auto___36305 < len__27544__auto___36304)){
args36301.push((arguments[i__27545__auto___36305]));

var G__36306 = (i__27545__auto___36305 + (1));
i__27545__auto___36305 = G__36306;
continue;
} else {
}
break;
}

var G__36303 = args36301.length;
switch (G__36303) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36301.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__27551__auto__ = [];
var len__27544__auto___36309 = arguments.length;
var i__27545__auto___36310 = (0);
while(true){
if((i__27545__auto___36310 < len__27544__auto___36309)){
args__27551__auto__.push((arguments[i__27545__auto___36310]));

var G__36311 = (i__27545__auto___36310 + (1));
i__27545__auto___36310 = G__36311;
continue;
} else {
}
break;
}

var argseq__27552__auto__ = ((((0) < args__27551__auto__.length))?(new cljs.core.IndexedSeq(args__27551__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__27552__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq36308){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36308));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__27551__auto__ = [];
var len__27544__auto___36313 = arguments.length;
var i__27545__auto___36314 = (0);
while(true){
if((i__27545__auto___36314 < len__27544__auto___36313)){
args__27551__auto__.push((arguments[i__27545__auto___36314]));

var G__36315 = (i__27545__auto___36314 + (1));
i__27545__auto___36314 = G__36315;
continue;
} else {
}
break;
}

var argseq__27552__auto__ = ((((0) < args__27551__auto__.length))?(new cljs.core.IndexedSeq(args__27551__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__27552__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq36312){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36312));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel autoloading "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method. 
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 *   
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__36316){
var map__36319 = p__36316;
var map__36319__$1 = ((((!((map__36319 == null)))?((((map__36319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36319.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36319):map__36319);
var message = cljs.core.get.call(null,map__36319__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__36319__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" : "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__26431__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__26431__auto__)){
return or__26431__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__26419__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__26419__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__26419__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__28644__auto___36481 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28644__auto___36481,ch){
return (function (){
var f__28645__auto__ = (function (){var switch__28579__auto__ = ((function (c__28644__auto___36481,ch){
return (function (state_36450){
var state_val_36451 = (state_36450[(1)]);
if((state_val_36451 === (7))){
var inst_36446 = (state_36450[(2)]);
var state_36450__$1 = state_36450;
var statearr_36452_36482 = state_36450__$1;
(statearr_36452_36482[(2)] = inst_36446);

(statearr_36452_36482[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36451 === (1))){
var state_36450__$1 = state_36450;
var statearr_36453_36483 = state_36450__$1;
(statearr_36453_36483[(2)] = null);

(statearr_36453_36483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36451 === (4))){
var inst_36403 = (state_36450[(7)]);
var inst_36403__$1 = (state_36450[(2)]);
var state_36450__$1 = (function (){var statearr_36454 = state_36450;
(statearr_36454[(7)] = inst_36403__$1);

return statearr_36454;
})();
if(cljs.core.truth_(inst_36403__$1)){
var statearr_36455_36484 = state_36450__$1;
(statearr_36455_36484[(1)] = (5));

} else {
var statearr_36456_36485 = state_36450__$1;
(statearr_36456_36485[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36451 === (15))){
var inst_36410 = (state_36450[(8)]);
var inst_36425 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36410);
var inst_36426 = cljs.core.first.call(null,inst_36425);
var inst_36427 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_36426);
var inst_36428 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36427)].join('');
var inst_36429 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_36428);
var state_36450__$1 = state_36450;
var statearr_36457_36486 = state_36450__$1;
(statearr_36457_36486[(2)] = inst_36429);

(statearr_36457_36486[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36451 === (13))){
var inst_36434 = (state_36450[(2)]);
var state_36450__$1 = state_36450;
var statearr_36458_36487 = state_36450__$1;
(statearr_36458_36487[(2)] = inst_36434);

(statearr_36458_36487[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36451 === (6))){
var state_36450__$1 = state_36450;
var statearr_36459_36488 = state_36450__$1;
(statearr_36459_36488[(2)] = null);

(statearr_36459_36488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36451 === (17))){
var inst_36432 = (state_36450[(2)]);
var state_36450__$1 = state_36450;
var statearr_36460_36489 = state_36450__$1;
(statearr_36460_36489[(2)] = inst_36432);

(statearr_36460_36489[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36451 === (3))){
var inst_36448 = (state_36450[(2)]);
var state_36450__$1 = state_36450;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36450__$1,inst_36448);
} else {
if((state_val_36451 === (12))){
var inst_36409 = (state_36450[(9)]);
var inst_36423 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_36409,opts);
var state_36450__$1 = state_36450;
if(cljs.core.truth_(inst_36423)){
var statearr_36461_36490 = state_36450__$1;
(statearr_36461_36490[(1)] = (15));

} else {
var statearr_36462_36491 = state_36450__$1;
(statearr_36462_36491[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36451 === (2))){
var state_36450__$1 = state_36450;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36450__$1,(4),ch);
} else {
if((state_val_36451 === (11))){
var inst_36410 = (state_36450[(8)]);
var inst_36415 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36416 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_36410);
var inst_36417 = cljs.core.async.timeout.call(null,(1000));
var inst_36418 = [inst_36416,inst_36417];
var inst_36419 = (new cljs.core.PersistentVector(null,2,(5),inst_36415,inst_36418,null));
var state_36450__$1 = state_36450;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36450__$1,(14),inst_36419);
} else {
if((state_val_36451 === (9))){
var inst_36410 = (state_36450[(8)]);
var inst_36436 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_36437 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36410);
var inst_36438 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36437);
var inst_36439 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36438)].join('');
var inst_36440 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_36439);
var state_36450__$1 = (function (){var statearr_36463 = state_36450;
(statearr_36463[(10)] = inst_36436);

return statearr_36463;
})();
var statearr_36464_36492 = state_36450__$1;
(statearr_36464_36492[(2)] = inst_36440);

(statearr_36464_36492[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36451 === (5))){
var inst_36403 = (state_36450[(7)]);
var inst_36405 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_36406 = (new cljs.core.PersistentArrayMap(null,2,inst_36405,null));
var inst_36407 = (new cljs.core.PersistentHashSet(null,inst_36406,null));
var inst_36408 = figwheel.client.focus_msgs.call(null,inst_36407,inst_36403);
var inst_36409 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_36408);
var inst_36410 = cljs.core.first.call(null,inst_36408);
var inst_36411 = figwheel.client.autoload_QMARK_.call(null);
var state_36450__$1 = (function (){var statearr_36465 = state_36450;
(statearr_36465[(8)] = inst_36410);

(statearr_36465[(9)] = inst_36409);

return statearr_36465;
})();
if(cljs.core.truth_(inst_36411)){
var statearr_36466_36493 = state_36450__$1;
(statearr_36466_36493[(1)] = (8));

} else {
var statearr_36467_36494 = state_36450__$1;
(statearr_36467_36494[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36451 === (14))){
var inst_36421 = (state_36450[(2)]);
var state_36450__$1 = state_36450;
var statearr_36468_36495 = state_36450__$1;
(statearr_36468_36495[(2)] = inst_36421);

(statearr_36468_36495[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36451 === (16))){
var state_36450__$1 = state_36450;
var statearr_36469_36496 = state_36450__$1;
(statearr_36469_36496[(2)] = null);

(statearr_36469_36496[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36451 === (10))){
var inst_36442 = (state_36450[(2)]);
var state_36450__$1 = (function (){var statearr_36470 = state_36450;
(statearr_36470[(11)] = inst_36442);

return statearr_36470;
})();
var statearr_36471_36497 = state_36450__$1;
(statearr_36471_36497[(2)] = null);

(statearr_36471_36497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36451 === (8))){
var inst_36409 = (state_36450[(9)]);
var inst_36413 = figwheel.client.reload_file_state_QMARK_.call(null,inst_36409,opts);
var state_36450__$1 = state_36450;
if(cljs.core.truth_(inst_36413)){
var statearr_36472_36498 = state_36450__$1;
(statearr_36472_36498[(1)] = (11));

} else {
var statearr_36473_36499 = state_36450__$1;
(statearr_36473_36499[(1)] = (12));

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
});})(c__28644__auto___36481,ch))
;
return ((function (switch__28579__auto__,c__28644__auto___36481,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__28580__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__28580__auto____0 = (function (){
var statearr_36477 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36477[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__28580__auto__);

(statearr_36477[(1)] = (1));

return statearr_36477;
});
var figwheel$client$file_reloader_plugin_$_state_machine__28580__auto____1 = (function (state_36450){
while(true){
var ret_value__28581__auto__ = (function (){try{while(true){
var result__28582__auto__ = switch__28579__auto__.call(null,state_36450);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28582__auto__;
}
break;
}
}catch (e36478){if((e36478 instanceof Object)){
var ex__28583__auto__ = e36478;
var statearr_36479_36500 = state_36450;
(statearr_36479_36500[(5)] = ex__28583__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36450);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36478;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36501 = state_36450;
state_36450 = G__36501;
continue;
} else {
return ret_value__28581__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__28580__auto__ = function(state_36450){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__28580__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__28580__auto____1.call(this,state_36450);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__28580__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__28580__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__28580__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__28580__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__28580__auto__;
})()
;})(switch__28579__auto__,c__28644__auto___36481,ch))
})();
var state__28646__auto__ = (function (){var statearr_36480 = f__28645__auto__.call(null);
(statearr_36480[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28644__auto___36481);

return statearr_36480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28646__auto__);
});})(c__28644__auto___36481,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__36502_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__36502_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_36505 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_36505){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e36504){if((e36504 instanceof Error)){
var e = e36504;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_36505], null));
} else {
var e = e36504;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_36505))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__36506){
var map__36515 = p__36506;
var map__36515__$1 = ((((!((map__36515 == null)))?((((map__36515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36515.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36515):map__36515);
var opts = map__36515__$1;
var build_id = cljs.core.get.call(null,map__36515__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__36515,map__36515__$1,opts,build_id){
return (function (p__36517){
var vec__36518 = p__36517;
var seq__36519 = cljs.core.seq.call(null,vec__36518);
var first__36520 = cljs.core.first.call(null,seq__36519);
var seq__36519__$1 = cljs.core.next.call(null,seq__36519);
var map__36521 = first__36520;
var map__36521__$1 = ((((!((map__36521 == null)))?((((map__36521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36521.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36521):map__36521);
var msg = map__36521__$1;
var msg_name = cljs.core.get.call(null,map__36521__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36519__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__36518,seq__36519,first__36520,seq__36519__$1,map__36521,map__36521__$1,msg,msg_name,_,map__36515,map__36515__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__36518,seq__36519,first__36520,seq__36519__$1,map__36521,map__36521__$1,msg,msg_name,_,map__36515,map__36515__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__36515,map__36515__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__36529){
var vec__36530 = p__36529;
var seq__36531 = cljs.core.seq.call(null,vec__36530);
var first__36532 = cljs.core.first.call(null,seq__36531);
var seq__36531__$1 = cljs.core.next.call(null,seq__36531);
var map__36533 = first__36532;
var map__36533__$1 = ((((!((map__36533 == null)))?((((map__36533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36533.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36533):map__36533);
var msg = map__36533__$1;
var msg_name = cljs.core.get.call(null,map__36533__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36531__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__36535){
var map__36547 = p__36535;
var map__36547__$1 = ((((!((map__36547 == null)))?((((map__36547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36547.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36547):map__36547);
var on_compile_warning = cljs.core.get.call(null,map__36547__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__36547__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__36547,map__36547__$1,on_compile_warning,on_compile_fail){
return (function (p__36549){
var vec__36550 = p__36549;
var seq__36551 = cljs.core.seq.call(null,vec__36550);
var first__36552 = cljs.core.first.call(null,seq__36551);
var seq__36551__$1 = cljs.core.next.call(null,seq__36551);
var map__36553 = first__36552;
var map__36553__$1 = ((((!((map__36553 == null)))?((((map__36553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36553.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36553):map__36553);
var msg = map__36553__$1;
var msg_name = cljs.core.get.call(null,map__36553__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36551__$1;
var pred__36555 = cljs.core._EQ_;
var expr__36556 = msg_name;
if(cljs.core.truth_(pred__36555.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__36556))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__36555.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__36556))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__36547,map__36547__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__28644__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28644__auto__,msg_hist,msg_names,msg){
return (function (){
var f__28645__auto__ = (function (){var switch__28579__auto__ = ((function (c__28644__auto__,msg_hist,msg_names,msg){
return (function (state_36784){
var state_val_36785 = (state_36784[(1)]);
if((state_val_36785 === (7))){
var inst_36704 = (state_36784[(2)]);
var state_36784__$1 = state_36784;
if(cljs.core.truth_(inst_36704)){
var statearr_36786_36836 = state_36784__$1;
(statearr_36786_36836[(1)] = (8));

} else {
var statearr_36787_36837 = state_36784__$1;
(statearr_36787_36837[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36785 === (20))){
var inst_36778 = (state_36784[(2)]);
var state_36784__$1 = state_36784;
var statearr_36788_36838 = state_36784__$1;
(statearr_36788_36838[(2)] = inst_36778);

(statearr_36788_36838[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36785 === (27))){
var inst_36774 = (state_36784[(2)]);
var state_36784__$1 = state_36784;
var statearr_36789_36839 = state_36784__$1;
(statearr_36789_36839[(2)] = inst_36774);

(statearr_36789_36839[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36785 === (1))){
var inst_36697 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_36784__$1 = state_36784;
if(cljs.core.truth_(inst_36697)){
var statearr_36790_36840 = state_36784__$1;
(statearr_36790_36840[(1)] = (2));

} else {
var statearr_36791_36841 = state_36784__$1;
(statearr_36791_36841[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36785 === (24))){
var inst_36776 = (state_36784[(2)]);
var state_36784__$1 = state_36784;
var statearr_36792_36842 = state_36784__$1;
(statearr_36792_36842[(2)] = inst_36776);

(statearr_36792_36842[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36785 === (4))){
var inst_36782 = (state_36784[(2)]);
var state_36784__$1 = state_36784;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36784__$1,inst_36782);
} else {
if((state_val_36785 === (15))){
var inst_36780 = (state_36784[(2)]);
var state_36784__$1 = state_36784;
var statearr_36793_36843 = state_36784__$1;
(statearr_36793_36843[(2)] = inst_36780);

(statearr_36793_36843[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36785 === (21))){
var inst_36733 = (state_36784[(2)]);
var inst_36734 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36735 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36734);
var state_36784__$1 = (function (){var statearr_36794 = state_36784;
(statearr_36794[(7)] = inst_36733);

return statearr_36794;
})();
var statearr_36795_36844 = state_36784__$1;
(statearr_36795_36844[(2)] = inst_36735);

(statearr_36795_36844[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36785 === (31))){
var inst_36763 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_36784__$1 = state_36784;
if(cljs.core.truth_(inst_36763)){
var statearr_36796_36845 = state_36784__$1;
(statearr_36796_36845[(1)] = (34));

} else {
var statearr_36797_36846 = state_36784__$1;
(statearr_36797_36846[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36785 === (32))){
var inst_36772 = (state_36784[(2)]);
var state_36784__$1 = state_36784;
var statearr_36798_36847 = state_36784__$1;
(statearr_36798_36847[(2)] = inst_36772);

(statearr_36798_36847[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36785 === (33))){
var inst_36759 = (state_36784[(2)]);
var inst_36760 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36761 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36760);
var state_36784__$1 = (function (){var statearr_36799 = state_36784;
(statearr_36799[(8)] = inst_36759);

return statearr_36799;
})();
var statearr_36800_36848 = state_36784__$1;
(statearr_36800_36848[(2)] = inst_36761);

(statearr_36800_36848[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36785 === (13))){
var inst_36718 = figwheel.client.heads_up.clear.call(null);
var state_36784__$1 = state_36784;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36784__$1,(16),inst_36718);
} else {
if((state_val_36785 === (22))){
var inst_36739 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36740 = figwheel.client.heads_up.append_warning_message.call(null,inst_36739);
var state_36784__$1 = state_36784;
var statearr_36801_36849 = state_36784__$1;
(statearr_36801_36849[(2)] = inst_36740);

(statearr_36801_36849[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36785 === (36))){
var inst_36770 = (state_36784[(2)]);
var state_36784__$1 = state_36784;
var statearr_36802_36850 = state_36784__$1;
(statearr_36802_36850[(2)] = inst_36770);

(statearr_36802_36850[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36785 === (29))){
var inst_36750 = (state_36784[(2)]);
var inst_36751 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36752 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36751);
var state_36784__$1 = (function (){var statearr_36803 = state_36784;
(statearr_36803[(9)] = inst_36750);

return statearr_36803;
})();
var statearr_36804_36851 = state_36784__$1;
(statearr_36804_36851[(2)] = inst_36752);

(statearr_36804_36851[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36785 === (6))){
var inst_36699 = (state_36784[(10)]);
var state_36784__$1 = state_36784;
var statearr_36805_36852 = state_36784__$1;
(statearr_36805_36852[(2)] = inst_36699);

(statearr_36805_36852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36785 === (28))){
var inst_36746 = (state_36784[(2)]);
var inst_36747 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36748 = figwheel.client.heads_up.display_warning.call(null,inst_36747);
var state_36784__$1 = (function (){var statearr_36806 = state_36784;
(statearr_36806[(11)] = inst_36746);

return statearr_36806;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36784__$1,(29),inst_36748);
} else {
if((state_val_36785 === (25))){
var inst_36744 = figwheel.client.heads_up.clear.call(null);
var state_36784__$1 = state_36784;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36784__$1,(28),inst_36744);
} else {
if((state_val_36785 === (34))){
var inst_36765 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36784__$1 = state_36784;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36784__$1,(37),inst_36765);
} else {
if((state_val_36785 === (17))){
var inst_36724 = (state_36784[(2)]);
var inst_36725 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36726 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36725);
var state_36784__$1 = (function (){var statearr_36807 = state_36784;
(statearr_36807[(12)] = inst_36724);

return statearr_36807;
})();
var statearr_36808_36853 = state_36784__$1;
(statearr_36808_36853[(2)] = inst_36726);

(statearr_36808_36853[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36785 === (3))){
var inst_36716 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_36784__$1 = state_36784;
if(cljs.core.truth_(inst_36716)){
var statearr_36809_36854 = state_36784__$1;
(statearr_36809_36854[(1)] = (13));

} else {
var statearr_36810_36855 = state_36784__$1;
(statearr_36810_36855[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36785 === (12))){
var inst_36712 = (state_36784[(2)]);
var state_36784__$1 = state_36784;
var statearr_36811_36856 = state_36784__$1;
(statearr_36811_36856[(2)] = inst_36712);

(statearr_36811_36856[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36785 === (2))){
var inst_36699 = (state_36784[(10)]);
var inst_36699__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_36784__$1 = (function (){var statearr_36812 = state_36784;
(statearr_36812[(10)] = inst_36699__$1);

return statearr_36812;
})();
if(cljs.core.truth_(inst_36699__$1)){
var statearr_36813_36857 = state_36784__$1;
(statearr_36813_36857[(1)] = (5));

} else {
var statearr_36814_36858 = state_36784__$1;
(statearr_36814_36858[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36785 === (23))){
var inst_36742 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_36784__$1 = state_36784;
if(cljs.core.truth_(inst_36742)){
var statearr_36815_36859 = state_36784__$1;
(statearr_36815_36859[(1)] = (25));

} else {
var statearr_36816_36860 = state_36784__$1;
(statearr_36816_36860[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36785 === (35))){
var state_36784__$1 = state_36784;
var statearr_36817_36861 = state_36784__$1;
(statearr_36817_36861[(2)] = null);

(statearr_36817_36861[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36785 === (19))){
var inst_36737 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_36784__$1 = state_36784;
if(cljs.core.truth_(inst_36737)){
var statearr_36818_36862 = state_36784__$1;
(statearr_36818_36862[(1)] = (22));

} else {
var statearr_36819_36863 = state_36784__$1;
(statearr_36819_36863[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36785 === (11))){
var inst_36708 = (state_36784[(2)]);
var state_36784__$1 = state_36784;
var statearr_36820_36864 = state_36784__$1;
(statearr_36820_36864[(2)] = inst_36708);

(statearr_36820_36864[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36785 === (9))){
var inst_36710 = figwheel.client.heads_up.clear.call(null);
var state_36784__$1 = state_36784;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36784__$1,(12),inst_36710);
} else {
if((state_val_36785 === (5))){
var inst_36701 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_36784__$1 = state_36784;
var statearr_36821_36865 = state_36784__$1;
(statearr_36821_36865[(2)] = inst_36701);

(statearr_36821_36865[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36785 === (14))){
var inst_36728 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_36784__$1 = state_36784;
if(cljs.core.truth_(inst_36728)){
var statearr_36822_36866 = state_36784__$1;
(statearr_36822_36866[(1)] = (18));

} else {
var statearr_36823_36867 = state_36784__$1;
(statearr_36823_36867[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36785 === (26))){
var inst_36754 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_36784__$1 = state_36784;
if(cljs.core.truth_(inst_36754)){
var statearr_36824_36868 = state_36784__$1;
(statearr_36824_36868[(1)] = (30));

} else {
var statearr_36825_36869 = state_36784__$1;
(statearr_36825_36869[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36785 === (16))){
var inst_36720 = (state_36784[(2)]);
var inst_36721 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36722 = figwheel.client.heads_up.display_exception.call(null,inst_36721);
var state_36784__$1 = (function (){var statearr_36826 = state_36784;
(statearr_36826[(13)] = inst_36720);

return statearr_36826;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36784__$1,(17),inst_36722);
} else {
if((state_val_36785 === (30))){
var inst_36756 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36757 = figwheel.client.heads_up.display_warning.call(null,inst_36756);
var state_36784__$1 = state_36784;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36784__$1,(33),inst_36757);
} else {
if((state_val_36785 === (10))){
var inst_36714 = (state_36784[(2)]);
var state_36784__$1 = state_36784;
var statearr_36827_36870 = state_36784__$1;
(statearr_36827_36870[(2)] = inst_36714);

(statearr_36827_36870[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36785 === (18))){
var inst_36730 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36731 = figwheel.client.heads_up.display_exception.call(null,inst_36730);
var state_36784__$1 = state_36784;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36784__$1,(21),inst_36731);
} else {
if((state_val_36785 === (37))){
var inst_36767 = (state_36784[(2)]);
var state_36784__$1 = state_36784;
var statearr_36828_36871 = state_36784__$1;
(statearr_36828_36871[(2)] = inst_36767);

(statearr_36828_36871[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36785 === (8))){
var inst_36706 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36784__$1 = state_36784;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36784__$1,(11),inst_36706);
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
});})(c__28644__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__28579__auto__,c__28644__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28580__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28580__auto____0 = (function (){
var statearr_36832 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36832[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28580__auto__);

(statearr_36832[(1)] = (1));

return statearr_36832;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28580__auto____1 = (function (state_36784){
while(true){
var ret_value__28581__auto__ = (function (){try{while(true){
var result__28582__auto__ = switch__28579__auto__.call(null,state_36784);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28582__auto__;
}
break;
}
}catch (e36833){if((e36833 instanceof Object)){
var ex__28583__auto__ = e36833;
var statearr_36834_36872 = state_36784;
(statearr_36834_36872[(5)] = ex__28583__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36784);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36833;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36873 = state_36784;
state_36784 = G__36873;
continue;
} else {
return ret_value__28581__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28580__auto__ = function(state_36784){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28580__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28580__auto____1.call(this,state_36784);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28580__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28580__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28580__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28580__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28580__auto__;
})()
;})(switch__28579__auto__,c__28644__auto__,msg_hist,msg_names,msg))
})();
var state__28646__auto__ = (function (){var statearr_36835 = f__28645__auto__.call(null);
(statearr_36835[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28644__auto__);

return statearr_36835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28646__auto__);
});})(c__28644__auto__,msg_hist,msg_names,msg))
);

return c__28644__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28644__auto___36936 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28644__auto___36936,ch){
return (function (){
var f__28645__auto__ = (function (){var switch__28579__auto__ = ((function (c__28644__auto___36936,ch){
return (function (state_36919){
var state_val_36920 = (state_36919[(1)]);
if((state_val_36920 === (1))){
var state_36919__$1 = state_36919;
var statearr_36921_36937 = state_36919__$1;
(statearr_36921_36937[(2)] = null);

(statearr_36921_36937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36920 === (2))){
var state_36919__$1 = state_36919;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36919__$1,(4),ch);
} else {
if((state_val_36920 === (3))){
var inst_36917 = (state_36919[(2)]);
var state_36919__$1 = state_36919;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36919__$1,inst_36917);
} else {
if((state_val_36920 === (4))){
var inst_36907 = (state_36919[(7)]);
var inst_36907__$1 = (state_36919[(2)]);
var state_36919__$1 = (function (){var statearr_36922 = state_36919;
(statearr_36922[(7)] = inst_36907__$1);

return statearr_36922;
})();
if(cljs.core.truth_(inst_36907__$1)){
var statearr_36923_36938 = state_36919__$1;
(statearr_36923_36938[(1)] = (5));

} else {
var statearr_36924_36939 = state_36919__$1;
(statearr_36924_36939[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36920 === (5))){
var inst_36907 = (state_36919[(7)]);
var inst_36909 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_36907);
var state_36919__$1 = state_36919;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36919__$1,(8),inst_36909);
} else {
if((state_val_36920 === (6))){
var state_36919__$1 = state_36919;
var statearr_36925_36940 = state_36919__$1;
(statearr_36925_36940[(2)] = null);

(statearr_36925_36940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36920 === (7))){
var inst_36915 = (state_36919[(2)]);
var state_36919__$1 = state_36919;
var statearr_36926_36941 = state_36919__$1;
(statearr_36926_36941[(2)] = inst_36915);

(statearr_36926_36941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36920 === (8))){
var inst_36911 = (state_36919[(2)]);
var state_36919__$1 = (function (){var statearr_36927 = state_36919;
(statearr_36927[(8)] = inst_36911);

return statearr_36927;
})();
var statearr_36928_36942 = state_36919__$1;
(statearr_36928_36942[(2)] = null);

(statearr_36928_36942[(1)] = (2));


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
});})(c__28644__auto___36936,ch))
;
return ((function (switch__28579__auto__,c__28644__auto___36936,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__28580__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__28580__auto____0 = (function (){
var statearr_36932 = [null,null,null,null,null,null,null,null,null];
(statearr_36932[(0)] = figwheel$client$heads_up_plugin_$_state_machine__28580__auto__);

(statearr_36932[(1)] = (1));

return statearr_36932;
});
var figwheel$client$heads_up_plugin_$_state_machine__28580__auto____1 = (function (state_36919){
while(true){
var ret_value__28581__auto__ = (function (){try{while(true){
var result__28582__auto__ = switch__28579__auto__.call(null,state_36919);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28582__auto__;
}
break;
}
}catch (e36933){if((e36933 instanceof Object)){
var ex__28583__auto__ = e36933;
var statearr_36934_36943 = state_36919;
(statearr_36934_36943[(5)] = ex__28583__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36919);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36933;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36944 = state_36919;
state_36919 = G__36944;
continue;
} else {
return ret_value__28581__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__28580__auto__ = function(state_36919){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__28580__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__28580__auto____1.call(this,state_36919);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__28580__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__28580__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__28580__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__28580__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__28580__auto__;
})()
;})(switch__28579__auto__,c__28644__auto___36936,ch))
})();
var state__28646__auto__ = (function (){var statearr_36935 = f__28645__auto__.call(null);
(statearr_36935[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28644__auto___36936);

return statearr_36935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28646__auto__);
});})(c__28644__auto___36936,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28644__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28644__auto__){
return (function (){
var f__28645__auto__ = (function (){var switch__28579__auto__ = ((function (c__28644__auto__){
return (function (state_36965){
var state_val_36966 = (state_36965[(1)]);
if((state_val_36966 === (1))){
var inst_36960 = cljs.core.async.timeout.call(null,(3000));
var state_36965__$1 = state_36965;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36965__$1,(2),inst_36960);
} else {
if((state_val_36966 === (2))){
var inst_36962 = (state_36965[(2)]);
var inst_36963 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_36965__$1 = (function (){var statearr_36967 = state_36965;
(statearr_36967[(7)] = inst_36962);

return statearr_36967;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36965__$1,inst_36963);
} else {
return null;
}
}
});})(c__28644__auto__))
;
return ((function (switch__28579__auto__,c__28644__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__28580__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__28580__auto____0 = (function (){
var statearr_36971 = [null,null,null,null,null,null,null,null];
(statearr_36971[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__28580__auto__);

(statearr_36971[(1)] = (1));

return statearr_36971;
});
var figwheel$client$enforce_project_plugin_$_state_machine__28580__auto____1 = (function (state_36965){
while(true){
var ret_value__28581__auto__ = (function (){try{while(true){
var result__28582__auto__ = switch__28579__auto__.call(null,state_36965);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28582__auto__;
}
break;
}
}catch (e36972){if((e36972 instanceof Object)){
var ex__28583__auto__ = e36972;
var statearr_36973_36975 = state_36965;
(statearr_36973_36975[(5)] = ex__28583__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36965);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36972;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36976 = state_36965;
state_36965 = G__36976;
continue;
} else {
return ret_value__28581__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__28580__auto__ = function(state_36965){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__28580__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__28580__auto____1.call(this,state_36965);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__28580__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__28580__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__28580__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__28580__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__28580__auto__;
})()
;})(switch__28579__auto__,c__28644__auto__))
})();
var state__28646__auto__ = (function (){var statearr_36974 = f__28645__auto__.call(null);
(statearr_36974[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28644__auto__);

return statearr_36974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28646__auto__);
});})(c__28644__auto__))
);

return c__28644__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28644__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28644__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__28645__auto__ = (function (){var switch__28579__auto__ = ((function (c__28644__auto__,figwheel_version,temp__4657__auto__){
return (function (state_36999){
var state_val_37000 = (state_36999[(1)]);
if((state_val_37000 === (1))){
var inst_36993 = cljs.core.async.timeout.call(null,(2000));
var state_36999__$1 = state_36999;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36999__$1,(2),inst_36993);
} else {
if((state_val_37000 === (2))){
var inst_36995 = (state_36999[(2)]);
var inst_36996 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong> is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h4>To fix try:</h4>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_36997 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_36996);
var state_36999__$1 = (function (){var statearr_37001 = state_36999;
(statearr_37001[(7)] = inst_36995);

return statearr_37001;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36999__$1,inst_36997);
} else {
return null;
}
}
});})(c__28644__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__28579__auto__,c__28644__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28580__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28580__auto____0 = (function (){
var statearr_37005 = [null,null,null,null,null,null,null,null];
(statearr_37005[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28580__auto__);

(statearr_37005[(1)] = (1));

return statearr_37005;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28580__auto____1 = (function (state_36999){
while(true){
var ret_value__28581__auto__ = (function (){try{while(true){
var result__28582__auto__ = switch__28579__auto__.call(null,state_36999);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28582__auto__;
}
break;
}
}catch (e37006){if((e37006 instanceof Object)){
var ex__28583__auto__ = e37006;
var statearr_37007_37009 = state_36999;
(statearr_37007_37009[(5)] = ex__28583__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36999);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37006;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37010 = state_36999;
state_36999 = G__37010;
continue;
} else {
return ret_value__28581__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28580__auto__ = function(state_36999){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28580__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28580__auto____1.call(this,state_36999);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28580__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28580__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28580__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28580__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28580__auto__;
})()
;})(switch__28579__auto__,c__28644__auto__,figwheel_version,temp__4657__auto__))
})();
var state__28646__auto__ = (function (){var statearr_37008 = f__28645__auto__.call(null);
(statearr_37008[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28644__auto__);

return statearr_37008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28646__auto__);
});})(c__28644__auto__,figwheel_version,temp__4657__auto__))
);

return c__28644__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__37011){
var map__37015 = p__37011;
var map__37015__$1 = ((((!((map__37015 == null)))?((((map__37015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37015.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37015):map__37015);
var file = cljs.core.get.call(null,map__37015__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37015__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37015__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__37017 = "";
var G__37017__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37017),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__37017);
var G__37017__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37017__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__37017__$1);
if(cljs.core.truth_((function (){var and__26419__auto__ = line;
if(cljs.core.truth_(and__26419__auto__)){
return column;
} else {
return and__26419__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37017__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__37017__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__37018){
var map__37025 = p__37018;
var map__37025__$1 = ((((!((map__37025 == null)))?((((map__37025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37025.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37025):map__37025);
var ed = map__37025__$1;
var formatted_exception = cljs.core.get.call(null,map__37025__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__37025__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__37025__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__37027_37031 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__37028_37032 = null;
var count__37029_37033 = (0);
var i__37030_37034 = (0);
while(true){
if((i__37030_37034 < count__37029_37033)){
var msg_37035 = cljs.core._nth.call(null,chunk__37028_37032,i__37030_37034);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37035);

var G__37036 = seq__37027_37031;
var G__37037 = chunk__37028_37032;
var G__37038 = count__37029_37033;
var G__37039 = (i__37030_37034 + (1));
seq__37027_37031 = G__37036;
chunk__37028_37032 = G__37037;
count__37029_37033 = G__37038;
i__37030_37034 = G__37039;
continue;
} else {
var temp__4657__auto___37040 = cljs.core.seq.call(null,seq__37027_37031);
if(temp__4657__auto___37040){
var seq__37027_37041__$1 = temp__4657__auto___37040;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37027_37041__$1)){
var c__27250__auto___37042 = cljs.core.chunk_first.call(null,seq__37027_37041__$1);
var G__37043 = cljs.core.chunk_rest.call(null,seq__37027_37041__$1);
var G__37044 = c__27250__auto___37042;
var G__37045 = cljs.core.count.call(null,c__27250__auto___37042);
var G__37046 = (0);
seq__37027_37031 = G__37043;
chunk__37028_37032 = G__37044;
count__37029_37033 = G__37045;
i__37030_37034 = G__37046;
continue;
} else {
var msg_37047 = cljs.core.first.call(null,seq__37027_37041__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37047);

var G__37048 = cljs.core.next.call(null,seq__37027_37041__$1);
var G__37049 = null;
var G__37050 = (0);
var G__37051 = (0);
seq__37027_37031 = G__37048;
chunk__37028_37032 = G__37049;
count__37029_37033 = G__37050;
i__37030_37034 = G__37051;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Error on "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37052){
var map__37055 = p__37052;
var map__37055__$1 = ((((!((map__37055 == null)))?((((map__37055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37055.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37055):map__37055);
var w = map__37055__$1;
var message = cljs.core.get.call(null,map__37055__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Compile Warning - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/out/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/out/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("ws://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__26419__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__26419__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__26419__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__37067 = cljs.core.seq.call(null,plugins);
var chunk__37068 = null;
var count__37069 = (0);
var i__37070 = (0);
while(true){
if((i__37070 < count__37069)){
var vec__37071 = cljs.core._nth.call(null,chunk__37068,i__37070);
var k = cljs.core.nth.call(null,vec__37071,(0),null);
var plugin = cljs.core.nth.call(null,vec__37071,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37077 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37067,chunk__37068,count__37069,i__37070,pl_37077,vec__37071,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37077.call(null,msg_hist);
});})(seq__37067,chunk__37068,count__37069,i__37070,pl_37077,vec__37071,k,plugin))
);
} else {
}

var G__37078 = seq__37067;
var G__37079 = chunk__37068;
var G__37080 = count__37069;
var G__37081 = (i__37070 + (1));
seq__37067 = G__37078;
chunk__37068 = G__37079;
count__37069 = G__37080;
i__37070 = G__37081;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37067);
if(temp__4657__auto__){
var seq__37067__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37067__$1)){
var c__27250__auto__ = cljs.core.chunk_first.call(null,seq__37067__$1);
var G__37082 = cljs.core.chunk_rest.call(null,seq__37067__$1);
var G__37083 = c__27250__auto__;
var G__37084 = cljs.core.count.call(null,c__27250__auto__);
var G__37085 = (0);
seq__37067 = G__37082;
chunk__37068 = G__37083;
count__37069 = G__37084;
i__37070 = G__37085;
continue;
} else {
var vec__37074 = cljs.core.first.call(null,seq__37067__$1);
var k = cljs.core.nth.call(null,vec__37074,(0),null);
var plugin = cljs.core.nth.call(null,vec__37074,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37086 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37067,chunk__37068,count__37069,i__37070,pl_37086,vec__37074,k,plugin,seq__37067__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37086.call(null,msg_hist);
});})(seq__37067,chunk__37068,count__37069,i__37070,pl_37086,vec__37074,k,plugin,seq__37067__$1,temp__4657__auto__))
);
} else {
}

var G__37087 = cljs.core.next.call(null,seq__37067__$1);
var G__37088 = null;
var G__37089 = (0);
var G__37090 = (0);
seq__37067 = G__37087;
chunk__37068 = G__37088;
count__37069 = G__37089;
i__37070 = G__37090;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args37091 = [];
var len__27544__auto___37098 = arguments.length;
var i__27545__auto___37099 = (0);
while(true){
if((i__27545__auto___37099 < len__27544__auto___37098)){
args37091.push((arguments[i__27545__auto___37099]));

var G__37100 = (i__27545__auto___37099 + (1));
i__27545__auto___37099 = G__37100;
continue;
} else {
}
break;
}

var G__37093 = args37091.length;
switch (G__37093) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37091.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__37094_37102 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__37095_37103 = null;
var count__37096_37104 = (0);
var i__37097_37105 = (0);
while(true){
if((i__37097_37105 < count__37096_37104)){
var msg_37106 = cljs.core._nth.call(null,chunk__37095_37103,i__37097_37105);
figwheel.client.socket.handle_incoming_message.call(null,msg_37106);

var G__37107 = seq__37094_37102;
var G__37108 = chunk__37095_37103;
var G__37109 = count__37096_37104;
var G__37110 = (i__37097_37105 + (1));
seq__37094_37102 = G__37107;
chunk__37095_37103 = G__37108;
count__37096_37104 = G__37109;
i__37097_37105 = G__37110;
continue;
} else {
var temp__4657__auto___37111 = cljs.core.seq.call(null,seq__37094_37102);
if(temp__4657__auto___37111){
var seq__37094_37112__$1 = temp__4657__auto___37111;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37094_37112__$1)){
var c__27250__auto___37113 = cljs.core.chunk_first.call(null,seq__37094_37112__$1);
var G__37114 = cljs.core.chunk_rest.call(null,seq__37094_37112__$1);
var G__37115 = c__27250__auto___37113;
var G__37116 = cljs.core.count.call(null,c__27250__auto___37113);
var G__37117 = (0);
seq__37094_37102 = G__37114;
chunk__37095_37103 = G__37115;
count__37096_37104 = G__37116;
i__37097_37105 = G__37117;
continue;
} else {
var msg_37118 = cljs.core.first.call(null,seq__37094_37112__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37118);

var G__37119 = cljs.core.next.call(null,seq__37094_37112__$1);
var G__37120 = null;
var G__37121 = (0);
var G__37122 = (0);
seq__37094_37102 = G__37119;
chunk__37095_37103 = G__37120;
count__37096_37104 = G__37121;
i__37097_37105 = G__37122;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__27551__auto__ = [];
var len__27544__auto___37127 = arguments.length;
var i__27545__auto___37128 = (0);
while(true){
if((i__27545__auto___37128 < len__27544__auto___37127)){
args__27551__auto__.push((arguments[i__27545__auto___37128]));

var G__37129 = (i__27545__auto___37128 + (1));
i__27545__auto___37128 = G__37129;
continue;
} else {
}
break;
}

var argseq__27552__auto__ = ((((0) < args__27551__auto__.length))?(new cljs.core.IndexedSeq(args__27551__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__27552__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37124){
var map__37125 = p__37124;
var map__37125__$1 = ((((!((map__37125 == null)))?((((map__37125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37125.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37125):map__37125);
var opts = map__37125__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37123){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37123));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37131){if((e37131 instanceof Error)){
var e = e37131;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37131;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__37135){
var map__37136 = p__37135;
var map__37136__$1 = ((((!((map__37136 == null)))?((((map__37136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37136.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37136):map__37136);
var msg_name = cljs.core.get.call(null,map__37136__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1498408753387