// Compiled by ClojureScript 0.0-2913 {}
goog.provide('reagent.ratom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
if(typeof reagent.ratom.debug !== 'undefined'){
} else {
reagent.ratom.debug = false;
}
if(typeof reagent.ratom._running !== 'undefined'){
} else {
reagent.ratom._running = cljs.core.atom.call(null,(0));
}
reagent.ratom.running = (function running(){
return cljs.core.deref.call(null,reagent.ratom._running);
});
reagent.ratom.capture_derefed = (function capture_derefed(f,obj){
obj.cljsCaptured = null;

var _STAR_ratom_context_STAR_5318 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = obj;

try{return f.call(null);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_5318;
}});
reagent.ratom.captured = (function captured(obj){
var c = obj.cljsCaptured;
obj.cljsCaptured = null;

return c;
});
reagent.ratom.notify_deref_watcher_BANG_ = (function notify_deref_watcher_BANG_(derefable){
var obj = reagent.ratom._STAR_ratom_context_STAR_;
if((obj == null)){
return null;
} else {
var captured = obj.cljsCaptured;
return obj.cljsCaptured = reagent.ratom.conj.call(null,(((captured == null))?cljs.core.PersistentHashSet.EMPTY:captured),derefable);
}
});

reagent.ratom.IReactiveAtom = (function (){var obj5320 = {};
return obj5320;
})();


/**
* @constructor
*/
reagent.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
})
reagent.ratom.RAtom.prototype.reagent$ratom$IReactiveAtom$ = true;

reagent.ratom.RAtom.prototype.reagent$ratom$IPrintWithWriter$ = true;

reagent.ratom.RAtom.prototype.reagent$ratom$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
reagent.ratom._write.call(null,writer,"#<Atom: ");

reagent.ratom.pr_writer.call(null,self__.state,writer,opts);

return reagent.ratom._write.call(null,writer,">");
});

reagent.ratom.RAtom.prototype.reagent$ratom$IMeta$ = true;

reagent.ratom.RAtom.prototype.reagent$ratom$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

reagent.ratom.RAtom.prototype.reagent$ratom$IHash$ = true;

reagent.ratom.RAtom.prototype.reagent$ratom$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

reagent.ratom.RAtom.prototype.reagent$ratom$IEquiv$ = true;

reagent.ratom.RAtom.prototype.reagent$ratom$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.RAtom.prototype.reagent$ratom$IReset$ = true;

reagent.ratom.RAtom.prototype.reagent$ratom$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
if((self__.validator == null)){
} else {
if(cljs.core.truth_(self__.validator.call(null,new_value))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validator","validator",-325659154,null),new cljs.core.Symbol(null,"new-value","new-value",-1567397401,null))))].join('')));
}
}

var old_value = self__.state;
self__.state = new_value;

if((self__.watches == null)){
} else {
reagent.ratom._notify_watches.call(null,a__$1,old_value,new_value);
}

return new_value;
});

reagent.ratom.RAtom.prototype.reagent$ratom$ISwap$ = true;

reagent.ratom.RAtom.prototype.reagent$ratom$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return reagent.ratom._reset_BANG_.call(null,a__$1,f.call(null,self__.state));
});

reagent.ratom.RAtom.prototype.reagent$ratom$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return reagent.ratom._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x));
});

reagent.ratom.RAtom.prototype.reagent$ratom$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return reagent.ratom._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x,y));
});

reagent.ratom.RAtom.prototype.reagent$ratom$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return reagent.ratom._reset_BANG_.call(null,a__$1,reagent.ratom.apply.call(null,f,self__.state,x,y,more));
});

reagent.ratom.RAtom.prototype.reagent$ratom$IAtom$ = true;

reagent.ratom.RAtom.prototype.reagent$ratom$IWatchable$ = true;

reagent.ratom.RAtom.prototype.reagent$ratom$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.reduce_kv.call(null,((function (this$__$1){
return (function (_,key,f){
f.call(null,key,this$__$1,oldval,newval);

return null;
});})(this$__$1))
,null,self__.watches);
});

reagent.ratom.RAtom.prototype.reagent$ratom$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return self__.watches = reagent.ratom.assoc.call(null,self__.watches,key,f);
});

reagent.ratom.RAtom.prototype.reagent$ratom$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return self__.watches = reagent.ratom.dissoc.call(null,self__.watches,key);
});

reagent.ratom.RAtom.prototype.reagent$ratom$IDeref$ = true;

reagent.ratom.RAtom.prototype.reagent$ratom$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);

return self__.state;
});

reagent.ratom.RAtom.cljs$lang$type = true;

reagent.ratom.RAtom.cljs$lang$ctorStr = "reagent.ratom/RAtom";

reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"reagent.ratom/RAtom");
});

reagent.ratom.__GT_RAtom = (function __GT_RAtom(state,meta,validator,watches){
return (new reagent.ratom.RAtom(state,meta,validator,watches));
});

