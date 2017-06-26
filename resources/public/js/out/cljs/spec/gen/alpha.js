// Compiled by ClojureScript 1.9.562 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__27042__auto__,writer__27043__auto__,opt__27044__auto__){
return cljs.core._write.call(null,writer__27043__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__27551__auto__ = [];
var len__27544__auto___34502 = arguments.length;
var i__27545__auto___34503 = (0);
while(true){
if((i__27545__auto___34503 < len__27544__auto___34502)){
args__27551__auto__.push((arguments[i__27545__auto___34503]));

var G__34504 = (i__27545__auto___34503 + (1));
i__27545__auto___34503 = G__34504;
continue;
} else {
}
break;
}

var argseq__27552__auto__ = ((((0) < args__27551__auto__.length))?(new cljs.core.IndexedSeq(args__27551__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__27552__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq34501){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34501));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__27551__auto__ = [];
var len__27544__auto___34506 = arguments.length;
var i__27545__auto___34507 = (0);
while(true){
if((i__27545__auto___34507 < len__27544__auto___34506)){
args__27551__auto__.push((arguments[i__27545__auto___34507]));

var G__34508 = (i__27545__auto___34507 + (1));
i__27545__auto___34507 = G__34508;
continue;
} else {
}
break;
}

var argseq__27552__auto__ = ((((0) < args__27551__auto__.length))?(new cljs.core.IndexedSeq(args__27551__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__27552__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq34505){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34505));
});

var g_QMARK__34509 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_34510 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__34509){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__34509))
,null));
var mkg_34511 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__34509,g_34510){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__34509,g_34510))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__34509,g_34510,mkg_34511){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__34509).call(null,x);
});})(g_QMARK__34509,g_34510,mkg_34511))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__34509,g_34510,mkg_34511){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_34511).call(null,gfn);
});})(g_QMARK__34509,g_34510,mkg_34511))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__34509,g_34510,mkg_34511){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_34510).call(null,generator);
});})(g_QMARK__34509,g_34510,mkg_34511))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__34473__auto___34531 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__34473__auto___34531){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__27551__auto__ = [];
var len__27544__auto___34532 = arguments.length;
var i__27545__auto___34533 = (0);
while(true){
if((i__27545__auto___34533 < len__27544__auto___34532)){
args__27551__auto__.push((arguments[i__27545__auto___34533]));

var G__34534 = (i__27545__auto___34533 + (1));
i__27545__auto___34533 = G__34534;
continue;
} else {
}
break;
}

var argseq__27552__auto__ = ((((0) < args__27551__auto__.length))?(new cljs.core.IndexedSeq(args__27551__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__27552__auto__);
});})(g__34473__auto___34531))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34473__auto___34531){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34473__auto___34531),args);
});})(g__34473__auto___34531))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__34473__auto___34531){
return (function (seq34512){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34512));
});})(g__34473__auto___34531))
;


var g__34473__auto___34535 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__34473__auto___34535){
return (function cljs$spec$gen$alpha$list(var_args){
var args__27551__auto__ = [];
var len__27544__auto___34536 = arguments.length;
var i__27545__auto___34537 = (0);
while(true){
if((i__27545__auto___34537 < len__27544__auto___34536)){
args__27551__auto__.push((arguments[i__27545__auto___34537]));

var G__34538 = (i__27545__auto___34537 + (1));
i__27545__auto___34537 = G__34538;
continue;
} else {
}
break;
}

var argseq__27552__auto__ = ((((0) < args__27551__auto__.length))?(new cljs.core.IndexedSeq(args__27551__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__27552__auto__);
});})(g__34473__auto___34535))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34473__auto___34535){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34473__auto___34535),args);
});})(g__34473__auto___34535))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__34473__auto___34535){
return (function (seq34513){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34513));
});})(g__34473__auto___34535))
;


var g__34473__auto___34539 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__34473__auto___34539){
return (function cljs$spec$gen$alpha$map(var_args){
var args__27551__auto__ = [];
var len__27544__auto___34540 = arguments.length;
var i__27545__auto___34541 = (0);
while(true){
if((i__27545__auto___34541 < len__27544__auto___34540)){
args__27551__auto__.push((arguments[i__27545__auto___34541]));

var G__34542 = (i__27545__auto___34541 + (1));
i__27545__auto___34541 = G__34542;
continue;
} else {
}
break;
}

var argseq__27552__auto__ = ((((0) < args__27551__auto__.length))?(new cljs.core.IndexedSeq(args__27551__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__27552__auto__);
});})(g__34473__auto___34539))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34473__auto___34539){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34473__auto___34539),args);
});})(g__34473__auto___34539))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__34473__auto___34539){
return (function (seq34514){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34514));
});})(g__34473__auto___34539))
;


