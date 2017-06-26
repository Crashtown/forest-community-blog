// Compiled by ClojureScript 1.9.562 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args28689 = [];
var len__27544__auto___28695 = arguments.length;
var i__27545__auto___28696 = (0);
while(true){
if((i__27545__auto___28696 < len__27544__auto___28695)){
args28689.push((arguments[i__27545__auto___28696]));

var G__28697 = (i__27545__auto___28696 + (1));
i__27545__auto___28696 = G__28697;
continue;
} else {
}
break;
}

var G__28691 = args28689.length;
switch (G__28691) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28689.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async28692 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28692 = (function (f,blockable,meta28693){
this.f = f;
this.blockable = blockable;
this.meta28693 = meta28693;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28692.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28694,meta28693__$1){
var self__ = this;
var _28694__$1 = this;
return (new cljs.core.async.t_cljs$core$async28692(self__.f,self__.blockable,meta28693__$1));
});

cljs.core.async.t_cljs$core$async28692.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28694){
var self__ = this;
var _28694__$1 = this;
return self__.meta28693;
});

cljs.core.async.t_cljs$core$async28692.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28692.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28692.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async28692.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async28692.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28693","meta28693",1539575220,null)], null);
});

cljs.core.async.t_cljs$core$async28692.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28692.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28692";

cljs.core.async.t_cljs$core$async28692.cljs$lang$ctorPrWriter = (function (this__27042__auto__,writer__27043__auto__,opt__27044__auto__){
return cljs.core._write.call(null,writer__27043__auto__,"cljs.core.async/t_cljs$core$async28692");
});

cljs.core.async.__GT_t_cljs$core$async28692 = (function cljs$core$async$__GT_t_cljs$core$async28692(f__$1,blockable__$1,meta28693){
return (new cljs.core.async.t_cljs$core$async28692(f__$1,blockable__$1,meta28693));
});

}

return (new cljs.core.async.t_cljs$core$async28692(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args28701 = [];
var len__27544__auto___28704 = arguments.length;
var i__27545__auto___28705 = (0);
while(true){
if((i__27545__auto___28705 < len__27544__auto___28704)){
args28701.push((arguments[i__27545__auto___28705]));

var G__28706 = (i__27545__auto___28705 + (1));
i__27545__auto___28705 = G__28706;
continue;
} else {
}
break;
}

var G__28703 = args28701.length;
switch (G__28703) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28701.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args28708 = [];
var len__27544__auto___28711 = arguments.length;
var i__27545__auto___28712 = (0);
while(true){
if((i__27545__auto___28712 < len__27544__auto___28711)){
args28708.push((arguments[i__27545__auto___28712]));

var G__28713 = (i__27545__auto___28712 + (1));
i__27545__auto___28712 = G__28713;
continue;
} else {
}
break;
}

var G__28710 = args28708.length;
switch (G__28710) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28708.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args28715 = [];
var len__27544__auto___28718 = arguments.length;
var i__27545__auto___28719 = (0);
while(true){
if((i__27545__auto___28719 < len__27544__auto___28718)){
args28715.push((arguments[i__27545__auto___28719]));

var G__28720 = (i__27545__auto___28719 + (1));
i__27545__auto___28719 = G__28720;
continue;
} else {
}
break;
}

var G__28717 = args28715.length;
switch (G__28717) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28715.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28722 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28722);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28722,ret){
return (function (){
return fn1.call(null,val_28722);
});})(val_28722,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args28723 = [];
var len__27544__auto___28726 = arguments.length;
var i__27545__auto___28727 = (0);
while(true){
if((i__27545__auto___28727 < len__27544__auto___28726)){
args28723.push((arguments[i__27545__auto___28727]));

var G__28728 = (i__27545__auto___28727 + (1));
i__27545__auto___28727 = G__28728;
continue;
} else {
}
break;
}

var G__28725 = args28723.length;
switch (G__28725) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28723.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__27354__auto___28730 = n;
var x_28731 = (0);
while(true){
if((x_28731 < n__27354__auto___28730)){
(a[x_28731] = (0));

var G__28732 = (x_28731 + (1));
x_28731 = G__28732;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__28733 = (i + (1));
i = G__28733;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async28737 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28737 = (function (flag,meta28738){
this.flag = flag;
this.meta28738 = meta28738;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28737.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28739,meta28738__$1){
var self__ = this;
var _28739__$1 = this;
return (new cljs.core.async.t_cljs$core$async28737(self__.flag,meta28738__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async28737.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28739){
var self__ = this;
var _28739__$1 = this;
return self__.meta28738;
});})(flag))
;

cljs.core.async.t_cljs$core$async28737.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28737.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async28737.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28737.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28737.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28738","meta28738",-1436967506,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async28737.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28737.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28737";

cljs.core.async.t_cljs$core$async28737.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__27042__auto__,writer__27043__auto__,opt__27044__auto__){
return cljs.core._write.call(null,writer__27043__auto__,"cljs.core.async/t_cljs$core$async28737");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async28737 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28737(flag__$1,meta28738){
return (new cljs.core.async.t_cljs$core$async28737(flag__$1,meta28738));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async28737(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async28743 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28743 = (function (flag,cb,meta28744){
this.flag = flag;
this.cb = cb;
this.meta28744 = meta28744;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28743.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28745,meta28744__$1){
var self__ = this;
var _28745__$1 = this;
return (new cljs.core.async.t_cljs$core$async28743(self__.flag,self__.cb,meta28744__$1));
});

cljs.core.async.t_cljs$core$async28743.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28745){
var self__ = this;
var _28745__$1 = this;
return self__.meta28744;
});

cljs.core.async.t_cljs$core$async28743.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28743.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async28743.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28743.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async28743.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28744","meta28744",-1219143562,null)], null);
});

cljs.core.async.t_cljs$core$async28743.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28743.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28743";

cljs.core.async.t_cljs$core$async28743.cljs$lang$ctorPrWriter = (function (this__27042__auto__,writer__27043__auto__,opt__27044__auto__){
return cljs.core._write.call(null,writer__27043__auto__,"cljs.core.async/t_cljs$core$async28743");
});

cljs.core.async.__GT_t_cljs$core$async28743 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28743(flag__$1,cb__$1,meta28744){
return (new cljs.core.async.t_cljs$core$async28743(flag__$1,cb__$1,meta28744));
});

}