/**
* Like clojure.core/atom, except that it keeps track of derefs.
* @param {...*} var_args
*/
reagent.ratom.atom = (function() {
var atom = null;
var atom__1 = (function (x){
return (new reagent.ratom.RAtom(x,null,null,null));
});
var atom__2 = (function() { 
var G__5324__delegate = function (x,p__5321){
var map__5323 = p__5321;
var map__5323__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5323))?cljs.core.apply.call(null,cljs.core.hash_map,map__5323):map__5323);
var validator = cljs.core.get.call(null,map__5323__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));
var meta = cljs.core.get.call(null,map__5323__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
return (new reagent.ratom.RAtom(x,meta,validator,null));
};
var G__5324 = function (x,var_args){
var p__5321 = null;
if (arguments.length > 1) {
var G__5325__i = 0, G__5325__a = new Array(arguments.length -  1);
while (G__5325__i < G__5325__a.length) {G__5325__a[G__5325__i] = arguments[G__5325__i + 1]; ++G__5325__i;}
  p__5321 = new cljs.core.IndexedSeq(G__5325__a,0);
} 
return G__5324__delegate.call(this,x,p__5321);};
G__5324.cljs$lang$maxFixedArity = 1;
G__5324.cljs$lang$applyTo = (function (arglist__5326){
var x = cljs.core.first(arglist__5326);
var p__5321 = cljs.core.rest(arglist__5326);
return G__5324__delegate(x,p__5321);
});
G__5324.cljs$core$IFn$_invoke$arity$variadic = G__5324__delegate;
return G__5324;
})()
;
atom = function(x,var_args){
var p__5321 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
var G__5327 = null;
if (arguments.length > 1) {
var G__5328__i = 0, G__5328__a = new Array(arguments.length -  1);
while (G__5328__i < G__5328__a.length) {G__5328__a[G__5328__i] = arguments[G__5328__i + 1]; ++G__5328__i;}
G__5327 = new cljs.core.IndexedSeq(G__5328__a,0);
}
return atom__2.cljs$core$IFn$_invoke$arity$variadic(x, G__5327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$core$IFn$_invoke$arity$1 = atom__1;
atom.cljs$core$IFn$_invoke$arity$variadic = atom__2.cljs$core$IFn$_invoke$arity$variadic;
return atom;
})()
;

/**
* @constructor
*/
reagent.ratom.RCursor = (function (ratom,path,reaction){
this.ratom = ratom;
this.path = path;
this.reaction = reaction;
})
reagent.ratom.RCursor.prototype._reaction = (function (){
var self__ = this;
var this$ = this;
if((self__.reaction == null)){
return self__.reaction = (cljs.core.truth_((function (){var G__5335 = self__.ratom;
if(G__5335){
var bit__4662__auto__ = null;
if(cljs.core.truth_((function (){var or__3981__auto__ = bit__4662__auto__;
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return G__5335.reagent$ratom$IDeref$;
}
})())){
return true;
} else {
if((!G__5335.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IDeref,G__5335);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IDeref,G__5335);
}
})())?reagent.ratom.make_reaction.call(null,((function (this$){
return (function (){
return reagent.ratom.get_in.call(null,cljs.core.deref.call(null,self__.ratom),self__.path);
});})(this$))
,new cljs.core.Keyword(null,"on-set","on-set",-140953470),(cljs.core.truth_(reagent.ratom._EQ_.call(null,self__.path,cljs.core.PersistentVector.EMPTY))?((function (this$){
return (function (p1__5330_SHARP_,p2__5329_SHARP_){
return reagent.ratom.reset_BANG_.call(null,self__.ratom,p2__5329_SHARP_);
});})(this$))
:((function (this$){
return (function (p1__5332_SHARP_,p2__5331_SHARP_){
return reagent.ratom.swap_BANG_.call(null,self__.ratom,reagent.ratom.assoc_in,self__.path,p2__5331_SHARP_);
});})(this$))
)):reagent.ratom.make_reaction.call(null,((function (this$){
return (function (){
return self__.ratom.call(null,self__.path);
});})(this$))
,new cljs.core.Keyword(null,"on-set","on-set",-140953470),((function (this$){
return (function (p1__5334_SHARP_,p2__5333_SHARP_){
return self__.ratom.call(null,self__.path,p2__5333_SHARP_);
});})(this$))
));
} else {
return self__.reaction;
}
});

reagent.ratom.RCursor.prototype._peek = (function (){
var self__ = this;
var this$ = this;
var _STAR_ratom_context_STAR_5336 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = null;

try{return reagent.ratom._deref.call(null,this$._reaction());
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_5336;
}});

reagent.ratom.RCursor.prototype.reagent$ratom$IReactiveAtom$ = true;

reagent.ratom.RCursor.prototype.reagent$ratom$IPrintWithWriter$ = true;