var g__34473__auto___34543 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__34473__auto___34543){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__27551__auto__ = [];
var len__27544__auto___34544 = arguments.length;
var i__27545__auto___34545 = (0);
while(true){
if((i__27545__auto___34545 < len__27544__auto___34544)){
args__27551__auto__.push((arguments[i__27545__auto___34545]));

var G__34546 = (i__27545__auto___34545 + (1));
i__27545__auto___34545 = G__34546;
continue;
} else {
}
break;
}

var argseq__27552__auto__ = ((((0) < args__27551__auto__.length))?(new cljs.core.IndexedSeq(args__27551__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__27552__auto__);
});})(g__34473__auto___34543))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34473__auto___34543){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34473__auto___34543),args);
});})(g__34473__auto___34543))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__34473__auto___34543){
return (function (seq34515){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34515));
});})(g__34473__auto___34543))
;


var g__34473__auto___34547 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__34473__auto___34547){
return (function cljs$spec$gen$alpha$set(var_args){
var args__27551__auto__ = [];
var len__27544__auto___34548 = arguments.length;
var i__27545__auto___34549 = (0);
while(true){
if((i__27545__auto___34549 < len__27544__auto___34548)){
args__27551__auto__.push((arguments[i__27545__auto___34549]));

var G__34550 = (i__27545__auto___34549 + (1));
i__27545__auto___34549 = G__34550;
continue;
} else {
}
break;
}

var argseq__27552__auto__ = ((((0) < args__27551__auto__.length))?(new cljs.core.IndexedSeq(args__27551__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__27552__auto__);
});})(g__34473__auto___34547))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34473__auto___34547){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34473__auto___34547),args);
});})(g__34473__auto___34547))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__34473__auto___34547){
return (function (seq34516){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34516));
});})(g__34473__auto___34547))
;


var g__34473__auto___34551 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__34473__auto___34551){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__27551__auto__ = [];
var len__27544__auto___34552 = arguments.length;
var i__27545__auto___34553 = (0);
while(true){
if((i__27545__auto___34553 < len__27544__auto___34552)){
args__27551__auto__.push((arguments[i__27545__auto___34553]));

var G__34554 = (i__27545__auto___34553 + (1));
i__27545__auto___34553 = G__34554;
continue;
} else {
}
break;
}

var argseq__27552__auto__ = ((((0) < args__27551__auto__.length))?(new cljs.core.IndexedSeq(args__27551__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__27552__auto__);
});})(g__34473__auto___34551))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34473__auto___34551){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34473__auto___34551),args);
});})(g__34473__auto___34551))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__34473__auto___34551){
return (function (seq34517){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34517));
});})(g__34473__auto___34551))
;


var g__34473__auto___34555 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__34473__auto___34555){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__27551__auto__ = [];
var len__27544__auto___34556 = arguments.length;
var i__27545__auto___34557 = (0);
while(true){
if((i__27545__auto___34557 < len__27544__auto___34556)){
args__27551__auto__.push((arguments[i__27545__auto___34557]));

var G__34558 = (i__27545__auto___34557 + (1));
i__27545__auto___34557 = G__34558;
continue;
} else {
}
break;
}

var argseq__27552__auto__ = ((((0) < args__27551__auto__.length))?(new cljs.core.IndexedSeq(args__27551__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__27552__auto__);
});})(g__34473__auto___34555))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34473__auto___34555){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34473__auto___34555),args);
});})(g__34473__auto___34555))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__34473__auto___34555){
return (function (seq34518){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34518));
});})(g__34473__auto___34555))
;


var g__34473__auto___34559 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__34473__auto___34559){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__27551__auto__ = [];
var len__27544__auto___34560 = arguments.length;
var i__27545__auto___34561 = (0);
while(true){
if((i__27545__auto___34561 < len__27544__auto___34560)){
args__27551__auto__.push((arguments[i__27545__auto___34561]));

var G__34562 = (i__27545__auto___34561 + (1));
i__27545__auto___34561 = G__34562;
continue;
} else {
}
break;
}

var argseq__27552__auto__ = ((((0) < args__27551__auto__.length))?(new cljs.core.IndexedSeq(args__27551__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__27552__auto__);
});})(g__34473__auto___34559))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34473__auto___34559){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34473__auto___34559),args);
});})(g__34473__auto___34559))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__34473__auto___34559){
return (function (seq34519){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34519));
});})(g__34473__auto___34559))
;


var g__34473__auto___34563 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__34473__auto___34563){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__27551__auto__ = [];
var len__27544__auto___34564 = arguments.length;
var i__27545__auto___34565 = (0);
while(true){
if((i__27545__auto___34565 < len__27544__auto___34564)){
args__27551__auto__.push((arguments[i__27545__auto___34565]));

var G__34566 = (i__27545__auto___34565 + (1));
i__27545__auto___34565 = G__34566;
continue;
} else {
}
break;
}

var argseq__27552__auto__ = ((((0) < args__27551__auto__.length))?(new cljs.core.IndexedSeq(args__27551__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__27552__auto__);
});})(g__34473__auto___34563))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34473__auto___34563){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34473__auto___34563),args);
});})(g__34473__auto___34563))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__34473__auto___34563){
return (function (seq34520){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34520));
});})(g__34473__auto___34563))
;


