import{Command as e,Plugin as t,icons as n}from"@ckeditor/ckeditor5-core";import{ShiftEnter as o}from"@ckeditor/ckeditor5-enter";import{UpcastWriter as i}from"@ckeditor/ckeditor5-engine";import{first as c,Collection as r}from"@ckeditor/ckeditor5-utils";import{createDropdown as a,SplitButtonView as s,addListToDropdown as l,MenuBarMenuView as d,MenuBarMenuListView as u,MenuBarMenuListItemView as g,MenuBarMenuListItemButtonView as m,ViewModel as f}from"@ckeditor/ckeditor5-ui";
/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */function p(e){const t=e.t,n=e.config.get("codeBlock.languages");for(const e of n)"Plain text"===e.label&&(e.label=t("Plain text")),void 0===e.class&&(e.class=`language-${e.language}`);return n}function h(e,t,n){const o={};for(const i of e)if("class"===t){o[i[t].split(" ").shift()]=i[n]}else o[i[t]]=i[n];return o}function b(e){return e.data.match(/^(\s*)/)[0]}function k(e){const t=e.document.selection,n=[];if(t.isCollapsed)return[t.anchor];const o=t.getFirstRange().getWalker({ignoreElementEnd:!0,direction:"backward"});for(const{item:t}of o){if(!t.is("$textProxy"))continue;const{parent:o,startOffset:i}=t.textNode;if(!o.is("element","codeBlock"))continue;const c=b(t.textNode),r=e.createPositionAt(o,i+c.length);n.push(r)}return n}function B(e){const t=c(e.getSelectedBlocks());return!!t&&t.is("element","codeBlock")}function v(e,t){return!t.is("rootElement")&&!e.isLimit(t)&&e.checkChild(t.parent,"codeBlock")}
/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class x extends e{constructor(e){super(e),this._lastLanguage=null}refresh(){this.value=this._getValue(),this.isEnabled=this._checkEnabled()}execute(e={}){const t=this.editor,n=t.model,o=n.document.selection,i=p(t)[0],c=Array.from(o.getSelectedBlocks()),r=null==e.forceValue?!this.value:e.forceValue,a=function(e,t,n){if(e.language)return e.language;if(e.usePreviousLanguageChoice&&t)return t;return n}
/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */(e,this._lastLanguage,i.language);n.change((e=>{r?this._applyCodeBlock(e,c,a):this._removeCodeBlock(e,c)}))}_getValue(){const e=this.editor.model.document.selection,t=c(e.getSelectedBlocks());return!!!(!t||!t.is("element","codeBlock"))&&t.getAttribute("language")}_checkEnabled(){if(this.value)return!0;const e=this.editor.model.document.selection,t=this.editor.model.schema,n=c(e.getSelectedBlocks());return!!n&&v(t,n)}_applyCodeBlock(e,t,n){this._lastLanguage=n;const o=this.editor.model.schema,i=t.filter((e=>v(o,e)));for(const t of i)e.rename(t,"codeBlock"),e.setAttribute("language",n,t),o.removeDisallowedAttributes([t],e),Array.from(t.getChildren()).filter((e=>!o.checkChild(t,e))).forEach((t=>e.remove(t)));i.reverse().forEach(((t,n)=>{const o=i[n+1];t.previousSibling===o&&(e.appendElement("softBreak",o),e.merge(e.createPositionBefore(t)))}))}_removeCodeBlock(e,t){const n=t.filter((e=>e.is("element","codeBlock")));for(const t of n){const n=e.createRangeOn(t);for(const t of Array.from(n.getItems()).reverse())if(t.is("element","softBreak")&&t.parent.is("element","codeBlock")){const{position:n}=e.split(e.createPositionBefore(t)),o=n.nodeAfter;e.rename(o,"paragraph"),e.removeAttribute("language",o),e.remove(t)}e.rename(t,"paragraph"),e.removeAttribute("language",t)}}}class C extends e{constructor(e){super(e),this._indentSequence=e.config.get("codeBlock.indentSequence")}refresh(){this.isEnabled=this._checkEnabled()}execute(){const e=this.editor.model;e.change((t=>{const n=k(e);for(const o of n){const n=t.createText(this._indentSequence);e.insertContent(n,o)}}))}_checkEnabled(){return!!this._indentSequence&&B(this.editor.model.document.selection)}}
/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class w extends e{constructor(e){super(e),this._indentSequence=e.config.get("codeBlock.indentSequence")}refresh(){this.isEnabled=this._checkEnabled()}execute(){const e=this.editor.model;e.change((()=>{const t=k(e);for(const n of t){const t=S(e,n,this._indentSequence);t&&e.deleteContent(e.createSelection(t))}}))}_checkEnabled(){if(!this._indentSequence)return!1;const e=this.editor.model;return!!B(e.document.selection)&&k(e).some((t=>S(e,t,this._indentSequence)))}}function S(e,t,n){const o=function(e){let t=e.parent.getChild(e.index);t&&!t.is("element","softBreak")||(t=e.nodeBefore);if(!t||t.is("element","softBreak"))return null;return t}
/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */(t);if(!o)return null;const i=b(o),c=i.lastIndexOf(n);if(c+n.length!==i.length)return null;if(-1===c)return null;const{parent:r,startOffset:a}=o;return e.createRange(e.createPositionAt(r,a+c),e.createPositionAt(r,a+c+n.length))}function A(e,t,n=!1){const o=h(t,"language","class"),i=h(t,"language","label");return(t,c,r)=>{const{writer:a,mapper:s,consumable:l}=r;if(!l.consume(c.item,"insert"))return;const d=c.item.getAttribute("language"),u=s.toViewPosition(e.createPositionBefore(c.item)),g={};n&&(g["data-language"]=i[d],g.spellcheck="false");const m=o[d]?{class:o[d]}:void 0,f=a.createContainerElement("code",m),p=a.createContainerElement("pre",g,f);a.insert(u,p),s.bindElements(c.item,f)}}
/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
const _="paragraph";class E extends t{static get pluginName(){return"CodeBlockEditing"}static get requires(){return[o]}constructor(e){super(e),e.config.define("codeBlock",{languages:[{language:"plaintext",label:"Plain text"},{language:"c",label:"C"},{language:"cs",label:"C#"},{language:"cpp",label:"C++"},{language:"css",label:"CSS"},{language:"diff",label:"Diff"},{language:"html",label:"HTML"},{language:"java",label:"Java"},{language:"javascript",label:"JavaScript"},{language:"php",label:"PHP"},{language:"python",label:"Python"},{language:"ruby",label:"Ruby"},{language:"typescript",label:"TypeScript"},{language:"xml",label:"XML"}],indentSequence:"\t"})}init(){const e=this.editor,t=e.model.schema,n=e.model,o=e.editing.view,c=e.plugins.has("ListEditing")?e.plugins.get("ListEditing"):null,r=p(e);e.commands.add("codeBlock",new x(e)),e.commands.add("indentCodeBlock",new C(e)),e.commands.add("outdentCodeBlock",new w(e)),this.listenTo(o.document,"tab",((t,n)=>{const o=n.shiftKey?"outdentCodeBlock":"indentCodeBlock";e.commands.get(o).isEnabled&&(e.execute(o),n.stopPropagation(),n.preventDefault(),t.stop())}),{context:"pre"}),t.register("codeBlock",{allowWhere:"$block",allowChildren:"$text",isBlock:!0,allowAttributes:["language"]}),t.addAttributeCheck(((e,t)=>!!(e.endsWith("codeBlock")&&c&&c.getListAttributeNames().includes(t))||!e.endsWith("codeBlock $text")&&void 0)),e.model.schema.addChildCheck(((e,t)=>{if(e.endsWith("codeBlock")&&t.isObject)return!1})),e.editing.downcastDispatcher.on("insert:codeBlock",A(n,r,!0)),e.data.downcastDispatcher.on("insert:codeBlock",A(n,r)),e.data.downcastDispatcher.on("insert:softBreak",function(e){return(t,n,o)=>{if("codeBlock"!==n.item.parent.name)return;const{writer:i,mapper:c,consumable:r}=o;if(!r.consume(n.item,"insert"))return;const a=c.toViewPosition(e.createPositionBefore(n.item));i.insert(a,i.createText("\n"))}}(n),{priority:"high"}),e.data.upcastDispatcher.on("element:code",function(e,t){const n=h(t,"class","language"),o=t[0].language;return(e,t,i)=>{const c=t.viewItem,r=c.parent;if(!r||!r.is("element","pre"))return;if(t.modelCursor.findAncestor("codeBlock"))return;const{consumable:a,writer:s}=i;if(!a.test(c,{name:!0}))return;const l=s.createElement("codeBlock"),d=[...c.getClassNames()];d.length||d.push("");for(const e of d){const t=n[e];if(t){s.setAttribute("language",t,l);break}}l.hasAttribute("language")||s.setAttribute("language",o,l),i.convertChildren(c,l),i.safeInsert(l,t.modelCursor)&&(a.consume(c,{name:!0}),i.updateConversionResult(l,t))}}(0,r)),e.data.upcastDispatcher.on("text",((e,t,{consumable:n,writer:o})=>{let i=t.modelCursor;if(!n.test(t.viewItem))return;if(!i.findAncestor("codeBlock"))return;n.consume(t.viewItem);const c=t.viewItem.data.split("\n").map((e=>o.createText(e))),r=c[c.length-1];for(const e of c)if(o.insert(e,i),i=i.getShiftedBy(e.offsetSize),e!==r){const e=o.createElement("softBreak");o.insert(e,i),i=o.createPositionAfter(e)}t.modelRange=o.createRange(t.modelCursor,i),t.modelCursor=i})),e.data.upcastDispatcher.on("element:pre",((e,t,{consumable:n})=>{const o=t.viewItem;if(o.findAncestor("pre"))return;const i=Array.from(o.getChildren()),c=i.find((e=>e.is("element","code")));if(c)for(const e of i)e!==c&&e.is("$text")&&n.consume(e,{name:!0})}),{priority:"high"}),this.listenTo(e.editing.view.document,"clipboardInput",((t,o)=>{let c=n.createRange(n.document.selection.anchor);if(o.targetRanges&&(c=e.editing.mapper.toModelRange(o.targetRanges[0])),!c.start.parent.is("element","codeBlock"))return;const r=o.dataTransfer.getData("text/plain"),a=new i(e.editing.view.document);o.content=function(e,t){const n=e.createDocumentFragment(),o=t.split("\n"),i=o.reduce(((t,n,i)=>(t.push(n),i<o.length-1&&t.push(e.createElement("br")),t)),[]);return e.appendChild(i,n),n}(a,r)})),this.listenTo(n,"getSelectedContent",((e,[o])=>{const i=o.anchor;!o.isCollapsed&&i.parent.is("element","codeBlock")&&i.hasSameParentAs(o.focus)&&n.change((n=>{const c=e.return;if(i.parent.is("element")&&(c.childCount>1||o.containsEntireContent(i.parent))){const t=n.createElement("codeBlock",i.parent.getAttributes());n.append(c,t);const o=n.createDocumentFragment();return n.append(t,o),void(e.return=o)}const r=c.getChild(0);t.checkAttribute(r,"code")&&n.setAttribute("code",!0,r)}))}))}afterInit(){const e=this.editor,t=e.commands,n=t.get("indent"),o=t.get("outdent");n&&n.registerChildCommand(t.get("indentCodeBlock"),{priority:"highest"}),o&&o.registerChildCommand(t.get("outdentCodeBlock")),this.listenTo(e.editing.view.document,"enter",((t,n)=>{e.model.document.selection.getLastPosition().parent.is("element","codeBlock")&&(function(e,t){const n=e.model,o=n.document,i=e.editing.view,c=o.selection.getLastPosition(),r=c.nodeAfter;if(t||!o.selection.isCollapsed||!c.isAtStart)return!1;if(!P(r))return!1;return e.model.change((t=>{e.execute("enter");const n=o.selection.anchor.parent.previousSibling;t.rename(n,_),t.setSelection(n,"in"),e.model.schema.removeDisallowedAttributes([n],t),t.remove(r)})),i.scrollToTheSelection(),!0}(e,n.isSoft)||function(e,t){const n=e.model,o=n.document,i=e.editing.view,c=o.selection.getLastPosition(),r=c.nodeBefore;let a;if(t||!o.selection.isCollapsed||!c.isAtEnd||!r||!r.previousSibling)return!1;if(P(r)&&P(r.previousSibling))a=n.createRange(n.createPositionBefore(r.previousSibling),n.createPositionAfter(r));else if(y(r)&&P(r.previousSibling)&&P(r.previousSibling.previousSibling))a=n.createRange(n.createPositionBefore(r.previousSibling.previousSibling),n.createPositionAfter(r));else{if(!(y(r)&&P(r.previousSibling)&&y(r.previousSibling.previousSibling)&&r.previousSibling.previousSibling&&P(r.previousSibling.previousSibling.previousSibling)))return!1;a=n.createRange(n.createPositionBefore(r.previousSibling.previousSibling.previousSibling),n.createPositionAfter(r))}return e.model.change((t=>{t.remove(a),e.execute("enter");const n=o.selection.anchor.parent;t.rename(n,_),e.model.schema.removeDisallowedAttributes([n],t)})),i.scrollToTheSelection(),!0}(e,n.isSoft)||function(e){const t=e.model,n=t.document,o=n.selection.getLastPosition(),i=o.nodeBefore||o.textNode;let c;i&&i.is("$text")&&(c=b(i));e.model.change((t=>{e.execute("shiftEnter"),c&&t.insertText(c,n.selection.anchor)}))}(e),n.preventDefault(),t.stop())}),{context:"pre"})}}function y(e){return e&&e.is("$text")&&!e.data.match(/\S/)}function P(e){return e&&e.is("element","softBreak")}!function(e,{insertAt:t}={}){if(!e||"undefined"==typeof document)return;const n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",window.litNonce&&o.setAttribute("nonce",window.litNonce),"top"===t&&n.firstChild?n.insertBefore(o,n.firstChild):n.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}(".ck-content pre{background:hsla(0,0%,78%,.3);border:1px solid #c4c4c4;border-radius:2px;color:#353535;direction:ltr;font-style:normal;min-width:200px;padding:1em;tab-size:4;text-align:left;white-space:pre-wrap}.ck-content pre code{background:unset;border-radius:0;padding:0}.ck.ck-editor__editable pre{position:relative}.ck.ck-editor__editable pre[data-language]:after{content:attr(data-language);position:absolute}:root{--ck-color-code-block-label-background:#757575}.ck.ck-editor__editable pre[data-language]:after{background:var(--ck-color-code-block-label-background);color:#fff;font-family:var(--ck-font-face);font-size:10px;line-height:16px;padding:var(--ck-spacing-tiny) var(--ck-spacing-medium);right:10px;top:-1px;white-space:nowrap}.ck.ck-code-block-dropdown .ck-dropdown__panel{max-height:250px;overflow-x:hidden;overflow-y:auto}");
/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
class L extends t{static get pluginName(){return"CodeBlockUI"}init(){const e=this.editor,t=e.t,o=e.ui.componentFactory,i=p(e),c=this._getLanguageListItemDefinitions(i),r=e.commands.get("codeBlock");o.add("codeBlock",(o=>{const i=a(o,s),d=i.buttonView,u=t("Insert code block");return d.set({label:u,tooltip:!0,icon:n.codeBlock,isToggleable:!0}),d.bind("isOn").to(r,"value",(e=>!!e)),d.on("execute",(()=>{e.execute("codeBlock",{usePreviousLanguageChoice:!0}),e.editing.view.focus()})),i.on("execute",(t=>{e.execute("codeBlock",{language:t.source._codeBlockLanguage,forceValue:!0}),e.editing.view.focus()})),i.class="ck-code-block-dropdown",i.bind("isEnabled").to(r),l(i,c,{role:"menu",ariaLabel:u}),i})),o.add("menuBar:codeBlock",(o=>{const i=new d(o);i.buttonView.set({label:t("Code block"),icon:n.codeBlock}),i.bind("isEnabled").to(r);const a=new u(o);a.set({ariaLabel:t("Insert code block")});for(const t of c){const n=new g(o,i),c=new m(o);c.bind(...Object.keys(t.model)).to(t.model),c.bind("ariaChecked").to(c,"isOn"),c.delegate("execute").to(i),c.on("execute",(()=>{e.execute("codeBlock",{language:t.model._codeBlockLanguage,forceValue:r.value!=t.model._codeBlockLanguage}),e.editing.view.focus()})),n.children.add(c),a.items.add(n)}return i.panelView.children.add(a),i}))}_getLanguageListItemDefinitions(e){const t=this.editor.commands.get("codeBlock"),n=new r;for(const o of e){const e={type:"button",model:new f({_codeBlockLanguage:o.language,label:o.label,role:"menuitemradio",withText:!0})};e.model.bind("isOn").to(t,"value",(t=>t===e.model._codeBlockLanguage)),n.add(e)}return n}}
/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class T extends t{static get requires(){return[E,L]}static get pluginName(){return"CodeBlock"}}export{T as CodeBlock,E as CodeBlockEditing,L as CodeBlockUI};