reagent.ratom.RCursor.prototype.reagent$ratom$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
reagent.ratom._write.call(null,writer,[cljs.core.str("#<Cursor: "),cljs.core.str(self__.path),cljs.core.str(" ")].join(''));

reagent.ratom.pr_writer.call(null,a__$1._peek(),writer,opts);

return reagent.ratom._write.call(null,writer,">");
});

reagent.ratom.RCursor.prototype.reagent$ratom$IHash$ = true;

reagent.ratom.RCursor.prototype.reagent$ratom$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.hash.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.ratom,self__.path], null));
});

reagent.ratom.RCursor.prototype.reagent$ratom$IEquiv$ = true;

reagent.ratom.RCursor.prototype.reagent$ratom$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
var and__3969__auto__ = (other instanceof reagent.ratom.RCursor);
if(and__3969__auto__){
var and__3969__auto____$1 = reagent.ratom._EQ_.call(null,self__.path,other.path);
if(cljs.core.truth_(and__3969__auto____$1)){
return reagent.ratom._EQ_.call(null,self__.ratom,other.ratom);
} else {
return and__3969__auto____$1;
}
} else {
return and__3969__auto__;
}
});

reagent.ratom.RCursor.prototype.reagent$ratom$IReset$ = true;

reagent.ratom.RCursor.prototype.reagent$ratom$IReset$_reset_BANG_$arity$2 = (function (this$,new_value){
var self__ = this;
var this$__$1 = this;
return reagent.ratom._reset_BANG_.call(null,this$__$1._reaction(),new_value);
});

reagent.ratom.RCursor.prototype.reagent$ratom$ISwap$ = true;

reagent.ratom.RCursor.prototype.reagent$ratom$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return reagent.ratom._swap_BANG_.call(null,a__$1._reaction(),f);
});

reagent.ratom.RCursor.prototype.reagent$ratom$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return reagent.ratom._swap_BANG_.call(null,a__$1._reaction(),f,x);
});

reagent.ratom.RCursor.prototype.reagent$ratom$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return reagent.ratom._swap_BANG_.call(null,a__$1._reaction(),f,x,y);
});

reagent.ratom.RCursor.prototype.reagent$ratom$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return reagent.ratom._swap_BANG_.call(null,a__$1._reaction(),f,x,y,more);
});

reagent.ratom.RCursor.prototype.reagent$ratom$IAtom$ = true;

reagent.ratom.RCursor.prototype.reagent$ratom$IWatchable$ = true;

reagent.ratom.RCursor.prototype.reagent$ratom$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return reagent.ratom._notify_watches.call(null,this$__$1._reaction(),oldval,newval);
});

reagent.ratom.RCursor.prototype.reagent$ratom$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return reagent.ratom._add_watch.call(null,this$__$1._reaction(),key,f);
});

reagent.ratom.RCursor.prototype.reagent$ratom$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return reagent.ratom._remove_watch.call(null,this$__$1._reaction(),key);
});

reagent.ratom.RCursor.prototype.reagent$ratom$IDeref$ = true;

reagent.ratom.RCursor.prototype.reagent$ratom$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return reagent.ratom._deref.call(null,this$__$1._reaction());
});

reagent.ratom.RCursor.cljs$lang$type = true;

reagent.ratom.RCursor.cljs$lang$ctorStr = "reagent.ratom/RCursor";

reagent.ratom.RCursor.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"reagent.ratom/RCursor");
});

reagent.ratom.__GT_RCursor = (function __GT_RCursor(ratom,path,reaction){
return (new reagent.ratom.RCursor(ratom,path,reaction));
});

