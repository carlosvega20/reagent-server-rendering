// Compiled by ClojureScript 0.0-2913 {}
goog.provide('reagent.impl.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('reagent.interop');
goog.require('reagent.debug');
reagent.impl.util.is_client = (function (){var and__3969__auto__ = typeof window !== 'undefined';
if(and__3969__auto__){
return reagent.impl.util.not.call(null,((window["document"]) == null));
} else {
return and__3969__auto__;
}
})();
reagent.impl.util.extract_props = (function extract_props(v){
var p = reagent.impl.util.nth.call(null,v,(1),null);
if(cljs.core.truth_(reagent.impl.util.map_QMARK_.call(null,p))){
return p;
} else {
return null;
}
});
reagent.impl.util.extract_children = (function extract_children(v){
var p = reagent.impl.util.nth.call(null,v,(1),null);
var first_child = (cljs.core.truth_((function (){var or__3981__auto__ = (p == null);
if(or__3981__auto__){
return or__3981__auto__;
} else {
return reagent.impl.util.map_QMARK_.call(null,p);
}
})())?(2):(1));
if((reagent.impl.util.count.call(null,v) > first_child)){
return reagent.impl.util.subvec.call(null,v,first_child);
} else {
return null;
}
});
reagent.impl.util.get_argv = (function get_argv(c){
return (c["props"]["argv"]);
});
reagent.impl.util.get_props = (function get_props(c){
return reagent.impl.util.extract_props.call(null,(c["props"]["argv"]));
});
reagent.impl.util.get_children = (function get_children(c){
return reagent.impl.util.extract_children.call(null,(c["props"]["argv"]));
});
reagent.impl.util.reagent_component_QMARK_ = (function reagent_component_QMARK_(c){
return reagent.impl.util.not.call(null,((c["props"]["argv"]) == null));
});
reagent.impl.util.cached_react_class = (function cached_react_class(c){
return (c["cljsReactClass"]);
});
reagent.impl.util.cache_react_class = (function cache_react_class(c,constructor){
return (c["cljsReactClass"] = constructor);
});
reagent.impl.util.memoize_1 = (function memoize_1(f){
var mem = reagent.impl.util.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (mem){
return (function (arg){
var v = reagent.impl.util.get.call(null,cljs.core.deref.call(null,mem),arg);
if(cljs.core.truth_(!((v == null)))){
return v;
} else {
var ret = f.call(null,arg);
reagent.impl.util.swap_BANG_.call(null,mem,reagent.impl.util.assoc,arg,ret);

return ret;
}
});
;})(mem))
});
reagent.impl.util.dont_camel_case = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["aria",null,"data",null], null), null);
reagent.impl.util.capitalize = (function capitalize(s){
if((reagent.impl.util.count.call(null,s) < (2))){
return clojure.string.upper_case.call(null,s);
} else {
return [cljs.core.str(clojure.string.upper_case.call(null,reagent.impl.util.subs.call(null,s,(0),(1)))),cljs.core.str(reagent.impl.util.subs.call(null,s,(1)))].join('');
}
});
reagent.impl.util.dash_to_camel = (function dash_to_camel(dashed){
if(typeof dashed === 'string'){
return dashed;
} else {
var name_str = reagent.impl.util.name.call(null,dashed);
var vec__5437 = clojure.string.split.call(null,name_str,/-/);
var start = cljs.core.nth.call(null,vec__5437,(0),null);
var parts = cljs.core.nthnext.call(null,vec__5437,(1));
if(cljs.core.truth_(reagent.impl.util.dont_camel_case.call(null,start))){
return name_str;
} else {
return reagent.impl.util.apply.call(null,reagent.impl.util.str,start,reagent.impl.util.map.call(null,reagent.impl.util.capitalize,parts));
}
}
});

/**
* @constructor
*/
reagent.impl.util.partial_ifn = (function (f,args,p){
this.f = f;
this.args = args;
this.p = p;
})
reagent.impl.util.partial_ifn.prototype.reagent$impl$util$IHash$ = true;