var g__34473__auto___34567 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__34473__auto___34567){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__27551__auto__ = [];
var len__27544__auto___34568 = arguments.length;
var i__27545__auto___34569 = (0);
while(true){
if((i__27545__auto___34569 < len__27544__auto___34568)){
args__27551__auto__.push((arguments[i__27545__auto___34569]));

var G__34570 = (i__27545__auto___34569 + (1));
i__27545__auto___34569 = G__34570;
continue;
} else {
}
break;
}

var argseq__27552__auto__ = ((((0) < args__27551__auto__.length))?(new cljs.core.IndexedSeq(args__27551__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__27552__auto__);
});})(g__34473__auto___34567))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34473__auto___34567){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34473__auto___34567),args);
});})(g__34473__auto___34567))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__34473__auto___34567){
return (function (seq34521){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34521));
});})(g__34473__auto___34567))
;


var g__34473__auto___34571 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__34473__auto___34571){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__27551__auto__ = [];
var len__27544__auto___34572 = arguments.length;
var i__27545__auto___34573 = (0);
while(true){
if((i__27545__auto___34573 < len__27544__auto___34572)){
args__27551__auto__.push((arguments[i__27545__auto___34573]));

var G__34574 = (i__27545__auto___34573 + (1));
i__27545__auto___34573 = G__34574;
continue;
} else {
}
break;
}

var argseq__27552__auto__ = ((((0) < args__27551__auto__.length))?(new cljs.core.IndexedSeq(args__27551__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__27552__auto__);
});})(g__34473__auto___34571))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34473__auto___34571){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34473__auto___34571),args);
});})(g__34473__auto___34571))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__34473__auto___34571){
return (function (seq34522){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34522));
});})(g__34473__auto___34571))
;


var g__34473__auto___34575 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__34473__auto___34575){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__27551__auto__ = [];
var len__27544__auto___34576 = arguments.length;
var i__27545__auto___34577 = (0);
while(true){
if((i__27545__auto___34577 < len__27544__auto___34576)){
args__27551__auto__.push((arguments[i__27545__auto___34577]));

var G__34578 = (i__27545__auto___34577 + (1));
i__27545__auto___34577 = G__34578;
continue;
} else {
}
break;
}

var argseq__27552__auto__ = ((((0) < args__27551__auto__.length))?(new cljs.core.IndexedSeq(args__27551__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__27552__auto__);
});})(g__34473__auto___34575))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34473__auto___34575){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34473__auto___34575),args);
});})(g__34473__auto___34575))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__34473__auto___34575){
return (function (seq34523){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34523));
});})(g__34473__auto___34575))
;


var g__34473__auto___34579 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__34473__auto___34579){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__27551__auto__ = [];
var len__27544__auto___34580 = arguments.length;
var i__27545__auto___34581 = (0);
while(true){
if((i__27545__auto___34581 < len__27544__auto___34580)){
args__27551__auto__.push((arguments[i__27545__auto___34581]));

var G__34582 = (i__27545__auto___34581 + (1));
i__27545__auto___34581 = G__34582;
continue;
} else {
}
break;
}

var argseq__27552__auto__ = ((((0) < args__27551__auto__.length))?(new cljs.core.IndexedSeq(args__27551__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__27552__auto__);
});})(g__34473__auto___34579))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34473__auto___34579){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34473__auto___34579),args);
});})(g__34473__auto___34579))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__34473__auto___34579){
return (function (seq34524){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34524));
});})(g__34473__auto___34579))
;


var g__34473__auto___34583 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__34473__auto___34583){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__27551__auto__ = [];
var len__27544__auto___34584 = arguments.length;
var i__27545__auto___34585 = (0);
while(true){
if((i__27545__auto___34585 < len__27544__auto___34584)){
args__27551__auto__.push((arguments[i__27545__auto___34585]));

var G__34586 = (i__27545__auto___34585 + (1));
i__27545__auto___34585 = G__34586;
continue;
} else {
}
break;
}

var argseq__27552__auto__ = ((((0) < args__27551__auto__.length))?(new cljs.core.IndexedSeq(args__27551__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__27552__auto__);
});})(g__34473__auto___34583))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34473__auto___34583){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34473__auto___34583),args);
});})(g__34473__auto___34583))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__34473__auto___34583){
return (function (seq34525){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34525));
});})(g__34473__auto___34583))
;


