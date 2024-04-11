import{Command as t,Plugin as e,icons as s}from"@ckeditor/ckeditor5-core";import{ButtonView as i,MenuBarMenuListItemButtonView as o}from"@ckeditor/ckeditor5-ui";import{TwoStepCaretMovement as n,inlineHighlight as r}from"@ckeditor/ckeditor5-typing";
/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class c extends t{constructor(t,e){super(t),this.attributeKey=e}refresh(){const t=this.editor.model,e=t.document;this.value=this._getValueFromFirstAllowedNode(),this.isEnabled=t.schema.checkAttributeInSelection(e.selection,this.attributeKey)}execute(t={}){const e=this.editor.model,s=e.document.selection,i=void 0===t.forceValue?!this.value:t.forceValue;e.change((t=>{if(s.isCollapsed)i?t.setSelectionAttribute(this.attributeKey,!0):t.removeSelectionAttribute(this.attributeKey);else{const o=e.schema.getValidRanges(s.getRanges(),this.attributeKey);for(const e of o)i?t.setAttribute(this.attributeKey,i,e):t.removeAttribute(this.attributeKey,e)}}))}_getValueFromFirstAllowedNode(){const t=this.editor.model,e=t.schema,s=t.document.selection;if(s.isCollapsed)return s.hasAttribute(this.attributeKey);for(const t of s.getRanges())for(const s of t.getItems())if(e.checkAttribute(s,this.attributeKey))return s.hasAttribute(this.attributeKey);return!1}}
/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */const a="bold";class l extends e{static get pluginName(){return"BoldEditing"}init(){const t=this.editor,e=this.editor.t;t.model.schema.extend("$text",{allowAttributes:a}),t.model.schema.setAttributeProperties(a,{isFormatting:!0,copyOnEnter:!0}),t.conversion.attributeToElement({model:a,view:"strong",upcastAlso:["b",t=>{const e=t.getStyle("font-weight");return e&&("bold"==e||Number(e)>=600)?{name:!0,styles:["font-weight"]}:null}]}),t.commands.add(a,new c(t,a)),t.keystrokes.set("CTRL+B",a),t.accessibility.addKeystrokeInfos({keystrokes:[{label:e("Bold text"),keystroke:"CTRL+B"}]})}}
/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */function d({editor:t,commandName:e,plugin:s,icon:i,label:o,keystroke:n}){return r=>{const c=t.commands.get(e),a=new r(t.locale);return a.set({label:o,icon:i,keystroke:n,isToggleable:!0}),a.bind("isEnabled").to(c,"isEnabled"),s.listenTo(a,"execute",(()=>{t.execute(e),t.editing.view.focus()})),a}}
/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */const u="bold";class m extends e{static get pluginName(){return"BoldUI"}init(){const t=this.editor,e=t.locale.t,n=t.commands.get(u),r=d({editor:t,commandName:u,plugin:this,icon:s.bold,label:e("Bold"),keystroke:"CTRL+B"});t.ui.componentFactory.add(u,(()=>{const t=r(i);return t.set({tooltip:!0}),t.bind("isOn").to(n,"value"),t})),t.ui.componentFactory.add("menuBar:"+u,(()=>r(o)))}}
/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class g extends e{static get requires(){return[l,m]}static get pluginName(){return"Bold"}}
/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */const h="code";class p extends e{static get pluginName(){return"CodeEditing"}static get requires(){return[n]}init(){const t=this.editor,e=this.editor.t;t.model.schema.extend("$text",{allowAttributes:h}),t.model.schema.setAttributeProperties(h,{isFormatting:!0,copyOnEnter:!1}),t.conversion.attributeToElement({model:h,view:"code",upcastAlso:{styles:{"word-wrap":"break-word"}}}),t.commands.add(h,new c(t,h)),t.plugins.get(n).registerAttribute(h),r(t,h,"code","ck-code_selected"),t.accessibility.addKeystrokeInfos({keystrokes:[{label:e("Move out of an inline code style"),keystroke:[["arrowleft","arrowleft"],["arrowright","arrowright"]]}]})}}!function(t,{insertAt:e}={}){if(!t||"undefined"==typeof document)return;const s=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",window.litNonce&&i.setAttribute("nonce",window.litNonce),"top"===e&&s.firstChild?s.insertBefore(i,s.firstChild):s.appendChild(i),i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t))}(".ck-content code{background-color:hsla(0,0%,78%,.3);border-radius:2px;padding:.15em}.ck.ck-editor__editable .ck-code_selected{background-color:hsla(0,0%,78%,.5)}");
/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
const b="code";class y extends e{static get pluginName(){return"CodeUI"}init(){const t=this.editor,e=t.locale.t,s=d({editor:t,commandName:b,plugin:this,icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m12.5 5.7 5.2 3.9v1.3l-5.6 4c-.1.2-.3.2-.5.2-.3-.1-.6-.7-.6-1l.3-.4 4.7-3.5L11.5 7l-.2-.2c-.1-.3-.1-.6 0-.8.2-.2.5-.4.8-.4a.8.8 0 0 1 .4.1zm-5.2 0L2 9.6v1.3l5.6 4c.1.2.3.2.5.2.3-.1.7-.7.6-1 0-.1 0-.3-.2-.4l-5-3.5L8.2 7l.2-.2c.1-.3.1-.6 0-.8-.2-.2-.5-.4-.8-.4a.8.8 0 0 0-.3.1z"/></svg>',label:e("Code")});t.ui.componentFactory.add(b,(()=>{const e=s(i),o=t.commands.get(b);return e.set({tooltip:!0}),e.bind("isOn").to(o,"value"),e})),t.ui.componentFactory.add("menuBar:"+b,(()=>s(o)))}}
/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class k extends e{static get requires(){return[p,y]}static get pluginName(){return"Code"}}
/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */const w="italic";class x extends e{static get pluginName(){return"ItalicEditing"}init(){const t=this.editor,e=this.editor.t;t.model.schema.extend("$text",{allowAttributes:w}),t.model.schema.setAttributeProperties(w,{isFormatting:!0,copyOnEnter:!0}),t.conversion.attributeToElement({model:w,view:"i",upcastAlso:["em",{styles:{"font-style":"italic"}}]}),t.commands.add(w,new c(t,w)),t.keystrokes.set("CTRL+I",w),t.accessibility.addKeystrokeInfos({keystrokes:[{label:e("Italic text"),keystroke:"CTRL+I"}]})}}
/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
const v="italic";class A extends e{static get pluginName(){return"ItalicUI"}init(){const t=this.editor,e=t.commands.get(v),s=t.locale.t,n=d({editor:t,commandName:v,plugin:this,icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m9.586 14.633.021.004c-.036.335.095.655.393.962.082.083.173.15.274.201h1.474a.6.6 0 1 1 0 1.2H5.304a.6.6 0 0 1 0-1.2h1.15c.474-.07.809-.182 1.005-.334.157-.122.291-.32.404-.597l2.416-9.55a1.053 1.053 0 0 0-.281-.823 1.12 1.12 0 0 0-.442-.296H8.15a.6.6 0 0 1 0-1.2h6.443a.6.6 0 1 1 0 1.2h-1.195c-.376.056-.65.155-.823.296-.215.175-.423.439-.623.79l-2.366 9.347z"/></svg>',keystroke:"CTRL+I",label:s("Italic")});t.ui.componentFactory.add(v,(()=>{const t=n(i);return t.set({tooltip:!0}),t.bind("isOn").to(e,"value"),t})),t.ui.componentFactory.add("menuBar:"+v,(()=>n(o)))}}
/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class N extends e{static get requires(){return[x,A]}static get pluginName(){return"Italic"}}
/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */const f="strikethrough";class F extends e{static get pluginName(){return"StrikethroughEditing"}init(){const t=this.editor,e=this.editor.t;t.model.schema.extend("$text",{allowAttributes:f}),t.model.schema.setAttributeProperties(f,{isFormatting:!0,copyOnEnter:!0}),t.conversion.attributeToElement({model:f,view:"s",upcastAlso:["del","strike",{styles:{"text-decoration":"line-through"}}]}),t.commands.add(f,new c(t,f)),t.keystrokes.set("CTRL+SHIFT+X","strikethrough"),t.accessibility.addKeystrokeInfos({keystrokes:[{label:e("Strikethrough text"),keystroke:"CTRL+SHIFT+X"}]})}}
/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
const T="strikethrough";class E extends e{static get pluginName(){return"StrikethroughUI"}init(){const t=this.editor,e=t.locale.t,s=d({editor:t,commandName:T,plugin:this,icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 16.4c-.8-.4-1.5-.9-2.2-1.5a.6.6 0 0 1-.2-.5l.3-.6h1c1 1.2 2.1 1.7 3.7 1.7 1 0 1.8-.3 2.3-.6.6-.4.6-1.2.6-1.3.2-1.2-.9-2.1-.9-2.1h2.1c.3.7.4 1.2.4 1.7v.8l-.6 1.2c-.6.8-1.1 1-1.6 1.2a6 6 0 0 1-2.4.6c-1 0-1.8-.3-2.5-.6zM6.8 9 6 8.3c-.4-.5-.5-.8-.5-1.6 0-.7.1-1.3.5-1.8.4-.6 1-1 1.6-1.3a6.3 6.3 0 0 1 4.7 0 4 4 0 0 1 1.7 1l.3.7c0 .1.2.4-.2.7-.4.2-.9.1-1 0a3 3 0 0 0-1.2-1c-.4-.2-1-.3-2-.4-.7 0-1.4.2-2 .6-.8.6-1 .8-1 1.5 0 .8.5 1 1.2 1.5.6.4 1.1.7 1.9 1H6.8z"/><path d="M3 10.5V9h14v1.5z"/></svg>',keystroke:"CTRL+SHIFT+X",label:e("Strikethrough")});t.ui.componentFactory.add(T,(()=>{const e=s(i),o=t.commands.get(T);return e.set({tooltip:!0}),e.bind("isOn").to(o,"value"),e})),t.ui.componentFactory.add("menuBar:"+T,(()=>s(o)))}}
/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class I extends e{static get requires(){return[F,E]}static get pluginName(){return"Strikethrough"}}
/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */const B="subscript";class C extends e{static get pluginName(){return"SubscriptEditing"}init(){const t=this.editor;t.model.schema.extend("$text",{allowAttributes:B}),t.model.schema.setAttributeProperties(B,{isFormatting:!0,copyOnEnter:!0}),t.conversion.attributeToElement({model:B,view:"sub",upcastAlso:[{styles:{"vertical-align":"sub"}}]}),t.commands.add(B,new c(t,B))}}
/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
const S="subscript";class L extends e{static get pluginName(){return"SubscriptUI"}init(){const t=this.editor,e=t.locale.t,s=d({editor:t,commandName:S,plugin:this,icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m7.03 10.349 3.818-3.819a.8.8 0 1 1 1.132 1.132L8.16 11.48l3.819 3.818a.8.8 0 1 1-1.132 1.132L7.03 12.61l-3.818 3.82a.8.8 0 1 1-1.132-1.132L5.9 11.48 2.08 7.662A.8.8 0 1 1 3.212 6.53l3.818 3.82zm8.147 7.829h2.549c.254 0 .447.05.58.152a.49.49 0 0 1 .201.413.54.54 0 0 1-.159.393c-.105.108-.266.162-.48.162h-3.594c-.245 0-.435-.066-.572-.197a.621.621 0 0 1-.205-.463c0-.114.044-.265.132-.453a1.62 1.62 0 0 1 .288-.444c.433-.436.824-.81 1.172-1.122.348-.312.597-.517.747-.615.267-.183.49-.368.667-.553.177-.185.312-.375.405-.57.093-.194.139-.384.139-.57a1.008 1.008 0 0 0-.554-.917 1.197 1.197 0 0 0-.56-.133c-.426 0-.761.182-1.005.546a2.332 2.332 0 0 0-.164.39 1.609 1.609 0 0 1-.258.488c-.096.114-.237.17-.423.17a.558.558 0 0 1-.405-.156.568.568 0 0 1-.161-.427c0-.218.05-.446.151-.683.101-.238.252-.453.452-.646s.454-.349.762-.467a2.998 2.998 0 0 1 1.081-.178c.498 0 .923.076 1.274.228a1.916 1.916 0 0 1 1.004 1.032 1.984 1.984 0 0 1-.156 1.794c-.2.32-.405.572-.613.754-.208.182-.558.468-1.048.857-.49.39-.826.691-1.008.906a2.703 2.703 0 0 0-.24.309z"/></svg>',label:e("Subscript")});t.ui.componentFactory.add(S,(()=>{const e=s(i),o=t.commands.get(S);return e.set({tooltip:!0}),e.bind("isOn").to(o,"value"),e})),t.ui.componentFactory.add("menuBar:"+S,(()=>s(o)))}}
/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class K extends e{static get requires(){return[C,L]}static get pluginName(){return"Subscript"}}
/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */const R="superscript";class U extends e{static get pluginName(){return"SuperscriptEditing"}init(){const t=this.editor;t.model.schema.extend("$text",{allowAttributes:R}),t.model.schema.setAttributeProperties(R,{isFormatting:!0,copyOnEnter:!0}),t.conversion.attributeToElement({model:R,view:"sup",upcastAlso:[{styles:{"vertical-align":"super"}}]}),t.commands.add(R,new c(t,R))}}
/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
const O="superscript";class z extends e{static get pluginName(){return"SuperscriptUI"}init(){const t=this.editor,e=t.locale.t,s=d({editor:t,commandName:O,plugin:this,icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.677 8.678h2.549c.254 0 .447.05.58.152a.49.49 0 0 1 .201.413.54.54 0 0 1-.159.393c-.105.108-.266.162-.48.162h-3.594c-.245 0-.435-.066-.572-.197a.621.621 0 0 1-.205-.463c0-.114.044-.265.132-.453a1.62 1.62 0 0 1 .288-.444c.433-.436.824-.81 1.172-1.122.348-.312.597-.517.747-.615.267-.183.49-.368.667-.553.177-.185.312-.375.405-.57.093-.194.139-.384.139-.57a1.008 1.008 0 0 0-.554-.917 1.197 1.197 0 0 0-.56-.133c-.426 0-.761.182-1.005.546a2.332 2.332 0 0 0-.164.39 1.609 1.609 0 0 1-.258.488c-.096.114-.237.17-.423.17a.558.558 0 0 1-.405-.156.568.568 0 0 1-.161-.427c0-.218.05-.446.151-.683.101-.238.252-.453.452-.646s.454-.349.762-.467a2.998 2.998 0 0 1 1.081-.178c.498 0 .923.076 1.274.228a1.916 1.916 0 0 1 1.004 1.032 1.984 1.984 0 0 1-.156 1.794c-.2.32-.405.572-.613.754-.208.182-.558.468-1.048.857-.49.39-.826.691-1.008.906a2.703 2.703 0 0 0-.24.309zM7.03 10.349l3.818-3.819a.8.8 0 1 1 1.132 1.132L8.16 11.48l3.819 3.818a.8.8 0 1 1-1.132 1.132L7.03 12.61l-3.818 3.82a.8.8 0 1 1-1.132-1.132L5.9 11.48 2.08 7.662A.8.8 0 1 1 3.212 6.53l3.818 3.82z"/></svg>',label:e("Superscript")});t.ui.componentFactory.add(O,(()=>{const e=s(i),o=t.commands.get(O);return e.set({tooltip:!0}),e.bind("isOn").to(o,"value"),e})),t.ui.componentFactory.add("menuBar:"+O,(()=>s(o)))}}
/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class V extends e{static get requires(){return[U,z]}static get pluginName(){return"Superscript"}}
/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */const q="underline";class M extends e{static get pluginName(){return"UnderlineEditing"}init(){const t=this.editor,e=this.editor.t;t.model.schema.extend("$text",{allowAttributes:q}),t.model.schema.setAttributeProperties(q,{isFormatting:!0,copyOnEnter:!0}),t.conversion.attributeToElement({model:q,view:"u",upcastAlso:{styles:{"text-decoration":"underline"}}}),t.commands.add(q,new c(t,q)),t.keystrokes.set("CTRL+U","underline"),t.accessibility.addKeystrokeInfos({keystrokes:[{label:e("Underline text"),keystroke:"CTRL+U"}]})}}
/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
const P="underline";class $ extends e{static get pluginName(){return"UnderlineUI"}init(){const t=this.editor,e=t.commands.get(P),s=t.locale.t,n=d({editor:t,commandName:P,plugin:this,icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 18v-1.5h14V18zm2.2-8V3.6c0-.4.4-.6.8-.6.3 0 .7.2.7.6v6.2c0 2 1.3 2.8 3.2 2.8 1.9 0 3.4-.9 3.4-2.9V3.6c0-.3.4-.5.8-.5.3 0 .7.2.7.5V10c0 2.7-2.2 4-4.9 4-2.6 0-4.7-1.2-4.7-4z"/></svg>',label:s("Underline"),keystroke:"CTRL+U"});t.ui.componentFactory.add(P,(()=>{const t=n(i);return t.set({tooltip:!0}),t.bind("isOn").to(e,"value"),t})),t.ui.componentFactory.add("menuBar:"+P,(()=>n(o)))}}
/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class H extends e{static get requires(){return[M,$]}static get pluginName(){return"Underline"}}export{g as Bold,l as BoldEditing,m as BoldUI,k as Code,p as CodeEditing,y as CodeUI,N as Italic,x as ItalicEditing,A as ItalicUI,I as Strikethrough,F as StrikethroughEditing,E as StrikethroughUI,K as Subscript,C as SubscriptEditing,L as SubscriptUI,V as Superscript,U as SuperscriptEditing,z as SuperscriptUI,H as Underline,M as UnderlineEditing,$ as UnderlineUI};