// Compiled by ClojureScript 0.0-2913 {}
goog.provide('clojure.string');
goog.require('cljs.core');
goog.require('goog.string.StringBuffer');
goog.require('goog.string');
clojure.string.seq_reverse = (function seq_reverse(coll){
return clojure.string.reduce.call(null,clojure.string.conj,cljs.core.List.EMPTY,coll);
});
clojure.string.re_surrogate_pair = (new RegExp("([\\uD800-\\uDBFF])([\\uDC00-\\uDFFF])","g"));
/**
* Returns s with its characters reversed.
*/
clojure.string.reverse = (function reverse(s){
return s.replace(clojure.string.re_surrogate_pair,"$2$1").split("").reverse().join("");
});
/**
* Replaces all instance of match with replacement in s.
* match/replacement can be:
* 
* string / string
* pattern / (string or function of match).
*/
clojure.string.replace = (function replace(s,match,replacement){
if(typeof match === 'string'){
return s.replace((new RegExp(goog.string.regExpEscape(match),"g")),replacement);
} else {
if(cljs.core.truth_(match.hasOwnProperty("source"))){
return s.replace((new RegExp(match.source,"g")),replacement);
} else {
throw [cljs.core.str("Invalid match arg: "),cljs.core.str(match)].join('');

}
}
});
/**
* Replaces the first instance of match with replacement in s.
* match/replacement can be:
* 
* string / string
* pattern / (string or function of match).
*/
clojure.string.replace_first = (function replace_first(s,match,replacement){
return s.replace(match,replacement);
});
/**
* Returns a string of all elements in coll, as returned by (seq coll),
* separated by an optional separator.
*/
clojure.string.join = (function() {
var join = null;
var join__1 = (function (coll){
var sb = (new goog.string.StringBuffer());
var coll__$1 = clojure.string.seq.call(null,coll);
while(true){
if(cljs.core.truth_(coll__$1)){
var G__5263 = sb.append([cljs.core.str(clojure.string.first.call(null,coll__$1))].join(''));
var G__5264 = clojure.string.next.call(null,coll__$1);
sb = G__5263;
coll__$1 = G__5264;
continue;
} else {
return sb.toString();
}
break;
}
});
var join__2 = (function (separator,coll){
var sb = (new goog.string.StringBuffer());
var coll__$1 = clojure.string.seq.call(null,coll);
while(true){
if(cljs.core.truth_(coll__$1)){
sb.append([cljs.core.str(clojure.string.first.call(null,coll__$1))].join(''));

var coll__$2 = clojure.string.next.call(null,coll__$1);
if((coll__$2 == null)){
} else {
sb.append(separator);
}

var G__5265 = sb;
var G__5266 = coll__$2;
sb = G__5265;
coll__$1 = G__5266;
continue;
} else {
return sb.toString();
}
break;
}
});
join = function(separator,coll){
switch(arguments.length){
case 1:
return join__1.call(this,separator);
case 2:
return join__2.call(this,separator,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
join.cljs$core$IFn$_invoke$arity$1 = join__1;
join.cljs$core$IFn$_invoke$arity$2 = join__2;
return join;
})()
;
/**
* Converts string to all upper-case.
*/
clojure.string.upper_case = (function upper_case(s){
return s.toUpperCase();
});
/**
* Converts string to all lower-case.
*/
clojure.string.lower_case = (function lower_case(s){
return s.toLowerCase();
});
/**
* Converts first character of the string to upper-case, all other
* characters to lower-case.
*/
clojure.string.capitalize = (function capitalize(s){
if((clojure.string.count.call(null,s) < (2))){
return clojure.string.upper_case.call(null,s);
} else {
return [cljs.core.str(clojure.string.upper_case.call(null,clojure.string.subs.call(null,s,(0),(1)))),cljs.core.str(clojure.string.lower_case.call(null,clojure.string.subs.call(null,s,(1))))].join('');
}
});
clojure.string.pop_last_while_empty = (function pop_last_while_empty(v){
var v__$1 = v;
while(true){
if(cljs.core.truth_(clojure.string._EQ_.call(null,"",clojure.string.peek.call(null,v__$1)))){
var G__5267 = clojure.string.pop.call(null,v__$1);
v__$1 = G__5267;
continue;
} else {
return v__$1;
}
break;
}
});
clojure.string.discard_trailing_if_needed = (function discard_trailing_if_needed(limit,v){
if(cljs.core.truth_(clojure.string._EQ_.call(null,(0),limit))){
return clojure.string.pop_last_while_empty.call(null,v);
} else {
return v;
}
});
clojure.string.split_with_empty_regex = (function split_with_empty_regex(s,limit){
if(((limit <= (0))) || ((limit >= ((2) + clojure.string.count.call(null,s))))){
return clojure.string.conj.call(null,clojure.string.vec.call(null,clojure.string.cons.call(null,"",clojure.string.map.call(null,clojure.string.str,clojure.string.seq.call(null,s)))),"");
} else {
var pred__5271 = clojure.string._EQ_;
var expr__5272 = limit;
if(cljs.core.truth_(pred__5271.call(null,(1),expr__5272))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[s],null));
} else {
if(cljs.core.truth_(pred__5271.call(null,(2),expr__5272))){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,["",s],null));
} else {
var c = (limit - (2));
return clojure.string.conj.call(null,clojure.string.vec.call(null,clojure.string.cons.call(null,"",clojure.string.subvec.call(null,clojure.string.vec.call(null,clojure.string.map.call(null,clojure.string.str,clojure.string.seq.call(null,s))),(0),c))),clojure.string.subs.call(null,s,c));
}
}
}
});
/**
* Splits string on a regular expression. Optional argument limit is
* the maximum number of splits. Not lazy. Returns vector of the splits.
*/
clojure.string.split = (function() {
var split = null;
var split__2 = (function (s,re){
return split.call(null,s,re,(0));
});
var split__3 = (function (s,re,limit){
return clojure.string.discard_trailing_if_needed.call(null,limit,(cljs.core.truth_(clojure.string._EQ_.call(null,[cljs.core.str(re)].join(''),"/(?:)/"))?clojure.string.split_with_empty_regex.call(null,s,limit):(((limit < (1)))?clojure.string.vec.call(null,[cljs.core.str(s)].join('').split(re)):(function (){var s__$1 = s;
var limit__$1 = limit;
var parts = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(clojure.string._EQ_.call(null,limit__$1,(1)))){
return clojure.string.conj.call(null,parts,s__$1);
} else {
var temp__4124__auto__ = clojure.string.re_find.call(null,re,s__$1);
if(cljs.core.truth_(temp__4124__auto__)){
var m = temp__4124__auto__;
var index = s__$1.indexOf(m);
var G__5274 = s__$1.substring((index + clojure.string.count.call(null,m)));
var G__5275 = (limit__$1 - (1));
var G__5276 = clojure.string.conj.call(null,parts,s__$1.substring((0),index));
s__$1 = G__5274;
limit__$1 = G__5275;
parts = G__5276;
continue;
} else {
return clojure.string.conj.call(null,parts,s__$1);
}
}
break;
}
})())));
});
split = function(s,re,limit){
switch(arguments.length){
case 2:
return split__2.call(this,s,re);
case 3:
return split__3.call(this,s,re,limit);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$3 = split__3;
return split;
})()
;
/**
* Splits s on
* or
* .
*/
clojure.string.split_lines = (function split_lines(s){
return clojure.string.split.call(null,s,/\n|\r\n/);
});
/**
* Removes whitespace from both ends of string.
*/
clojure.string.trim = (function trim(s){
return goog.string.trim(s);
});
/**
* Removes whitespace from the left side of string.
*/
clojure.string.triml = (function triml(s){
return goog.string.trimLeft(s);
});
/**
* Removes whitespace from the right side of string.
*/
clojure.string.trimr = (function trimr(s){
return goog.string.trimRight(s);
});
/**
* Removes all trailing newline \n or return \r characters from
* string.  Similar to Perl's chomp.
*/
clojure.string.trim_newline = (function trim_newline(s){
var index = s.length;
while(true){
if((index === (0))){
return "";
} else {
var ch = clojure.string.get.call(null,s,(index - (1)));
if(cljs.core.truth_((function (){var or__3981__auto__ = clojure.string._EQ_.call(null,ch,"\n");
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return clojure.string._EQ_.call(null,ch,"\r");
}
})())){
var G__5277 = (index - (1));
index = G__5277;
continue;
} else {
return s.substring((0),index);
}
}
break;
}
});
/**
* True is s is nil, empty, or contains only whitespace.
*/
clojure.string.blank_QMARK_ = (function blank_QMARK_(s){
return goog.string.isEmptySafe(s);
});
/**
* Return a new string, using cmap to escape each character ch
* from s as follows:
* 
* If (cmap ch) is nil, append ch to the new string.
* If (cmap ch) is non-nil, append (str (cmap ch)) instead.
*/
clojure.string.escape = (function escape__$1(s,cmap){
var buffer = (new goog.string.StringBuffer());
var length = s.length;
var index = (0);
while(true){
if(cljs.core.truth_(clojure.string._EQ_.call(null,length,index))){
return buffer.toString();
} else {
var ch = s.charAt(index);
var temp__4124__auto___5278 = clojure.string.get.call(null,cmap,ch);
if(cljs.core.truth_(temp__4124__auto___5278)){
var replacement_5279 = temp__4124__auto___5278;
buffer.append([cljs.core.str(replacement_5279)].join(''));
} else {
buffer.append(ch);
}

var G__5280 = (index + (1));
index = G__5280;
continue;
}
break;
}
});

//# sourceMappingURL=string.js.map