var g__34473__auto___34587 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__34473__auto___34587){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__27551__auto__ = [];
var len__27544__auto___34588 = arguments.length;
var i__27545__auto___34589 = (0);
while(true){
if((i__27545__auto___34589 < len__27544__auto___34588)){
args__27551__auto__.push((arguments[i__27545__auto___34589]));

var G__34590 = (i__27545__auto___34589 + (1));
i__27545__auto___34589 = G__34590;
continue;
} else {
}
break;
}

var argseq__27552__auto__ = ((((0) < args__27551__auto__.length))?(new cljs.core.IndexedSeq(args__27551__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__27552__auto__);
});})(g__34473__auto___34587))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34473__auto___34587){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34473__auto___34587),args);
});})(g__34473__auto___34587))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__34473__auto___34587){
return (function (seq34526){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34526));
});})(g__34473__auto___34587))
;


var g__34473__auto___34591 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__34473__auto___34591){
return (function cljs$spec$gen$alpha$return(var_args){
var args__27551__auto__ = [];
var len__27544__auto___34592 = arguments.length;
var i__27545__auto___34593 = (0);
while(true){
if((i__27545__auto___34593 < len__27544__auto___34592)){
args__27551__auto__.push((arguments[i__27545__auto___34593]));

var G__34594 = (i__27545__auto___34593 + (1));
i__27545__auto___34593 = G__34594;
continue;
} else {
}
break;
}

var argseq__27552__auto__ = ((((0) < args__27551__auto__.length))?(new cljs.core.IndexedSeq(args__27551__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__27552__auto__);
});})(g__34473__auto___34591))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34473__auto___34591){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34473__auto___34591),args);
});})(g__34473__auto___34591))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__34473__auto___34591){
return (function (seq34527){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34527));
});})(g__34473__auto___34591))
;


var g__34473__auto___34595 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__34473__auto___34595){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__27551__auto__ = [];
var len__27544__auto___34596 = arguments.length;
var i__27545__auto___34597 = (0);
while(true){
if((i__27545__auto___34597 < len__27544__auto___34596)){
args__27551__auto__.push((arguments[i__27545__auto___34597]));

var G__34598 = (i__27545__auto___34597 + (1));
i__27545__auto___34597 = G__34598;
continue;
} else {
}
break;
}

var argseq__27552__auto__ = ((((0) < args__27551__auto__.length))?(new cljs.core.IndexedSeq(args__27551__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__27552__auto__);
});})(g__34473__auto___34595))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34473__auto___34595){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34473__auto___34595),args);
});})(g__34473__auto___34595))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__34473__auto___34595){
return (function (seq34528){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34528));
});})(g__34473__auto___34595))
;


var g__34473__auto___34599 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__34473__auto___34599){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__27551__auto__ = [];
var len__27544__auto___34600 = arguments.length;
var i__27545__auto___34601 = (0);
while(true){
if((i__27545__auto___34601 < len__27544__auto___34600)){
args__27551__auto__.push((arguments[i__27545__auto___34601]));

var G__34602 = (i__27545__auto___34601 + (1));
i__27545__auto___34601 = G__34602;
continue;
} else {
}
break;
}

var argseq__27552__auto__ = ((((0) < args__27551__auto__.length))?(new cljs.core.IndexedSeq(args__27551__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__27552__auto__);
});})(g__34473__auto___34599))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34473__auto___34599){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34473__auto___34599),args);
});})(g__34473__auto___34599))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__34473__auto___34599){
return (function (seq34529){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34529));
});})(g__34473__auto___34599))
;


var g__34473__auto___34603 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__34473__auto___34603){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__27551__auto__ = [];
var len__27544__auto___34604 = arguments.length;
var i__27545__auto___34605 = (0);
while(true){
if((i__27545__auto___34605 < len__27544__auto___34604)){
args__27551__auto__.push((arguments[i__27545__auto___34605]));

var G__34606 = (i__27545__auto___34605 + (1));
i__27545__auto___34605 = G__34606;
continue;
} else {
}
break;
}

var argseq__27552__auto__ = ((((0) < args__27551__auto__.length))?(new cljs.core.IndexedSeq(args__27551__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__27552__auto__);
});})(g__34473__auto___34603))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34473__auto___34603){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34473__auto___34603),args);
});})(g__34473__auto___34603))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__34473__auto___34603){
return (function (seq34530){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34530));
});})(g__34473__auto___34603))
;

var g__34486__auto___34628 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__34486__auto___34628){
return (function cljs$spec$gen$alpha$any(var_args){
var args__27551__auto__ = [];
var len__27544__auto___34629 = arguments.length;
var i__27545__auto___34630 = (0);
while(true){
if((i__27545__auto___34630 < len__27544__auto___34629)){
args__27551__auto__.push((arguments[i__27545__auto___34630]));

var G__34631 = (i__27545__auto___34630 + (1));
i__27545__auto___34630 = G__34631;
continue;
} else {
}
break;
}

var argseq__27552__auto__ = ((((0) < args__27551__auto__.length))?(new cljs.core.IndexedSeq(args__27551__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__27552__auto__);
});})(g__34486__auto___34628))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34486__auto___34628){
return (function (args){
return cljs.core.deref.call(null,g__34486__auto___34628);
});})(g__34486__auto___34628))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__34486__auto___34628){
return (function (seq34607){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34607));
});})(g__34486__auto___34628))
;