reagent.impl.util.partial_ifn.prototype.reagent$impl$util$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return reagent.impl.util.hash.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.f,self__.args], null));
});

reagent.impl.util.partial_ifn.prototype.reagent$impl$util$IEquiv$ = true;

reagent.impl.util.partial_ifn.prototype.reagent$impl$util$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
var and__3969__auto__ = reagent.impl.util._EQ_.call(null,self__.f,other.f);
if(cljs.core.truth_(and__3969__auto__)){
return reagent.impl.util._EQ_.call(null,self__.args,other.args);
} else {
return and__3969__auto__;
}
});

reagent.impl.util.partial_ifn.prototype.reagent$impl$util$IFn$ = true;

reagent.impl.util.partial_ifn.prototype.reagent$impl$util$IFn$_invoke$arity$3 = (function() { 
var G__5438__delegate = function (_,a){
var ___$1 = this;
var or__3981__auto___5439 = self__.p;
if(cljs.core.truth_(or__3981__auto___5439)){
} else {
self__.p = reagent.impl.util.apply.call(null,cljs.core.partial,self__.f,self__.args);
}

return reagent.impl.util.apply.call(null,self__.p,a);
};
var G__5438 = function (_,var_args){
var self__ = this;
var a = null;
if (arguments.length > 1) {
var G__5440__i = 0, G__5440__a = new Array(arguments.length -  1);
while (G__5440__i < G__5440__a.length) {G__5440__a[G__5440__i] = arguments[G__5440__i + 1]; ++G__5440__i;}
  a = new cljs.core.IndexedSeq(G__5440__a,0);
} 
return G__5438__delegate.call(this,_,a);};
G__5438.cljs$lang$maxFixedArity = 1;
G__5438.cljs$lang$applyTo = (function (arglist__5441){
var _ = cljs.core.first(arglist__5441);
var a = cljs.core.rest(arglist__5441);
return G__5438__delegate(_,a);
});
G__5438.cljs$core$IFn$_invoke$arity$variadic = G__5438__delegate;
return G__5438;
})()
;

reagent.impl.util.partial_ifn.cljs$lang$type = true;

reagent.impl.util.partial_ifn.cljs$lang$ctorStr = "reagent.impl.util/partial-ifn";

reagent.impl.util.partial_ifn.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"reagent.impl.util/partial-ifn");
});

reagent.impl.util.__GT_partial_ifn = (function __GT_partial_ifn(f,args,p){
return (new reagent.impl.util.partial_ifn(f,args,p));
});

reagent.impl.util.merge_class = (function merge_class(p1,p2){
var class$ = (function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__4126__auto__)){
var c1 = temp__4126__auto__;
var temp__4126__auto____$1 = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__4126__auto____$1)){
var c2 = temp__4126__auto____$1;
return [cljs.core.str(c1),cljs.core.str(" "),cljs.core.str(c2)].join('');
} else {
return null;
}
} else {
return null;
}
})();
if((class$ == null)){
return p2;
} else {
return reagent.impl.util.assoc.call(null,p2,new cljs.core.Keyword(null,"class","class",-2030961996),class$);
}
});
reagent.impl.util.merge_style = (function merge_style(p1,p2){
var style = (function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__4126__auto__)){
var s1 = temp__4126__auto__;
var temp__4126__auto____$1 = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__4126__auto____$1)){
var s2 = temp__4126__auto____$1;
return reagent.impl.util.merge.call(null,s1,s2);
} else {
return null;
}
} else {
return null;
}
})();
if((style == null)){
return p2;
} else {
return reagent.impl.util.assoc.call(null,p2,new cljs.core.Keyword(null,"style","style",-496642736),style);
}
});
reagent.impl.util.merge_props = (function merge_props(p1,p2){
if((p1 == null)){
return p2;
} else {
if(cljs.core.truth_(reagent.impl.util.map_QMARK_.call(null,p1))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"p1","p1",703771573,null))))].join('')));
}

