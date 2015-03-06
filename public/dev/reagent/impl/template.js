// Compiled by ClojureScript 0.0-2913 {}
goog.provide('reagent.impl.template');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.impl.component');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.batching');
goog.require('clojure.string');
goog.require('reagent.debug');
/**
* Regular expression that parses a CSS-style id and class
* from a tag name.
*/
reagent.impl.template.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;

/**
* @constructor
*/
reagent.impl.template.NativeWrapper = (function (comp){
this.comp = comp;
})

reagent.impl.template.NativeWrapper.cljs$lang$type = true;

reagent.impl.template.NativeWrapper.cljs$lang$ctorStr = "reagent.impl.template/NativeWrapper";

reagent.impl.template.NativeWrapper.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"reagent.impl.template/NativeWrapper");
});

reagent.impl.template.__GT_NativeWrapper = (function __GT_NativeWrapper(comp){
return (new reagent.impl.template.NativeWrapper(comp));
});

reagent.impl.template.named_QMARK_ = (function named_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol));
});
reagent.impl.template.hiccup_tag_QMARK_ = (function hiccup_tag_QMARK_(x){
return (reagent.impl.template.named_QMARK_.call(null,x)) || (typeof x === 'string');
});
reagent.impl.template.valid_tag_QMARK_ = (function valid_tag_QMARK_(x){
var or__3981__auto__ = reagent.impl.template.hiccup_tag_QMARK_.call(null,x);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = reagent.impl.template.ifn_QMARK_.call(null,x);
if(cljs.core.truth_(or__3981__auto____$1)){
return or__3981__auto____$1;
} else {
return (x instanceof reagent.impl.template.NativeWrapper);
}
}
});
reagent.impl.template.prop_name_cache = {"charset": "charSet", "for": "htmlFor", "class": "className"};
reagent.impl.template.obj_get = (function obj_get(o,k){
if(cljs.core.truth_(o.hasOwnProperty(k))){
return (o[k]);
} else {
return null;
}
});
reagent.impl.template.cached_prop_name = (function cached_prop_name(k){
if(reagent.impl.template.named_QMARK_.call(null,k)){
var temp__4128__auto__ = reagent.impl.template.obj_get.call(null,reagent.impl.template.prop_name_cache,reagent.impl.template.name.call(null,k));
if((temp__4128__auto__ == null)){
return (reagent.impl.template.prop_name_cache[reagent.impl.template.name.call(null,k)] = reagent.impl.util.dash_to_camel.call(null,k));
} else {
var k_SINGLEQUOTE_ = temp__4128__auto__;
return k_SINGLEQUOTE_;
}
} else {
return k;
}
});
reagent.impl.template.convert_prop_value = (function convert_prop_value(x){
if(cljs.core.truth_((function (){var or__3981__auto__ = typeof x === 'string';
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = typeof x === 'number';
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
return reagent.impl.template.fn_QMARK_.call(null,x);
}
}
})())){
return x;
} else {
if(reagent.impl.template.named_QMARK_.call(null,x)){
return reagent.impl.template.name.call(null,x);
} else {
if(cljs.core.truth_(reagent.impl.template.map_QMARK_.call(null,x))){
return reagent.impl.template.reduce_kv.call(null,(function (o,k,v){
var G__5304 = o;
(G__5304[reagent.impl.template.cached_prop_name.call(null,k)] = convert_prop_value.call(null,v));

return G__5304;
}),{},x);
} else {
if(cljs.core.truth_(reagent.impl.template.coll_QMARK_.call(null,x))){
return reagent.impl.template.clj__GT_js.call(null,x);
} else {
if(cljs.core.truth_(reagent.impl.template.ifn_QMARK_.call(null,x))){
return (function() { 
var G__5305__delegate = function (args){
return reagent.impl.template.apply.call(null,x,args);
};
var G__5305 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5306__i = 0, G__5306__a = new Array(arguments.length -  0);
while (G__5306__i < G__5306__a.length) {G__5306__a[G__5306__i] = arguments[G__5306__i + 0]; ++G__5306__i;}
  args = new cljs.core.IndexedSeq(G__5306__a,0);
} 
return G__5305__delegate.call(this,args);};
G__5305.cljs$lang$maxFixedArity = 0;
G__5305.cljs$lang$applyTo = (function (arglist__5307){
var args = cljs.core.seq(arglist__5307);
return G__5305__delegate(args);
});
G__5305.cljs$core$IFn$_invoke$arity$variadic = G__5305__delegate;
return G__5305;
})()
;
} else {
return reagent.impl.template.clj__GT_js.call(null,x);

}
}
}
}
}
});
reagent.impl.template.set_id_class = (function set_id_class(props,id,class$){
var p = (((props == null))?{}:props);
if(cljs.core.truth_((function (){var and__3969__auto__ = reagent.impl.template.some_QMARK_.call(null,id);
if(cljs.core.truth_(and__3969__auto__)){
return ((p["id"]) == null);
} else {
return and__3969__auto__;
}
})())){
(p["id"] = id);
} else {
}

if(cljs.core.truth_(reagent.impl.template.some_QMARK_.call(null,class$))){
var old_5308 = (p["className"]);
(p["className"] = (cljs.core.truth_(reagent.impl.template.some_QMARK_.call(null,old_5308))?[cljs.core.str(class$),cljs.core.str(" "),cljs.core.str(old_5308)].join(''):class$));
} else {
}

return p;
});
reagent.impl.template.convert_props = (function convert_props(props,id_class){
var id = (id_class["id"]);
var class$ = (id_class["className"]);
var no_id_class = ((id == null)) && ((class$ == null));
if(cljs.core.truth_((function (){var and__3969__auto__ = no_id_class;
if(and__3969__auto__){
return reagent.impl.template.empty_QMARK_.call(null,props);
} else {
return and__3969__auto__;
}
})())){
return null;
} else {
var objprops = reagent.impl.template.convert_prop_value.call(null,props);
if(no_id_class){
return objprops;
} else {
return reagent.impl.template.set_id_class.call(null,objprops,id,class$);
}
}
});
reagent.impl.template.input_unmount = (function input_unmount(this$){
return (this$["cljsInputValue"] = null);
});
reagent.impl.template.input_set_value = (function input_set_value(this$){
var temp__4130__auto__ = (this$["cljsInputValue"]);
if((temp__4130__auto__ == null)){
return null;
} else {
var value = temp__4130__auto__;
(this$["cljsInputDirty"] = false);

var node = (this$["getDOMNode"])();
if(cljs.core.truth_(reagent.impl.template.not_EQ_.call(null,value,(node["value"])))){
return (node["value"] = value);
} else {
return null;
}
}
});
reagent.impl.template.input_handle_change = (function input_handle_change(this$,on_change,e){
var res = on_change.call(null,e);
if(cljs.core.truth_((this$["cljsInputDirty"]))){
} else {
(this$["cljsInputDirty"] = true);

reagent.impl.batching.do_later.call(null,((function (res){
return (function (){
return reagent.impl.template.input_set_value.call(null,this$);
});})(res))
);
}

return res;
});
reagent.impl.template.input_render_setup = (function input_render_setup(this$,jsprops){
if(cljs.core.truth_((function (){var and__3969__auto__ = (jsprops["hasOwnProperty"])("onChange");
if(cljs.core.truth_(and__3969__auto__)){
return (jsprops["hasOwnProperty"])("value");
} else {
return and__3969__auto__;
}
})())){
var v = (jsprops["value"]);
var value = (((v == null))?"":v);
var on_change = (jsprops["onChange"]);
(this$["cljsInputValue"] = value);

delete jsprops["value"];

var G__5311 = jsprops;
(G__5311["defaultValue"] = value);

(G__5311["onChange"] = ((function (G__5311,v,value,on_change){
return (function (p1__5309_SHARP_){
return reagent.impl.template.input_handle_change.call(null,this$,on_change,p1__5309_SHARP_);
});})(G__5311,v,value,on_change))
);

return G__5311;
} else {
return (this$["cljsInputValue"] = null);
}
});
reagent.impl.template.input_component_QMARK_ = (function input_component_QMARK_(x){
return ((x === "input")) || ((x === "textarea"));
});
reagent.impl.template.reagent_input_class = null;
reagent.impl.template.input_spec = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"ReagentInput",new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),reagent.impl.template.input_set_value,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),reagent.impl.template.input_unmount,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (argv,comp,jsprops,first_child){
var this$ = reagent.impl.component._STAR_current_component_STAR_;
reagent.impl.template.input_render_setup.call(null,this$,jsprops);

return reagent.impl.template.make_element.call(null,argv,comp,jsprops,first_child);
})], null);
reagent.impl.template.reagent_input = (function reagent_input(argv,comp,jsprops,first_child){
if((reagent.impl.template.reagent_input_class == null)){
reagent.impl.template.reagent_input_class = reagent.impl.component.create_class.call(null,reagent.impl.template.input_spec);
} else {
}

return reagent.impl.template.reagent_input_class.call(null,argv,comp,jsprops,first_child);
});
reagent.impl.template.parse_tag = (function parse_tag(hiccup_tag){
var vec__5313 = reagent.impl.template.next.call(null,reagent.impl.template.re_matches.call(null,reagent.impl.template.re_tag,reagent.impl.template.name.call(null,hiccup_tag)));
var tag = cljs.core.nth.call(null,vec__5313,(0),null);
var id = cljs.core.nth.call(null,vec__5313,(1),null);
var class$ = cljs.core.nth.call(null,vec__5313,(2),null);
var class_SINGLEQUOTE_ = (cljs.core.truth_(class$)?clojure.string.replace.call(null,class$,/\./," "):null);
if(cljs.core.truth_(tag)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid tag: '"),cljs.core.str(hiccup_tag),cljs.core.str("'"),cljs.core.str(reagent.impl.component.comp_name.call(null))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"tag","tag",350170304,null)))].join('')));
}

return {"className": class_SINGLEQUOTE_, "id": id, "name": tag};
});
reagent.impl.template.fn_to_class = (function fn_to_class(f){
if(cljs.core.truth_(reagent.impl.template.ifn_QMARK_.call(null,f))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Expected a function, not "),cljs.core.str(reagent.impl.template.pr_str.call(null,f))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(cljs.core.truth_((function (){var and__3969__auto__ = cljs.core.not.call(null,reagent.impl.template.not.call(null,(function (){var and__3969__auto__ = reagent.impl.template.fn_QMARK_.call(null,f);
if(cljs.core.truth_(and__3969__auto__)){
return reagent.impl.template.some_QMARK_.call(null,(f["type"]));
} else {
return and__3969__auto__;
}
})()));
if(cljs.core.truth_(and__3969__auto__)){
return typeof console !== 'undefined';
} else {
return and__3969__auto__;
}
})())){
console.warn([cljs.core.str("Warning: "),cljs.core.str("Using native React classes directly in Hiccup forms "),cljs.core.str("is not supported. Use create-element or "),cljs.core.str("adapt-react-class instead: "),cljs.core.str((f["type"])),cljs.core.str(reagent.impl.component.comp_name.call(null))].join(''));
} else {
}