var g__34486__auto___34632 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__34486__auto___34632){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__27551__auto__ = [];
var len__27544__auto___34633 = arguments.length;
var i__27545__auto___34634 = (0);
while(true){
if((i__27545__auto___34634 < len__27544__auto___34633)){
args__27551__auto__.push((arguments[i__27545__auto___34634]));

var G__34635 = (i__27545__auto___34634 + (1));
i__27545__auto___34634 = G__34635;
continue;
} else {
}
break;
}

var argseq__27552__auto__ = ((((0) < args__27551__auto__.length))?(new cljs.core.IndexedSeq(args__27551__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__27552__auto__);
});})(g__34486__auto___34632))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34486__auto___34632){
return (function (args){
return cljs.core.deref.call(null,g__34486__auto___34632);
});})(g__34486__auto___34632))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__34486__auto___34632){
return (function (seq34608){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34608));
});})(g__34486__auto___34632))
;


var g__34486__auto___34636 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__34486__auto___34636){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__27551__auto__ = [];
var len__27544__auto___34637 = arguments.length;
var i__27545__auto___34638 = (0);
while(true){
if((i__27545__auto___34638 < len__27544__auto___34637)){
args__27551__auto__.push((arguments[i__27545__auto___34638]));

var G__34639 = (i__27545__auto___34638 + (1));
i__27545__auto___34638 = G__34639;
continue;
} else {
}
break;
}

var argseq__27552__auto__ = ((((0) < args__27551__auto__.length))?(new cljs.core.IndexedSeq(args__27551__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__27552__auto__);
});})(g__34486__auto___34636))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34486__auto___34636){
return (function (args){
return cljs.core.deref.call(null,g__34486__auto___34636);
});})(g__34486__auto___34636))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__34486__auto___34636){
return (function (seq34609){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34609));
});})(g__34486__auto___34636))
;


var g__34486__auto___34640 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__34486__auto___34640){
return (function cljs$spec$gen$alpha$char(var_args){
var args__27551__auto__ = [];
var len__27544__auto___34641 = arguments.length;
var i__27545__auto___34642 = (0);
while(true){
if((i__27545__auto___34642 < len__27544__auto___34641)){
args__27551__auto__.push((arguments[i__27545__auto___34642]));

var G__34643 = (i__27545__auto___34642 + (1));
i__27545__auto___34642 = G__34643;
continue;
} else {
}
break;
}

var argseq__27552__auto__ = ((((0) < args__27551__auto__.length))?(new cljs.core.IndexedSeq(args__27551__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__27552__auto__);
});})(g__34486__auto___34640))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34486__auto___34640){
return (function (args){
return cljs.core.deref.call(null,g__34486__auto___34640);
});})(g__34486__auto___34640))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__34486__auto___34640){
return (function (seq34610){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34610));
});})(g__34486__auto___34640))
;


var g__34486__auto___34644 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__34486__auto___34644){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__27551__auto__ = [];
var len__27544__auto___34645 = arguments.length;
var i__27545__auto___34646 = (0);
while(true){
if((i__27545__auto___34646 < len__27544__auto___34645)){
args__27551__auto__.push((arguments[i__27545__auto___34646]));

var G__34647 = (i__27545__auto___34646 + (1));
i__27545__auto___34646 = G__34647;
continue;
} else {
}
break;
}

var argseq__27552__auto__ = ((((0) < args__27551__auto__.length))?(new cljs.core.IndexedSeq(args__27551__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__27552__auto__);
});})(g__34486__auto___34644))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34486__auto___34644){
return (function (args){
return cljs.core.deref.call(null,g__34486__auto___34644);
});})(g__34486__auto___34644))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__34486__auto___34644){
return (function (seq34611){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34611));
});})(g__34486__auto___34644))
;


var g__34486__auto___34648 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__34486__auto___34648){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__27551__auto__ = [];
var len__27544__auto___34649 = arguments.length;
var i__27545__auto___34650 = (0);
while(true){
if((i__27545__auto___34650 < len__27544__auto___34649)){
args__27551__auto__.push((arguments[i__27545__auto___34650]));

var G__34651 = (i__27545__auto___34650 + (1));
i__27545__auto___34650 = G__34651;
continue;
} else {
}
break;
}

var argseq__27552__auto__ = ((((0) < args__27551__auto__.length))?(new cljs.core.IndexedSeq(args__27551__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__27552__auto__);
});})(g__34486__auto___34648))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34486__auto___34648){
return (function (args){
return cljs.core.deref.call(null,g__34486__auto___34648);
});})(g__34486__auto___34648))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__34486__auto___34648){
return (function (seq34612){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34612));
});})(g__34486__auto___34648))
;