reagent.ratom.cursor = (function cursor(src,path){
if(cljs.core.truth_((function (){var G__5341 = path;
if(G__5341){
var bit__4662__auto__ = null;
if(cljs.core.truth_((function (){var or__3981__auto__ = bit__4662__auto__;
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return G__5341.reagent$ratom$IDeref$;
}
})())){
return true;
} else {
if((!G__5341.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IDeref,G__5341);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IDeref,G__5341);
}
})())){
if(typeof console !== 'undefined'){
console.warn([cljs.core.str("Warning: "),cljs.core.str("Calling cursor with an atom as the second arg is "),cljs.core.str("deprecated, in (cursor "),cljs.core.str(src),cljs.core.str(" "),cljs.core.str(reagent.ratom.pr_str.call(null,path)),cljs.core.str(")")].join(''));
} else {
}

if(cljs.core.truth_((function (){var G__5342 = path;
if(G__5342){
var bit__4662__auto__ = null;
if(cljs.core.truth_((function (){var or__3981__auto__ = bit__4662__auto__;
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return G__5342.reagent$ratom$IReactiveAtom$;
}
})())){
return true;
} else {
if((!G__5342.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,G__5342);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,G__5342);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("src must be a reactive atom, not "),cljs.core.str(reagent.ratom.pr_str.call(null,path))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IReactiveAtom","IReactiveAtom",-991158427,null),new cljs.core.Symbol(null,"path","path",1452340359,null))))].join('')));
}

return (new reagent.ratom.RCursor(path,src,null));
} else {
if(cljs.core.truth_((function (){var or__3981__auto__ = (function (){var G__5344 = src;
if(G__5344){
var bit__4662__auto__ = null;
if(cljs.core.truth_((function (){var or__3981__auto__ = bit__4662__auto__;
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return G__5344.reagent$ratom$IReactiveAtom$;
}
})())){
return true;
} else {
if((!G__5344.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,G__5344);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,G__5344);
}
})();
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
var and__3969__auto__ = reagent.ratom.ifn_QMARK_.call(null,src);
if(cljs.core.truth_(and__3969__auto__)){
return reagent.ratom.not.call(null,reagent.ratom.vector_QMARK_.call(null,src));
} else {
return and__3969__auto__;
}
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("src must be a reactive atom or a function, not "),cljs.core.str(reagent.ratom.pr_str.call(null,src))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IReactiveAtom","IReactiveAtom",-991158427,null),new cljs.core.Symbol(null,"src","src",-10544524,null)),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"src","src",-10544524,null)),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"src","src",-10544524,null)))))))].join('')));
}

return (new reagent.ratom.RCursor(src,path,null));
}
});

reagent.ratom.IDisposable = (function (){var obj5346 = {};
return obj5346;
})();

reagent.ratom.dispose_BANG_ = (function dispose_BANG_(this$){
if((function (){var and__3969__auto__ = this$;
if(and__3969__auto__){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1;
} else {
return and__3969__auto__;
}
})()){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else {
var x__4625__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3981__auto__ = (reagent.ratom.dispose_BANG_[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (reagent.ratom.dispose_BANG_["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDisposable.dispose!",this$);
}
}
})().call(null,this$);
}
});


reagent.ratom.IRunnable = (function (){var obj5348 = {};
return obj5348;
})();

reagent.ratom.run = (function run(this$){
if((function (){var and__3969__auto__ = this$;
if(and__3969__auto__){
return this$.reagent$ratom$IRunnable$run$arity$1;
} else {
return and__3969__auto__;
}
})()){
return this$.reagent$ratom$IRunnable$run$arity$1(this$);
} else {
var x__4625__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3981__auto__ = (reagent.ratom.run[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (reagent.ratom.run["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRunnable.run",this$);
}
}
})().call(null,this$);
}
});


reagent.ratom.IComputedImpl = (function (){var obj5350 = {};
return obj5350;
})();

reagent.ratom._update_watching = (function _update_watching(this$,derefed){
if((function (){var and__3969__auto__ = this$;
if(and__3969__auto__){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2;
} else {
return and__3969__auto__;
}
})()){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2(this$,derefed);
} else {
var x__4625__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3981__auto__ = (reagent.ratom._update_watching[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (reagent.ratom._update_watching["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IComputedImpl.-update-watching",this$);
}
}
})().call(null,this$,derefed);
}
});

reagent.ratom._handle_change = (function _handle_change(k,sender,oldval,newval){
if((function (){var and__3969__auto__ = k;
if(and__3969__auto__){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4;
} else {
return and__3969__auto__;
}
})()){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4(k,sender,oldval,newval);
} else {
var x__4625__auto__ = (((k == null))?null:k);
return (function (){var or__3981__auto__ = (reagent.ratom._handle_change[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (reagent.ratom._handle_change["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IComputedImpl.-handle-change",k);
}
}
})().call(null,k,sender,oldval,newval);
}
});


/**
* @constructor
*/
reagent.ratom.Reaction = (function (f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.active_QMARK_ = active_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.on_set = on_set;
this.on_dispose = on_dispose;
})
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_handle_change$arity$4 = (function (this$,sender,oldval,newval){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var and__3969__auto__ = self__.active_QMARK_;
if(cljs.core.truth_(and__3969__auto__)){
var and__3969__auto____$1 = reagent.ratom.not.call(null,self__.dirty_QMARK_);
if(cljs.core.truth_(and__3969__auto____$1)){
return reagent.ratom.not.call(null,(oldval === newval));
} else {
return and__3969__auto____$1;
}
} else {
return and__3969__auto__;
}
})())){
self__.dirty_QMARK_ = true;

return (function (){var or__3981__auto__ = self__.auto_run;
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return reagent.ratom.run;
}
})().call(null,this$__$1);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_update_watching$arity$2 = (function (this$,derefed){
var self__ = this;
var this$__$1 = this;
var seq__5351_5363 = cljs.core.seq.call(null,derefed);
var chunk__5352_5364 = null;
var count__5353_5365 = (0);
var i__5354_5366 = (0);
while(true){
if((i__5354_5366 < count__5353_5365)){
var w_5367 = cljs.core._nth.call(null,chunk__5352_5364,i__5354_5366);
if(cljs.core.truth_(reagent.ratom.contains_QMARK_.call(null,self__.watching,w_5367))){
} else {
reagent.ratom.add_watch.call(null,w_5367,this$__$1,reagent.ratom._handle_change);
}

var G__5368 = seq__5351_5363;
var G__5369 = chunk__5352_5364;
var G__5370 = count__5353_5365;
var G__5371 = (i__5354_5366 + (1));
seq__5351_5363 = G__5368;
chunk__5352_5364 = G__5369;
count__5353_5365 = G__5370;
i__5354_5366 = G__5371;
continue;
} else {
var temp__4126__auto___5372 = cljs.core.seq.call(null,seq__5351_5363);
if(cljs.core.truth_(temp__4126__auto___5372)){
var seq__5351_5373__$1 = temp__4126__auto___5372;
if(cljs.core.truth_(cljs.core.chunked_seq_QMARK_.call(null,seq__5351_5373__$1))){
var c__4768__auto___5374 = cljs.core.chunk_first.call(null,seq__5351_5373__$1);
var G__5375 = cljs.core.chunk_rest.call(null,seq__5351_5373__$1);
var G__5376 = c__4768__auto___5374;
var G__5377 = cljs.core.count.call(null,c__4768__auto___5374);
var G__5378 = (0);
seq__5351_5363 = G__5375;
chunk__5352_5364 = G__5376;
count__5353_5365 = G__5377;
i__5354_5366 = G__5378;
continue;
} else {
var w_5379 = cljs.core.first.call(null,seq__5351_5373__$1);
if(cljs.core.truth_(reagent.ratom.contains_QMARK_.call(null,self__.watching,w_5379))){
} else {
reagent.ratom.add_watch.call(null,w_5379,this$__$1,reagent.ratom._handle_change);
}

var G__5380 = cljs.core.next.call(null,seq__5351_5373__$1);
var G__5381 = null;
var G__5382 = (0);
var G__5383 = (0);
seq__5351_5363 = G__5380;
chunk__5352_5364 = G__5381;
count__5353_5365 = G__5382;
i__5354_5366 = G__5383;
continue;
}
} else {
}
}
break;
}

var seq__5355_5384 = cljs.core.seq.call(null,self__.watching);
var chunk__5356_5385 = null;
var count__5357_5386 = (0);
var i__5358_5387 = (0);
while(true){
if((i__5358_5387 < count__5357_5386)){
var w_5388 = cljs.core._nth.call(null,chunk__5356_5385,i__5358_5387);
if(cljs.core.truth_(reagent.ratom.contains_QMARK_.call(null,derefed,w_5388))){
} else {
reagent.ratom.remove_watch.call(null,w_5388,this$__$1);
}

var G__5389 = seq__5355_5384;
var G__5390 = chunk__5356_5385;
var G__5391 = count__5357_5386;
var G__5392 = (i__5358_5387 + (1));
seq__5355_5384 = G__5389;
chunk__5356_5385 = G__5390;
count__5357_5386 = G__5391;
i__5358_5387 = G__5392;
continue;
} else {
var temp__4126__auto___5393 = cljs.core.seq.call(null,seq__5355_5384);
if(cljs.core.truth_(temp__4126__auto___5393)){
var seq__5355_5394__$1 = temp__4126__auto___5393;
if(cljs.core.truth_(cljs.core.chunked_seq_QMARK_.call(null,seq__5355_5394__$1))){
var c__4768__auto___5395 = cljs.core.chunk_first.call(null,seq__5355_5394__$1);
var G__5396 = cljs.core.chunk_rest.call(null,seq__5355_5394__$1);
var G__5397 = c__4768__auto___5395;
var G__5398 = cljs.core.count.call(null,c__4768__auto___5395);
var G__5399 = (0);
seq__5355_5384 = G__5396;
chunk__5356_5385 = G__5397;
count__5357_5386 = G__5398;
i__5358_5387 = G__5399;
continue;
} else {
var w_5400 = cljs.core.first.call(null,seq__5355_5394__$1);
if(cljs.core.truth_(reagent.ratom.contains_QMARK_.call(null,derefed,w_5400))){
} else {
reagent.ratom.remove_watch.call(null,w_5400,this$__$1);
}

var G__5401 = cljs.core.next.call(null,seq__5355_5394__$1);
var G__5402 = null;
var G__5403 = (0);
var G__5404 = (0);
seq__5355_5384 = G__5401;
chunk__5356_5385 = G__5402;
count__5357_5386 = G__5403;
i__5358_5387 = G__5404;
continue;
}
} else {
}
}
break;
}

return self__.watching = derefed;
});

reagent.ratom.Reaction.prototype.reagent$ratom$IReactiveAtom$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IPrintWithWriter$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
reagent.ratom._write.call(null,writer,[cljs.core.str("#<Reaction "),cljs.core.str(reagent.ratom.hash.call(null,this$__$1)),cljs.core.str(": ")].join(''));

reagent.ratom.pr_writer.call(null,self__.state,writer,opts);

return reagent.ratom._write.call(null,writer,">");
});

reagent.ratom.Reaction.prototype.reagent$ratom$IHash$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

reagent.ratom.Reaction.prototype.reagent$ratom$IEquiv$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var seq__5359_5405 = cljs.core.seq.call(null,self__.watching);
var chunk__5360_5406 = null;
var count__5361_5407 = (0);
var i__5362_5408 = (0);
while(true){
if((i__5362_5408 < count__5361_5407)){
var w_5409 = cljs.core._nth.call(null,chunk__5360_5406,i__5362_5408);
reagent.ratom.remove_watch.call(null,w_5409,this$__$1);

var G__5410 = seq__5359_5405;
var G__5411 = chunk__5360_5406;
var G__5412 = count__5361_5407;
var G__5413 = (i__5362_5408 + (1));
seq__5359_5405 = G__5410;
chunk__5360_5406 = G__5411;
count__5361_5407 = G__5412;
i__5362_5408 = G__5413;
continue;
} else {
var temp__4126__auto___5414 = cljs.core.seq.call(null,seq__5359_5405);
if(cljs.core.truth_(temp__4126__auto___5414)){
var seq__5359_5415__$1 = temp__4126__auto___5414;
if(cljs.core.truth_(cljs.core.chunked_seq_QMARK_.call(null,seq__5359_5415__$1))){
var c__4768__auto___5416 = cljs.core.chunk_first.call(null,seq__5359_5415__$1);
var G__5417 = cljs.core.chunk_rest.call(null,seq__5359_5415__$1);
var G__5418 = c__4768__auto___5416;
var G__5419 = cljs.core.count.call(null,c__4768__auto___5416);
var G__5420 = (0);
seq__5359_5405 = G__5417;
chunk__5360_5406 = G__5418;
count__5361_5407 = G__5419;
i__5362_5408 = G__5420;
continue;
} else {
var w_5421 = cljs.core.first.call(null,seq__5359_5415__$1);
reagent.ratom.remove_watch.call(null,w_5421,this$__$1);

var G__5422 = cljs.core.next.call(null,seq__5359_5415__$1);
var G__5423 = null;
var G__5424 = (0);
var G__5425 = (0);
seq__5359_5405 = G__5422;
chunk__5360_5406 = G__5423;
count__5361_5407 = G__5424;
i__5362_5408 = G__5425;
continue;
}
} else {
}
}
break;
}

self__.watching = null;

self__.state = null;

self__.dirty_QMARK_ = true;

if(cljs.core.truth_(self__.active_QMARK_)){
if(cljs.core.truth_(reagent.ratom.debug)){
reagent.ratom.swap_BANG_.call(null,reagent.ratom._running,reagent.ratom.dec);
} else {
}

self__.active_QMARK_ = false;
} else {
}

if(cljs.core.truth_(self__.on_dispose)){
return self__.on_dispose.call(null);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.reagent$ratom$IReset$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IReset$_reset_BANG_$arity$2 = (function (a,newval){
var self__ = this;
var a__$1 = this;
var oldval = self__.state;
self__.state = newval;

if(cljs.core.truth_(self__.on_set)){
self__.dirty_QMARK_ = true;

self__.on_set.call(null,oldval,newval);
} else {
}

reagent.ratom._notify_watches.call(null,a__$1,oldval,newval);

return newval;
});

reagent.ratom.Reaction.prototype.reagent$ratom$ISwap$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){
var self__ = this;
var a__$1 = this;
return reagent.ratom._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state));
});