var spec = reagent.impl.template.meta.call(null,f);
var withrender = reagent.impl.template.assoc.call(null,spec,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),f);
var res = reagent.impl.component.create_class.call(null,withrender);
var wrapf = reagent.impl.util.cached_react_class.call(null,res);
reagent.impl.util.cache_react_class.call(null,f,wrapf);

return wrapf;
});
reagent.impl.template.as_class = (function as_class(tag){
var temp__4128__auto__ = reagent.impl.util.cached_react_class.call(null,tag);
if((temp__4128__auto__ == null)){
return reagent.impl.template.fn_to_class.call(null,tag);
} else {
var cached_class = temp__4128__auto__;
return cached_class;
}
});
reagent.impl.template.get_key = (function get_key(x){
if(cljs.core.truth_(reagent.impl.template.map_QMARK_.call(null,x))){
return reagent.impl.template.get.call(null,x,new cljs.core.Keyword(null,"key","key",-1516042587));
} else {
return null;
}
});
reagent.impl.template.key_from_vec = (function key_from_vec(v){
var temp__4128__auto__ = (function (){var G__5315 = reagent.impl.template.meta.call(null,v);
var G__5315__$1 = (((G__5315 == null))?null:reagent.impl.template.get_key.call(null,G__5315));
return G__5315__$1;
})();
if((temp__4128__auto__ == null)){
return reagent.impl.template.get_key.call(null,reagent.impl.template.nth.call(null,v,(1),null));
} else {
var k = temp__4128__auto__;
return k;
}
});
reagent.impl.template.reag_element = (function reag_element(tag,v){
var c = reagent.impl.template.as_class.call(null,tag);
var jsprops = {"argv": v};
var G__5317_5318 = v;
var G__5317_5319__$1 = (((G__5317_5318 == null))?null:reagent.impl.template.key_from_vec.call(null,G__5317_5318));
var G__5317_5320__$2 = (((G__5317_5319__$1 == null))?null:(jsprops["key"] = G__5317_5319__$1));

return (React["createElement"])(c,jsprops);
});
reagent.impl.template.adapt_react_class = (function adapt_react_class(c){
return (new reagent.impl.template.NativeWrapper({"class": null, "id": null, "name": c}));
});
reagent.impl.template.tag_name_cache = {};
reagent.impl.template.cached_parse = (function cached_parse(x){
if(reagent.impl.template.hiccup_tag_QMARK_.call(null,x)){
var temp__4128__auto__ = reagent.impl.template.obj_get.call(null,reagent.impl.template.tag_name_cache,reagent.impl.template.name.call(null,x));
if((temp__4128__auto__ == null)){
return (reagent.impl.template.tag_name_cache[reagent.impl.template.name.call(null,x)] = reagent.impl.template.parse_tag.call(null,x));
} else {
var s = temp__4128__auto__;
return s;
}
} else {
if((x instanceof reagent.impl.template.NativeWrapper)){
return x.comp;
} else {
return null;
}
}
});
reagent.impl.template.native_element = (function native_element(tag,argv){
var temp__4126__auto__ = reagent.impl.template.cached_parse.call(null,tag);
if(cljs.core.truth_(temp__4126__auto__)){
var parsed = temp__4126__auto__;
var comp = (parsed["name"]);
var props = reagent.impl.template.nth.call(null,argv,(1),null);
var hasprops = (function (){var or__3981__auto__ = (props == null);
if(or__3981__auto__){
return or__3981__auto__;
} else {
return reagent.impl.template.map_QMARK_.call(null,props);
}
})();
var jsprops = reagent.impl.template.convert_props.call(null,(cljs.core.truth_(hasprops)?props:null),parsed);
var first_child = (cljs.core.truth_(hasprops)?(2):(1));
if(reagent.impl.template.input_component_QMARK_.call(null,comp)){
return reagent.impl.template.as_element.call(null,reagent.impl.template.with_meta.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.reagent_input,argv,comp,jsprops,first_child], null),reagent.impl.template.meta.call(null,argv)));
} else {
var p = (function (){var temp__4128__auto__ = (function (){var G__5323 = reagent.impl.template.meta.call(null,argv);
var G__5323__$1 = (((G__5323 == null))?null:reagent.impl.template.get_key.call(null,G__5323));
return G__5323__$1;
})();
if((temp__4128__auto__ == null)){
return jsprops;
} else {
var key = temp__4128__auto__;
var G__5324 = (((jsprops == null))?{}:jsprops);
(G__5324["key"] = key);

return G__5324;
}
})();
return reagent.impl.template.make_element.call(null,argv,comp,p,first_child);
}
} else {
return null;
}
});
reagent.impl.template.vec_to_elem = (function vec_to_elem(v){
if((reagent.impl.template.count.call(null,v) > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Hiccup form should not be empty: "),cljs.core.str(reagent.impl.template.pr_str.call(null,v)),cljs.core.str(reagent.impl.component.comp_name.call(null))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"v","v",1661996586,null)))))].join('')));
}

var tag = reagent.impl.template.nth.call(null,v,(0));
if(cljs.core.truth_(reagent.impl.template.valid_tag_QMARK_.call(null,tag))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid Hiccup form: "),cljs.core.str(reagent.impl.template.pr_str.call(null,v)),cljs.core.str(reagent.impl.component.comp_name.call(null))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"valid-tag?","valid-tag?",1243064160,null),new cljs.core.Symbol(null,"tag","tag",350170304,null))))].join('')));
}

var temp__4128__auto__ = reagent.impl.template.native_element.call(null,tag,v);
if((temp__4128__auto__ == null)){
return reagent.impl.template.reag_element.call(null,tag,v);
} else {
var ne = temp__4128__auto__;
return ne;
}
});
reagent.impl.template.as_element = (function as_element(x){
if(typeof x === 'string'){
return x;
} else {
if(cljs.core.truth_(reagent.impl.template.vector_QMARK_.call(null,x))){
return reagent.impl.template.vec_to_elem.call(null,x);
} else {
if(cljs.core.truth_(reagent.impl.template.seq_QMARK_.call(null,x))){
return reagent.impl.template.expand_seq_check.call(null,x);

} else {
return x;

}
}
}
});
reagent.impl.template.expand_seq = (function expand_seq(s){
var a = reagent.impl.template.into_array.call(null,s);
var n__4868__auto___5325 = a.length;
var i_5326 = (0);
while(true){
if((i_5326 < n__4868__auto___5325)){
(a[i_5326] = reagent.impl.template.as_element.call(null,(a[i_5326])));

var G__5327 = (i_5326 + (1));
i_5326 = G__5327;
continue;
} else {
}
break;
}

return a;
});
reagent.impl.template.expand_seq_dev = (function expand_seq_dev(s,o){
var a = reagent.impl.template.into_array.call(null,s);
var n__4868__auto___5328 = a.length;
var i_5329 = (0);
while(true){
if((i_5329 < n__4868__auto___5328)){
var val_5330 = (a[i_5329]);
if(cljs.core.truth_((function (){var and__3969__auto__ = reagent.impl.template.vector_QMARK_.call(null,val_5330);
if(cljs.core.truth_(and__3969__auto__)){
return (reagent.impl.template.key_from_vec.call(null,val_5330) == null);
} else {
return and__3969__auto__;
}
})())){
(o["no-key"] = true);
} else {
}

(a[i_5329] = reagent.impl.template.as_element.call(null,val_5330));

var G__5331 = (i_5329 + (1));
i_5329 = G__5331;
continue;
} else {
}
break;
}

return a;
});
reagent.impl.template.expand_seq_check = (function expand_seq_check(x){
var ctx = {};
var res = (((reagent.ratom._STAR_ratom_context_STAR_ == null))?reagent.impl.template.expand_seq_dev.call(null,x,ctx):reagent.ratom.capture_derefed.call(null,((function (ctx){
return (function (){
return reagent.impl.template.expand_seq_dev.call(null,x,ctx);
});})(ctx))
,ctx));
if(cljs.core.truth_(reagent.ratom.captured.call(null,ctx))){
if(typeof console !== 'undefined'){
console.warn([cljs.core.str("Warning: "),cljs.core.str("Reactive deref not supported in lazy seq, "),cljs.core.str("it should be wrapped in doall"),cljs.core.str(reagent.impl.component.comp_name.call(null)),cljs.core.str(". Value:\n"),cljs.core.str(reagent.impl.template.pr_str.call(null,x))].join(''));
} else {
}
} else {
}

if(cljs.core.truth_((ctx["no-key"]))){
if(typeof console !== 'undefined'){
console.warn([cljs.core.str("Warning: "),cljs.core.str("Every element in a seq should have a unique "),cljs.core.str(":key"),cljs.core.str(reagent.impl.component.comp_name.call(null)),cljs.core.str(". Value: "),cljs.core.str(reagent.impl.template.pr_str.call(null,x))].join(''));
} else {
}
} else {
}

return res;
});
reagent.impl.template.make_element = (function make_element(argv,comp,jsprops,first_child){
var G__5333 = (reagent.impl.template.count.call(null,argv) - first_child);
switch (G__5333) {
case (0):
return (React["createElement"])(comp,jsprops);

break;
case (1):
return (React["createElement"])(comp,jsprops,reagent.impl.template.as_element.call(null,reagent.impl.template.nth.call(null,argv,first_child)));

break;
default:
return (React["createElement"]).apply(null,reagent.impl.template.reduce_kv.call(null,((function (G__5333){
return (function (a,k,v){
if((k >= first_child)){
a.push(reagent.impl.template.as_element.call(null,v));
} else {
}

return a;
});})(G__5333))
,[comp,jsprops],argv));

}
});

//# sourceMappingURL=template.js.map