var g__34486__auto___34652 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__34486__auto___34652){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__27551__auto__ = [];
var len__27544__auto___34653 = arguments.length;
var i__27545__auto___34654 = (0);
while(true){
if((i__27545__auto___34654 < len__27544__auto___34653)){
args__27551__auto__.push((arguments[i__27545__auto___34654]));

var G__34655 = (i__27545__auto___34654 + (1));
i__27545__auto___34654 = G__34655;
continue;
} else {
}
break;
}

var argseq__27552__auto__ = ((((0) < args__27551__auto__.length))?(new cljs.core.IndexedSeq(args__27551__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__27552__auto__);
});})(g__34486__auto___34652))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34486__auto___34652){
return (function (args){
return cljs.core.deref.call(null,g__34486__auto___34652);
});})(g__34486__auto___34652))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__34486__auto___34652){
return (function (seq34613){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34613));
});})(g__34486__auto___34652))
;


var g__34486__auto___34656 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__34486__auto___34656){
return (function cljs$spec$gen$alpha$double(var_args){
var args__27551__auto__ = [];
var len__27544__auto___34657 = arguments.length;
var i__27545__auto___34658 = (0);
while(true){
if((i__27545__auto___34658 < len__27544__auto___34657)){
args__27551__auto__.push((arguments[i__27545__auto___34658]));

var G__34659 = (i__27545__auto___34658 + (1));
i__27545__auto___34658 = G__34659;
continue;
} else {
}
break;
}

var argseq__27552__auto__ = ((((0) < args__27551__auto__.length))?(new cljs.core.IndexedSeq(args__27551__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__27552__auto__);
});})(g__34486__auto___34656))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34486__auto___34656){
return (function (args){
return cljs.core.deref.call(null,g__34486__auto___34656);
});})(g__34486__auto___34656))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__34486__auto___34656){
return (function (seq34614){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34614));
});})(g__34486__auto___34656))
;


var g__34486__auto___34660 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__34486__auto___34660){
return (function cljs$spec$gen$alpha$int(var_args){
var args__27551__auto__ = [];
var len__27544__auto___34661 = arguments.length;
var i__27545__auto___34662 = (0);
while(true){
if((i__27545__auto___34662 < len__27544__auto___34661)){
args__27551__auto__.push((arguments[i__27545__auto___34662]));

var G__34663 = (i__27545__auto___34662 + (1));
i__27545__auto___34662 = G__34663;
continue;
} else {
}
break;
}

var argseq__27552__auto__ = ((((0) < args__27551__auto__.length))?(new cljs.core.IndexedSeq(args__27551__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__27552__auto__);
});})(g__34486__auto___34660))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34486__auto___34660){
return (function (args){
return cljs.core.deref.call(null,g__34486__auto___34660);
});})(g__34486__auto___34660))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__34486__auto___34660){
return (function (seq34615){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34615));
});})(g__34486__auto___34660))
;


var g__34486__auto___34664 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__34486__auto___34664){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__27551__auto__ = [];
var len__27544__auto___34665 = arguments.length;
var i__27545__auto___34666 = (0);
while(true){
if((i__27545__auto___34666 < len__27544__auto___34665)){
args__27551__auto__.push((arguments[i__27545__auto___34666]));

var G__34667 = (i__27545__auto___34666 + (1));
i__27545__auto___34666 = G__34667;
continue;
} else {
}
break;
}

var argseq__27552__auto__ = ((((0) < args__27551__auto__.length))?(new cljs.core.IndexedSeq(args__27551__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__27552__auto__);
});})(g__34486__auto___34664))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34486__auto___34664){
return (function (args){
return cljs.core.deref.call(null,g__34486__auto___34664);
});})(g__34486__auto___34664))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__34486__auto___34664){
return (function (seq34616){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34616));
});})(g__34486__auto___34664))
;


var g__34486__auto___34668 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__34486__auto___34668){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__27551__auto__ = [];
var len__27544__auto___34669 = arguments.length;
var i__27545__auto___34670 = (0);
while(true){
if((i__27545__auto___34670 < len__27544__auto___34669)){
args__27551__auto__.push((arguments[i__27545__auto___34670]));

var G__34671 = (i__27545__auto___34670 + (1));
i__27545__auto___34670 = G__34671;
continue;
} else {
}
break;
}

var argseq__27552__auto__ = ((((0) < args__27551__auto__.length))?(new cljs.core.IndexedSeq(args__27551__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__27552__auto__);
});})(g__34486__auto___34668))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34486__auto___34668){
return (function (args){
return cljs.core.deref.call(null,g__34486__auto___34668);
});})(g__34486__auto___34668))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__34486__auto___34668){
return (function (seq34617){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34617));
});})(g__34486__auto___34668))
;