reagent.ratom.Reaction.prototype.reagent$ratom$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){
var self__ = this;
var a__$1 = this;
return reagent.ratom._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state,x));
});

reagent.ratom.Reaction.prototype.reagent$ratom$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){
var self__ = this;
var a__$1 = this;
return reagent.ratom._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state,x,y));
});

reagent.ratom.Reaction.prototype.reagent$ratom$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){
var self__ = this;
var a__$1 = this;
return reagent.ratom._reset_BANG_.call(null,a__$1,reagent.ratom.apply.call(null,f__$1,self__.state,x,y,more));
});

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$run$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
var res = reagent.ratom.capture_derefed.call(null,self__.f,this$__$1);
var derefed = reagent.ratom.captured.call(null,this$__$1);
if(cljs.core.truth_(reagent.ratom.not_EQ_.call(null,derefed,self__.watching))){
reagent.ratom._update_watching.call(null,this$__$1,derefed);
} else {
}

if(cljs.core.truth_(self__.active_QMARK_)){
} else {
if(cljs.core.truth_(reagent.ratom.debug)){
reagent.ratom.swap_BANG_.call(null,reagent.ratom._running,reagent.ratom.inc);
} else {
}

self__.active_QMARK_ = true;
}

self__.dirty_QMARK_ = false;