return (new cljs.core.async.t_cljs$core$async28743(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28746_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28746_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28747_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28747_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__26431__auto__ = wport;
if(cljs.core.truth_(or__26431__auto__)){
return or__26431__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28748 = (i + (1));
i = G__28748;
continue;
}
} else {
return null;
}
break;
}
})();
var or__26431__auto__ = ret;
if(cljs.core.truth_(or__26431__auto__)){
return or__26431__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__26419__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__26419__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__26419__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__27551__auto__ = [];
var len__27544__auto___28754 = arguments.length;
var i__27545__auto___28755 = (0);
while(true){
if((i__27545__auto___28755 < len__27544__auto___28754)){
args__27551__auto__.push((arguments[i__27545__auto___28755]));

var G__28756 = (i__27545__auto___28755 + (1));
i__27545__auto___28755 = G__28756;
continue;
} else {
}
break;
}

var argseq__27552__auto__ = ((((1) < args__27551__auto__.length))?(new cljs.core.IndexedSeq(args__27551__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27552__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28751){
var map__28752 = p__28751;
var map__28752__$1 = ((((!((map__28752 == null)))?((((map__28752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28752.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28752):map__28752);
var opts = map__28752__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28749){
var G__28750 = cljs.core.first.call(null,seq28749);
var seq28749__$1 = cljs.core.next.call(null,seq28749);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28750,seq28749__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args28757 = [];
var len__27544__auto___28807 = arguments.length;
var i__27545__auto___28808 = (0);
while(true){
if((i__27545__auto___28808 < len__27544__auto___28807)){
args28757.push((arguments[i__27545__auto___28808]));

var G__28809 = (i__27545__auto___28808 + (1));
i__27545__auto___28808 = G__28809;
continue;
} else {
}
break;
}

var G__28759 = args28757.length;
switch (G__28759) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28757.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28644__auto___28811 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28644__auto___28811){
return (function (){
var f__28645__auto__ = (function (){var switch__28579__auto__ = ((function (c__28644__auto___28811){
return (function (state_28783){
var state_val_28784 = (state_28783[(1)]);
if((state_val_28784 === (7))){
var inst_28779 = (state_28783[(2)]);
var state_28783__$1 = state_28783;
var statearr_28785_28812 = state_28783__$1;
(statearr_28785_28812[(2)] = inst_28779);

(statearr_28785_28812[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28784 === (1))){
var state_28783__$1 = state_28783;
var statearr_28786_28813 = state_28783__$1;
(statearr_28786_28813[(2)] = null);

(statearr_28786_28813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28784 === (4))){
var inst_28762 = (state_28783[(7)]);
var inst_28762__$1 = (state_28783[(2)]);
var inst_28763 = (inst_28762__$1 == null);
var state_28783__$1 = (function (){var statearr_28787 = state_28783;
(statearr_28787[(7)] = inst_28762__$1);

return statearr_28787;
})();
if(cljs.core.truth_(inst_28763)){
var statearr_28788_28814 = state_28783__$1;
(statearr_28788_28814[(1)] = (5));

} else {
var statearr_28789_28815 = state_28783__$1;
(statearr_28789_28815[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28784 === (13))){
var state_28783__$1 = state_28783;
var statearr_28790_28816 = state_28783__$1;
(statearr_28790_28816[(2)] = null);

(statearr_28790_28816[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28784 === (6))){
var inst_28762 = (state_28783[(7)]);
var state_28783__$1 = state_28783;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28783__$1,(11),to,inst_28762);
} else {
if((state_val_28784 === (3))){
var inst_28781 = (state_28783[(2)]);
var state_28783__$1 = state_28783;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28783__$1,inst_28781);
} else {
if((state_val_28784 === (12))){
var state_28783__$1 = state_28783;
var statearr_28791_28817 = state_28783__$1;
(statearr_28791_28817[(2)] = null);

(statearr_28791_28817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28784 === (2))){
var state_28783__$1 = state_28783;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28783__$1,(4),from);
} else {
if((state_val_28784 === (11))){
var inst_28772 = (state_28783[(2)]);
var state_28783__$1 = state_28783;
if(cljs.core.truth_(inst_28772)){
var statearr_28792_28818 = state_28783__$1;
(statearr_28792_28818[(1)] = (12));

} else {
var statearr_28793_28819 = state_28783__$1;
(statearr_28793_28819[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28784 === (9))){
var state_28783__$1 = state_28783;
var statearr_28794_28820 = state_28783__$1;
(statearr_28794_28820[(2)] = null);

(statearr_28794_28820[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28784 === (5))){
var state_28783__$1 = state_28783;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28795_28821 = state_28783__$1;
(statearr_28795_28821[(1)] = (8));

} else {
var statearr_28796_28822 = state_28783__$1;
(statearr_28796_28822[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28784 === (14))){
var inst_28777 = (state_28783[(2)]);
var state_28783__$1 = state_28783;
var statearr_28797_28823 = state_28783__$1;
(statearr_28797_28823[(2)] = inst_28777);

(statearr_28797_28823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28784 === (10))){
var inst_28769 = (state_28783[(2)]);
var state_28783__$1 = state_28783;
var statearr_28798_28824 = state_28783__$1;
(statearr_28798_28824[(2)] = inst_28769);

(statearr_28798_28824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28784 === (8))){
var inst_28766 = cljs.core.async.close_BANG_.call(null,to);
var state_28783__$1 = state_28783;
var statearr_28799_28825 = state_28783__$1;
(statearr_28799_28825[(2)] = inst_28766);

(statearr_28799_28825[(1)] = (10));


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
});})(c__28644__auto___28811))
;
return ((function (switch__28579__auto__,c__28644__auto___28811){
return (function() {
var cljs$core$async$state_machine__28580__auto__ = null;
var cljs$core$async$state_machine__28580__auto____0 = (function (){
var statearr_28803 = [null,null,null,null,null,null,null,null];
(statearr_28803[(0)] = cljs$core$async$state_machine__28580__auto__);

(statearr_28803[(1)] = (1));

return statearr_28803;
});
var cljs$core$async$state_machine__28580__auto____1 = (function (state_28783){
while(true){
var ret_value__28581__auto__ = (function (){try{while(true){
var result__28582__auto__ = switch__28579__auto__.call(null,state_28783);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28582__auto__;
}
break;
}
}catch (e28804){if((e28804 instanceof Object)){
var ex__28583__auto__ = e28804;
var statearr_28805_28826 = state_28783;
(statearr_28805_28826[(5)] = ex__28583__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28783);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28804;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28827 = state_28783;
state_28783 = G__28827;
continue;
} else {
return ret_value__28581__auto__;
}
break;
}
});
cljs$core$async$state_machine__28580__auto__ = function(state_28783){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28580__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28580__auto____1.call(this,state_28783);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28580__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28580__auto____0;
cljs$core$async$state_machine__28580__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28580__auto____1;
return cljs$core$async$state_machine__28580__auto__;
})()
;})(switch__28579__auto__,c__28644__auto___28811))
})();
var state__28646__auto__ = (function (){var statearr_28806 = f__28645__auto__.call(null);
(statearr_28806[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28644__auto___28811);

return statearr_28806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28646__auto__);
});})(c__28644__auto___28811))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__29015){
var vec__29016 = p__29015;
var v = cljs.core.nth.call(null,vec__29016,(0),null);
var p = cljs.core.nth.call(null,vec__29016,(1),null);
var job = vec__29016;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28644__auto___29202 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28644__auto___29202,res,vec__29016,v,p,job,jobs,results){
return (function (){
var f__28645__auto__ = (function (){var switch__28579__auto__ = ((function (c__28644__auto___29202,res,vec__29016,v,p,job,jobs,results){
return (function (state_29023){
var state_val_29024 = (state_29023[(1)]);
if((state_val_29024 === (1))){
var state_29023__$1 = state_29023;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29023__$1,(2),res,v);
} else {
if((state_val_29024 === (2))){
var inst_29020 = (state_29023[(2)]);
var inst_29021 = cljs.core.async.close_BANG_.call(null,res);
var state_29023__$1 = (function (){var statearr_29025 = state_29023;
(statearr_29025[(7)] = inst_29020);

return statearr_29025;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29023__$1,inst_29021);
} else {
return null;
}
}
});})(c__28644__auto___29202,res,vec__29016,v,p,job,jobs,results))
;
return ((function (switch__28579__auto__,c__28644__auto___29202,res,vec__29016,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28580__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28580__auto____0 = (function (){
var statearr_29029 = [null,null,null,null,null,null,null,null];
(statearr_29029[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28580__auto__);

(statearr_29029[(1)] = (1));

return statearr_29029;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28580__auto____1 = (function (state_29023){
while(true){
var ret_value__28581__auto__ = (function (){try{while(true){
var result__28582__auto__ = switch__28579__auto__.call(null,state_29023);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28582__auto__;
}
break;
}
}catch (e29030){if((e29030 instanceof Object)){
var ex__28583__auto__ = e29030;
var statearr_29031_29203 = state_29023;
(statearr_29031_29203[(5)] = ex__28583__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29023);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29030;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29204 = state_29023;
state_29023 = G__29204;
continue;
} else {
return ret_value__28581__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28580__auto__ = function(state_29023){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28580__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28580__auto____1.call(this,state_29023);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__28580__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28580__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28580__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28580__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28580__auto__;
})()
;})(switch__28579__auto__,c__28644__auto___29202,res,vec__29016,v,p,job,jobs,results))
})();
var state__28646__auto__ = (function (){var statearr_29032 = f__28645__auto__.call(null);
(statearr_29032[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28644__auto___29202);

return statearr_29032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28646__auto__);
});})(c__28644__auto___29202,res,vec__29016,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__29033){
var vec__29034 = p__29033;
var v = cljs.core.nth.call(null,vec__29034,(0),null);
var p = cljs.core.nth.call(null,vec__29034,(1),null);
var job = vec__29034;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__27354__auto___29205 = n;
var __29206 = (0);
while(true){
if((__29206 < n__27354__auto___29205)){
var G__29037_29207 = type;
var G__29037_29208__$1 = (((G__29037_29207 instanceof cljs.core.Keyword))?G__29037_29207.fqn:null);
switch (G__29037_29208__$1) {
case "compute":
var c__28644__auto___29210 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29206,c__28644__auto___29210,G__29037_29207,G__29037_29208__$1,n__27354__auto___29205,jobs,results,process,async){
return (function (){
var f__28645__auto__ = (function (){var switch__28579__auto__ = ((function (__29206,c__28644__auto___29210,G__29037_29207,G__29037_29208__$1,n__27354__auto___29205,jobs,results,process,async){
return (function (state_29050){
var state_val_29051 = (state_29050[(1)]);
if((state_val_29051 === (1))){
var state_29050__$1 = state_29050;
var statearr_29052_29211 = state_29050__$1;
(statearr_29052_29211[(2)] = null);

(statearr_29052_29211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29051 === (2))){
var state_29050__$1 = state_29050;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29050__$1,(4),jobs);
} else {
if((state_val_29051 === (3))){
var inst_29048 = (state_29050[(2)]);
var state_29050__$1 = state_29050;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29050__$1,inst_29048);
} else {
if((state_val_29051 === (4))){
var inst_29040 = (state_29050[(2)]);
var inst_29041 = process.call(null,inst_29040);
var state_29050__$1 = state_29050;
if(cljs.core.truth_(inst_29041)){
var statearr_29053_29212 = state_29050__$1;
(statearr_29053_29212[(1)] = (5));

} else {
var statearr_29054_29213 = state_29050__$1;
(statearr_29054_29213[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29051 === (5))){
var state_29050__$1 = state_29050;
var statearr_29055_29214 = state_29050__$1;
(statearr_29055_29214[(2)] = null);

(statearr_29055_29214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29051 === (6))){
var state_29050__$1 = state_29050;
var statearr_29056_29215 = state_29050__$1;
(statearr_29056_29215[(2)] = null);

(statearr_29056_29215[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29051 === (7))){
var inst_29046 = (state_29050[(2)]);
var state_29050__$1 = state_29050;
var statearr_29057_29216 = state_29050__$1;
(statearr_29057_29216[(2)] = inst_29046);

(statearr_29057_29216[(1)] = (3));


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
});})(__29206,c__28644__auto___29210,G__29037_29207,G__29037_29208__$1,n__27354__auto___29205,jobs,results,process,async))
;
return ((function (__29206,switch__28579__auto__,c__28644__auto___29210,G__29037_29207,G__29037_29208__$1,n__27354__auto___29205,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28580__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28580__auto____0 = (function (){
var statearr_29061 = [null,null,null,null,null,null,null];
(statearr_29061[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28580__auto__);

(statearr_29061[(1)] = (1));

return statearr_29061;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28580__auto____1 = (function (state_29050){
while(true){
var ret_value__28581__auto__ = (function (){try{while(true){
var result__28582__auto__ = switch__28579__auto__.call(null,state_29050);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28582__auto__;
}
break;
}
}catch (e29062){if((e29062 instanceof Object)){
var ex__28583__auto__ = e29062;
var statearr_29063_29217 = state_29050;
(statearr_29063_29217[(5)] = ex__28583__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29050);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29062;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29218 = state_29050;
state_29050 = G__29218;
continue;
} else {
return ret_value__28581__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28580__auto__ = function(state_29050){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28580__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28580__auto____1.call(this,state_29050);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__28580__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28580__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28580__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28580__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28580__auto__;
})()
;})(__29206,switch__28579__auto__,c__28644__auto___29210,G__29037_29207,G__29037_29208__$1,n__27354__auto___29205,jobs,results,process,async))
})();
var state__28646__auto__ = (function (){var statearr_29064 = f__28645__auto__.call(null);
(statearr_29064[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28644__auto___29210);

return statearr_29064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28646__auto__);
});})(__29206,c__28644__auto___29210,G__29037_29207,G__29037_29208__$1,n__27354__auto___29205,jobs,results,process,async))
);


break;
case "async":
var c__28644__auto___29219 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29206,c__28644__auto___29219,G__29037_29207,G__29037_29208__$1,n__27354__auto___29205,jobs,results,process,async){
return (function (){
var f__28645__auto__ = (function (){var switch__28579__auto__ = ((function (__29206,c__28644__auto___29219,G__29037_29207,G__29037_29208__$1,n__27354__auto___29205,jobs,results,process,async){
return (function (state_29077){
var state_val_29078 = (state_29077[(1)]);
if((state_val_29078 === (1))){
var state_29077__$1 = state_29077;
var statearr_29079_29220 = state_29077__$1;
(statearr_29079_29220[(2)] = null);

(statearr_29079_29220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29078 === (2))){
var state_29077__$1 = state_29077;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29077__$1,(4),jobs);
} else {
if((state_val_29078 === (3))){
var inst_29075 = (state_29077[(2)]);
var state_29077__$1 = state_29077;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29077__$1,inst_29075);
} else {
if((state_val_29078 === (4))){
var inst_29067 = (state_29077[(2)]);
var inst_29068 = async.call(null,inst_29067);
var state_29077__$1 = state_29077;
if(cljs.core.truth_(inst_29068)){
var statearr_29080_29221 = state_29077__$1;
(statearr_29080_29221[(1)] = (5));

} else {
var statearr_29081_29222 = state_29077__$1;
(statearr_29081_29222[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29078 === (5))){
var state_29077__$1 = state_29077;
var statearr_29082_29223 = state_29077__$1;
(statearr_29082_29223[(2)] = null);

(statearr_29082_29223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29078 === (6))){
var state_29077__$1 = state_29077;
var statearr_29083_29224 = state_29077__$1;
(statearr_29083_29224[(2)] = null);

(statearr_29083_29224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29078 === (7))){
var inst_29073 = (state_29077[(2)]);
var state_29077__$1 = state_29077;
var statearr_29084_29225 = state_29077__$1;
(statearr_29084_29225[(2)] = inst_29073);

(statearr_29084_29225[(1)] = (3));


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
});})(__29206,c__28644__auto___29219,G__29037_29207,G__29037_29208__$1,n__27354__auto___29205,jobs,results,process,async))
;
return ((function (__29206,switch__28579__auto__,c__28644__auto___29219,G__29037_29207,G__29037_29208__$1,n__27354__auto___29205,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28580__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28580__auto____0 = (function (){
var statearr_29088 = [null,null,null,null,null,null,null];
(statearr_29088[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28580__auto__);

(statearr_29088[(1)] = (1));

return statearr_29088;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28580__auto____1 = (function (state_29077){
while(true){
var ret_value__28581__auto__ = (function (){try{while(true){
var result__28582__auto__ = switch__28579__auto__.call(null,state_29077);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28582__auto__;
}
break;
}
}catch (e29089){if((e29089 instanceof Object)){
var ex__28583__auto__ = e29089;
var statearr_29090_29226 = state_29077;
(statearr_29090_29226[(5)] = ex__28583__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29077);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29089;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29227 = state_29077;
state_29077 = G__29227;
continue;
} else {
return ret_value__28581__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28580__auto__ = function(state_29077){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28580__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28580__auto____1.call(this,state_29077);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__28580__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28580__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28580__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28580__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28580__auto__;
})()
;})(__29206,switch__28579__auto__,c__28644__auto___29219,G__29037_29207,G__29037_29208__$1,n__27354__auto___29205,jobs,results,process,async))
})();
var state__28646__auto__ = (function (){var statearr_29091 = f__28645__auto__.call(null);
(statearr_29091[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28644__auto___29219);

return statearr_29091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28646__auto__);
});})(__29206,c__28644__auto___29219,G__29037_29207,G__29037_29208__$1,n__27354__auto___29205,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29037_29208__$1)].join('')));

}

var G__29228 = (__29206 + (1));
__29206 = G__29228;
continue;
} else {
}
break;
}

var c__28644__auto___29229 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28644__auto___29229,jobs,results,process,async){
return (function (){
var f__28645__auto__ = (function (){var switch__28579__auto__ = ((function (c__28644__auto___29229,jobs,results,process,async){
return (function (state_29113){
var state_val_29114 = (state_29113[(1)]);
if((state_val_29114 === (1))){
var state_29113__$1 = state_29113;
var statearr_29115_29230 = state_29113__$1;
(statearr_29115_29230[(2)] = null);

(statearr_29115_29230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29114 === (2))){
var state_29113__$1 = state_29113;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29113__$1,(4),from);
} else {
if((state_val_29114 === (3))){
var inst_29111 = (state_29113[(2)]);
var state_29113__$1 = state_29113;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29113__$1,inst_29111);
} else {
if((state_val_29114 === (4))){
var inst_29094 = (state_29113[(7)]);
var inst_29094__$1 = (state_29113[(2)]);
var inst_29095 = (inst_29094__$1 == null);
var state_29113__$1 = (function (){var statearr_29116 = state_29113;
(statearr_29116[(7)] = inst_29094__$1);

return statearr_29116;
})();
if(cljs.core.truth_(inst_29095)){
var statearr_29117_29231 = state_29113__$1;
(statearr_29117_29231[(1)] = (5));

} else {
var statearr_29118_29232 = state_29113__$1;
(statearr_29118_29232[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29114 === (5))){
var inst_29097 = cljs.core.async.close_BANG_.call(null,jobs);
var state_29113__$1 = state_29113;
var statearr_29119_29233 = state_29113__$1;
(statearr_29119_29233[(2)] = inst_29097);

(statearr_29119_29233[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29114 === (6))){
var inst_29094 = (state_29113[(7)]);
var inst_29099 = (state_29113[(8)]);
var inst_29099__$1 = cljs.core.async.chan.call(null,(1));
var inst_29100 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29101 = [inst_29094,inst_29099__$1];
var inst_29102 = (new cljs.core.PersistentVector(null,2,(5),inst_29100,inst_29101,null));
var state_29113__$1 = (function (){var statearr_29120 = state_29113;
(statearr_29120[(8)] = inst_29099__$1);

return statearr_29120;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29113__$1,(8),jobs,inst_29102);
} else {
if((state_val_29114 === (7))){
var inst_29109 = (state_29113[(2)]);
var state_29113__$1 = state_29113;
var statearr_29121_29234 = state_29113__$1;
(statearr_29121_29234[(2)] = inst_29109);

(statearr_29121_29234[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29114 === (8))){
var inst_29099 = (state_29113[(8)]);
var inst_29104 = (state_29113[(2)]);
var state_29113__$1 = (function (){var statearr_29122 = state_29113;
(statearr_29122[(9)] = inst_29104);

return statearr_29122;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29113__$1,(9),results,inst_29099);
} else {
if((state_val_29114 === (9))){
var inst_29106 = (state_29113[(2)]);
var state_29113__$1 = (function (){var statearr_29123 = state_29113;
(statearr_29123[(10)] = inst_29106);

return statearr_29123;
})();
var statearr_29124_29235 = state_29113__$1;
(statearr_29124_29235[(2)] = null);

(statearr_29124_29235[(1)] = (2));


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
});})(c__28644__auto___29229,jobs,results,process,async))
;
return ((function (switch__28579__auto__,c__28644__auto___29229,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28580__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28580__auto____0 = (function (){
var statearr_29128 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29128[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28580__auto__);

(statearr_29128[(1)] = (1));

return statearr_29128;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28580__auto____1 = (function (state_29113){
while(true){
var ret_value__28581__auto__ = (function (){try{while(true){
var result__28582__auto__ = switch__28579__auto__.call(null,state_29113);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28582__auto__;
}
break;
}
}catch (e29129){if((e29129 instanceof Object)){
var ex__28583__auto__ = e29129;
var statearr_29130_29236 = state_29113;
(statearr_29130_29236[(5)] = ex__28583__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29113);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29129;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29237 = state_29113;
state_29113 = G__29237;
continue;
} else {
return ret_value__28581__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28580__auto__ = function(state_29113){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28580__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28580__auto____1.call(this,state_29113);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__28580__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28580__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28580__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28580__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28580__auto__;
})()
;})(switch__28579__auto__,c__28644__auto___29229,jobs,results,process,async))
})();
var state__28646__auto__ = (function (){var statearr_29131 = f__28645__auto__.call(null);
(statearr_29131[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28644__auto___29229);

return statearr_29131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28646__auto__);
});})(c__28644__auto___29229,jobs,results,process,async))
);


var c__28644__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28644__auto__,jobs,results,process,async){
return (function (){
var f__28645__auto__ = (function (){var switch__28579__auto__ = ((function (c__28644__auto__,jobs,results,process,async){
return (function (state_29169){
var state_val_29170 = (state_29169[(1)]);
if((state_val_29170 === (7))){
var inst_29165 = (state_29169[(2)]);
var state_29169__$1 = state_29169;
var statearr_29171_29238 = state_29169__$1;
(statearr_29171_29238[(2)] = inst_29165);

(statearr_29171_29238[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (20))){
var state_29169__$1 = state_29169;
var statearr_29172_29239 = state_29169__$1;
(statearr_29172_29239[(2)] = null);

(statearr_29172_29239[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (1))){
var state_29169__$1 = state_29169;
var statearr_29173_29240 = state_29169__$1;
(statearr_29173_29240[(2)] = null);

(statearr_29173_29240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (4))){
var inst_29134 = (state_29169[(7)]);
var inst_29134__$1 = (state_29169[(2)]);
var inst_29135 = (inst_29134__$1 == null);
var state_29169__$1 = (function (){var statearr_29174 = state_29169;
(statearr_29174[(7)] = inst_29134__$1);

return statearr_29174;
})();
if(cljs.core.truth_(inst_29135)){
var statearr_29175_29241 = state_29169__$1;
(statearr_29175_29241[(1)] = (5));

} else {
var statearr_29176_29242 = state_29169__$1;
(statearr_29176_29242[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (15))){
var inst_29147 = (state_29169[(8)]);
var state_29169__$1 = state_29169;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29169__$1,(18),to,inst_29147);
} else {
if((state_val_29170 === (21))){
var inst_29160 = (state_29169[(2)]);
var state_29169__$1 = state_29169;
var statearr_29177_29243 = state_29169__$1;
(statearr_29177_29243[(2)] = inst_29160);

(statearr_29177_29243[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (13))){
var inst_29162 = (state_29169[(2)]);
var state_29169__$1 = (function (){var statearr_29178 = state_29169;
(statearr_29178[(9)] = inst_29162);

return statearr_29178;
})();
var statearr_29179_29244 = state_29169__$1;
(statearr_29179_29244[(2)] = null);

(statearr_29179_29244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (6))){
var inst_29134 = (state_29169[(7)]);
var state_29169__$1 = state_29169;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29169__$1,(11),inst_29134);
} else {
if((state_val_29170 === (17))){
var inst_29155 = (state_29169[(2)]);
var state_29169__$1 = state_29169;
if(cljs.core.truth_(inst_29155)){
var statearr_29180_29245 = state_29169__$1;
(statearr_29180_29245[(1)] = (19));

} else {
var statearr_29181_29246 = state_29169__$1;
(statearr_29181_29246[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (3))){
var inst_29167 = (state_29169[(2)]);
var state_29169__$1 = state_29169;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29169__$1,inst_29167);
} else {
if((state_val_29170 === (12))){
var inst_29144 = (state_29169[(10)]);
var state_29169__$1 = state_29169;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29169__$1,(14),inst_29144);
} else {
if((state_val_29170 === (2))){
var state_29169__$1 = state_29169;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29169__$1,(4),results);
} else {
if((state_val_29170 === (19))){
var state_29169__$1 = state_29169;
var statearr_29182_29247 = state_29169__$1;
(statearr_29182_29247[(2)] = null);

(statearr_29182_29247[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (11))){
var inst_29144 = (state_29169[(2)]);
var state_29169__$1 = (function (){var statearr_29183 = state_29169;
(statearr_29183[(10)] = inst_29144);

return statearr_29183;
})();
var statearr_29184_29248 = state_29169__$1;
(statearr_29184_29248[(2)] = null);

(statearr_29184_29248[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (9))){
var state_29169__$1 = state_29169;
var statearr_29185_29249 = state_29169__$1;
(statearr_29185_29249[(2)] = null);

(statearr_29185_29249[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (5))){
var state_29169__$1 = state_29169;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29186_29250 = state_29169__$1;
(statearr_29186_29250[(1)] = (8));

} else {
var statearr_29187_29251 = state_29169__$1;
(statearr_29187_29251[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (14))){
var inst_29147 = (state_29169[(8)]);
var inst_29149 = (state_29169[(11)]);
var inst_29147__$1 = (state_29169[(2)]);
var inst_29148 = (inst_29147__$1 == null);
var inst_29149__$1 = cljs.core.not.call(null,inst_29148);
var state_29169__$1 = (function (){var statearr_29188 = state_29169;
(statearr_29188[(8)] = inst_29147__$1);

(statearr_29188[(11)] = inst_29149__$1);

return statearr_29188;
})();
if(inst_29149__$1){
var statearr_29189_29252 = state_29169__$1;
(statearr_29189_29252[(1)] = (15));

} else {
var statearr_29190_29253 = state_29169__$1;
(statearr_29190_29253[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (16))){
var inst_29149 = (state_29169[(11)]);
var state_29169__$1 = state_29169;
var statearr_29191_29254 = state_29169__$1;
(statearr_29191_29254[(2)] = inst_29149);

(statearr_29191_29254[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (10))){
var inst_29141 = (state_29169[(2)]);
var state_29169__$1 = state_29169;
var statearr_29192_29255 = state_29169__$1;
(statearr_29192_29255[(2)] = inst_29141);

(statearr_29192_29255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (18))){
var inst_29152 = (state_29169[(2)]);
var state_29169__$1 = state_29169;
var statearr_29193_29256 = state_29169__$1;
(statearr_29193_29256[(2)] = inst_29152);

(statearr_29193_29256[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (8))){
var inst_29138 = cljs.core.async.close_BANG_.call(null,to);
var state_29169__$1 = state_29169;
var statearr_29194_29257 = state_29169__$1;
(statearr_29194_29257[(2)] = inst_29138);

(statearr_29194_29257[(1)] = (10));


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
});})(c__28644__auto__,jobs,results,process,async))
;
return ((function (switch__28579__auto__,c__28644__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28580__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28580__auto____0 = (function (){
var statearr_29198 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29198[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28580__auto__);

(statearr_29198[(1)] = (1));

return statearr_29198;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28580__auto____1 = (function (state_29169){
while(true){
var ret_value__28581__auto__ = (function (){try{while(true){
var result__28582__auto__ = switch__28579__auto__.call(null,state_29169);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28582__auto__;
}
break;
}
}catch (e29199){if((e29199 instanceof Object)){
var ex__28583__auto__ = e29199;
var statearr_29200_29258 = state_29169;
(statearr_29200_29258[(5)] = ex__28583__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29169);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29199;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29259 = state_29169;
state_29169 = G__29259;
continue;
} else {
return ret_value__28581__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28580__auto__ = function(state_29169){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28580__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28580__auto____1.call(this,state_29169);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__28580__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28580__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28580__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28580__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28580__auto__;
})()
;})(switch__28579__auto__,c__28644__auto__,jobs,results,process,async))
})();
var state__28646__auto__ = (function (){var statearr_29201 = f__28645__auto__.call(null);
(statearr_29201[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28644__auto__);

return statearr_29201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28646__auto__);
});})(c__28644__auto__,jobs,results,process,async))
);

return c__28644__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args29260 = [];
var len__27544__auto___29263 = arguments.length;
var i__27545__auto___29264 = (0);
while(true){
if((i__27545__auto___29264 < len__27544__auto___29263)){
args29260.push((arguments[i__27545__auto___29264]));

var G__29265 = (i__27545__auto___29264 + (1));
i__27545__auto___29264 = G__29265;
continue;
} else {
}
break;
}

var G__29262 = args29260.length;
switch (G__29262) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29260.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args29267 = [];
var len__27544__auto___29270 = arguments.length;
var i__27545__auto___29271 = (0);
while(true){
if((i__27545__auto___29271 < len__27544__auto___29270)){
args29267.push((arguments[i__27545__auto___29271]));

var G__29272 = (i__27545__auto___29271 + (1));
i__27545__auto___29271 = G__29272;
continue;
} else {
}
break;
}

var G__29269 = args29267.length;
switch (G__29269) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29267.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args29274 = [];
var len__27544__auto___29327 = arguments.length;
var i__27545__auto___29328 = (0);
while(true){
if((i__27545__auto___29328 < len__27544__auto___29327)){
args29274.push((arguments[i__27545__auto___29328]));

var G__29329 = (i__27545__auto___29328 + (1));
i__27545__auto___29328 = G__29329;
continue;
} else {
}
break;
}

var G__29276 = args29274.length;
switch (G__29276) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29274.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28644__auto___29331 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28644__auto___29331,tc,fc){
return (function (){
var f__28645__auto__ = (function (){var switch__28579__auto__ = ((function (c__28644__auto___29331,tc,fc){
return (function (state_29302){
var state_val_29303 = (state_29302[(1)]);
if((state_val_29303 === (7))){
var inst_29298 = (state_29302[(2)]);
var state_29302__$1 = state_29302;
var statearr_29304_29332 = state_29302__$1;
(statearr_29304_29332[(2)] = inst_29298);

(statearr_29304_29332[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29303 === (1))){
var state_29302__$1 = state_29302;
var statearr_29305_29333 = state_29302__$1;
(statearr_29305_29333[(2)] = null);

(statearr_29305_29333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29303 === (4))){
var inst_29279 = (state_29302[(7)]);
var inst_29279__$1 = (state_29302[(2)]);
var inst_29280 = (inst_29279__$1 == null);
var state_29302__$1 = (function (){var statearr_29306 = state_29302;
(statearr_29306[(7)] = inst_29279__$1);

return statearr_29306;
})();
if(cljs.core.truth_(inst_29280)){
var statearr_29307_29334 = state_29302__$1;
(statearr_29307_29334[(1)] = (5));

} else {
var statearr_29308_29335 = state_29302__$1;
(statearr_29308_29335[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29303 === (13))){
var state_29302__$1 = state_29302;
var statearr_29309_29336 = state_29302__$1;
(statearr_29309_29336[(2)] = null);

(statearr_29309_29336[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29303 === (6))){
var inst_29279 = (state_29302[(7)]);
var inst_29285 = p.call(null,inst_29279);
var state_29302__$1 = state_29302;
if(cljs.core.truth_(inst_29285)){
var statearr_29310_29337 = state_29302__$1;
(statearr_29310_29337[(1)] = (9));

} else {
var statearr_29311_29338 = state_29302__$1;
(statearr_29311_29338[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29303 === (3))){
var inst_29300 = (state_29302[(2)]);
var state_29302__$1 = state_29302;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29302__$1,inst_29300);
} else {
if((state_val_29303 === (12))){
var state_29302__$1 = state_29302;
var statearr_29312_29339 = state_29302__$1;
(statearr_29312_29339[(2)] = null);

(statearr_29312_29339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29303 === (2))){
var state_29302__$1 = state_29302;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29302__$1,(4),ch);
} else {
if((state_val_29303 === (11))){
var inst_29279 = (state_29302[(7)]);
var inst_29289 = (state_29302[(2)]);
var state_29302__$1 = state_29302;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29302__$1,(8),inst_29289,inst_29279);
} else {
if((state_val_29303 === (9))){
var state_29302__$1 = state_29302;
var statearr_29313_29340 = state_29302__$1;
(statearr_29313_29340[(2)] = tc);

(statearr_29313_29340[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29303 === (5))){
var inst_29282 = cljs.core.async.close_BANG_.call(null,tc);
var inst_29283 = cljs.core.async.close_BANG_.call(null,fc);
var state_29302__$1 = (function (){var statearr_29314 = state_29302;
(statearr_29314[(8)] = inst_29282);

return statearr_29314;
})();
var statearr_29315_29341 = state_29302__$1;
(statearr_29315_29341[(2)] = inst_29283);

(statearr_29315_29341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29303 === (14))){
var inst_29296 = (state_29302[(2)]);
var state_29302__$1 = state_29302;
var statearr_29316_29342 = state_29302__$1;
(statearr_29316_29342[(2)] = inst_29296);

(statearr_29316_29342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29303 === (10))){
var state_29302__$1 = state_29302;
var statearr_29317_29343 = state_29302__$1;
(statearr_29317_29343[(2)] = fc);

(statearr_29317_29343[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29303 === (8))){
var inst_29291 = (state_29302[(2)]);
var state_29302__$1 = state_29302;
if(cljs.core.truth_(inst_29291)){
var statearr_29318_29344 = state_29302__$1;
(statearr_29318_29344[(1)] = (12));

} else {
var statearr_29319_29345 = state_29302__$1;
(statearr_29319_29345[(1)] = (13));

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
});})(c__28644__auto___29331,tc,fc))
;
return ((function (switch__28579__auto__,c__28644__auto___29331,tc,fc){
return (function() {
var cljs$core$async$state_machine__28580__auto__ = null;
var cljs$core$async$state_machine__28580__auto____0 = (function (){
var statearr_29323 = [null,null,null,null,null,null,null,null,null];
(statearr_29323[(0)] = cljs$core$async$state_machine__28580__auto__);

(statearr_29323[(1)] = (1));

return statearr_29323;
});
var cljs$core$async$state_machine__28580__auto____1 = (function (state_29302){
while(true){
var ret_value__28581__auto__ = (function (){try{while(true){
var result__28582__auto__ = switch__28579__auto__.call(null,state_29302);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28582__auto__;
}
break;
}
}catch (e29324){if((e29324 instanceof Object)){
var ex__28583__auto__ = e29324;
var statearr_29325_29346 = state_29302;
(statearr_29325_29346[(5)] = ex__28583__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29302);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29324;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29347 = state_29302;
state_29302 = G__29347;
continue;
} else {
return ret_value__28581__auto__;
}
break;
}
});
cljs$core$async$state_machine__28580__auto__ = function(state_29302){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28580__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28580__auto____1.call(this,state_29302);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28580__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28580__auto____0;
cljs$core$async$state_machine__28580__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28580__auto____1;
return cljs$core$async$state_machine__28580__auto__;
})()
;})(switch__28579__auto__,c__28644__auto___29331,tc,fc))
})();
var state__28646__auto__ = (function (){var statearr_29326 = f__28645__auto__.call(null);
(statearr_29326[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28644__auto___29331);

return statearr_29326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28646__auto__);
});})(c__28644__auto___29331,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__28644__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28644__auto__){
return (function (){
var f__28645__auto__ = (function (){var switch__28579__auto__ = ((function (c__28644__auto__){
return (function (state_29411){
var state_val_29412 = (state_29411[(1)]);
if((state_val_29412 === (7))){
var inst_29407 = (state_29411[(2)]);
var state_29411__$1 = state_29411;
var statearr_29413_29434 = state_29411__$1;
(statearr_29413_29434[(2)] = inst_29407);

(statearr_29413_29434[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29412 === (1))){
var inst_29391 = init;
var state_29411__$1 = (function (){var statearr_29414 = state_29411;
(statearr_29414[(7)] = inst_29391);

return statearr_29414;
})();
var statearr_29415_29435 = state_29411__$1;
(statearr_29415_29435[(2)] = null);

(statearr_29415_29435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29412 === (4))){
var inst_29394 = (state_29411[(8)]);
var inst_29394__$1 = (state_29411[(2)]);
var inst_29395 = (inst_29394__$1 == null);
var state_29411__$1 = (function (){var statearr_29416 = state_29411;
(statearr_29416[(8)] = inst_29394__$1);

return statearr_29416;
})();
if(cljs.core.truth_(inst_29395)){
var statearr_29417_29436 = state_29411__$1;
(statearr_29417_29436[(1)] = (5));

} else {
var statearr_29418_29437 = state_29411__$1;
(statearr_29418_29437[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29412 === (6))){
var inst_29391 = (state_29411[(7)]);
var inst_29398 = (state_29411[(9)]);
var inst_29394 = (state_29411[(8)]);
var inst_29398__$1 = f.call(null,inst_29391,inst_29394);
var inst_29399 = cljs.core.reduced_QMARK_.call(null,inst_29398__$1);
var state_29411__$1 = (function (){var statearr_29419 = state_29411;
(statearr_29419[(9)] = inst_29398__$1);

return statearr_29419;
})();
if(inst_29399){
var statearr_29420_29438 = state_29411__$1;
(statearr_29420_29438[(1)] = (8));

} else {
var statearr_29421_29439 = state_29411__$1;
(statearr_29421_29439[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29412 === (3))){
var inst_29409 = (state_29411[(2)]);
var state_29411__$1 = state_29411;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29411__$1,inst_29409);
} else {
if((state_val_29412 === (2))){
var state_29411__$1 = state_29411;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29411__$1,(4),ch);
} else {
if((state_val_29412 === (9))){
var inst_29398 = (state_29411[(9)]);
var inst_29391 = inst_29398;
var state_29411__$1 = (function (){var statearr_29422 = state_29411;
(statearr_29422[(7)] = inst_29391);

return statearr_29422;
})();
var statearr_29423_29440 = state_29411__$1;
(statearr_29423_29440[(2)] = null);

(statearr_29423_29440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29412 === (5))){
var inst_29391 = (state_29411[(7)]);
var state_29411__$1 = state_29411;
var statearr_29424_29441 = state_29411__$1;
(statearr_29424_29441[(2)] = inst_29391);

(statearr_29424_29441[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29412 === (10))){
var inst_29405 = (state_29411[(2)]);
var state_29411__$1 = state_29411;
var statearr_29425_29442 = state_29411__$1;
(statearr_29425_29442[(2)] = inst_29405);

(statearr_29425_29442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29412 === (8))){
var inst_29398 = (state_29411[(9)]);
var inst_29401 = cljs.core.deref.call(null,inst_29398);
var state_29411__$1 = state_29411;
var statearr_29426_29443 = state_29411__$1;
(statearr_29426_29443[(2)] = inst_29401);

(statearr_29426_29443[(1)] = (10));


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
});})(c__28644__auto__))
;
return ((function (switch__28579__auto__,c__28644__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28580__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28580__auto____0 = (function (){
var statearr_29430 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29430[(0)] = cljs$core$async$reduce_$_state_machine__28580__auto__);

(statearr_29430[(1)] = (1));

return statearr_29430;
});
var cljs$core$async$reduce_$_state_machine__28580__auto____1 = (function (state_29411){
while(true){
var ret_value__28581__auto__ = (function (){try{while(true){
var result__28582__auto__ = switch__28579__auto__.call(null,state_29411);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28582__auto__;
}
break;
}
}catch (e29431){if((e29431 instanceof Object)){
var ex__28583__auto__ = e29431;
var statearr_29432_29444 = state_29411;
(statearr_29432_29444[(5)] = ex__28583__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29411);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29431;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29445 = state_29411;
state_29411 = G__29445;
continue;
} else {
return ret_value__28581__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28580__auto__ = function(state_29411){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28580__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28580__auto____1.call(this,state_29411);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__28580__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28580__auto____0;
cljs$core$async$reduce_$_state_machine__28580__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28580__auto____1;
return cljs$core$async$reduce_$_state_machine__28580__auto__;
})()
;})(switch__28579__auto__,c__28644__auto__))
})();
var state__28646__auto__ = (function (){var statearr_29433 = f__28645__auto__.call(null);
(statearr_29433[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28644__auto__);

return statearr_29433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28646__auto__);
});})(c__28644__auto__))
);

return c__28644__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__28644__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28644__auto__,f__$1){
return (function (){
var f__28645__auto__ = (function (){var switch__28579__auto__ = ((function (c__28644__auto__,f__$1){
return (function (state_29465){
var state_val_29466 = (state_29465[(1)]);
if((state_val_29466 === (1))){
var inst_29460 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_29465__$1 = state_29465;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29465__$1,(2),inst_29460);
} else {
if((state_val_29466 === (2))){
var inst_29462 = (state_29465[(2)]);
var inst_29463 = f__$1.call(null,inst_29462);
var state_29465__$1 = state_29465;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29465__$1,inst_29463);
} else {
return null;
}
}
});})(c__28644__auto__,f__$1))
;
return ((function (switch__28579__auto__,c__28644__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__28580__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28580__auto____0 = (function (){
var statearr_29470 = [null,null,null,null,null,null,null];
(statearr_29470[(0)] = cljs$core$async$transduce_$_state_machine__28580__auto__);

(statearr_29470[(1)] = (1));

return statearr_29470;
});
var cljs$core$async$transduce_$_state_machine__28580__auto____1 = (function (state_29465){
while(true){
var ret_value__28581__auto__ = (function (){try{while(true){
var result__28582__auto__ = switch__28579__auto__.call(null,state_29465);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28582__auto__;
}
break;
}
}catch (e29471){if((e29471 instanceof Object)){
var ex__28583__auto__ = e29471;
var statearr_29472_29474 = state_29465;
(statearr_29472_29474[(5)] = ex__28583__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29465);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29471;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29475 = state_29465;
state_29465 = G__29475;
continue;
} else {
return ret_value__28581__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28580__auto__ = function(state_29465){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28580__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28580__auto____1.call(this,state_29465);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__28580__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28580__auto____0;
cljs$core$async$transduce_$_state_machine__28580__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28580__auto____1;
return cljs$core$async$transduce_$_state_machine__28580__auto__;
})()
;})(switch__28579__auto__,c__28644__auto__,f__$1))
})();
var state__28646__auto__ = (function (){var statearr_29473 = f__28645__auto__.call(null);
(statearr_29473[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28644__auto__);

return statearr_29473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28646__auto__);
});})(c__28644__auto__,f__$1))
);

return c__28644__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args29476 = [];
var len__27544__auto___29528 = arguments.length;
var i__27545__auto___29529 = (0);
while(true){
if((i__27545__auto___29529 < len__27544__auto___29528)){
args29476.push((arguments[i__27545__auto___29529]));

var G__29530 = (i__27545__auto___29529 + (1));
i__27545__auto___29529 = G__29530;
continue;
} else {
}
break;
}

var G__29478 = args29476.length;
switch (G__29478) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29476.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28644__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28644__auto__){
return (function (){
var f__28645__auto__ = (function (){var switch__28579__auto__ = ((function (c__28644__auto__){
return (function (state_29503){
var state_val_29504 = (state_29503[(1)]);
if((state_val_29504 === (7))){
var inst_29485 = (state_29503[(2)]);
var state_29503__$1 = state_29503;
var statearr_29505_29532 = state_29503__$1;
(statearr_29505_29532[(2)] = inst_29485);

(statearr_29505_29532[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29504 === (1))){
var inst_29479 = cljs.core.seq.call(null,coll);
var inst_29480 = inst_29479;
var state_29503__$1 = (function (){var statearr_29506 = state_29503;
(statearr_29506[(7)] = inst_29480);

return statearr_29506;
})();
var statearr_29507_29533 = state_29503__$1;
(statearr_29507_29533[(2)] = null);

(statearr_29507_29533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29504 === (4))){
var inst_29480 = (state_29503[(7)]);
var inst_29483 = cljs.core.first.call(null,inst_29480);
var state_29503__$1 = state_29503;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29503__$1,(7),ch,inst_29483);
} else {
if((state_val_29504 === (13))){
var inst_29497 = (state_29503[(2)]);
var state_29503__$1 = state_29503;
var statearr_29508_29534 = state_29503__$1;
(statearr_29508_29534[(2)] = inst_29497);

(statearr_29508_29534[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29504 === (6))){
var inst_29488 = (state_29503[(2)]);
var state_29503__$1 = state_29503;
if(cljs.core.truth_(inst_29488)){
var statearr_29509_29535 = state_29503__$1;
(statearr_29509_29535[(1)] = (8));

} else {
var statearr_29510_29536 = state_29503__$1;
(statearr_29510_29536[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29504 === (3))){
var inst_29501 = (state_29503[(2)]);
var state_29503__$1 = state_29503;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29503__$1,inst_29501);
} else {
if((state_val_29504 === (12))){
var state_29503__$1 = state_29503;
var statearr_29511_29537 = state_29503__$1;
(statearr_29511_29537[(2)] = null);

(statearr_29511_29537[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29504 === (2))){
var inst_29480 = (state_29503[(7)]);
var state_29503__$1 = state_29503;
if(cljs.core.truth_(inst_29480)){
var statearr_29512_29538 = state_29503__$1;
(statearr_29512_29538[(1)] = (4));

} else {
var statearr_29513_29539 = state_29503__$1;
(statearr_29513_29539[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29504 === (11))){
var inst_29494 = cljs.core.async.close_BANG_.call(null,ch);
var state_29503__$1 = state_29503;
var statearr_29514_29540 = state_29503__$1;
(statearr_29514_29540[(2)] = inst_29494);

(statearr_29514_29540[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29504 === (9))){
var state_29503__$1 = state_29503;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29515_29541 = state_29503__$1;
(statearr_29515_29541[(1)] = (11));

} else {
var statearr_29516_29542 = state_29503__$1;
(statearr_29516_29542[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29504 === (5))){
var inst_29480 = (state_29503[(7)]);
var state_29503__$1 = state_29503;
var statearr_29517_29543 = state_29503__$1;
(statearr_29517_29543[(2)] = inst_29480);

(statearr_29517_29543[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29504 === (10))){
var inst_29499 = (state_29503[(2)]);
var state_29503__$1 = state_29503;
var statearr_29518_29544 = state_29503__$1;
(statearr_29518_29544[(2)] = inst_29499);

(statearr_29518_29544[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29504 === (8))){
var inst_29480 = (state_29503[(7)]);
var inst_29490 = cljs.core.next.call(null,inst_29480);
var inst_29480__$1 = inst_29490;
var state_29503__$1 = (function (){var statearr_29519 = state_29503;
(statearr_29519[(7)] = inst_29480__$1);

return statearr_29519;
})();
var statearr_29520_29545 = state_29503__$1;
(statearr_29520_29545[(2)] = null);

(statearr_29520_29545[(1)] = (2));


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
});})(c__28644__auto__))
;
return ((function (switch__28579__auto__,c__28644__auto__){
return (function() {
var cljs$core$async$state_machine__28580__auto__ = null;
var cljs$core$async$state_machine__28580__auto____0 = (function (){
var statearr_29524 = [null,null,null,null,null,null,null,null];
(statearr_29524[(0)] = cljs$core$async$state_machine__28580__auto__);

(statearr_29524[(1)] = (1));

return statearr_29524;
});
var cljs$core$async$state_machine__28580__auto____1 = (function (state_29503){
while(true){
var ret_value__28581__auto__ = (function (){try{while(true){
var result__28582__auto__ = switch__28579__auto__.call(null,state_29503);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28582__auto__;
}
break;
}
}catch (e29525){if((e29525 instanceof Object)){
var ex__28583__auto__ = e29525;
var statearr_29526_29546 = state_29503;
(statearr_29526_29546[(5)] = ex__28583__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29525;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29547 = state_29503;
state_29503 = G__29547;
continue;
} else {
return ret_value__28581__auto__;
}
break;
}
});
cljs$core$async$state_machine__28580__auto__ = function(state_29503){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28580__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28580__auto____1.call(this,state_29503);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28580__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28580__auto____0;
cljs$core$async$state_machine__28580__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28580__auto____1;
return cljs$core$async$state_machine__28580__auto__;
})()
;})(switch__28579__auto__,c__28644__auto__))
})();
var state__28646__auto__ = (function (){var statearr_29527 = f__28645__auto__.call(null);
(statearr_29527[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28644__auto__);

return statearr_29527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28646__auto__);
});})(c__28644__auto__))
);

return c__28644__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__27099__auto__ = (((_ == null))?null:_);
var m__27100__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__27099__auto__)]);
if(!((m__27100__auto__ == null))){
return m__27100__auto__.call(null,_);
} else {
var m__27100__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__27100__auto____$1 == null))){
return m__27100__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__27099__auto__ = (((m == null))?null:m);
var m__27100__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__27099__auto__)]);
if(!((m__27100__auto__ == null))){
return m__27100__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__27100__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__27100__auto____$1 == null))){
return m__27100__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__27099__auto__ = (((m == null))?null:m);
var m__27100__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__27099__auto__)]);
if(!((m__27100__auto__ == null))){
return m__27100__auto__.call(null,m,ch);
} else {
var m__27100__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__27100__auto____$1 == null))){
return m__27100__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__27099__auto__ = (((m == null))?null:m);
var m__27100__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__27099__auto__)]);
if(!((m__27100__auto__ == null))){
return m__27100__auto__.call(null,m);
} else {
var m__27100__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__27100__auto____$1 == null))){
return m__27100__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async29773 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29773 = (function (ch,cs,meta29774){
this.ch = ch;
this.cs = cs;
this.meta29774 = meta29774;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29773.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29775,meta29774__$1){
var self__ = this;
var _29775__$1 = this;
return (new cljs.core.async.t_cljs$core$async29773(self__.ch,self__.cs,meta29774__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async29773.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29775){
var self__ = this;
var _29775__$1 = this;
return self__.meta29774;
});})(cs))
;

cljs.core.async.t_cljs$core$async29773.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29773.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async29773.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29773.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29773.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29773.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29773.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29774","meta29774",61022364,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async29773.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29773.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29773";

cljs.core.async.t_cljs$core$async29773.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__27042__auto__,writer__27043__auto__,opt__27044__auto__){
return cljs.core._write.call(null,writer__27043__auto__,"cljs.core.async/t_cljs$core$async29773");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async29773 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async29773(ch__$1,cs__$1,meta29774){
return (new cljs.core.async.t_cljs$core$async29773(ch__$1,cs__$1,meta29774));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async29773(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__28644__auto___29998 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28644__auto___29998,cs,m,dchan,dctr,done){
return (function (){
var f__28645__auto__ = (function (){var switch__28579__auto__ = ((function (c__28644__auto___29998,cs,m,dchan,dctr,done){
return (function (state_29910){
var state_val_29911 = (state_29910[(1)]);
if((state_val_29911 === (7))){
var inst_29906 = (state_29910[(2)]);
var state_29910__$1 = state_29910;
var statearr_29912_29999 = state_29910__$1;
(statearr_29912_29999[(2)] = inst_29906);

(statearr_29912_29999[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (20))){
var inst_29809 = (state_29910[(7)]);
var inst_29821 = cljs.core.first.call(null,inst_29809);
var inst_29822 = cljs.core.nth.call(null,inst_29821,(0),null);
var inst_29823 = cljs.core.nth.call(null,inst_29821,(1),null);
var state_29910__$1 = (function (){var statearr_29913 = state_29910;
(statearr_29913[(8)] = inst_29822);

return statearr_29913;
})();
if(cljs.core.truth_(inst_29823)){
var statearr_29914_30000 = state_29910__$1;
(statearr_29914_30000[(1)] = (22));

} else {
var statearr_29915_30001 = state_29910__$1;
(statearr_29915_30001[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (27))){
var inst_29858 = (state_29910[(9)]);
var inst_29778 = (state_29910[(10)]);
var inst_29851 = (state_29910[(11)]);
var inst_29853 = (state_29910[(12)]);
var inst_29858__$1 = cljs.core._nth.call(null,inst_29851,inst_29853);
var inst_29859 = cljs.core.async.put_BANG_.call(null,inst_29858__$1,inst_29778,done);
var state_29910__$1 = (function (){var statearr_29916 = state_29910;
(statearr_29916[(9)] = inst_29858__$1);

return statearr_29916;
})();
if(cljs.core.truth_(inst_29859)){
var statearr_29917_30002 = state_29910__$1;
(statearr_29917_30002[(1)] = (30));

} else {
var statearr_29918_30003 = state_29910__$1;
(statearr_29918_30003[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (1))){
var state_29910__$1 = state_29910;
var statearr_29919_30004 = state_29910__$1;
(statearr_29919_30004[(2)] = null);

(statearr_29919_30004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (24))){
var inst_29809 = (state_29910[(7)]);
var inst_29828 = (state_29910[(2)]);
var inst_29829 = cljs.core.next.call(null,inst_29809);
var inst_29787 = inst_29829;
var inst_29788 = null;
var inst_29789 = (0);
var inst_29790 = (0);
var state_29910__$1 = (function (){var statearr_29920 = state_29910;
(statearr_29920[(13)] = inst_29790);

(statearr_29920[(14)] = inst_29788);

(statearr_29920[(15)] = inst_29789);

(statearr_29920[(16)] = inst_29787);

(statearr_29920[(17)] = inst_29828);

return statearr_29920;
})();
var statearr_29921_30005 = state_29910__$1;
(statearr_29921_30005[(2)] = null);

(statearr_29921_30005[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (39))){
var state_29910__$1 = state_29910;
var statearr_29925_30006 = state_29910__$1;
(statearr_29925_30006[(2)] = null);

(statearr_29925_30006[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (4))){
var inst_29778 = (state_29910[(10)]);
var inst_29778__$1 = (state_29910[(2)]);
var inst_29779 = (inst_29778__$1 == null);
var state_29910__$1 = (function (){var statearr_29926 = state_29910;
(statearr_29926[(10)] = inst_29778__$1);

return statearr_29926;
})();
if(cljs.core.truth_(inst_29779)){
var statearr_29927_30007 = state_29910__$1;
(statearr_29927_30007[(1)] = (5));

} else {
var statearr_29928_30008 = state_29910__$1;
(statearr_29928_30008[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (15))){
var inst_29790 = (state_29910[(13)]);
var inst_29788 = (state_29910[(14)]);
var inst_29789 = (state_29910[(15)]);
var inst_29787 = (state_29910[(16)]);
var inst_29805 = (state_29910[(2)]);
var inst_29806 = (inst_29790 + (1));
var tmp29922 = inst_29788;
var tmp29923 = inst_29789;
var tmp29924 = inst_29787;
var inst_29787__$1 = tmp29924;
var inst_29788__$1 = tmp29922;
var inst_29789__$1 = tmp29923;
var inst_29790__$1 = inst_29806;
var state_29910__$1 = (function (){var statearr_29929 = state_29910;
(statearr_29929[(18)] = inst_29805);

(statearr_29929[(13)] = inst_29790__$1);

(statearr_29929[(14)] = inst_29788__$1);

(statearr_29929[(15)] = inst_29789__$1);

(statearr_29929[(16)] = inst_29787__$1);

return statearr_29929;
})();
var statearr_29930_30009 = state_29910__$1;
(statearr_29930_30009[(2)] = null);

(statearr_29930_30009[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (21))){
var inst_29832 = (state_29910[(2)]);
var state_29910__$1 = state_29910;
var statearr_29934_30010 = state_29910__$1;
(statearr_29934_30010[(2)] = inst_29832);

(statearr_29934_30010[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (31))){
var inst_29858 = (state_29910[(9)]);
var inst_29862 = done.call(null,null);
var inst_29863 = cljs.core.async.untap_STAR_.call(null,m,inst_29858);
var state_29910__$1 = (function (){var statearr_29935 = state_29910;
(statearr_29935[(19)] = inst_29862);

return statearr_29935;
})();
var statearr_29936_30011 = state_29910__$1;
(statearr_29936_30011[(2)] = inst_29863);

(statearr_29936_30011[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (32))){
var inst_29850 = (state_29910[(20)]);
var inst_29851 = (state_29910[(11)]);
var inst_29852 = (state_29910[(21)]);
var inst_29853 = (state_29910[(12)]);
var inst_29865 = (state_29910[(2)]);
var inst_29866 = (inst_29853 + (1));
var tmp29931 = inst_29850;
var tmp29932 = inst_29851;
var tmp29933 = inst_29852;
var inst_29850__$1 = tmp29931;
var inst_29851__$1 = tmp29932;
var inst_29852__$1 = tmp29933;
var inst_29853__$1 = inst_29866;
var state_29910__$1 = (function (){var statearr_29937 = state_29910;
(statearr_29937[(20)] = inst_29850__$1);

(statearr_29937[(11)] = inst_29851__$1);

(statearr_29937[(21)] = inst_29852__$1);

(statearr_29937[(12)] = inst_29853__$1);

(statearr_29937[(22)] = inst_29865);

return statearr_29937;
})();
var statearr_29938_30012 = state_29910__$1;
(statearr_29938_30012[(2)] = null);

(statearr_29938_30012[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (40))){
var inst_29878 = (state_29910[(23)]);
var inst_29882 = done.call(null,null);
var inst_29883 = cljs.core.async.untap_STAR_.call(null,m,inst_29878);
var state_29910__$1 = (function (){var statearr_29939 = state_29910;
(statearr_29939[(24)] = inst_29882);

return statearr_29939;
})();
var statearr_29940_30013 = state_29910__$1;
(statearr_29940_30013[(2)] = inst_29883);

(statearr_29940_30013[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (33))){
var inst_29869 = (state_29910[(25)]);
var inst_29871 = cljs.core.chunked_seq_QMARK_.call(null,inst_29869);
var state_29910__$1 = state_29910;
if(inst_29871){
var statearr_29941_30014 = state_29910__$1;
(statearr_29941_30014[(1)] = (36));

} else {
var statearr_29942_30015 = state_29910__$1;
(statearr_29942_30015[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (13))){
var inst_29799 = (state_29910[(26)]);
var inst_29802 = cljs.core.async.close_BANG_.call(null,inst_29799);
var state_29910__$1 = state_29910;
var statearr_29943_30016 = state_29910__$1;
(statearr_29943_30016[(2)] = inst_29802);

(statearr_29943_30016[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (22))){
var inst_29822 = (state_29910[(8)]);
var inst_29825 = cljs.core.async.close_BANG_.call(null,inst_29822);
var state_29910__$1 = state_29910;
var statearr_29944_30017 = state_29910__$1;
(statearr_29944_30017[(2)] = inst_29825);

(statearr_29944_30017[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (36))){
var inst_29869 = (state_29910[(25)]);
var inst_29873 = cljs.core.chunk_first.call(null,inst_29869);
var inst_29874 = cljs.core.chunk_rest.call(null,inst_29869);
var inst_29875 = cljs.core.count.call(null,inst_29873);
var inst_29850 = inst_29874;
var inst_29851 = inst_29873;
var inst_29852 = inst_29875;
var inst_29853 = (0);
var state_29910__$1 = (function (){var statearr_29945 = state_29910;
(statearr_29945[(20)] = inst_29850);

(statearr_29945[(11)] = inst_29851);

(statearr_29945[(21)] = inst_29852);

(statearr_29945[(12)] = inst_29853);

return statearr_29945;
})();
var statearr_29946_30018 = state_29910__$1;
(statearr_29946_30018[(2)] = null);

(statearr_29946_30018[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (41))){
var inst_29869 = (state_29910[(25)]);
var inst_29885 = (state_29910[(2)]);
var inst_29886 = cljs.core.next.call(null,inst_29869);
var inst_29850 = inst_29886;
var inst_29851 = null;
var inst_29852 = (0);
var inst_29853 = (0);
var state_29910__$1 = (function (){var statearr_29947 = state_29910;
(statearr_29947[(20)] = inst_29850);

(statearr_29947[(11)] = inst_29851);

(statearr_29947[(27)] = inst_29885);

(statearr_29947[(21)] = inst_29852);

(statearr_29947[(12)] = inst_29853);

return statearr_29947;
})();
var statearr_29948_30019 = state_29910__$1;
(statearr_29948_30019[(2)] = null);

(statearr_29948_30019[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (43))){
var state_29910__$1 = state_29910;
var statearr_29949_30020 = state_29910__$1;
(statearr_29949_30020[(2)] = null);

(statearr_29949_30020[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (29))){
var inst_29894 = (state_29910[(2)]);
var state_29910__$1 = state_29910;
var statearr_29950_30021 = state_29910__$1;
(statearr_29950_30021[(2)] = inst_29894);

(statearr_29950_30021[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (44))){
var inst_29903 = (state_29910[(2)]);
var state_29910__$1 = (function (){var statearr_29951 = state_29910;
(statearr_29951[(28)] = inst_29903);

return statearr_29951;
})();
var statearr_29952_30022 = state_29910__$1;
(statearr_29952_30022[(2)] = null);

(statearr_29952_30022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (6))){
var inst_29842 = (state_29910[(29)]);
var inst_29841 = cljs.core.deref.call(null,cs);
var inst_29842__$1 = cljs.core.keys.call(null,inst_29841);
var inst_29843 = cljs.core.count.call(null,inst_29842__$1);
var inst_29844 = cljs.core.reset_BANG_.call(null,dctr,inst_29843);
var inst_29849 = cljs.core.seq.call(null,inst_29842__$1);
var inst_29850 = inst_29849;
var inst_29851 = null;
var inst_29852 = (0);
var inst_29853 = (0);
var state_29910__$1 = (function (){var statearr_29953 = state_29910;
(statearr_29953[(20)] = inst_29850);

(statearr_29953[(11)] = inst_29851);

(statearr_29953[(30)] = inst_29844);

(statearr_29953[(29)] = inst_29842__$1);

(statearr_29953[(21)] = inst_29852);

(statearr_29953[(12)] = inst_29853);

return statearr_29953;
})();
var statearr_29954_30023 = state_29910__$1;
(statearr_29954_30023[(2)] = null);

(statearr_29954_30023[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (28))){
var inst_29850 = (state_29910[(20)]);
var inst_29869 = (state_29910[(25)]);
var inst_29869__$1 = cljs.core.seq.call(null,inst_29850);
var state_29910__$1 = (function (){var statearr_29955 = state_29910;
(statearr_29955[(25)] = inst_29869__$1);

return statearr_29955;
})();
if(inst_29869__$1){
var statearr_29956_30024 = state_29910__$1;
(statearr_29956_30024[(1)] = (33));

} else {
var statearr_29957_30025 = state_29910__$1;
(statearr_29957_30025[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (25))){
var inst_29852 = (state_29910[(21)]);
var inst_29853 = (state_29910[(12)]);
var inst_29855 = (inst_29853 < inst_29852);
var inst_29856 = inst_29855;
var state_29910__$1 = state_29910;
if(cljs.core.truth_(inst_29856)){
var statearr_29958_30026 = state_29910__$1;
(statearr_29958_30026[(1)] = (27));

} else {
var statearr_29959_30027 = state_29910__$1;
(statearr_29959_30027[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (34))){
var state_29910__$1 = state_29910;
var statearr_29960_30028 = state_29910__$1;
(statearr_29960_30028[(2)] = null);

(statearr_29960_30028[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (17))){
var state_29910__$1 = state_29910;
var statearr_29961_30029 = state_29910__$1;
(statearr_29961_30029[(2)] = null);

(statearr_29961_30029[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (3))){
var inst_29908 = (state_29910[(2)]);
var state_29910__$1 = state_29910;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29910__$1,inst_29908);
} else {
if((state_val_29911 === (12))){
var inst_29837 = (state_29910[(2)]);
var state_29910__$1 = state_29910;
var statearr_29962_30030 = state_29910__$1;
(statearr_29962_30030[(2)] = inst_29837);

(statearr_29962_30030[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (2))){
var state_29910__$1 = state_29910;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29910__$1,(4),ch);
} else {
if((state_val_29911 === (23))){
var state_29910__$1 = state_29910;
var statearr_29963_30031 = state_29910__$1;
(statearr_29963_30031[(2)] = null);

(statearr_29963_30031[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (35))){
var inst_29892 = (state_29910[(2)]);
var state_29910__$1 = state_29910;
var statearr_29964_30032 = state_29910__$1;
(statearr_29964_30032[(2)] = inst_29892);

(statearr_29964_30032[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (19))){
var inst_29809 = (state_29910[(7)]);
var inst_29813 = cljs.core.chunk_first.call(null,inst_29809);
var inst_29814 = cljs.core.chunk_rest.call(null,inst_29809);
var inst_29815 = cljs.core.count.call(null,inst_29813);
var inst_29787 = inst_29814;
var inst_29788 = inst_29813;
var inst_29789 = inst_29815;
var inst_29790 = (0);
var state_29910__$1 = (function (){var statearr_29965 = state_29910;
(statearr_29965[(13)] = inst_29790);

(statearr_29965[(14)] = inst_29788);

(statearr_29965[(15)] = inst_29789);

(statearr_29965[(16)] = inst_29787);

return statearr_29965;
})();
var statearr_29966_30033 = state_29910__$1;
(statearr_29966_30033[(2)] = null);

(statearr_29966_30033[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (11))){
var inst_29809 = (state_29910[(7)]);
var inst_29787 = (state_29910[(16)]);
var inst_29809__$1 = cljs.core.seq.call(null,inst_29787);
var state_29910__$1 = (function (){var statearr_29967 = state_29910;
(statearr_29967[(7)] = inst_29809__$1);

return statearr_29967;
})();
if(inst_29809__$1){
var statearr_29968_30034 = state_29910__$1;
(statearr_29968_30034[(1)] = (16));

} else {
var statearr_29969_30035 = state_29910__$1;
(statearr_29969_30035[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (9))){
var inst_29839 = (state_29910[(2)]);
var state_29910__$1 = state_29910;
var statearr_29970_30036 = state_29910__$1;
(statearr_29970_30036[(2)] = inst_29839);

(statearr_29970_30036[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (5))){
var inst_29785 = cljs.core.deref.call(null,cs);
var inst_29786 = cljs.core.seq.call(null,inst_29785);
var inst_29787 = inst_29786;
var inst_29788 = null;
var inst_29789 = (0);
var inst_29790 = (0);
var state_29910__$1 = (function (){var statearr_29971 = state_29910;
(statearr_29971[(13)] = inst_29790);

(statearr_29971[(14)] = inst_29788);

(statearr_29971[(15)] = inst_29789);

(statearr_29971[(16)] = inst_29787);

return statearr_29971;
})();
var statearr_29972_30037 = state_29910__$1;
(statearr_29972_30037[(2)] = null);

(statearr_29972_30037[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (14))){
var state_29910__$1 = state_29910;
var statearr_29973_30038 = state_29910__$1;
(statearr_29973_30038[(2)] = null);

(statearr_29973_30038[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (45))){
var inst_29900 = (state_29910[(2)]);
var state_29910__$1 = state_29910;
var statearr_29974_30039 = state_29910__$1;
(statearr_29974_30039[(2)] = inst_29900);

(statearr_29974_30039[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (26))){
var inst_29842 = (state_29910[(29)]);
var inst_29896 = (state_29910[(2)]);
var inst_29897 = cljs.core.seq.call(null,inst_29842);
var state_29910__$1 = (function (){var statearr_29975 = state_29910;
(statearr_29975[(31)] = inst_29896);

return statearr_29975;
})();
if(inst_29897){
var statearr_29976_30040 = state_29910__$1;
(statearr_29976_30040[(1)] = (42));

} else {
var statearr_29977_30041 = state_29910__$1;
(statearr_29977_30041[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (16))){
var inst_29809 = (state_29910[(7)]);
var inst_29811 = cljs.core.chunked_seq_QMARK_.call(null,inst_29809);
var state_29910__$1 = state_29910;
if(inst_29811){
var statearr_29978_30042 = state_29910__$1;
(statearr_29978_30042[(1)] = (19));

} else {
var statearr_29979_30043 = state_29910__$1;
(statearr_29979_30043[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (38))){
var inst_29889 = (state_29910[(2)]);
var state_29910__$1 = state_29910;
var statearr_29980_30044 = state_29910__$1;
(statearr_29980_30044[(2)] = inst_29889);

(statearr_29980_30044[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (30))){
var state_29910__$1 = state_29910;
var statearr_29981_30045 = state_29910__$1;
(statearr_29981_30045[(2)] = null);

(statearr_29981_30045[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (10))){
var inst_29790 = (state_29910[(13)]);
var inst_29788 = (state_29910[(14)]);
var inst_29798 = cljs.core._nth.call(null,inst_29788,inst_29790);
var inst_29799 = cljs.core.nth.call(null,inst_29798,(0),null);
var inst_29800 = cljs.core.nth.call(null,inst_29798,(1),null);
var state_29910__$1 = (function (){var statearr_29982 = state_29910;
(statearr_29982[(26)] = inst_29799);

return statearr_29982;
})();
if(cljs.core.truth_(inst_29800)){
var statearr_29983_30046 = state_29910__$1;
(statearr_29983_30046[(1)] = (13));

} else {
var statearr_29984_30047 = state_29910__$1;
(statearr_29984_30047[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (18))){
var inst_29835 = (state_29910[(2)]);
var state_29910__$1 = state_29910;
var statearr_29985_30048 = state_29910__$1;
(statearr_29985_30048[(2)] = inst_29835);

(statearr_29985_30048[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (42))){
var state_29910__$1 = state_29910;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29910__$1,(45),dchan);
} else {
if((state_val_29911 === (37))){
var inst_29869 = (state_29910[(25)]);
var inst_29778 = (state_29910[(10)]);
var inst_29878 = (state_29910[(23)]);
var inst_29878__$1 = cljs.core.first.call(null,inst_29869);
var inst_29879 = cljs.core.async.put_BANG_.call(null,inst_29878__$1,inst_29778,done);
var state_29910__$1 = (function (){var statearr_29986 = state_29910;
(statearr_29986[(23)] = inst_29878__$1);

return statearr_29986;
})();
if(cljs.core.truth_(inst_29879)){
var statearr_29987_30049 = state_29910__$1;
(statearr_29987_30049[(1)] = (39));

} else {
var statearr_29988_30050 = state_29910__$1;
(statearr_29988_30050[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (8))){
var inst_29790 = (state_29910[(13)]);
var inst_29789 = (state_29910[(15)]);
var inst_29792 = (inst_29790 < inst_29789);
var inst_29793 = inst_29792;
var state_29910__$1 = state_29910;
if(cljs.core.truth_(inst_29793)){
var statearr_29989_30051 = state_29910__$1;
(statearr_29989_30051[(1)] = (10));

} else {
var statearr_29990_30052 = state_29910__$1;
(statearr_29990_30052[(1)] = (11));

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
});})(c__28644__auto___29998,cs,m,dchan,dctr,done))
;
return ((function (switch__28579__auto__,c__28644__auto___29998,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28580__auto__ = null;
var cljs$core$async$mult_$_state_machine__28580__auto____0 = (function (){
var statearr_29994 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29994[(0)] = cljs$core$async$mult_$_state_machine__28580__auto__);

(statearr_29994[(1)] = (1));

return statearr_29994;
});
var cljs$core$async$mult_$_state_machine__28580__auto____1 = (function (state_29910){
while(true){
var ret_value__28581__auto__ = (function (){try{while(true){
var result__28582__auto__ = switch__28579__auto__.call(null,state_29910);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28582__auto__;
}
break;
}
}catch (e29995){if((e29995 instanceof Object)){
var ex__28583__auto__ = e29995;
var statearr_29996_30053 = state_29910;
(statearr_29996_30053[(5)] = ex__28583__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29910);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29995;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30054 = state_29910;
state_29910 = G__30054;
continue;
} else {
return ret_value__28581__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28580__auto__ = function(state_29910){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28580__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28580__auto____1.call(this,state_29910);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__28580__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28580__auto____0;
cljs$core$async$mult_$_state_machine__28580__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28580__auto____1;
return cljs$core$async$mult_$_state_machine__28580__auto__;
})()
;})(switch__28579__auto__,c__28644__auto___29998,cs,m,dchan,dctr,done))
})();
var state__28646__auto__ = (function (){var statearr_29997 = f__28645__auto__.call(null);
(statearr_29997[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28644__auto___29998);

return statearr_29997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28646__auto__);
});})(c__28644__auto___29998,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args30055 = [];
var len__27544__auto___30058 = arguments.length;
var i__27545__auto___30059 = (0);
while(true){
if((i__27545__auto___30059 < len__27544__auto___30058)){
args30055.push((arguments[i__27545__auto___30059]));

var G__30060 = (i__27545__auto___30059 + (1));
i__27545__auto___30059 = G__30060;
continue;
} else {
}
break;
}

var G__30057 = args30055.length;
switch (G__30057) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30055.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__27099__auto__ = (((m == null))?null:m);
var m__27100__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__27099__auto__)]);
if(!((m__27100__auto__ == null))){
return m__27100__auto__.call(null,m,ch);
} else {
var m__27100__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__27100__auto____$1 == null))){
return m__27100__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__27099__auto__ = (((m == null))?null:m);
var m__27100__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__27099__auto__)]);
if(!((m__27100__auto__ == null))){
return m__27100__auto__.call(null,m,ch);
} else {
var m__27100__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__27100__auto____$1 == null))){
return m__27100__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__27099__auto__ = (((m == null))?null:m);
var m__27100__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__27099__auto__)]);
if(!((m__27100__auto__ == null))){
return m__27100__auto__.call(null,m);
} else {
var m__27100__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__27100__auto____$1 == null))){
return m__27100__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__27099__auto__ = (((m == null))?null:m);
var m__27100__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__27099__auto__)]);
if(!((m__27100__auto__ == null))){
return m__27100__auto__.call(null,m,state_map);
} else {
var m__27100__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__27100__auto____$1 == null))){
return m__27100__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__27099__auto__ = (((m == null))?null:m);
var m__27100__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__27099__auto__)]);
if(!((m__27100__auto__ == null))){
return m__27100__auto__.call(null,m,mode);
} else {
var m__27100__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__27100__auto____$1 == null))){
return m__27100__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__27551__auto__ = [];
var len__27544__auto___30072 = arguments.length;
var i__27545__auto___30073 = (0);
while(true){
if((i__27545__auto___30073 < len__27544__auto___30072)){
args__27551__auto__.push((arguments[i__27545__auto___30073]));

var G__30074 = (i__27545__auto___30073 + (1));
i__27545__auto___30073 = G__30074;
continue;
} else {
}
break;
}

var argseq__27552__auto__ = ((((3) < args__27551__auto__.length))?(new cljs.core.IndexedSeq(args__27551__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__27552__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30066){
var map__30067 = p__30066;
var map__30067__$1 = ((((!((map__30067 == null)))?((((map__30067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30067.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30067):map__30067);
var opts = map__30067__$1;
var statearr_30069_30075 = state;
(statearr_30069_30075[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__30067,map__30067__$1,opts){
return (function (val){
var statearr_30070_30076 = state;
(statearr_30070_30076[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__30067,map__30067__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_30071_30077 = state;
(statearr_30071_30077[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30062){
var G__30063 = cljs.core.first.call(null,seq30062);
var seq30062__$1 = cljs.core.next.call(null,seq30062);
var G__30064 = cljs.core.first.call(null,seq30062__$1);
var seq30062__$2 = cljs.core.next.call(null,seq30062__$1);
var G__30065 = cljs.core.first.call(null,seq30062__$2);
var seq30062__$3 = cljs.core.next.call(null,seq30062__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30063,G__30064,G__30065,seq30062__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async30245 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30245 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta30246){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta30246 = meta30246;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30245.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30247,meta30246__$1){
var self__ = this;
var _30247__$1 = this;
return (new cljs.core.async.t_cljs$core$async30245(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta30246__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30245.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30247){
var self__ = this;
var _30247__$1 = this;
return self__.meta30246;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30245.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30245.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30245.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30245.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30245.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30245.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30245.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30245.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30245.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta30246","meta30246",-2045544023,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30245.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30245.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30245";

cljs.core.async.t_cljs$core$async30245.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__27042__auto__,writer__27043__auto__,opt__27044__auto__){
return cljs.core._write.call(null,writer__27043__auto__,"cljs.core.async/t_cljs$core$async30245");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async30245 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async30245(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta30246){
return (new cljs.core.async.t_cljs$core$async30245(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta30246));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async30245(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28644__auto___30412 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28644__auto___30412,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28645__auto__ = (function (){var switch__28579__auto__ = ((function (c__28644__auto___30412,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30349){
var state_val_30350 = (state_30349[(1)]);
if((state_val_30350 === (7))){
var inst_30264 = (state_30349[(2)]);
var state_30349__$1 = state_30349;
var statearr_30351_30413 = state_30349__$1;
(statearr_30351_30413[(2)] = inst_30264);

(statearr_30351_30413[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30350 === (20))){
var inst_30276 = (state_30349[(7)]);
var state_30349__$1 = state_30349;
var statearr_30352_30414 = state_30349__$1;
(statearr_30352_30414[(2)] = inst_30276);

(statearr_30352_30414[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30350 === (27))){
var state_30349__$1 = state_30349;
var statearr_30353_30415 = state_30349__$1;
(statearr_30353_30415[(2)] = null);

(statearr_30353_30415[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30350 === (1))){
var inst_30251 = (state_30349[(8)]);
var inst_30251__$1 = calc_state.call(null);
var inst_30253 = (inst_30251__$1 == null);
var inst_30254 = cljs.core.not.call(null,inst_30253);
var state_30349__$1 = (function (){var statearr_30354 = state_30349;
(statearr_30354[(8)] = inst_30251__$1);

return statearr_30354;
})();
if(inst_30254){
var statearr_30355_30416 = state_30349__$1;
(statearr_30355_30416[(1)] = (2));

} else {
var statearr_30356_30417 = state_30349__$1;
(statearr_30356_30417[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30350 === (24))){
var inst_30309 = (state_30349[(9)]);
var inst_30323 = (state_30349[(10)]);
var inst_30300 = (state_30349[(11)]);
var inst_30323__$1 = inst_30300.call(null,inst_30309);
var state_30349__$1 = (function (){var statearr_30357 = state_30349;
(statearr_30357[(10)] = inst_30323__$1);

return statearr_30357;
})();
if(cljs.core.truth_(inst_30323__$1)){
var statearr_30358_30418 = state_30349__$1;
(statearr_30358_30418[(1)] = (29));

} else {
var statearr_30359_30419 = state_30349__$1;
(statearr_30359_30419[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30350 === (4))){
var inst_30267 = (state_30349[(2)]);
var state_30349__$1 = state_30349;
if(cljs.core.truth_(inst_30267)){
var statearr_30360_30420 = state_30349__$1;
(statearr_30360_30420[(1)] = (8));

} else {
var statearr_30361_30421 = state_30349__$1;
(statearr_30361_30421[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30350 === (15))){
var inst_30294 = (state_30349[(2)]);
var state_30349__$1 = state_30349;
if(cljs.core.truth_(inst_30294)){
var statearr_30362_30422 = state_30349__$1;
(statearr_30362_30422[(1)] = (19));

} else {
var statearr_30363_30423 = state_30349__$1;
(statearr_30363_30423[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30350 === (21))){
var inst_30299 = (state_30349[(12)]);
var inst_30299__$1 = (state_30349[(2)]);
var inst_30300 = cljs.core.get.call(null,inst_30299__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30301 = cljs.core.get.call(null,inst_30299__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30302 = cljs.core.get.call(null,inst_30299__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30349__$1 = (function (){var statearr_30364 = state_30349;
(statearr_30364[(13)] = inst_30301);

(statearr_30364[(11)] = inst_30300);

(statearr_30364[(12)] = inst_30299__$1);

return statearr_30364;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_30349__$1,(22),inst_30302);
} else {
if((state_val_30350 === (31))){
var inst_30331 = (state_30349[(2)]);
var state_30349__$1 = state_30349;
if(cljs.core.truth_(inst_30331)){
var statearr_30365_30424 = state_30349__$1;
(statearr_30365_30424[(1)] = (32));

} else {
var statearr_30366_30425 = state_30349__$1;
(statearr_30366_30425[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30350 === (32))){
var inst_30308 = (state_30349[(14)]);
var state_30349__$1 = state_30349;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30349__$1,(35),out,inst_30308);
} else {
if((state_val_30350 === (33))){
var inst_30299 = (state_30349[(12)]);
var inst_30276 = inst_30299;
var state_30349__$1 = (function (){var statearr_30367 = state_30349;
(statearr_30367[(7)] = inst_30276);

return statearr_30367;
})();
var statearr_30368_30426 = state_30349__$1;
(statearr_30368_30426[(2)] = null);

(statearr_30368_30426[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30350 === (13))){
var inst_30276 = (state_30349[(7)]);
var inst_30283 = inst_30276.cljs$lang$protocol_mask$partition0$;
var inst_30284 = (inst_30283 & (64));
var inst_30285 = inst_30276.cljs$core$ISeq$;
var inst_30286 = (cljs.core.PROTOCOL_SENTINEL === inst_30285);
var inst_30287 = (inst_30284) || (inst_30286);
var state_30349__$1 = state_30349;
if(cljs.core.truth_(inst_30287)){
var statearr_30369_30427 = state_30349__$1;
(statearr_30369_30427[(1)] = (16));

} else {
var statearr_30370_30428 = state_30349__$1;
(statearr_30370_30428[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30350 === (22))){
var inst_30309 = (state_30349[(9)]);
var inst_30308 = (state_30349[(14)]);
var inst_30307 = (state_30349[(2)]);
var inst_30308__$1 = cljs.core.nth.call(null,inst_30307,(0),null);
var inst_30309__$1 = cljs.core.nth.call(null,inst_30307,(1),null);
var inst_30310 = (inst_30308__$1 == null);
var inst_30311 = cljs.core._EQ_.call(null,inst_30309__$1,change);
var inst_30312 = (inst_30310) || (inst_30311);
var state_30349__$1 = (function (){var statearr_30371 = state_30349;
(statearr_30371[(9)] = inst_30309__$1);

(statearr_30371[(14)] = inst_30308__$1);

return statearr_30371;
})();
if(cljs.core.truth_(inst_30312)){
var statearr_30372_30429 = state_30349__$1;
(statearr_30372_30429[(1)] = (23));

} else {
var statearr_30373_30430 = state_30349__$1;
(statearr_30373_30430[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30350 === (36))){
var inst_30299 = (state_30349[(12)]);
var inst_30276 = inst_30299;
var state_30349__$1 = (function (){var statearr_30374 = state_30349;
(statearr_30374[(7)] = inst_30276);

return statearr_30374;
})();
var statearr_30375_30431 = state_30349__$1;
(statearr_30375_30431[(2)] = null);

(statearr_30375_30431[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30350 === (29))){
var inst_30323 = (state_30349[(10)]);
var state_30349__$1 = state_30349;
var statearr_30376_30432 = state_30349__$1;
(statearr_30376_30432[(2)] = inst_30323);

(statearr_30376_30432[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30350 === (6))){
var state_30349__$1 = state_30349;
var statearr_30377_30433 = state_30349__$1;
(statearr_30377_30433[(2)] = false);

(statearr_30377_30433[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30350 === (28))){
var inst_30319 = (state_30349[(2)]);
var inst_30320 = calc_state.call(null);
var inst_30276 = inst_30320;
var state_30349__$1 = (function (){var statearr_30378 = state_30349;
(statearr_30378[(7)] = inst_30276);

(statearr_30378[(15)] = inst_30319);

return statearr_30378;
})();
var statearr_30379_30434 = state_30349__$1;
(statearr_30379_30434[(2)] = null);

(statearr_30379_30434[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30350 === (25))){
var inst_30345 = (state_30349[(2)]);
var state_30349__$1 = state_30349;
var statearr_30380_30435 = state_30349__$1;
(statearr_30380_30435[(2)] = inst_30345);

(statearr_30380_30435[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30350 === (34))){
var inst_30343 = (state_30349[(2)]);
var state_30349__$1 = state_30349;
var statearr_30381_30436 = state_30349__$1;
(statearr_30381_30436[(2)] = inst_30343);

(statearr_30381_30436[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30350 === (17))){
var state_30349__$1 = state_30349;
var statearr_30382_30437 = state_30349__$1;
(statearr_30382_30437[(2)] = false);

(statearr_30382_30437[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30350 === (3))){
var state_30349__$1 = state_30349;
var statearr_30383_30438 = state_30349__$1;
(statearr_30383_30438[(2)] = false);

(statearr_30383_30438[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30350 === (12))){
var inst_30347 = (state_30349[(2)]);
var state_30349__$1 = state_30349;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30349__$1,inst_30347);
} else {
if((state_val_30350 === (2))){
var inst_30251 = (state_30349[(8)]);
var inst_30256 = inst_30251.cljs$lang$protocol_mask$partition0$;
var inst_30257 = (inst_30256 & (64));
var inst_30258 = inst_30251.cljs$core$ISeq$;
var inst_30259 = (cljs.core.PROTOCOL_SENTINEL === inst_30258);
var inst_30260 = (inst_30257) || (inst_30259);
var state_30349__$1 = state_30349;
if(cljs.core.truth_(inst_30260)){
var statearr_30384_30439 = state_30349__$1;
(statearr_30384_30439[(1)] = (5));

} else {
var statearr_30385_30440 = state_30349__$1;
(statearr_30385_30440[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30350 === (23))){
var inst_30308 = (state_30349[(14)]);
var inst_30314 = (inst_30308 == null);
var state_30349__$1 = state_30349;
if(cljs.core.truth_(inst_30314)){
var statearr_30386_30441 = state_30349__$1;
(statearr_30386_30441[(1)] = (26));

} else {
var statearr_30387_30442 = state_30349__$1;
(statearr_30387_30442[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30350 === (35))){
var inst_30334 = (state_30349[(2)]);
var state_30349__$1 = state_30349;
if(cljs.core.truth_(inst_30334)){
var statearr_30388_30443 = state_30349__$1;
(statearr_30388_30443[(1)] = (36));

} else {
var statearr_30389_30444 = state_30349__$1;
(statearr_30389_30444[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30350 === (19))){
var inst_30276 = (state_30349[(7)]);
var inst_30296 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30276);
var state_30349__$1 = state_30349;
var statearr_30390_30445 = state_30349__$1;
(statearr_30390_30445[(2)] = inst_30296);

(statearr_30390_30445[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30350 === (11))){
var inst_30276 = (state_30349[(7)]);
var inst_30280 = (inst_30276 == null);
var inst_30281 = cljs.core.not.call(null,inst_30280);
var state_30349__$1 = state_30349;
if(inst_30281){
var statearr_30391_30446 = state_30349__$1;
(statearr_30391_30446[(1)] = (13));

} else {
var statearr_30392_30447 = state_30349__$1;
(statearr_30392_30447[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30350 === (9))){
var inst_30251 = (state_30349[(8)]);
var state_30349__$1 = state_30349;
var statearr_30393_30448 = state_30349__$1;
(statearr_30393_30448[(2)] = inst_30251);

(statearr_30393_30448[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30350 === (5))){
var state_30349__$1 = state_30349;
var statearr_30394_30449 = state_30349__$1;
(statearr_30394_30449[(2)] = true);

(statearr_30394_30449[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30350 === (14))){
var state_30349__$1 = state_30349;
var statearr_30395_30450 = state_30349__$1;
(statearr_30395_30450[(2)] = false);

(statearr_30395_30450[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30350 === (26))){
var inst_30309 = (state_30349[(9)]);
var inst_30316 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30309);
var state_30349__$1 = state_30349;
var statearr_30396_30451 = state_30349__$1;
(statearr_30396_30451[(2)] = inst_30316);

(statearr_30396_30451[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30350 === (16))){
var state_30349__$1 = state_30349;
var statearr_30397_30452 = state_30349__$1;
(statearr_30397_30452[(2)] = true);

(statearr_30397_30452[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30350 === (38))){
var inst_30339 = (state_30349[(2)]);
var state_30349__$1 = state_30349;
var statearr_30398_30453 = state_30349__$1;
(statearr_30398_30453[(2)] = inst_30339);

(statearr_30398_30453[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30350 === (30))){
var inst_30309 = (state_30349[(9)]);
var inst_30301 = (state_30349[(13)]);
var inst_30300 = (state_30349[(11)]);
var inst_30326 = cljs.core.empty_QMARK_.call(null,inst_30300);
var inst_30327 = inst_30301.call(null,inst_30309);
var inst_30328 = cljs.core.not.call(null,inst_30327);
var inst_30329 = (inst_30326) && (inst_30328);
var state_30349__$1 = state_30349;
var statearr_30399_30454 = state_30349__$1;
(statearr_30399_30454[(2)] = inst_30329);

(statearr_30399_30454[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30350 === (10))){
var inst_30251 = (state_30349[(8)]);
var inst_30272 = (state_30349[(2)]);
var inst_30273 = cljs.core.get.call(null,inst_30272,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30274 = cljs.core.get.call(null,inst_30272,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30275 = cljs.core.get.call(null,inst_30272,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30276 = inst_30251;
var state_30349__$1 = (function (){var statearr_30400 = state_30349;
(statearr_30400[(16)] = inst_30275);

(statearr_30400[(17)] = inst_30273);

(statearr_30400[(7)] = inst_30276);

(statearr_30400[(18)] = inst_30274);

return statearr_30400;
})();
var statearr_30401_30455 = state_30349__$1;
(statearr_30401_30455[(2)] = null);

(statearr_30401_30455[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30350 === (18))){
var inst_30291 = (state_30349[(2)]);
var state_30349__$1 = state_30349;
var statearr_30402_30456 = state_30349__$1;
(statearr_30402_30456[(2)] = inst_30291);

(statearr_30402_30456[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30350 === (37))){
var state_30349__$1 = state_30349;
var statearr_30403_30457 = state_30349__$1;
(statearr_30403_30457[(2)] = null);

(statearr_30403_30457[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30350 === (8))){
var inst_30251 = (state_30349[(8)]);
var inst_30269 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30251);
var state_30349__$1 = state_30349;
var statearr_30404_30458 = state_30349__$1;
(statearr_30404_30458[(2)] = inst_30269);

(statearr_30404_30458[(1)] = (10));


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
});})(c__28644__auto___30412,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28579__auto__,c__28644__auto___30412,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28580__auto__ = null;
var cljs$core$async$mix_$_state_machine__28580__auto____0 = (function (){
var statearr_30408 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30408[(0)] = cljs$core$async$mix_$_state_machine__28580__auto__);

(statearr_30408[(1)] = (1));

return statearr_30408;
});
var cljs$core$async$mix_$_state_machine__28580__auto____1 = (function (state_30349){
while(true){
var ret_value__28581__auto__ = (function (){try{while(true){
var result__28582__auto__ = switch__28579__auto__.call(null,state_30349);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28582__auto__;
}
break;
}
}catch (e30409){if((e30409 instanceof Object)){
var ex__28583__auto__ = e30409;
var statearr_30410_30459 = state_30349;
(statearr_30410_30459[(5)] = ex__28583__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30349);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30409;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30460 = state_30349;
state_30349 = G__30460;
continue;
} else {
return ret_value__28581__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28580__auto__ = function(state_30349){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28580__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28580__auto____1.call(this,state_30349);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__28580__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28580__auto____0;
cljs$core$async$mix_$_state_machine__28580__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28580__auto____1;
return cljs$core$async$mix_$_state_machine__28580__auto__;
})()
;})(switch__28579__auto__,c__28644__auto___30412,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28646__auto__ = (function (){var statearr_30411 = f__28645__auto__.call(null);
(statearr_30411[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28644__auto___30412);

return statearr_30411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28646__auto__);
});})(c__28644__auto___30412,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__27099__auto__ = (((p == null))?null:p);
var m__27100__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__27099__auto__)]);
if(!((m__27100__auto__ == null))){
return m__27100__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__27100__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__27100__auto____$1 == null))){
return m__27100__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__27099__auto__ = (((p == null))?null:p);
var m__27100__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__27099__auto__)]);
if(!((m__27100__auto__ == null))){
return m__27100__auto__.call(null,p,v,ch);
} else {
var m__27100__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__27100__auto____$1 == null))){
return m__27100__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args30461 = [];
var len__27544__auto___30464 = arguments.length;
var i__27545__auto___30465 = (0);
while(true){
if((i__27545__auto___30465 < len__27544__auto___30464)){
args30461.push((arguments[i__27545__auto___30465]));

var G__30466 = (i__27545__auto___30465 + (1));
i__27545__auto___30465 = G__30466;
continue;
} else {
}
break;
}

var G__30463 = args30461.length;
switch (G__30463) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30461.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__27099__auto__ = (((p == null))?null:p);
var m__27100__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__27099__auto__)]);
if(!((m__27100__auto__ == null))){
return m__27100__auto__.call(null,p);
} else {
var m__27100__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__27100__auto____$1 == null))){
return m__27100__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__27099__auto__ = (((p == null))?null:p);
var m__27100__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__27099__auto__)]);
if(!((m__27100__auto__ == null))){
return m__27100__auto__.call(null,p,v);
} else {
var m__27100__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__27100__auto____$1 == null))){
return m__27100__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args30469 = [];
var len__27544__auto___30594 = arguments.length;
var i__27545__auto___30595 = (0);
while(true){
if((i__27545__auto___30595 < len__27544__auto___30594)){
args30469.push((arguments[i__27545__auto___30595]));

var G__30596 = (i__27545__auto___30595 + (1));
i__27545__auto___30595 = G__30596;
continue;
} else {
}
break;
}

var G__30471 = args30469.length;
switch (G__30471) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30469.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__26431__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__26431__auto__)){
return or__26431__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__26431__auto__,mults){
return (function (p1__30468_SHARP_){
if(cljs.core.truth_(p1__30468_SHARP_.call(null,topic))){
return p1__30468_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__30468_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__26431__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async30472 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30472 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30473){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30473 = meta30473;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30472.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30474,meta30473__$1){
var self__ = this;
var _30474__$1 = this;
return (new cljs.core.async.t_cljs$core$async30472(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30473__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30472.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30474){
var self__ = this;
var _30474__$1 = this;
return self__.meta30473;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30472.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30472.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30472.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30472.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30472.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30472.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30472.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30472.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30473","meta30473",994583241,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30472.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30472.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30472";

cljs.core.async.t_cljs$core$async30472.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__27042__auto__,writer__27043__auto__,opt__27044__auto__){
return cljs.core._write.call(null,writer__27043__auto__,"cljs.core.async/t_cljs$core$async30472");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async30472 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async30472(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30473){
return (new cljs.core.async.t_cljs$core$async30472(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30473));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async30472(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28644__auto___30598 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28644__auto___30598,mults,ensure_mult,p){
return (function (){
var f__28645__auto__ = (function (){var switch__28579__auto__ = ((function (c__28644__auto___30598,mults,ensure_mult,p){
return (function (state_30546){
var state_val_30547 = (state_30546[(1)]);
if((state_val_30547 === (7))){
var inst_30542 = (state_30546[(2)]);
var state_30546__$1 = state_30546;
var statearr_30548_30599 = state_30546__$1;
(statearr_30548_30599[(2)] = inst_30542);

(statearr_30548_30599[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (20))){
var state_30546__$1 = state_30546;
var statearr_30549_30600 = state_30546__$1;
(statearr_30549_30600[(2)] = null);

(statearr_30549_30600[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (1))){
var state_30546__$1 = state_30546;
var statearr_30550_30601 = state_30546__$1;
(statearr_30550_30601[(2)] = null);

(statearr_30550_30601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (24))){
var inst_30525 = (state_30546[(7)]);
var inst_30534 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30525);
var state_30546__$1 = state_30546;
var statearr_30551_30602 = state_30546__$1;
(statearr_30551_30602[(2)] = inst_30534);

(statearr_30551_30602[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (4))){
var inst_30477 = (state_30546[(8)]);
var inst_30477__$1 = (state_30546[(2)]);
var inst_30478 = (inst_30477__$1 == null);
var state_30546__$1 = (function (){var statearr_30552 = state_30546;
(statearr_30552[(8)] = inst_30477__$1);

return statearr_30552;
})();
if(cljs.core.truth_(inst_30478)){
var statearr_30553_30603 = state_30546__$1;
(statearr_30553_30603[(1)] = (5));

} else {
var statearr_30554_30604 = state_30546__$1;
(statearr_30554_30604[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (15))){
var inst_30519 = (state_30546[(2)]);
var state_30546__$1 = state_30546;
var statearr_30555_30605 = state_30546__$1;
(statearr_30555_30605[(2)] = inst_30519);

(statearr_30555_30605[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (21))){
var inst_30539 = (state_30546[(2)]);
var state_30546__$1 = (function (){var statearr_30556 = state_30546;
(statearr_30556[(9)] = inst_30539);

return statearr_30556;
})();
var statearr_30557_30606 = state_30546__$1;
(statearr_30557_30606[(2)] = null);

(statearr_30557_30606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (13))){
var inst_30501 = (state_30546[(10)]);
var inst_30503 = cljs.core.chunked_seq_QMARK_.call(null,inst_30501);
var state_30546__$1 = state_30546;
if(inst_30503){
var statearr_30558_30607 = state_30546__$1;
(statearr_30558_30607[(1)] = (16));

} else {
var statearr_30559_30608 = state_30546__$1;
(statearr_30559_30608[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (22))){
var inst_30531 = (state_30546[(2)]);
var state_30546__$1 = state_30546;
if(cljs.core.truth_(inst_30531)){
var statearr_30560_30609 = state_30546__$1;
(statearr_30560_30609[(1)] = (23));

} else {
var statearr_30561_30610 = state_30546__$1;
(statearr_30561_30610[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (6))){
var inst_30527 = (state_30546[(11)]);
var inst_30477 = (state_30546[(8)]);
var inst_30525 = (state_30546[(7)]);
var inst_30525__$1 = topic_fn.call(null,inst_30477);
var inst_30526 = cljs.core.deref.call(null,mults);
var inst_30527__$1 = cljs.core.get.call(null,inst_30526,inst_30525__$1);
var state_30546__$1 = (function (){var statearr_30562 = state_30546;
(statearr_30562[(11)] = inst_30527__$1);

(statearr_30562[(7)] = inst_30525__$1);

return statearr_30562;
})();
if(cljs.core.truth_(inst_30527__$1)){
var statearr_30563_30611 = state_30546__$1;
(statearr_30563_30611[(1)] = (19));

} else {
var statearr_30564_30612 = state_30546__$1;
(statearr_30564_30612[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (25))){
var inst_30536 = (state_30546[(2)]);
var state_30546__$1 = state_30546;
var statearr_30565_30613 = state_30546__$1;
(statearr_30565_30613[(2)] = inst_30536);

(statearr_30565_30613[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (17))){
var inst_30501 = (state_30546[(10)]);
var inst_30510 = cljs.core.first.call(null,inst_30501);
var inst_30511 = cljs.core.async.muxch_STAR_.call(null,inst_30510);
var inst_30512 = cljs.core.async.close_BANG_.call(null,inst_30511);
var inst_30513 = cljs.core.next.call(null,inst_30501);
var inst_30487 = inst_30513;
var inst_30488 = null;
var inst_30489 = (0);
var inst_30490 = (0);
var state_30546__$1 = (function (){var statearr_30566 = state_30546;
(statearr_30566[(12)] = inst_30489);

(statearr_30566[(13)] = inst_30488);

(statearr_30566[(14)] = inst_30512);

(statearr_30566[(15)] = inst_30490);

(statearr_30566[(16)] = inst_30487);

return statearr_30566;
})();
var statearr_30567_30614 = state_30546__$1;
(statearr_30567_30614[(2)] = null);

(statearr_30567_30614[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (3))){
var inst_30544 = (state_30546[(2)]);
var state_30546__$1 = state_30546;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30546__$1,inst_30544);
} else {
if((state_val_30547 === (12))){
var inst_30521 = (state_30546[(2)]);
var state_30546__$1 = state_30546;
var statearr_30568_30615 = state_30546__$1;
(statearr_30568_30615[(2)] = inst_30521);

(statearr_30568_30615[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (2))){
var state_30546__$1 = state_30546;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30546__$1,(4),ch);
} else {
if((state_val_30547 === (23))){
var state_30546__$1 = state_30546;
var statearr_30569_30616 = state_30546__$1;
(statearr_30569_30616[(2)] = null);

(statearr_30569_30616[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (19))){
var inst_30527 = (state_30546[(11)]);
var inst_30477 = (state_30546[(8)]);
var inst_30529 = cljs.core.async.muxch_STAR_.call(null,inst_30527);
var state_30546__$1 = state_30546;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30546__$1,(22),inst_30529,inst_30477);
} else {
if((state_val_30547 === (11))){
var inst_30487 = (state_30546[(16)]);
var inst_30501 = (state_30546[(10)]);
var inst_30501__$1 = cljs.core.seq.call(null,inst_30487);
var state_30546__$1 = (function (){var statearr_30570 = state_30546;
(statearr_30570[(10)] = inst_30501__$1);

return statearr_30570;
})();
if(inst_30501__$1){
var statearr_30571_30617 = state_30546__$1;
(statearr_30571_30617[(1)] = (13));

} else {
var statearr_30572_30618 = state_30546__$1;
(statearr_30572_30618[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (9))){
var inst_30523 = (state_30546[(2)]);
var state_30546__$1 = state_30546;
var statearr_30573_30619 = state_30546__$1;
(statearr_30573_30619[(2)] = inst_30523);

(statearr_30573_30619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (5))){
var inst_30484 = cljs.core.deref.call(null,mults);
var inst_30485 = cljs.core.vals.call(null,inst_30484);
var inst_30486 = cljs.core.seq.call(null,inst_30485);
var inst_30487 = inst_30486;
var inst_30488 = null;
var inst_30489 = (0);
var inst_30490 = (0);
var state_30546__$1 = (function (){var statearr_30574 = state_30546;
(statearr_30574[(12)] = inst_30489);

(statearr_30574[(13)] = inst_30488);

(statearr_30574[(15)] = inst_30490);

(statearr_30574[(16)] = inst_30487);

return statearr_30574;
})();
var statearr_30575_30620 = state_30546__$1;
(statearr_30575_30620[(2)] = null);

(statearr_30575_30620[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (14))){
var state_30546__$1 = state_30546;
var statearr_30579_30621 = state_30546__$1;
(statearr_30579_30621[(2)] = null);

(statearr_30579_30621[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (16))){
var inst_30501 = (state_30546[(10)]);
var inst_30505 = cljs.core.chunk_first.call(null,inst_30501);
var inst_30506 = cljs.core.chunk_rest.call(null,inst_30501);
var inst_30507 = cljs.core.count.call(null,inst_30505);
var inst_30487 = inst_30506;
var inst_30488 = inst_30505;
var inst_30489 = inst_30507;
var inst_30490 = (0);
var state_30546__$1 = (function (){var statearr_30580 = state_30546;
(statearr_30580[(12)] = inst_30489);

(statearr_30580[(13)] = inst_30488);

(statearr_30580[(15)] = inst_30490);

(statearr_30580[(16)] = inst_30487);

return statearr_30580;
})();
var statearr_30581_30622 = state_30546__$1;
(statearr_30581_30622[(2)] = null);

(statearr_30581_30622[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (10))){
var inst_30489 = (state_30546[(12)]);
var inst_30488 = (state_30546[(13)]);
var inst_30490 = (state_30546[(15)]);
var inst_30487 = (state_30546[(16)]);
var inst_30495 = cljs.core._nth.call(null,inst_30488,inst_30490);
var inst_30496 = cljs.core.async.muxch_STAR_.call(null,inst_30495);
var inst_30497 = cljs.core.async.close_BANG_.call(null,inst_30496);
var inst_30498 = (inst_30490 + (1));
var tmp30576 = inst_30489;
var tmp30577 = inst_30488;
var tmp30578 = inst_30487;
var inst_30487__$1 = tmp30578;
var inst_30488__$1 = tmp30577;
var inst_30489__$1 = tmp30576;
var inst_30490__$1 = inst_30498;
var state_30546__$1 = (function (){var statearr_30582 = state_30546;
(statearr_30582[(12)] = inst_30489__$1);

(statearr_30582[(13)] = inst_30488__$1);

(statearr_30582[(17)] = inst_30497);

(statearr_30582[(15)] = inst_30490__$1);

(statearr_30582[(16)] = inst_30487__$1);

return statearr_30582;
})();
var statearr_30583_30623 = state_30546__$1;
(statearr_30583_30623[(2)] = null);

(statearr_30583_30623[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (18))){
var inst_30516 = (state_30546[(2)]);
var state_30546__$1 = state_30546;
var statearr_30584_30624 = state_30546__$1;
(statearr_30584_30624[(2)] = inst_30516);

(statearr_30584_30624[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30547 === (8))){
var inst_30489 = (state_30546[(12)]);
var inst_30490 = (state_30546[(15)]);
var inst_30492 = (inst_30490 < inst_30489);
var inst_30493 = inst_30492;
var state_30546__$1 = state_30546;
if(cljs.core.truth_(inst_30493)){
var statearr_30585_30625 = state_30546__$1;
(statearr_30585_30625[(1)] = (10));

} else {
var statearr_30586_30626 = state_30546__$1;
(statearr_30586_30626[(1)] = (11));

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
});})(c__28644__auto___30598,mults,ensure_mult,p))
;
return ((function (switch__28579__auto__,c__28644__auto___30598,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28580__auto__ = null;
var cljs$core$async$state_machine__28580__auto____0 = (function (){
var statearr_30590 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30590[(0)] = cljs$core$async$state_machine__28580__auto__);

(statearr_30590[(1)] = (1));

return statearr_30590;
});
var cljs$core$async$state_machine__28580__auto____1 = (function (state_30546){
while(true){
var ret_value__28581__auto__ = (function (){try{while(true){
var result__28582__auto__ = switch__28579__auto__.call(null,state_30546);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28582__auto__;
}
break;
}
}catch (e30591){if((e30591 instanceof Object)){
var ex__28583__auto__ = e30591;
var statearr_30592_30627 = state_30546;
(statearr_30592_30627[(5)] = ex__28583__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30546);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30591;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30628 = state_30546;
state_30546 = G__30628;
continue;
} else {
return ret_value__28581__auto__;
}
break;
}
});
cljs$core$async$state_machine__28580__auto__ = function(state_30546){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28580__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28580__auto____1.call(this,state_30546);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28580__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28580__auto____0;
cljs$core$async$state_machine__28580__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28580__auto____1;
return cljs$core$async$state_machine__28580__auto__;
})()
;})(switch__28579__auto__,c__28644__auto___30598,mults,ensure_mult,p))
})();
var state__28646__auto__ = (function (){var statearr_30593 = f__28645__auto__.call(null);
(statearr_30593[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28644__auto___30598);

return statearr_30593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28646__auto__);
});})(c__28644__auto___30598,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args30629 = [];
var len__27544__auto___30632 = arguments.length;
var i__27545__auto___30633 = (0);
while(true){
if((i__27545__auto___30633 < len__27544__auto___30632)){
args30629.push((arguments[i__27545__auto___30633]));

var G__30634 = (i__27545__auto___30633 + (1));
i__27545__auto___30633 = G__30634;
continue;
} else {
}
break;
}

var G__30631 = args30629.length;
switch (G__30631) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30629.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args30636 = [];
var len__27544__auto___30639 = arguments.length;
var i__27545__auto___30640 = (0);
while(true){
if((i__27545__auto___30640 < len__27544__auto___30639)){
args30636.push((arguments[i__27545__auto___30640]));

var G__30641 = (i__27545__auto___30640 + (1));
i__27545__auto___30640 = G__30641;
continue;
} else {
}
break;
}

var G__30638 = args30636.length;
switch (G__30638) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30636.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args30643 = [];
var len__27544__auto___30714 = arguments.length;
var i__27545__auto___30715 = (0);
while(true){
if((i__27545__auto___30715 < len__27544__auto___30714)){
args30643.push((arguments[i__27545__auto___30715]));

var G__30716 = (i__27545__auto___30715 + (1));
i__27545__auto___30715 = G__30716;
continue;
} else {
}
break;
}

var G__30645 = args30643.length;
switch (G__30645) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30643.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__28644__auto___30718 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28644__auto___30718,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28645__auto__ = (function (){var switch__28579__auto__ = ((function (c__28644__auto___30718,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30684){
var state_val_30685 = (state_30684[(1)]);
if((state_val_30685 === (7))){
var state_30684__$1 = state_30684;
var statearr_30686_30719 = state_30684__$1;
(statearr_30686_30719[(2)] = null);

(statearr_30686_30719[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30685 === (1))){
var state_30684__$1 = state_30684;
var statearr_30687_30720 = state_30684__$1;
(statearr_30687_30720[(2)] = null);

(statearr_30687_30720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30685 === (4))){
var inst_30648 = (state_30684[(7)]);
var inst_30650 = (inst_30648 < cnt);
var state_30684__$1 = state_30684;
if(cljs.core.truth_(inst_30650)){
var statearr_30688_30721 = state_30684__$1;
(statearr_30688_30721[(1)] = (6));

} else {
var statearr_30689_30722 = state_30684__$1;
(statearr_30689_30722[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30685 === (15))){
var inst_30680 = (state_30684[(2)]);
var state_30684__$1 = state_30684;
var statearr_30690_30723 = state_30684__$1;
(statearr_30690_30723[(2)] = inst_30680);

(statearr_30690_30723[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30685 === (13))){
var inst_30673 = cljs.core.async.close_BANG_.call(null,out);
var state_30684__$1 = state_30684;
var statearr_30691_30724 = state_30684__$1;
(statearr_30691_30724[(2)] = inst_30673);

(statearr_30691_30724[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30685 === (6))){
var state_30684__$1 = state_30684;
var statearr_30692_30725 = state_30684__$1;
(statearr_30692_30725[(2)] = null);

(statearr_30692_30725[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30685 === (3))){
var inst_30682 = (state_30684[(2)]);
var state_30684__$1 = state_30684;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30684__$1,inst_30682);
} else {
if((state_val_30685 === (12))){
var inst_30670 = (state_30684[(8)]);
var inst_30670__$1 = (state_30684[(2)]);
var inst_30671 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30670__$1);
var state_30684__$1 = (function (){var statearr_30693 = state_30684;
(statearr_30693[(8)] = inst_30670__$1);

return statearr_30693;
})();
if(cljs.core.truth_(inst_30671)){
var statearr_30694_30726 = state_30684__$1;
(statearr_30694_30726[(1)] = (13));

} else {
var statearr_30695_30727 = state_30684__$1;
(statearr_30695_30727[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30685 === (2))){
var inst_30647 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_30648 = (0);
var state_30684__$1 = (function (){var statearr_30696 = state_30684;
(statearr_30696[(9)] = inst_30647);

(statearr_30696[(7)] = inst_30648);

return statearr_30696;
})();
var statearr_30697_30728 = state_30684__$1;
(statearr_30697_30728[(2)] = null);

(statearr_30697_30728[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30685 === (11))){
var inst_30648 = (state_30684[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30684,(10),Object,null,(9));
var inst_30657 = chs__$1.call(null,inst_30648);
var inst_30658 = done.call(null,inst_30648);
var inst_30659 = cljs.core.async.take_BANG_.call(null,inst_30657,inst_30658);
var state_30684__$1 = state_30684;
var statearr_30698_30729 = state_30684__$1;
(statearr_30698_30729[(2)] = inst_30659);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30684__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30685 === (9))){
var inst_30648 = (state_30684[(7)]);
var inst_30661 = (state_30684[(2)]);
var inst_30662 = (inst_30648 + (1));
var inst_30648__$1 = inst_30662;
var state_30684__$1 = (function (){var statearr_30699 = state_30684;
(statearr_30699[(10)] = inst_30661);

(statearr_30699[(7)] = inst_30648__$1);

return statearr_30699;
})();
var statearr_30700_30730 = state_30684__$1;
(statearr_30700_30730[(2)] = null);

(statearr_30700_30730[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30685 === (5))){
var inst_30668 = (state_30684[(2)]);
var state_30684__$1 = (function (){var statearr_30701 = state_30684;
(statearr_30701[(11)] = inst_30668);

return statearr_30701;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30684__$1,(12),dchan);
} else {
if((state_val_30685 === (14))){
var inst_30670 = (state_30684[(8)]);
var inst_30675 = cljs.core.apply.call(null,f,inst_30670);
var state_30684__$1 = state_30684;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30684__$1,(16),out,inst_30675);
} else {
if((state_val_30685 === (16))){
var inst_30677 = (state_30684[(2)]);
var state_30684__$1 = (function (){var statearr_30702 = state_30684;
(statearr_30702[(12)] = inst_30677);

return statearr_30702;
})();
var statearr_30703_30731 = state_30684__$1;
(statearr_30703_30731[(2)] = null);

(statearr_30703_30731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30685 === (10))){
var inst_30652 = (state_30684[(2)]);
var inst_30653 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_30684__$1 = (function (){var statearr_30704 = state_30684;
(statearr_30704[(13)] = inst_30652);

return statearr_30704;
})();
var statearr_30705_30732 = state_30684__$1;
(statearr_30705_30732[(2)] = inst_30653);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30684__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30685 === (8))){
var inst_30666 = (state_30684[(2)]);
var state_30684__$1 = state_30684;
var statearr_30706_30733 = state_30684__$1;
(statearr_30706_30733[(2)] = inst_30666);

(statearr_30706_30733[(1)] = (5));


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
});})(c__28644__auto___30718,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28579__auto__,c__28644__auto___30718,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28580__auto__ = null;
var cljs$core$async$state_machine__28580__auto____0 = (function (){
var statearr_30710 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30710[(0)] = cljs$core$async$state_machine__28580__auto__);

(statearr_30710[(1)] = (1));

return statearr_30710;
});
var cljs$core$async$state_machine__28580__auto____1 = (function (state_30684){
while(true){
var ret_value__28581__auto__ = (function (){try{while(true){
var result__28582__auto__ = switch__28579__auto__.call(null,state_30684);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28582__auto__;
}
break;
}
}catch (e30711){if((e30711 instanceof Object)){
var ex__28583__auto__ = e30711;
var statearr_30712_30734 = state_30684;
(statearr_30712_30734[(5)] = ex__28583__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30684);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30711;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30735 = state_30684;
state_30684 = G__30735;
continue;
} else {
return ret_value__28581__auto__;
}
break;
}
});
cljs$core$async$state_machine__28580__auto__ = function(state_30684){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28580__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28580__auto____1.call(this,state_30684);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28580__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28580__auto____0;
cljs$core$async$state_machine__28580__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28580__auto____1;
return cljs$core$async$state_machine__28580__auto__;
})()
;})(switch__28579__auto__,c__28644__auto___30718,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28646__auto__ = (function (){var statearr_30713 = f__28645__auto__.call(null);
(statearr_30713[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28644__auto___30718);

return statearr_30713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28646__auto__);
});})(c__28644__auto___30718,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args30737 = [];
var len__27544__auto___30795 = arguments.length;
var i__27545__auto___30796 = (0);
while(true){
if((i__27545__auto___30796 < len__27544__auto___30795)){
args30737.push((arguments[i__27545__auto___30796]));

var G__30797 = (i__27545__auto___30796 + (1));
i__27545__auto___30796 = G__30797;
continue;
} else {
}
break;
}

var G__30739 = args30737.length;
switch (G__30739) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30737.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28644__auto___30799 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28644__auto___30799,out){
return (function (){
var f__28645__auto__ = (function (){var switch__28579__auto__ = ((function (c__28644__auto___30799,out){
return (function (state_30771){
var state_val_30772 = (state_30771[(1)]);
if((state_val_30772 === (7))){
var inst_30751 = (state_30771[(7)]);
var inst_30750 = (state_30771[(8)]);
var inst_30750__$1 = (state_30771[(2)]);
var inst_30751__$1 = cljs.core.nth.call(null,inst_30750__$1,(0),null);
var inst_30752 = cljs.core.nth.call(null,inst_30750__$1,(1),null);
var inst_30753 = (inst_30751__$1 == null);
var state_30771__$1 = (function (){var statearr_30773 = state_30771;
(statearr_30773[(9)] = inst_30752);

(statearr_30773[(7)] = inst_30751__$1);

(statearr_30773[(8)] = inst_30750__$1);

return statearr_30773;
})();
if(cljs.core.truth_(inst_30753)){
var statearr_30774_30800 = state_30771__$1;
(statearr_30774_30800[(1)] = (8));

} else {
var statearr_30775_30801 = state_30771__$1;
(statearr_30775_30801[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30772 === (1))){
var inst_30740 = cljs.core.vec.call(null,chs);
var inst_30741 = inst_30740;
var state_30771__$1 = (function (){var statearr_30776 = state_30771;
(statearr_30776[(10)] = inst_30741);

return statearr_30776;
})();
var statearr_30777_30802 = state_30771__$1;
(statearr_30777_30802[(2)] = null);

(statearr_30777_30802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30772 === (4))){
var inst_30741 = (state_30771[(10)]);
var state_30771__$1 = state_30771;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30771__$1,(7),inst_30741);
} else {
if((state_val_30772 === (6))){
var inst_30767 = (state_30771[(2)]);
var state_30771__$1 = state_30771;
var statearr_30778_30803 = state_30771__$1;
(statearr_30778_30803[(2)] = inst_30767);

(statearr_30778_30803[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30772 === (3))){
var inst_30769 = (state_30771[(2)]);
var state_30771__$1 = state_30771;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30771__$1,inst_30769);
} else {
if((state_val_30772 === (2))){
var inst_30741 = (state_30771[(10)]);
var inst_30743 = cljs.core.count.call(null,inst_30741);
var inst_30744 = (inst_30743 > (0));
var state_30771__$1 = state_30771;
if(cljs.core.truth_(inst_30744)){
var statearr_30780_30804 = state_30771__$1;
(statearr_30780_30804[(1)] = (4));

} else {
var statearr_30781_30805 = state_30771__$1;
(statearr_30781_30805[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30772 === (11))){
var inst_30741 = (state_30771[(10)]);
var inst_30760 = (state_30771[(2)]);
var tmp30779 = inst_30741;
var inst_30741__$1 = tmp30779;
var state_30771__$1 = (function (){var statearr_30782 = state_30771;
(statearr_30782[(11)] = inst_30760);

(statearr_30782[(10)] = inst_30741__$1);

return statearr_30782;
})();
var statearr_30783_30806 = state_30771__$1;
(statearr_30783_30806[(2)] = null);

(statearr_30783_30806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30772 === (9))){
var inst_30751 = (state_30771[(7)]);
var state_30771__$1 = state_30771;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30771__$1,(11),out,inst_30751);
} else {
if((state_val_30772 === (5))){
var inst_30765 = cljs.core.async.close_BANG_.call(null,out);
var state_30771__$1 = state_30771;
var statearr_30784_30807 = state_30771__$1;
(statearr_30784_30807[(2)] = inst_30765);

(statearr_30784_30807[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30772 === (10))){
var inst_30763 = (state_30771[(2)]);
var state_30771__$1 = state_30771;
var statearr_30785_30808 = state_30771__$1;
(statearr_30785_30808[(2)] = inst_30763);

(statearr_30785_30808[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30772 === (8))){
var inst_30752 = (state_30771[(9)]);
var inst_30751 = (state_30771[(7)]);
var inst_30750 = (state_30771[(8)]);
var inst_30741 = (state_30771[(10)]);
var inst_30755 = (function (){var cs = inst_30741;
var vec__30746 = inst_30750;
var v = inst_30751;
var c = inst_30752;
return ((function (cs,vec__30746,v,c,inst_30752,inst_30751,inst_30750,inst_30741,state_val_30772,c__28644__auto___30799,out){
return (function (p1__30736_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__30736_SHARP_);
});
;})(cs,vec__30746,v,c,inst_30752,inst_30751,inst_30750,inst_30741,state_val_30772,c__28644__auto___30799,out))
})();
var inst_30756 = cljs.core.filterv.call(null,inst_30755,inst_30741);
var inst_30741__$1 = inst_30756;
var state_30771__$1 = (function (){var statearr_30786 = state_30771;
(statearr_30786[(10)] = inst_30741__$1);

return statearr_30786;
})();
var statearr_30787_30809 = state_30771__$1;
(statearr_30787_30809[(2)] = null);

(statearr_30787_30809[(1)] = (2));


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
});})(c__28644__auto___30799,out))
;
return ((function (switch__28579__auto__,c__28644__auto___30799,out){
return (function() {
var cljs$core$async$state_machine__28580__auto__ = null;
var cljs$core$async$state_machine__28580__auto____0 = (function (){
var statearr_30791 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30791[(0)] = cljs$core$async$state_machine__28580__auto__);

(statearr_30791[(1)] = (1));

return statearr_30791;
});
var cljs$core$async$state_machine__28580__auto____1 = (function (state_30771){
while(true){
var ret_value__28581__auto__ = (function (){try{while(true){
var result__28582__auto__ = switch__28579__auto__.call(null,state_30771);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28582__auto__;
}
break;
}
}catch (e30792){if((e30792 instanceof Object)){
var ex__28583__auto__ = e30792;
var statearr_30793_30810 = state_30771;
(statearr_30793_30810[(5)] = ex__28583__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30771);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30792;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30811 = state_30771;
state_30771 = G__30811;
continue;
} else {
return ret_value__28581__auto__;
}
break;
}
});
cljs$core$async$state_machine__28580__auto__ = function(state_30771){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28580__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28580__auto____1.call(this,state_30771);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28580__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28580__auto____0;
cljs$core$async$state_machine__28580__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28580__auto____1;
return cljs$core$async$state_machine__28580__auto__;
})()
;})(switch__28579__auto__,c__28644__auto___30799,out))
})();
var state__28646__auto__ = (function (){var statearr_30794 = f__28645__auto__.call(null);
(statearr_30794[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28644__auto___30799);

return statearr_30794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28646__auto__);
});})(c__28644__auto___30799,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args30812 = [];
var len__27544__auto___30861 = arguments.length;
var i__27545__auto___30862 = (0);
while(true){
if((i__27545__auto___30862 < len__27544__auto___30861)){
args30812.push((arguments[i__27545__auto___30862]));

var G__30863 = (i__27545__auto___30862 + (1));
i__27545__auto___30862 = G__30863;
continue;
} else {
}
break;
}

var G__30814 = args30812.length;
switch (G__30814) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30812.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28644__auto___30865 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28644__auto___30865,out){
return (function (){
var f__28645__auto__ = (function (){var switch__28579__auto__ = ((function (c__28644__auto___30865,out){
return (function (state_30838){
var state_val_30839 = (state_30838[(1)]);
if((state_val_30839 === (7))){
var inst_30820 = (state_30838[(7)]);
var inst_30820__$1 = (state_30838[(2)]);
var inst_30821 = (inst_30820__$1 == null);
var inst_30822 = cljs.core.not.call(null,inst_30821);
var state_30838__$1 = (function (){var statearr_30840 = state_30838;
(statearr_30840[(7)] = inst_30820__$1);

return statearr_30840;
})();
if(inst_30822){
var statearr_30841_30866 = state_30838__$1;
(statearr_30841_30866[(1)] = (8));

} else {
var statearr_30842_30867 = state_30838__$1;
(statearr_30842_30867[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30839 === (1))){
var inst_30815 = (0);
var state_30838__$1 = (function (){var statearr_30843 = state_30838;
(statearr_30843[(8)] = inst_30815);

return statearr_30843;
})();
var statearr_30844_30868 = state_30838__$1;
(statearr_30844_30868[(2)] = null);

(statearr_30844_30868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30839 === (4))){
var state_30838__$1 = state_30838;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30838__$1,(7),ch);
} else {
if((state_val_30839 === (6))){
var inst_30833 = (state_30838[(2)]);
var state_30838__$1 = state_30838;
var statearr_30845_30869 = state_30838__$1;
(statearr_30845_30869[(2)] = inst_30833);

(statearr_30845_30869[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30839 === (3))){
var inst_30835 = (state_30838[(2)]);
var inst_30836 = cljs.core.async.close_BANG_.call(null,out);
var state_30838__$1 = (function (){var statearr_30846 = state_30838;
(statearr_30846[(9)] = inst_30835);

return statearr_30846;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30838__$1,inst_30836);
} else {
if((state_val_30839 === (2))){
var inst_30815 = (state_30838[(8)]);
var inst_30817 = (inst_30815 < n);
var state_30838__$1 = state_30838;
if(cljs.core.truth_(inst_30817)){
var statearr_30847_30870 = state_30838__$1;
(statearr_30847_30870[(1)] = (4));

} else {
var statearr_30848_30871 = state_30838__$1;
(statearr_30848_30871[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30839 === (11))){
var inst_30815 = (state_30838[(8)]);
var inst_30825 = (state_30838[(2)]);
var inst_30826 = (inst_30815 + (1));
var inst_30815__$1 = inst_30826;
var state_30838__$1 = (function (){var statearr_30849 = state_30838;
(statearr_30849[(10)] = inst_30825);

(statearr_30849[(8)] = inst_30815__$1);

return statearr_30849;
})();
var statearr_30850_30872 = state_30838__$1;
(statearr_30850_30872[(2)] = null);

(statearr_30850_30872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30839 === (9))){
var state_30838__$1 = state_30838;
var statearr_30851_30873 = state_30838__$1;
(statearr_30851_30873[(2)] = null);

(statearr_30851_30873[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30839 === (5))){
var state_30838__$1 = state_30838;
var statearr_30852_30874 = state_30838__$1;
(statearr_30852_30874[(2)] = null);

(statearr_30852_30874[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30839 === (10))){
var inst_30830 = (state_30838[(2)]);
var state_30838__$1 = state_30838;
var statearr_30853_30875 = state_30838__$1;
(statearr_30853_30875[(2)] = inst_30830);

(statearr_30853_30875[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30839 === (8))){
var inst_30820 = (state_30838[(7)]);
var state_30838__$1 = state_30838;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30838__$1,(11),out,inst_30820);
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
});})(c__28644__auto___30865,out))
;
return ((function (switch__28579__auto__,c__28644__auto___30865,out){
return (function() {
var cljs$core$async$state_machine__28580__auto__ = null;
var cljs$core$async$state_machine__28580__auto____0 = (function (){
var statearr_30857 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30857[(0)] = cljs$core$async$state_machine__28580__auto__);

(statearr_30857[(1)] = (1));

return statearr_30857;
});
var cljs$core$async$state_machine__28580__auto____1 = (function (state_30838){
while(true){
var ret_value__28581__auto__ = (function (){try{while(true){
var result__28582__auto__ = switch__28579__auto__.call(null,state_30838);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28582__auto__;
}
break;
}
}catch (e30858){if((e30858 instanceof Object)){
var ex__28583__auto__ = e30858;
var statearr_30859_30876 = state_30838;
(statearr_30859_30876[(5)] = ex__28583__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30858;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30877 = state_30838;
state_30838 = G__30877;
continue;
} else {
return ret_value__28581__auto__;
}
break;
}
});
cljs$core$async$state_machine__28580__auto__ = function(state_30838){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28580__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28580__auto____1.call(this,state_30838);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28580__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28580__auto____0;
cljs$core$async$state_machine__28580__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28580__auto____1;
return cljs$core$async$state_machine__28580__auto__;
})()
;})(switch__28579__auto__,c__28644__auto___30865,out))
})();
var state__28646__auto__ = (function (){var statearr_30860 = f__28645__auto__.call(null);
(statearr_30860[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28644__auto___30865);

return statearr_30860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28646__auto__);
});})(c__28644__auto___30865,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30885 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30885 = (function (f,ch,meta30886){
this.f = f;
this.ch = ch;
this.meta30886 = meta30886;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30885.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30887,meta30886__$1){
var self__ = this;
var _30887__$1 = this;
return (new cljs.core.async.t_cljs$core$async30885(self__.f,self__.ch,meta30886__$1));
});

cljs.core.async.t_cljs$core$async30885.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30887){
var self__ = this;
var _30887__$1 = this;
return self__.meta30886;
});

cljs.core.async.t_cljs$core$async30885.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30885.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30885.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30885.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30885.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async30888 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30888 = (function (f,ch,meta30886,_,fn1,meta30889){
this.f = f;
this.ch = ch;
this.meta30886 = meta30886;
this._ = _;
this.fn1 = fn1;
this.meta30889 = meta30889;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30888.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30890,meta30889__$1){
var self__ = this;
var _30890__$1 = this;
return (new cljs.core.async.t_cljs$core$async30888(self__.f,self__.ch,self__.meta30886,self__._,self__.fn1,meta30889__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async30888.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30890){
var self__ = this;
var _30890__$1 = this;
return self__.meta30889;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30888.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30888.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30888.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30888.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30878_SHARP_){
return f1.call(null,(((p1__30878_SHARP_ == null))?null:self__.f.call(null,p1__30878_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async30888.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30886","meta30886",1657928534,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async30885","cljs.core.async/t_cljs$core$async30885",-710949086,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30889","meta30889",1643013802,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30888.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30888.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30888";

cljs.core.async.t_cljs$core$async30888.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__27042__auto__,writer__27043__auto__,opt__27044__auto__){
return cljs.core._write.call(null,writer__27043__auto__,"cljs.core.async/t_cljs$core$async30888");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async30888 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30888(f__$1,ch__$1,meta30886__$1,___$2,fn1__$1,meta30889){
return (new cljs.core.async.t_cljs$core$async30888(f__$1,ch__$1,meta30886__$1,___$2,fn1__$1,meta30889));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async30888(self__.f,self__.ch,self__.meta30886,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__26419__auto__ = ret;
if(cljs.core.truth_(and__26419__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__26419__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async30885.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30885.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async30885.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30886","meta30886",1657928534,null)], null);
});

cljs.core.async.t_cljs$core$async30885.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30885.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30885";

cljs.core.async.t_cljs$core$async30885.cljs$lang$ctorPrWriter = (function (this__27042__auto__,writer__27043__auto__,opt__27044__auto__){
return cljs.core._write.call(null,writer__27043__auto__,"cljs.core.async/t_cljs$core$async30885");
});

cljs.core.async.__GT_t_cljs$core$async30885 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30885(f__$1,ch__$1,meta30886){
return (new cljs.core.async.t_cljs$core$async30885(f__$1,ch__$1,meta30886));
});

}

return (new cljs.core.async.t_cljs$core$async30885(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30894 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30894 = (function (f,ch,meta30895){
this.f = f;
this.ch = ch;
this.meta30895 = meta30895;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30894.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30896,meta30895__$1){
var self__ = this;
var _30896__$1 = this;
return (new cljs.core.async.t_cljs$core$async30894(self__.f,self__.ch,meta30895__$1));
});

cljs.core.async.t_cljs$core$async30894.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30896){
var self__ = this;
var _30896__$1 = this;
return self__.meta30895;
});

cljs.core.async.t_cljs$core$async30894.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30894.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30894.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30894.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30894.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30894.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async30894.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30895","meta30895",-444132911,null)], null);
});

cljs.core.async.t_cljs$core$async30894.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30894.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30894";

cljs.core.async.t_cljs$core$async30894.cljs$lang$ctorPrWriter = (function (this__27042__auto__,writer__27043__auto__,opt__27044__auto__){
return cljs.core._write.call(null,writer__27043__auto__,"cljs.core.async/t_cljs$core$async30894");
});

cljs.core.async.__GT_t_cljs$core$async30894 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async30894(f__$1,ch__$1,meta30895){
return (new cljs.core.async.t_cljs$core$async30894(f__$1,ch__$1,meta30895));
});

}

return (new cljs.core.async.t_cljs$core$async30894(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async30900 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30900 = (function (p,ch,meta30901){
this.p = p;
this.ch = ch;
this.meta30901 = meta30901;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30900.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30902,meta30901__$1){
var self__ = this;
var _30902__$1 = this;
return (new cljs.core.async.t_cljs$core$async30900(self__.p,self__.ch,meta30901__$1));
});

cljs.core.async.t_cljs$core$async30900.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30902){
var self__ = this;
var _30902__$1 = this;
return self__.meta30901;
});

cljs.core.async.t_cljs$core$async30900.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30900.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30900.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30900.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30900.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30900.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30900.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async30900.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30901","meta30901",1026068460,null)], null);
});

cljs.core.async.t_cljs$core$async30900.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30900.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30900";

cljs.core.async.t_cljs$core$async30900.cljs$lang$ctorPrWriter = (function (this__27042__auto__,writer__27043__auto__,opt__27044__auto__){
return cljs.core._write.call(null,writer__27043__auto__,"cljs.core.async/t_cljs$core$async30900");
});

cljs.core.async.__GT_t_cljs$core$async30900 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async30900(p__$1,ch__$1,meta30901){
return (new cljs.core.async.t_cljs$core$async30900(p__$1,ch__$1,meta30901));
});

}

return (new cljs.core.async.t_cljs$core$async30900(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args30903 = [];
var len__27544__auto___30947 = arguments.length;
var i__27545__auto___30948 = (0);
while(true){
if((i__27545__auto___30948 < len__27544__auto___30947)){
args30903.push((arguments[i__27545__auto___30948]));

var G__30949 = (i__27545__auto___30948 + (1));
i__27545__auto___30948 = G__30949;
continue;
} else {
}
break;
}

var G__30905 = args30903.length;
switch (G__30905) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30903.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28644__auto___30951 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28644__auto___30951,out){
return (function (){
var f__28645__auto__ = (function (){var switch__28579__auto__ = ((function (c__28644__auto___30951,out){
return (function (state_30926){
var state_val_30927 = (state_30926[(1)]);
if((state_val_30927 === (7))){
var inst_30922 = (state_30926[(2)]);
var state_30926__$1 = state_30926;
var statearr_30928_30952 = state_30926__$1;
(statearr_30928_30952[(2)] = inst_30922);

(statearr_30928_30952[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (1))){
var state_30926__$1 = state_30926;
var statearr_30929_30953 = state_30926__$1;
(statearr_30929_30953[(2)] = null);

(statearr_30929_30953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (4))){
var inst_30908 = (state_30926[(7)]);
var inst_30908__$1 = (state_30926[(2)]);
var inst_30909 = (inst_30908__$1 == null);
var state_30926__$1 = (function (){var statearr_30930 = state_30926;
(statearr_30930[(7)] = inst_30908__$1);

return statearr_30930;
})();
if(cljs.core.truth_(inst_30909)){
var statearr_30931_30954 = state_30926__$1;
(statearr_30931_30954[(1)] = (5));

} else {
var statearr_30932_30955 = state_30926__$1;
(statearr_30932_30955[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (6))){
var inst_30908 = (state_30926[(7)]);
var inst_30913 = p.call(null,inst_30908);
var state_30926__$1 = state_30926;
if(cljs.core.truth_(inst_30913)){
var statearr_30933_30956 = state_30926__$1;
(statearr_30933_30956[(1)] = (8));

} else {
var statearr_30934_30957 = state_30926__$1;
(statearr_30934_30957[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (3))){
var inst_30924 = (state_30926[(2)]);
var state_30926__$1 = state_30926;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30926__$1,inst_30924);
} else {
if((state_val_30927 === (2))){
var state_30926__$1 = state_30926;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30926__$1,(4),ch);
} else {
if((state_val_30927 === (11))){
var inst_30916 = (state_30926[(2)]);
var state_30926__$1 = state_30926;
var statearr_30935_30958 = state_30926__$1;
(statearr_30935_30958[(2)] = inst_30916);

(statearr_30935_30958[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (9))){
var state_30926__$1 = state_30926;
var statearr_30936_30959 = state_30926__$1;
(statearr_30936_30959[(2)] = null);

(statearr_30936_30959[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (5))){
var inst_30911 = cljs.core.async.close_BANG_.call(null,out);
var state_30926__$1 = state_30926;
var statearr_30937_30960 = state_30926__$1;
(statearr_30937_30960[(2)] = inst_30911);

(statearr_30937_30960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (10))){
var inst_30919 = (state_30926[(2)]);
var state_30926__$1 = (function (){var statearr_30938 = state_30926;
(statearr_30938[(8)] = inst_30919);

return statearr_30938;
})();
var statearr_30939_30961 = state_30926__$1;
(statearr_30939_30961[(2)] = null);

(statearr_30939_30961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (8))){
var inst_30908 = (state_30926[(7)]);
var state_30926__$1 = state_30926;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30926__$1,(11),out,inst_30908);
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
});})(c__28644__auto___30951,out))
;
return ((function (switch__28579__auto__,c__28644__auto___30951,out){
return (function() {
var cljs$core$async$state_machine__28580__auto__ = null;
var cljs$core$async$state_machine__28580__auto____0 = (function (){
var statearr_30943 = [null,null,null,null,null,null,null,null,null];
(statearr_30943[(0)] = cljs$core$async$state_machine__28580__auto__);

(statearr_30943[(1)] = (1));

return statearr_30943;
});
var cljs$core$async$state_machine__28580__auto____1 = (function (state_30926){
while(true){
var ret_value__28581__auto__ = (function (){try{while(true){
var result__28582__auto__ = switch__28579__auto__.call(null,state_30926);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28582__auto__;
}
break;
}
}catch (e30944){if((e30944 instanceof Object)){
var ex__28583__auto__ = e30944;
var statearr_30945_30962 = state_30926;
(statearr_30945_30962[(5)] = ex__28583__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30926);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30944;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30963 = state_30926;
state_30926 = G__30963;
continue;
} else {
return ret_value__28581__auto__;
}
break;
}
});
cljs$core$async$state_machine__28580__auto__ = function(state_30926){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28580__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28580__auto____1.call(this,state_30926);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28580__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28580__auto____0;
cljs$core$async$state_machine__28580__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28580__auto____1;
return cljs$core$async$state_machine__28580__auto__;
})()
;})(switch__28579__auto__,c__28644__auto___30951,out))
})();
var state__28646__auto__ = (function (){var statearr_30946 = f__28645__auto__.call(null);
(statearr_30946[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28644__auto___30951);

return statearr_30946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28646__auto__);
});})(c__28644__auto___30951,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args30964 = [];
var len__27544__auto___30967 = arguments.length;
var i__27545__auto___30968 = (0);
while(true){
if((i__27545__auto___30968 < len__27544__auto___30967)){
args30964.push((arguments[i__27545__auto___30968]));

var G__30969 = (i__27545__auto___30968 + (1));
i__27545__auto___30968 = G__30969;
continue;
} else {
}
break;
}

var G__30966 = args30964.length;
switch (G__30966) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30964.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__28644__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28644__auto__){
return (function (){
var f__28645__auto__ = (function (){var switch__28579__auto__ = ((function (c__28644__auto__){
return (function (state_31136){
var state_val_31137 = (state_31136[(1)]);
if((state_val_31137 === (7))){
var inst_31132 = (state_31136[(2)]);
var state_31136__$1 = state_31136;
var statearr_31138_31179 = state_31136__$1;
(statearr_31138_31179[(2)] = inst_31132);

(statearr_31138_31179[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (20))){
var inst_31102 = (state_31136[(7)]);
var inst_31113 = (state_31136[(2)]);
var inst_31114 = cljs.core.next.call(null,inst_31102);
var inst_31088 = inst_31114;
var inst_31089 = null;
var inst_31090 = (0);
var inst_31091 = (0);
var state_31136__$1 = (function (){var statearr_31139 = state_31136;
(statearr_31139[(8)] = inst_31091);

(statearr_31139[(9)] = inst_31089);

(statearr_31139[(10)] = inst_31088);

(statearr_31139[(11)] = inst_31090);

(statearr_31139[(12)] = inst_31113);

return statearr_31139;
})();
var statearr_31140_31180 = state_31136__$1;
(statearr_31140_31180[(2)] = null);

(statearr_31140_31180[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (1))){
var state_31136__$1 = state_31136;
var statearr_31141_31181 = state_31136__$1;
(statearr_31141_31181[(2)] = null);

(statearr_31141_31181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (4))){
var inst_31077 = (state_31136[(13)]);
var inst_31077__$1 = (state_31136[(2)]);
var inst_31078 = (inst_31077__$1 == null);
var state_31136__$1 = (function (){var statearr_31142 = state_31136;
(statearr_31142[(13)] = inst_31077__$1);

return statearr_31142;
})();
if(cljs.core.truth_(inst_31078)){
var statearr_31143_31182 = state_31136__$1;
(statearr_31143_31182[(1)] = (5));

} else {
var statearr_31144_31183 = state_31136__$1;
(statearr_31144_31183[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (15))){
var state_31136__$1 = state_31136;
var statearr_31148_31184 = state_31136__$1;
(statearr_31148_31184[(2)] = null);

(statearr_31148_31184[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (21))){
var state_31136__$1 = state_31136;
var statearr_31149_31185 = state_31136__$1;
(statearr_31149_31185[(2)] = null);

(statearr_31149_31185[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (13))){
var inst_31091 = (state_31136[(8)]);
var inst_31089 = (state_31136[(9)]);
var inst_31088 = (state_31136[(10)]);
var inst_31090 = (state_31136[(11)]);
var inst_31098 = (state_31136[(2)]);
var inst_31099 = (inst_31091 + (1));
var tmp31145 = inst_31089;
var tmp31146 = inst_31088;
var tmp31147 = inst_31090;
var inst_31088__$1 = tmp31146;
var inst_31089__$1 = tmp31145;
var inst_31090__$1 = tmp31147;
var inst_31091__$1 = inst_31099;
var state_31136__$1 = (function (){var statearr_31150 = state_31136;
(statearr_31150[(8)] = inst_31091__$1);

(statearr_31150[(9)] = inst_31089__$1);

(statearr_31150[(14)] = inst_31098);

(statearr_31150[(10)] = inst_31088__$1);

(statearr_31150[(11)] = inst_31090__$1);

return statearr_31150;
})();
var statearr_31151_31186 = state_31136__$1;
(statearr_31151_31186[(2)] = null);

(statearr_31151_31186[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (22))){
var state_31136__$1 = state_31136;
var statearr_31152_31187 = state_31136__$1;
(statearr_31152_31187[(2)] = null);

(statearr_31152_31187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (6))){
var inst_31077 = (state_31136[(13)]);
var inst_31086 = f.call(null,inst_31077);
var inst_31087 = cljs.core.seq.call(null,inst_31086);
var inst_31088 = inst_31087;
var inst_31089 = null;
var inst_31090 = (0);
var inst_31091 = (0);
var state_31136__$1 = (function (){var statearr_31153 = state_31136;
(statearr_31153[(8)] = inst_31091);

(statearr_31153[(9)] = inst_31089);

(statearr_31153[(10)] = inst_31088);

(statearr_31153[(11)] = inst_31090);

return statearr_31153;
})();
var statearr_31154_31188 = state_31136__$1;
(statearr_31154_31188[(2)] = null);

(statearr_31154_31188[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (17))){
var inst_31102 = (state_31136[(7)]);
var inst_31106 = cljs.core.chunk_first.call(null,inst_31102);
var inst_31107 = cljs.core.chunk_rest.call(null,inst_31102);
var inst_31108 = cljs.core.count.call(null,inst_31106);
var inst_31088 = inst_31107;
var inst_31089 = inst_31106;
var inst_31090 = inst_31108;
var inst_31091 = (0);
var state_31136__$1 = (function (){var statearr_31155 = state_31136;
(statearr_31155[(8)] = inst_31091);

(statearr_31155[(9)] = inst_31089);

(statearr_31155[(10)] = inst_31088);

(statearr_31155[(11)] = inst_31090);

return statearr_31155;
})();
var statearr_31156_31189 = state_31136__$1;
(statearr_31156_31189[(2)] = null);

(statearr_31156_31189[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (3))){
var inst_31134 = (state_31136[(2)]);
var state_31136__$1 = state_31136;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31136__$1,inst_31134);
} else {
if((state_val_31137 === (12))){
var inst_31122 = (state_31136[(2)]);
var state_31136__$1 = state_31136;
var statearr_31157_31190 = state_31136__$1;
(statearr_31157_31190[(2)] = inst_31122);

(statearr_31157_31190[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (2))){
var state_31136__$1 = state_31136;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31136__$1,(4),in$);
} else {
if((state_val_31137 === (23))){
var inst_31130 = (state_31136[(2)]);
var state_31136__$1 = state_31136;
var statearr_31158_31191 = state_31136__$1;
(statearr_31158_31191[(2)] = inst_31130);

(statearr_31158_31191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (19))){
var inst_31117 = (state_31136[(2)]);
var state_31136__$1 = state_31136;
var statearr_31159_31192 = state_31136__$1;
(statearr_31159_31192[(2)] = inst_31117);

(statearr_31159_31192[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (11))){
var inst_31102 = (state_31136[(7)]);
var inst_31088 = (state_31136[(10)]);
var inst_31102__$1 = cljs.core.seq.call(null,inst_31088);
var state_31136__$1 = (function (){var statearr_31160 = state_31136;
(statearr_31160[(7)] = inst_31102__$1);

return statearr_31160;
})();
if(inst_31102__$1){
var statearr_31161_31193 = state_31136__$1;
(statearr_31161_31193[(1)] = (14));

} else {
var statearr_31162_31194 = state_31136__$1;
(statearr_31162_31194[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (9))){
var inst_31124 = (state_31136[(2)]);
var inst_31125 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_31136__$1 = (function (){var statearr_31163 = state_31136;
(statearr_31163[(15)] = inst_31124);

return statearr_31163;
})();
if(cljs.core.truth_(inst_31125)){
var statearr_31164_31195 = state_31136__$1;
(statearr_31164_31195[(1)] = (21));

} else {
var statearr_31165_31196 = state_31136__$1;
(statearr_31165_31196[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (5))){
var inst_31080 = cljs.core.async.close_BANG_.call(null,out);
var state_31136__$1 = state_31136;
var statearr_31166_31197 = state_31136__$1;
(statearr_31166_31197[(2)] = inst_31080);

(statearr_31166_31197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (14))){
var inst_31102 = (state_31136[(7)]);
var inst_31104 = cljs.core.chunked_seq_QMARK_.call(null,inst_31102);
var state_31136__$1 = state_31136;
if(inst_31104){
var statearr_31167_31198 = state_31136__$1;
(statearr_31167_31198[(1)] = (17));

} else {
var statearr_31168_31199 = state_31136__$1;
(statearr_31168_31199[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (16))){
var inst_31120 = (state_31136[(2)]);
var state_31136__$1 = state_31136;
var statearr_31169_31200 = state_31136__$1;
(statearr_31169_31200[(2)] = inst_31120);

(statearr_31169_31200[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (10))){
var inst_31091 = (state_31136[(8)]);
var inst_31089 = (state_31136[(9)]);
var inst_31096 = cljs.core._nth.call(null,inst_31089,inst_31091);
var state_31136__$1 = state_31136;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31136__$1,(13),out,inst_31096);
} else {
if((state_val_31137 === (18))){
var inst_31102 = (state_31136[(7)]);
var inst_31111 = cljs.core.first.call(null,inst_31102);
var state_31136__$1 = state_31136;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31136__$1,(20),out,inst_31111);
} else {
if((state_val_31137 === (8))){
var inst_31091 = (state_31136[(8)]);
var inst_31090 = (state_31136[(11)]);
var inst_31093 = (inst_31091 < inst_31090);
var inst_31094 = inst_31093;
var state_31136__$1 = state_31136;
if(cljs.core.truth_(inst_31094)){
var statearr_31170_31201 = state_31136__$1;
(statearr_31170_31201[(1)] = (10));

} else {
var statearr_31171_31202 = state_31136__$1;
(statearr_31171_31202[(1)] = (11));

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
});})(c__28644__auto__))
;
return ((function (switch__28579__auto__,c__28644__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28580__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28580__auto____0 = (function (){
var statearr_31175 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31175[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28580__auto__);

(statearr_31175[(1)] = (1));

return statearr_31175;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28580__auto____1 = (function (state_31136){
while(true){
var ret_value__28581__auto__ = (function (){try{while(true){
var result__28582__auto__ = switch__28579__auto__.call(null,state_31136);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28582__auto__;
}
break;
}
}catch (e31176){if((e31176 instanceof Object)){
var ex__28583__auto__ = e31176;
var statearr_31177_31203 = state_31136;
(statearr_31177_31203[(5)] = ex__28583__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31136);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31176;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31204 = state_31136;
state_31136 = G__31204;
continue;
} else {
return ret_value__28581__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28580__auto__ = function(state_31136){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28580__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28580__auto____1.call(this,state_31136);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__28580__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28580__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28580__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28580__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28580__auto__;
})()
;})(switch__28579__auto__,c__28644__auto__))
})();
var state__28646__auto__ = (function (){var statearr_31178 = f__28645__auto__.call(null);
(statearr_31178[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28644__auto__);

return statearr_31178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28646__auto__);
});})(c__28644__auto__))
);

return c__28644__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args31205 = [];
var len__27544__auto___31208 = arguments.length;
var i__27545__auto___31209 = (0);
while(true){
if((i__27545__auto___31209 < len__27544__auto___31208)){
args31205.push((arguments[i__27545__auto___31209]));

var G__31210 = (i__27545__auto___31209 + (1));
i__27545__auto___31209 = G__31210;
continue;
} else {
}
break;
}

var G__31207 = args31205.length;
switch (G__31207) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31205.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args31212 = [];
var len__27544__auto___31215 = arguments.length;
var i__27545__auto___31216 = (0);
while(true){
if((i__27545__auto___31216 < len__27544__auto___31215)){
args31212.push((arguments[i__27545__auto___31216]));

var G__31217 = (i__27545__auto___31216 + (1));
i__27545__auto___31216 = G__31217;
continue;
} else {
}
break;
}

var G__31214 = args31212.length;
switch (G__31214) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31212.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args31219 = [];
var len__27544__auto___31270 = arguments.length;
var i__27545__auto___31271 = (0);
while(true){
if((i__27545__auto___31271 < len__27544__auto___31270)){
args31219.push((arguments[i__27545__auto___31271]));

var G__31272 = (i__27545__auto___31271 + (1));
i__27545__auto___31271 = G__31272;
continue;
} else {
}
break;
}

var G__31221 = args31219.length;
switch (G__31221) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31219.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28644__auto___31274 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28644__auto___31274,out){
return (function (){
var f__28645__auto__ = (function (){var switch__28579__auto__ = ((function (c__28644__auto___31274,out){
return (function (state_31245){
var state_val_31246 = (state_31245[(1)]);
if((state_val_31246 === (7))){
var inst_31240 = (state_31245[(2)]);
var state_31245__$1 = state_31245;
var statearr_31247_31275 = state_31245__$1;
(statearr_31247_31275[(2)] = inst_31240);

(statearr_31247_31275[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31246 === (1))){
var inst_31222 = null;
var state_31245__$1 = (function (){var statearr_31248 = state_31245;
(statearr_31248[(7)] = inst_31222);

return statearr_31248;
})();
var statearr_31249_31276 = state_31245__$1;
(statearr_31249_31276[(2)] = null);

(statearr_31249_31276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31246 === (4))){
var inst_31225 = (state_31245[(8)]);
var inst_31225__$1 = (state_31245[(2)]);
var inst_31226 = (inst_31225__$1 == null);
var inst_31227 = cljs.core.not.call(null,inst_31226);
var state_31245__$1 = (function (){var statearr_31250 = state_31245;
(statearr_31250[(8)] = inst_31225__$1);

return statearr_31250;
})();
if(inst_31227){
var statearr_31251_31277 = state_31245__$1;
(statearr_31251_31277[(1)] = (5));

} else {
var statearr_31252_31278 = state_31245__$1;
(statearr_31252_31278[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31246 === (6))){
var state_31245__$1 = state_31245;
var statearr_31253_31279 = state_31245__$1;
(statearr_31253_31279[(2)] = null);

(statearr_31253_31279[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31246 === (3))){
var inst_31242 = (state_31245[(2)]);
var inst_31243 = cljs.core.async.close_BANG_.call(null,out);
var state_31245__$1 = (function (){var statearr_31254 = state_31245;
(statearr_31254[(9)] = inst_31242);

return statearr_31254;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31245__$1,inst_31243);
} else {
if((state_val_31246 === (2))){
var state_31245__$1 = state_31245;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31245__$1,(4),ch);
} else {
if((state_val_31246 === (11))){
var inst_31225 = (state_31245[(8)]);
var inst_31234 = (state_31245[(2)]);
var inst_31222 = inst_31225;
var state_31245__$1 = (function (){var statearr_31255 = state_31245;
(statearr_31255[(10)] = inst_31234);

(statearr_31255[(7)] = inst_31222);

return statearr_31255;
})();
var statearr_31256_31280 = state_31245__$1;
(statearr_31256_31280[(2)] = null);

(statearr_31256_31280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31246 === (9))){
var inst_31225 = (state_31245[(8)]);
var state_31245__$1 = state_31245;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31245__$1,(11),out,inst_31225);
} else {
if((state_val_31246 === (5))){
var inst_31225 = (state_31245[(8)]);
var inst_31222 = (state_31245[(7)]);
var inst_31229 = cljs.core._EQ_.call(null,inst_31225,inst_31222);
var state_31245__$1 = state_31245;
if(inst_31229){
var statearr_31258_31281 = state_31245__$1;
(statearr_31258_31281[(1)] = (8));

} else {
var statearr_31259_31282 = state_31245__$1;
(statearr_31259_31282[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31246 === (10))){
var inst_31237 = (state_31245[(2)]);
var state_31245__$1 = state_31245;
var statearr_31260_31283 = state_31245__$1;
(statearr_31260_31283[(2)] = inst_31237);

(statearr_31260_31283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31246 === (8))){
var inst_31222 = (state_31245[(7)]);
var tmp31257 = inst_31222;
var inst_31222__$1 = tmp31257;
var state_31245__$1 = (function (){var statearr_31261 = state_31245;
(statearr_31261[(7)] = inst_31222__$1);

return statearr_31261;
})();
var statearr_31262_31284 = state_31245__$1;
(statearr_31262_31284[(2)] = null);

(statearr_31262_31284[(1)] = (2));


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
});})(c__28644__auto___31274,out))
;
return ((function (switch__28579__auto__,c__28644__auto___31274,out){
return (function() {
var cljs$core$async$state_machine__28580__auto__ = null;
var cljs$core$async$state_machine__28580__auto____0 = (function (){
var statearr_31266 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31266[(0)] = cljs$core$async$state_machine__28580__auto__);

(statearr_31266[(1)] = (1));

return statearr_31266;
});
var cljs$core$async$state_machine__28580__auto____1 = (function (state_31245){
while(true){
var ret_value__28581__auto__ = (function (){try{while(true){
var result__28582__auto__ = switch__28579__auto__.call(null,state_31245);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28582__auto__;
}
break;
}
}catch (e31267){if((e31267 instanceof Object)){
var ex__28583__auto__ = e31267;
var statearr_31268_31285 = state_31245;
(statearr_31268_31285[(5)] = ex__28583__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31245);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31267;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31286 = state_31245;
state_31245 = G__31286;
continue;
} else {
return ret_value__28581__auto__;
}
break;
}
});
cljs$core$async$state_machine__28580__auto__ = function(state_31245){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28580__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28580__auto____1.call(this,state_31245);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28580__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28580__auto____0;
cljs$core$async$state_machine__28580__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28580__auto____1;
return cljs$core$async$state_machine__28580__auto__;
})()
;})(switch__28579__auto__,c__28644__auto___31274,out))
})();
var state__28646__auto__ = (function (){var statearr_31269 = f__28645__auto__.call(null);
(statearr_31269[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28644__auto___31274);

return statearr_31269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28646__auto__);
});})(c__28644__auto___31274,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args31287 = [];
var len__27544__auto___31357 = arguments.length;
var i__27545__auto___31358 = (0);
while(true){
if((i__27545__auto___31358 < len__27544__auto___31357)){
args31287.push((arguments[i__27545__auto___31358]));

var G__31359 = (i__27545__auto___31358 + (1));
i__27545__auto___31358 = G__31359;
continue;
} else {
}
break;
}

var G__31289 = args31287.length;
switch (G__31289) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31287.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28644__auto___31361 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28644__auto___31361,out){
return (function (){
var f__28645__auto__ = (function (){var switch__28579__auto__ = ((function (c__28644__auto___31361,out){
return (function (state_31327){
var state_val_31328 = (state_31327[(1)]);
if((state_val_31328 === (7))){
var inst_31323 = (state_31327[(2)]);
var state_31327__$1 = state_31327;
var statearr_31329_31362 = state_31327__$1;
(statearr_31329_31362[(2)] = inst_31323);

(statearr_31329_31362[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31328 === (1))){
var inst_31290 = (new Array(n));
var inst_31291 = inst_31290;
var inst_31292 = (0);
var state_31327__$1 = (function (){var statearr_31330 = state_31327;
(statearr_31330[(7)] = inst_31292);

(statearr_31330[(8)] = inst_31291);

return statearr_31330;
})();
var statearr_31331_31363 = state_31327__$1;
(statearr_31331_31363[(2)] = null);

(statearr_31331_31363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31328 === (4))){
var inst_31295 = (state_31327[(9)]);
var inst_31295__$1 = (state_31327[(2)]);
var inst_31296 = (inst_31295__$1 == null);
var inst_31297 = cljs.core.not.call(null,inst_31296);
var state_31327__$1 = (function (){var statearr_31332 = state_31327;
(statearr_31332[(9)] = inst_31295__$1);

return statearr_31332;
})();
if(inst_31297){
var statearr_31333_31364 = state_31327__$1;
(statearr_31333_31364[(1)] = (5));

} else {
var statearr_31334_31365 = state_31327__$1;
(statearr_31334_31365[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31328 === (15))){
var inst_31317 = (state_31327[(2)]);
var state_31327__$1 = state_31327;
var statearr_31335_31366 = state_31327__$1;
(statearr_31335_31366[(2)] = inst_31317);

(statearr_31335_31366[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31328 === (13))){
var state_31327__$1 = state_31327;
var statearr_31336_31367 = state_31327__$1;
(statearr_31336_31367[(2)] = null);

(statearr_31336_31367[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31328 === (6))){
var inst_31292 = (state_31327[(7)]);
var inst_31313 = (inst_31292 > (0));
var state_31327__$1 = state_31327;
if(cljs.core.truth_(inst_31313)){
var statearr_31337_31368 = state_31327__$1;
(statearr_31337_31368[(1)] = (12));

} else {
var statearr_31338_31369 = state_31327__$1;
(statearr_31338_31369[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31328 === (3))){
var inst_31325 = (state_31327[(2)]);
var state_31327__$1 = state_31327;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31327__$1,inst_31325);
} else {
if((state_val_31328 === (12))){
var inst_31291 = (state_31327[(8)]);
var inst_31315 = cljs.core.vec.call(null,inst_31291);
var state_31327__$1 = state_31327;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31327__$1,(15),out,inst_31315);
} else {
if((state_val_31328 === (2))){
var state_31327__$1 = state_31327;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31327__$1,(4),ch);
} else {
if((state_val_31328 === (11))){
var inst_31307 = (state_31327[(2)]);
var inst_31308 = (new Array(n));
var inst_31291 = inst_31308;
var inst_31292 = (0);
var state_31327__$1 = (function (){var statearr_31339 = state_31327;
(statearr_31339[(7)] = inst_31292);

(statearr_31339[(8)] = inst_31291);

(statearr_31339[(10)] = inst_31307);

return statearr_31339;
})();
var statearr_31340_31370 = state_31327__$1;
(statearr_31340_31370[(2)] = null);

(statearr_31340_31370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31328 === (9))){
var inst_31291 = (state_31327[(8)]);
var inst_31305 = cljs.core.vec.call(null,inst_31291);
var state_31327__$1 = state_31327;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31327__$1,(11),out,inst_31305);
} else {
if((state_val_31328 === (5))){
var inst_31292 = (state_31327[(7)]);
var inst_31291 = (state_31327[(8)]);
var inst_31295 = (state_31327[(9)]);
var inst_31300 = (state_31327[(11)]);
var inst_31299 = (inst_31291[inst_31292] = inst_31295);
var inst_31300__$1 = (inst_31292 + (1));
var inst_31301 = (inst_31300__$1 < n);
var state_31327__$1 = (function (){var statearr_31341 = state_31327;
(statearr_31341[(12)] = inst_31299);

(statearr_31341[(11)] = inst_31300__$1);

return statearr_31341;
})();
if(cljs.core.truth_(inst_31301)){
var statearr_31342_31371 = state_31327__$1;
(statearr_31342_31371[(1)] = (8));

} else {
var statearr_31343_31372 = state_31327__$1;
(statearr_31343_31372[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31328 === (14))){
var inst_31320 = (state_31327[(2)]);
var inst_31321 = cljs.core.async.close_BANG_.call(null,out);
var state_31327__$1 = (function (){var statearr_31345 = state_31327;
(statearr_31345[(13)] = inst_31320);

return statearr_31345;
})();
var statearr_31346_31373 = state_31327__$1;
(statearr_31346_31373[(2)] = inst_31321);

(statearr_31346_31373[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31328 === (10))){
var inst_31311 = (state_31327[(2)]);
var state_31327__$1 = state_31327;
var statearr_31347_31374 = state_31327__$1;
(statearr_31347_31374[(2)] = inst_31311);

(statearr_31347_31374[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31328 === (8))){
var inst_31291 = (state_31327[(8)]);
var inst_31300 = (state_31327[(11)]);
var tmp31344 = inst_31291;
var inst_31291__$1 = tmp31344;
var inst_31292 = inst_31300;
var state_31327__$1 = (function (){var statearr_31348 = state_31327;
(statearr_31348[(7)] = inst_31292);

(statearr_31348[(8)] = inst_31291__$1);

return statearr_31348;
})();
var statearr_31349_31375 = state_31327__$1;
(statearr_31349_31375[(2)] = null);

(statearr_31349_31375[(1)] = (2));


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
});})(c__28644__auto___31361,out))
;
return ((function (switch__28579__auto__,c__28644__auto___31361,out){
return (function() {
var cljs$core$async$state_machine__28580__auto__ = null;
var cljs$core$async$state_machine__28580__auto____0 = (function (){
var statearr_31353 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31353[(0)] = cljs$core$async$state_machine__28580__auto__);

(statearr_31353[(1)] = (1));

return statearr_31353;
});
var cljs$core$async$state_machine__28580__auto____1 = (function (state_31327){
while(true){
var ret_value__28581__auto__ = (function (){try{while(true){
var result__28582__auto__ = switch__28579__auto__.call(null,state_31327);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28582__auto__;
}
break;
}
}catch (e31354){if((e31354 instanceof Object)){
var ex__28583__auto__ = e31354;
var statearr_31355_31376 = state_31327;
(statearr_31355_31376[(5)] = ex__28583__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31327);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31354;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31377 = state_31327;
state_31327 = G__31377;
continue;
} else {
return ret_value__28581__auto__;
}
break;
}
});
cljs$core$async$state_machine__28580__auto__ = function(state_31327){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28580__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28580__auto____1.call(this,state_31327);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28580__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28580__auto____0;
cljs$core$async$state_machine__28580__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28580__auto____1;
return cljs$core$async$state_machine__28580__auto__;
})()
;})(switch__28579__auto__,c__28644__auto___31361,out))
})();
var state__28646__auto__ = (function (){var statearr_31356 = f__28645__auto__.call(null);
(statearr_31356[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28644__auto___31361);

return statearr_31356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28646__auto__);
});})(c__28644__auto___31361,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args31378 = [];
var len__27544__auto___31452 = arguments.length;
var i__27545__auto___31453 = (0);
while(true){
if((i__27545__auto___31453 < len__27544__auto___31452)){
args31378.push((arguments[i__27545__auto___31453]));

var G__31454 = (i__27545__auto___31453 + (1));
i__27545__auto___31453 = G__31454;
continue;
} else {
}
break;
}

var G__31380 = args31378.length;
switch (G__31380) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31378.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28644__auto___31456 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28644__auto___31456,out){
return (function (){
var f__28645__auto__ = (function (){var switch__28579__auto__ = ((function (c__28644__auto___31456,out){
return (function (state_31422){
var state_val_31423 = (state_31422[(1)]);
if((state_val_31423 === (7))){
var inst_31418 = (state_31422[(2)]);
var state_31422__$1 = state_31422;
var statearr_31424_31457 = state_31422__$1;
(statearr_31424_31457[(2)] = inst_31418);

(statearr_31424_31457[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (1))){
var inst_31381 = [];
var inst_31382 = inst_31381;
var inst_31383 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31422__$1 = (function (){var statearr_31425 = state_31422;
(statearr_31425[(7)] = inst_31383);

(statearr_31425[(8)] = inst_31382);

return statearr_31425;
})();
var statearr_31426_31458 = state_31422__$1;
(statearr_31426_31458[(2)] = null);

(statearr_31426_31458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (4))){
var inst_31386 = (state_31422[(9)]);
var inst_31386__$1 = (state_31422[(2)]);
var inst_31387 = (inst_31386__$1 == null);
var inst_31388 = cljs.core.not.call(null,inst_31387);
var state_31422__$1 = (function (){var statearr_31427 = state_31422;
(statearr_31427[(9)] = inst_31386__$1);

return statearr_31427;
})();
if(inst_31388){
var statearr_31428_31459 = state_31422__$1;
(statearr_31428_31459[(1)] = (5));

} else {
var statearr_31429_31460 = state_31422__$1;
(statearr_31429_31460[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (15))){
var inst_31412 = (state_31422[(2)]);
var state_31422__$1 = state_31422;
var statearr_31430_31461 = state_31422__$1;
(statearr_31430_31461[(2)] = inst_31412);

(statearr_31430_31461[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (13))){
var state_31422__$1 = state_31422;
var statearr_31431_31462 = state_31422__$1;
(statearr_31431_31462[(2)] = null);

(statearr_31431_31462[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (6))){
var inst_31382 = (state_31422[(8)]);
var inst_31407 = inst_31382.length;
var inst_31408 = (inst_31407 > (0));
var state_31422__$1 = state_31422;
if(cljs.core.truth_(inst_31408)){
var statearr_31432_31463 = state_31422__$1;
(statearr_31432_31463[(1)] = (12));

} else {
var statearr_31433_31464 = state_31422__$1;
(statearr_31433_31464[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (3))){
var inst_31420 = (state_31422[(2)]);
var state_31422__$1 = state_31422;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31422__$1,inst_31420);
} else {
if((state_val_31423 === (12))){
var inst_31382 = (state_31422[(8)]);
var inst_31410 = cljs.core.vec.call(null,inst_31382);
var state_31422__$1 = state_31422;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31422__$1,(15),out,inst_31410);
} else {
if((state_val_31423 === (2))){
var state_31422__$1 = state_31422;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31422__$1,(4),ch);
} else {
if((state_val_31423 === (11))){
var inst_31390 = (state_31422[(10)]);
var inst_31386 = (state_31422[(9)]);
var inst_31400 = (state_31422[(2)]);
var inst_31401 = [];
var inst_31402 = inst_31401.push(inst_31386);
var inst_31382 = inst_31401;
var inst_31383 = inst_31390;
var state_31422__$1 = (function (){var statearr_31434 = state_31422;
(statearr_31434[(7)] = inst_31383);

(statearr_31434[(11)] = inst_31402);

(statearr_31434[(8)] = inst_31382);

(statearr_31434[(12)] = inst_31400);

return statearr_31434;
})();
var statearr_31435_31465 = state_31422__$1;
(statearr_31435_31465[(2)] = null);

(statearr_31435_31465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (9))){
var inst_31382 = (state_31422[(8)]);
var inst_31398 = cljs.core.vec.call(null,inst_31382);
var state_31422__$1 = state_31422;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31422__$1,(11),out,inst_31398);
} else {
if((state_val_31423 === (5))){
var inst_31390 = (state_31422[(10)]);
var inst_31383 = (state_31422[(7)]);
var inst_31386 = (state_31422[(9)]);
var inst_31390__$1 = f.call(null,inst_31386);
var inst_31391 = cljs.core._EQ_.call(null,inst_31390__$1,inst_31383);
var inst_31392 = cljs.core.keyword_identical_QMARK_.call(null,inst_31383,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31393 = (inst_31391) || (inst_31392);
var state_31422__$1 = (function (){var statearr_31436 = state_31422;
(statearr_31436[(10)] = inst_31390__$1);

return statearr_31436;
})();
if(cljs.core.truth_(inst_31393)){
var statearr_31437_31466 = state_31422__$1;
(statearr_31437_31466[(1)] = (8));

} else {
var statearr_31438_31467 = state_31422__$1;
(statearr_31438_31467[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (14))){
var inst_31415 = (state_31422[(2)]);
var inst_31416 = cljs.core.async.close_BANG_.call(null,out);
var state_31422__$1 = (function (){var statearr_31440 = state_31422;
(statearr_31440[(13)] = inst_31415);

return statearr_31440;
})();
var statearr_31441_31468 = state_31422__$1;
(statearr_31441_31468[(2)] = inst_31416);

(statearr_31441_31468[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (10))){
var inst_31405 = (state_31422[(2)]);
var state_31422__$1 = state_31422;
var statearr_31442_31469 = state_31422__$1;
(statearr_31442_31469[(2)] = inst_31405);

(statearr_31442_31469[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (8))){
var inst_31390 = (state_31422[(10)]);
var inst_31382 = (state_31422[(8)]);
var inst_31386 = (state_31422[(9)]);
var inst_31395 = inst_31382.push(inst_31386);
var tmp31439 = inst_31382;
var inst_31382__$1 = tmp31439;
var inst_31383 = inst_31390;
var state_31422__$1 = (function (){var statearr_31443 = state_31422;
(statearr_31443[(7)] = inst_31383);

(statearr_31443[(14)] = inst_31395);

(statearr_31443[(8)] = inst_31382__$1);

return statearr_31443;
})();
var statearr_31444_31470 = state_31422__$1;
(statearr_31444_31470[(2)] = null);

(statearr_31444_31470[(1)] = (2));


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
});})(c__28644__auto___31456,out))
;
return ((function (switch__28579__auto__,c__28644__auto___31456,out){
return (function() {
var cljs$core$async$state_machine__28580__auto__ = null;
var cljs$core$async$state_machine__28580__auto____0 = (function (){
var statearr_31448 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31448[(0)] = cljs$core$async$state_machine__28580__auto__);

(statearr_31448[(1)] = (1));

return statearr_31448;
});
var cljs$core$async$state_machine__28580__auto____1 = (function (state_31422){
while(true){
var ret_value__28581__auto__ = (function (){try{while(true){
var result__28582__auto__ = switch__28579__auto__.call(null,state_31422);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28582__auto__;
}
break;
}
}catch (e31449){if((e31449 instanceof Object)){
var ex__28583__auto__ = e31449;
var statearr_31450_31471 = state_31422;
(statearr_31450_31471[(5)] = ex__28583__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31422);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31449;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31472 = state_31422;
state_31422 = G__31472;
continue;
} else {
return ret_value__28581__auto__;
}
break;
}
});
cljs$core$async$state_machine__28580__auto__ = function(state_31422){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28580__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28580__auto____1.call(this,state_31422);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28580__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28580__auto____0;
cljs$core$async$state_machine__28580__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28580__auto____1;
return cljs$core$async$state_machine__28580__auto__;
})()
;})(switch__28579__auto__,c__28644__auto___31456,out))
})();
var state__28646__auto__ = (function (){var statearr_31451 = f__28645__auto__.call(null);
(statearr_31451[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28644__auto___31456);

return statearr_31451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28646__auto__);
});})(c__28644__auto___31456,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1498408745486