var g__34486__auto___34672 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__34486__auto___34672){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__27551__auto__ = [];
var len__27544__auto___34673 = arguments.length;
var i__27545__auto___34674 = (0);
while(true){
if((i__27545__auto___34674 < len__27544__auto___34673)){
args__27551__auto__.push((arguments[i__27545__auto___34674]));

var G__34675 = (i__27545__auto___34674 + (1));
i__27545__auto___34674 = G__34675;
continue;
} else {
}
break;
}

var argseq__27552__auto__ = ((((0) < args__27551__auto__.length))?(new cljs.core.IndexedSeq(args__27551__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__27552__auto__);
});})(g__34486__auto___34672))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34486__auto___34672){
return (function (args){
return cljs.core.deref.call(null,g__34486__auto___34672);
});})(g__34486__auto___34672))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__34486__auto___34672){
return (function (seq34618){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34618));
});})(g__34486__auto___34672))
;


var g__34486__auto___34676 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__34486__auto___34676){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__27551__auto__ = [];
var len__27544__auto___34677 = arguments.length;
var i__27545__auto___34678 = (0);
while(true){
if((i__27545__auto___34678 < len__27544__auto___34677)){
args__27551__auto__.push((arguments[i__27545__auto___34678]));

var G__34679 = (i__27545__auto___34678 + (1));
i__27545__auto___34678 = G__34679;
continue;
} else {
}
break;
}

var argseq__27552__auto__ = ((((0) < args__27551__auto__.length))?(new cljs.core.IndexedSeq(args__27551__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__27552__auto__);
});})(g__34486__auto___34676))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34486__auto___34676){
return (function (args){
return cljs.core.deref.call(null,g__34486__auto___34676);
});})(g__34486__auto___34676))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__34486__auto___34676){
return (function (seq34619){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34619));
});})(g__34486__auto___34676))
;


var g__34486__auto___34680 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__34486__auto___34680){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__27551__auto__ = [];
var len__27544__auto___34681 = arguments.length;
var i__27545__auto___34682 = (0);
while(true){
if((i__27545__auto___34682 < len__27544__auto___34681)){
args__27551__auto__.push((arguments[i__27545__auto___34682]));

var G__34683 = (i__27545__auto___34682 + (1));
i__27545__auto___34682 = G__34683;
continue;
} else {
}
break;
}

var argseq__27552__auto__ = ((((0) < args__27551__auto__.length))?(new cljs.core.IndexedSeq(args__27551__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__27552__auto__);
});})(g__34486__auto___34680))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34486__auto___34680){
return (function (args){
return cljs.core.deref.call(null,g__34486__auto___34680);
});})(g__34486__auto___34680))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__34486__auto___34680){
return (function (seq34620){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34620));
});})(g__34486__auto___34680))
;


var g__34486__auto___34684 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__34486__auto___34684){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__27551__auto__ = [];
var len__27544__auto___34685 = arguments.length;
var i__27545__auto___34686 = (0);
while(true){
if((i__27545__auto___34686 < len__27544__auto___34685)){
args__27551__auto__.push((arguments[i__27545__auto___34686]));

var G__34687 = (i__27545__auto___34686 + (1));
i__27545__auto___34686 = G__34687;
continue;
} else {
}
break;
}

var argseq__27552__auto__ = ((((0) < args__27551__auto__.length))?(new cljs.core.IndexedSeq(args__27551__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__27552__auto__);
});})(g__34486__auto___34684))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34486__auto___34684){
return (function (args){
return cljs.core.deref.call(null,g__34486__auto___34684);
});})(g__34486__auto___34684))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__34486__auto___34684){
return (function (seq34621){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34621));
});})(g__34486__auto___34684))
;


var g__34486__auto___34688 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__34486__auto___34688){
return (function cljs$spec$gen$alpha$string(var_args){
var args__27551__auto__ = [];
var len__27544__auto___34689 = arguments.length;
var i__27545__auto___34690 = (0);
while(true){
if((i__27545__auto___34690 < len__27544__auto___34689)){
args__27551__auto__.push((arguments[i__27545__auto___34690]));

var G__34691 = (i__27545__auto___34690 + (1));
i__27545__auto___34690 = G__34691;
continue;
} else {
}
break;
}

var argseq__27552__auto__ = ((((0) < args__27551__auto__.length))?(new cljs.core.IndexedSeq(args__27551__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__27552__auto__);
});})(g__34486__auto___34688))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34486__auto___34688){
return (function (args){
return cljs.core.deref.call(null,g__34486__auto___34688);
});})(g__34486__auto___34688))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__34486__auto___34688){
return (function (seq34622){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34622));
});})(g__34486__auto___34688))
;