self__.state = res;

reagent.ratom._notify_watches.call(null,this$__$1,oldstate,self__.state);

return res;
});

reagent.ratom.Reaction.prototype.reagent$ratom$IAtom$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IWatchable$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.reduce_kv.call(null,((function (this$__$1){
return (function (_,key,f__$1){
f__$1.call(null,key,this$__$1,oldval,newval);

return null;
});})(this$__$1))
,null,self__.watches);
});

reagent.ratom.Reaction.prototype.reagent$ratom$IWatchable$_add_watch$arity$3 = (function (this$,k,wf){
var self__ = this;
var this$__$1 = this;
return self__.watches = reagent.ratom.assoc.call(null,self__.watches,k,wf);
});

reagent.ratom.Reaction.prototype.reagent$ratom$IWatchable$_remove_watch$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
self__.watches = reagent.ratom.dissoc.call(null,self__.watches,k);

if(cljs.core.truth_((function (){var and__3969__auto__ = reagent.ratom.empty_QMARK_.call(null,self__.watches);
if(cljs.core.truth_(and__3969__auto__)){
return reagent.ratom.not.call(null,self__.auto_run);
} else {
return and__3969__auto__;
}
})())){
return reagent.ratom.dispose_BANG_.call(null,this$__$1);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.reagent$ratom$IDeref$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3981__auto__ = self__.auto_run;
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return reagent.ratom.some_QMARK_.call(null,reagent.ratom._STAR_ratom_context_STAR_);
}
})()))){
if(cljs.core.truth_(self__.dirty_QMARK_)){
var oldstate_5426 = self__.state;
self__.state = self__.f.call(null);

if((oldstate_5426 === self__.state)){
} else {
reagent.ratom._notify_watches.call(null,this$__$1,oldstate_5426,self__.state);
}
} else {
}

return self__.state;
} else {
reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);