return reagent.impl.util.merge_style.call(null,p1,reagent.impl.util.merge_class.call(null,p1,reagent.impl.util.merge.call(null,p1,p2)));
}
});
reagent.impl.util._STAR_always_update_STAR_ = false;
if(typeof reagent.impl.util.roots !== 'undefined'){
} else {
reagent.impl.util.roots = reagent.impl.util.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.impl.util.clear_container = (function clear_container(node){
try{return (React["unmountComponentAtNode"])(node);
}catch (e5443){if((e5443 instanceof Object)){
var e = e5443;
if(typeof console !== 'undefined'){
console.warn([cljs.core.str("Warning: "),cljs.core.str("Error unmounting:")].join(''));
} else {
}

if(typeof console !== 'undefined'){
return console.log(e);
} else {
return null;
}
} else {
throw e5443;

}
}});
reagent.impl.util.render_component = (function render_component(comp,container,callback){
try{var _STAR_always_update_STAR_5448 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (React["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_5448){
return (function (){
var _STAR_always_update_STAR_5449 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{reagent.impl.util.swap_BANG_.call(null,reagent.impl.util.roots,reagent.impl.util.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if(cljs.core.truth_(reagent.impl.util.some_QMARK_.call(null,callback))){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_5449;
}});})(_STAR_always_update_STAR_5448))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_5448;
}}catch (e5447){if((e5447 instanceof Object)){
var e = e5447;
reagent.impl.util.clear_container.call(null,container);

throw e;
} else {
throw e5447;

}
}});
reagent.impl.util.re_render_component = (function re_render_component(comp,container){
return reagent.impl.util.render_component.call(null,comp,container,null);
});
reagent.impl.util.unmount_component_at_node = (function unmount_component_at_node(container){
reagent.impl.util.swap_BANG_.call(null,reagent.impl.util.roots,reagent.impl.util.dissoc,container);

return (React["unmountComponentAtNode"])(container);
});
reagent.impl.util.force_update_all = (function force_update_all(){
var seq__5454_5458 = cljs.core.seq.call(null,reagent.impl.util.vals.call(null,cljs.core.deref.call(null,reagent.impl.util.roots)));
var chunk__5455_5459 = null;
var count__5456_5460 = (0);
var i__5457_5461 = (0);
while(true){
if((i__5457_5461 < count__5456_5460)){
var v_5462 = cljs.core._nth.call(null,chunk__5455_5459,i__5457_5461);
reagent.impl.util.apply.call(null,reagent.impl.util.re_render_component,v_5462);

var G__5463 = seq__5454_5458;
var G__5464 = chunk__5455_5459;
var G__5465 = count__5456_5460;
var G__5466 = (i__5457_5461 + (1));
seq__5454_5458 = G__5463;
chunk__5455_5459 = G__5464;
count__5456_5460 = G__5465;
i__5457_5461 = G__5466;
continue;
} else {
var temp__4126__auto___5467 = cljs.core.seq.call(null,seq__5454_5458);
if(cljs.core.truth_(temp__4126__auto___5467)){
var seq__5454_5468__$1 = temp__4126__auto___5467;
if(cljs.core.truth_(cljs.core.chunked_seq_QMARK_.call(null,seq__5454_5468__$1))){
var c__4768__auto___5469 = cljs.core.chunk_first.call(null,seq__5454_5468__$1);
var G__5470 = cljs.core.chunk_rest.call(null,seq__5454_5468__$1);
var G__5471 = c__4768__auto___5469;
var G__5472 = cljs.core.count.call(null,c__4768__auto___5469);
var G__5473 = (0);
seq__5454_5458 = G__5470;
chunk__5455_5459 = G__5471;
count__5456_5460 = G__5472;
i__5457_5461 = G__5473;
continue;
} else {
var v_5474 = cljs.core.first.call(null,seq__5454_5468__$1);
reagent.impl.util.apply.call(null,reagent.impl.util.re_render_component,v_5474);

var G__5475 = cljs.core.next.call(null,seq__5454_5468__$1);
var G__5476 = null;
var G__5477 = (0);
var G__5478 = (0);
seq__5454_5458 = G__5475;
chunk__5455_5459 = G__5476;
count__5456_5460 = G__5477;
i__5457_5461 = G__5478;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=util.js.map