var g__34486__auto___34692 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__34486__auto___34692){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__27551__auto__ = [];
var len__27544__auto___34693 = arguments.length;
var i__27545__auto___34694 = (0);
while(true){
if((i__27545__auto___34694 < len__27544__auto___34693)){
args__27551__auto__.push((arguments[i__27545__auto___34694]));

var G__34695 = (i__27545__auto___34694 + (1));
i__27545__auto___34694 = G__34695;
continue;
} else {
}
break;
}

var argseq__27552__auto__ = ((((0) < args__27551__auto__.length))?(new cljs.core.IndexedSeq(args__27551__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__27552__auto__);
});})(g__34486__auto___34692))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34486__auto___34692){
return (function (args){
return cljs.core.deref.call(null,g__34486__auto___34692);
});})(g__34486__auto___34692))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__34486__auto___34692){
return (function (seq34623){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34623));
});})(g__34486__auto___34692))
;


var g__34486__auto___34696 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__34486__auto___34696){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__27551__auto__ = [];
var len__27544__auto___34697 = arguments.length;
var i__27545__auto___34698 = (0);
while(true){
if((i__27545__auto___34698 < len__27544__auto___34697)){
args__27551__auto__.push((arguments[i__27545__auto___34698]));

var G__34699 = (i__27545__auto___34698 + (1));
i__27545__auto___34698 = G__34699;
continue;
} else {
}
break;
}

var argseq__27552__auto__ = ((((0) < args__27551__auto__.length))?(new cljs.core.IndexedSeq(args__27551__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__27552__auto__);
});})(g__34486__auto___34696))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34486__auto___34696){
return (function (args){
return cljs.core.deref.call(null,g__34486__auto___34696);
});})(g__34486__auto___34696))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__34486__auto___34696){
return (function (seq34624){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34624));
});})(g__34486__auto___34696))
;


var g__34486__auto___34700 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__34486__auto___34700){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__27551__auto__ = [];
var len__27544__auto___34701 = arguments.length;
var i__27545__auto___34702 = (0);
while(true){
if((i__27545__auto___34702 < len__27544__auto___34701)){
args__27551__auto__.push((arguments[i__27545__auto___34702]));

var G__34703 = (i__27545__auto___34702 + (1));
i__27545__auto___34702 = G__34703;
continue;
} else {
}
break;
}

var argseq__27552__auto__ = ((((0) < args__27551__auto__.length))?(new cljs.core.IndexedSeq(args__27551__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__27552__auto__);
});})(g__34486__auto___34700))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34486__auto___34700){
return (function (args){
return cljs.core.deref.call(null,g__34486__auto___34700);
});})(g__34486__auto___34700))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__34486__auto___34700){
return (function (seq34625){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34625));
});})(g__34486__auto___34700))
;


var g__34486__auto___34704 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__34486__auto___34704){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__27551__auto__ = [];
var len__27544__auto___34705 = arguments.length;
var i__27545__auto___34706 = (0);
while(true){
if((i__27545__auto___34706 < len__27544__auto___34705)){
args__27551__auto__.push((arguments[i__27545__auto___34706]));

var G__34707 = (i__27545__auto___34706 + (1));
i__27545__auto___34706 = G__34707;
continue;
} else {
}
break;
}

var argseq__27552__auto__ = ((((0) < args__27551__auto__.length))?(new cljs.core.IndexedSeq(args__27551__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__27552__auto__);
});})(g__34486__auto___34704))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34486__auto___34704){
return (function (args){
return cljs.core.deref.call(null,g__34486__auto___34704);
});})(g__34486__auto___34704))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__34486__auto___34704){
return (function (seq34626){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34626));
});})(g__34486__auto___34704))
;


var g__34486__auto___34708 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__34486__auto___34708){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__27551__auto__ = [];
var len__27544__auto___34709 = arguments.length;
var i__27545__auto___34710 = (0);
while(true){
if((i__27545__auto___34710 < len__27544__auto___34709)){
args__27551__auto__.push((arguments[i__27545__auto___34710]));

var G__34711 = (i__27545__auto___34710 + (1));
i__27545__auto___34710 = G__34711;
continue;
} else {
}
break;
}

var argseq__27552__auto__ = ((((0) < args__27551__auto__.length))?(new cljs.core.IndexedSeq(args__27551__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__27552__auto__);
});})(g__34486__auto___34708))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34486__auto___34708){
return (function (args){
return cljs.core.deref.call(null,g__34486__auto___34708);
});})(g__34486__auto___34708))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__34486__auto___34708){
return (function (seq34627){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34627));
});})(g__34486__auto___34708))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__27551__auto__ = [];
var len__27544__auto___34714 = arguments.length;
var i__27545__auto___34715 = (0);
while(true){
if((i__27545__auto___34715 < len__27544__auto___34714)){
args__27551__auto__.push((arguments[i__27545__auto___34715]));

var G__34716 = (i__27545__auto___34715 + (1));
i__27545__auto___34715 = G__34716;
continue;
} else {
}
break;
}

var argseq__27552__auto__ = ((((0) < args__27551__auto__.length))?(new cljs.core.IndexedSeq(args__27551__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__27552__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__34712_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__34712_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq34713){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34713));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__34717_SHARP_){
return (new Date(p1__34717_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map?rel=1498408750364