if(cljs.core.truth_(self__.dirty_QMARK_)){
return reagent.ratom.run.call(null,this$__$1);
} else {
return self__.state;
}
}
});

reagent.ratom.Reaction.cljs$lang$type = true;

reagent.ratom.Reaction.cljs$lang$ctorStr = "reagent.ratom/Reaction";

reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"reagent.ratom/Reaction");
});

reagent.ratom.__GT_Reaction = (function __GT_Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
return (new reagent.ratom.Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose));
});

/**
* @param {...*} var_args
*/
reagent.ratom.make_reaction = (function() { 
var make_reaction__delegate = function (f,p__5427){
var map__5429 = p__5427;
var map__5429__$1 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5429))?cljs.core.apply.call(null,cljs.core.hash_map,map__5429):map__5429);
var derefed = cljs.core.get.call(null,map__5429__$1,new cljs.core.Keyword(null,"derefed","derefed",590684583));
var on_dispose = cljs.core.get.call(null,map__5429__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360));
var on_set = cljs.core.get.call(null,map__5429__$1,new cljs.core.Keyword(null,"on-set","on-set",-140953470));
var auto_run = cljs.core.get.call(null,map__5429__$1,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437));
var runner = (cljs.core.truth_(reagent.ratom._EQ_.call(null,auto_run,true))?reagent.ratom.run:auto_run);
var active = reagent.ratom.not.call(null,(derefed == null));
var dirty = reagent.ratom.not.call(null,active);
var reaction = (new reagent.ratom.Reaction(f,null,dirty,active,null,null,runner,on_set,on_dispose));
if((derefed == null)){
} else {
if(cljs.core.truth_(reagent.ratom.debug)){
reagent.ratom.swap_BANG_.call(null,reagent.ratom._running,reagent.ratom.inc);
} else {
}

reagent.ratom._update_watching.call(null,reaction,derefed);
}

return reaction;
};
var make_reaction = function (f,var_args){
var p__5427 = null;
if (arguments.length > 1) {
var G__5430__i = 0, G__5430__a = new Array(arguments.length -  1);
while (G__5430__i < G__5430__a.length) {G__5430__a[G__5430__i] = arguments[G__5430__i + 1]; ++G__5430__i;}
  p__5427 = new cljs.core.IndexedSeq(G__5430__a,0);
} 
return make_reaction__delegate.call(this,f,p__5427);};
make_reaction.cljs$lang$maxFixedArity = 1;
make_reaction.cljs$lang$applyTo = (function (arglist__5431){
var f = cljs.core.first(arglist__5431);
var p__5427 = cljs.core.rest(arglist__5431);
return make_reaction__delegate(f,p__5427);
});
make_reaction.cljs$core$IFn$_invoke$arity$variadic = make_reaction__delegate;
return make_reaction;
})()
;

/**
* @constructor
*/
reagent.ratom.Wrapper = (function (state,callback,changed,watches){
this.state = state;
this.callback = callback;
this.changed = changed;
this.watches = watches;
})
reagent.ratom.Wrapper.prototype.reagent$ratom$IPrintWithWriter$ = true;

reagent.ratom.Wrapper.prototype.reagent$ratom$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
reagent.ratom._write.call(null,writer,"#<wrap: ");

reagent.ratom.pr_writer.call(null,self__.state,writer,opts);

return reagent.ratom._write.call(null,writer,">");
});

reagent.ratom.Wrapper.prototype.reagent$ratom$IWatchable$ = true;

reagent.ratom.Wrapper.prototype.reagent$ratom$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.reduce_kv.call(null,((function (this$__$1){
return (function (_,key,f){
f.call(null,key,this$__$1,oldval,newval);

return null;
});})(this$__$1))
,null,self__.watches);
});

reagent.ratom.Wrapper.prototype.reagent$ratom$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return self__.watches = reagent.ratom.assoc.call(null,self__.watches,key,f);
});

reagent.ratom.Wrapper.prototype.reagent$ratom$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return self__.watches = reagent.ratom.dissoc.call(null,self__.watches,key);
});

reagent.ratom.Wrapper.prototype.reagent$ratom$IEquiv$ = true;

reagent.ratom.Wrapper.prototype.reagent$ratom$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
var and__3969__auto__ = (other instanceof reagent.ratom.Wrapper);
if(and__3969__auto__){
var and__3969__auto____$1 = reagent.ratom.not.call(null,self__.changed);
if(cljs.core.truth_(and__3969__auto____$1)){
var and__3969__auto____$2 = reagent.ratom.not.call(null,other.changed);
if(cljs.core.truth_(and__3969__auto____$2)){
var and__3969__auto____$3 = reagent.ratom._EQ_.call(null,self__.state,other.state);
if(cljs.core.truth_(and__3969__auto____$3)){
return reagent.ratom._EQ_.call(null,self__.callback,other.callback);
} else {
return and__3969__auto____$3;
}
} else {
return and__3969__auto____$2;
}
} else {
return and__3969__auto____$1;
}
} else {
return and__3969__auto__;
}
});

reagent.ratom.Wrapper.prototype.reagent$ratom$ISwap$ = true;

reagent.ratom.Wrapper.prototype.reagent$ratom$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return reagent.ratom._reset_BANG_.call(null,a__$1,f.call(null,self__.state));
});

reagent.ratom.Wrapper.prototype.reagent$ratom$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return reagent.ratom._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x));
});

reagent.ratom.Wrapper.prototype.reagent$ratom$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return reagent.ratom._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x,y));
});

reagent.ratom.Wrapper.prototype.reagent$ratom$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return reagent.ratom._reset_BANG_.call(null,a__$1,reagent.ratom.apply.call(null,f,self__.state,x,y,more));
});

reagent.ratom.Wrapper.prototype.reagent$ratom$IReset$ = true;

reagent.ratom.Wrapper.prototype.reagent$ratom$IReset$_reset_BANG_$arity$2 = (function (this$,newval){
var self__ = this;
var this$__$1 = this;
var oldval = self__.state;
self__.changed = true;

self__.state = newval;

if((self__.watches == null)){
} else {
reagent.ratom._notify_watches.call(null,this$__$1,oldval,newval);
}

self__.callback.call(null,newval);

return newval;
});

reagent.ratom.Wrapper.prototype.reagent$ratom$IDeref$ = true;

reagent.ratom.Wrapper.prototype.reagent$ratom$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var and__3969__auto__ = self__.changed;
if(cljs.core.truth_(and__3969__auto__)){
return reagent.ratom.some_QMARK_.call(null,reagent.ratom._STAR_ratom_context_STAR_);
} else {
return and__3969__auto__;
}
})())){
if(typeof console !== 'undefined'){
console.warn([cljs.core.str("Warning: "),cljs.core.str("derefing stale wrap: "),cljs.core.str(reagent.ratom.pr_str.call(null,this$__$1))].join(''));
} else {
}
} else {
}


return self__.state;
});

reagent.ratom.Wrapper.prototype.reagent$ratom$IAtom$ = true;

reagent.ratom.Wrapper.cljs$lang$type = true;

reagent.ratom.Wrapper.cljs$lang$ctorStr = "reagent.ratom/Wrapper";

reagent.ratom.Wrapper.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"reagent.ratom/Wrapper");
});

reagent.ratom.__GT_Wrapper = (function __GT_Wrapper(state,callback,changed,watches){
return (new reagent.ratom.Wrapper(state,callback,changed,watches));
});

reagent.ratom.make_wrapper = (function make_wrapper(value,callback_fn,args){
return (new reagent.ratom.Wrapper(value,(new reagent.impl.util.partial_ifn(callback_fn,args,null)),false,null));
});

//# sourceMappingURL=ratom.js.map