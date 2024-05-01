import{Command as e,Plugin as t}from"@ckeditor/ckeditor5-core";import{ButtonView as o,MenuBarMenuListItemButtonView as i}from"@ckeditor/ckeditor5-ui";
/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class a extends e{constructor(e){super(e),this.affectsData=!1,this.value=!1}execute(){const e="ck-show-blocks",t=this.editor.editing.view;t.change((o=>{for(const i of t.document.roots)i.hasClass(e)?(o.removeClass(e,i),this.value=!1):(o.addClass(e,i),this.value=!0)}))}}
/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class n extends t{static get pluginName(){return"ShowBlocksEditing"}init(){const{editor:e}=this;e.commands.add("showBlocks",new a(e))}}!function(e,{insertAt:t}={}){if("undefined"==typeof document)return;const o=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",window.litNonce&&i.setAttribute("nonce",window.litNonce),"top"===t&&o.firstChild?o.insertBefore(i,o.firstChild):o.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}(":root{--ck-show-blocks-border-color:#757575}.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) address:not(.ck-widget_selected):not(.ck-widget:hover){outline:1px dashed var(--ck-show-blocks-border-color)}[dir=ltr] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) address{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px);' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='3' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>ADDRESS</text></svg>\");background-position:1px 1px;background-repeat:no-repeat;padding-top:15px}[dir=rtl] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) address{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px); transform:translate(-2px, 0);' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>ADDRESS</text></svg>\");background-position:calc(100% - 1px) 1px;background-repeat:no-repeat;padding-top:15px}.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) aside:not(.ck-widget_selected):not(.ck-widget:hover){outline:1px dashed var(--ck-show-blocks-border-color)}[dir=ltr] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) aside{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px);' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='3' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>ASIDE</text></svg>\");background-position:1px 1px;background-repeat:no-repeat;padding-top:15px}[dir=rtl] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) aside{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px); transform:translate(-2px, 0);' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>ASIDE</text></svg>\");background-position:calc(100% - 1px) 1px;background-repeat:no-repeat;padding-top:15px}.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) blockquote:not(.ck-widget_selected):not(.ck-widget:hover){outline:1px dashed var(--ck-show-blocks-border-color)}[dir=ltr] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) blockquote{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px);' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='3' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>BLOCKQUOTE</text></svg>\");background-position:1px 1px;background-repeat:no-repeat;padding-top:15px}[dir=rtl] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) blockquote{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px); transform:translate(-2px, 0);' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>BLOCKQUOTE</text></svg>\");background-position:calc(100% - 1px) 1px;background-repeat:no-repeat;padding-top:15px}.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) details:not(.ck-widget_selected):not(.ck-widget:hover){outline:1px dashed var(--ck-show-blocks-border-color)}[dir=ltr] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) details{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px);' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='3' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>DETAILS</text></svg>\");background-position:1px 1px;background-repeat:no-repeat;padding-top:15px}[dir=rtl] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) details{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px); transform:translate(-2px, 0);' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>DETAILS</text></svg>\");background-position:calc(100% - 1px) 1px;background-repeat:no-repeat;padding-top:15px}.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) div:not(.ck-widget,.ck-widget *):not(.ck-widget_selected):not(.ck-widget:hover){outline:1px dashed var(--ck-show-blocks-border-color)}[dir=ltr] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) div:not(.ck-widget,.ck-widget *){background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px);' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='3' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>DIV</text></svg>\");background-position:1px 1px;background-repeat:no-repeat;padding-top:15px}[dir=rtl] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) div:not(.ck-widget,.ck-widget *){background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px); transform:translate(-2px, 0);' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>DIV</text></svg>\");background-position:calc(100% - 1px) 1px;background-repeat:no-repeat;padding-top:15px}.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) footer:not(.ck-widget_selected):not(.ck-widget:hover){outline:1px dashed var(--ck-show-blocks-border-color)}[dir=ltr] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) footer{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px);' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='3' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>FOOTER</text></svg>\");background-position:1px 1px;background-repeat:no-repeat;padding-top:15px}[dir=rtl] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) footer{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px); transform:translate(-2px, 0);' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>FOOTER</text></svg>\");background-position:calc(100% - 1px) 1px;background-repeat:no-repeat;padding-top:15px}.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h1:not(.ck-widget_selected):not(.ck-widget:hover){outline:1px dashed var(--ck-show-blocks-border-color)}[dir=ltr] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h1{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px);' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='3' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>H1</text></svg>\");background-position:1px 1px;background-repeat:no-repeat;padding-top:15px}[dir=rtl] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h1{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px); transform:translate(-2px, 0);' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>H1</text></svg>\");background-position:calc(100% - 1px) 1px;background-repeat:no-repeat;padding-top:15px}.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h2:not(.ck-widget_selected):not(.ck-widget:hover){outline:1px dashed var(--ck-show-blocks-border-color)}[dir=ltr] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h2{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px);' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='3' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>H2</text></svg>\");background-position:1px 1px;background-repeat:no-repeat;padding-top:15px}[dir=rtl] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h2{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px); transform:translate(-2px, 0);' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>H2</text></svg>\");background-position:calc(100% - 1px) 1px;background-repeat:no-repeat;padding-top:15px}.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h3:not(.ck-widget_selected):not(.ck-widget:hover){outline:1px dashed var(--ck-show-blocks-border-color)}[dir=ltr] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h3{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px);' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='3' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>H3</text></svg>\");background-position:1px 1px;background-repeat:no-repeat;padding-top:15px}[dir=rtl] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h3{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px); transform:translate(-2px, 0);' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>H3</text></svg>\");background-position:calc(100% - 1px) 1px;background-repeat:no-repeat;padding-top:15px}.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h4:not(.ck-widget_selected):not(.ck-widget:hover){outline:1px dashed var(--ck-show-blocks-border-color)}[dir=ltr] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h4{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px);' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='3' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>H4</text></svg>\");background-position:1px 1px;background-repeat:no-repeat;padding-top:15px}[dir=rtl] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h4{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px); transform:translate(-2px, 0);' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>H4</text></svg>\");background-position:calc(100% - 1px) 1px;background-repeat:no-repeat;padding-top:15px}.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h5:not(.ck-widget_selected):not(.ck-widget:hover){outline:1px dashed var(--ck-show-blocks-border-color)}[dir=ltr] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h5{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px);' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='3' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>H5</text></svg>\");background-position:1px 1px;background-repeat:no-repeat;padding-top:15px}[dir=rtl] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h5{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px); transform:translate(-2px, 0);' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>H5</text></svg>\");background-position:calc(100% - 1px) 1px;background-repeat:no-repeat;padding-top:15px}.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h6:not(.ck-widget_selected):not(.ck-widget:hover){outline:1px dashed var(--ck-show-blocks-border-color)}[dir=ltr] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h6{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px);' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='3' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>H6</text></svg>\");background-position:1px 1px;background-repeat:no-repeat;padding-top:15px}[dir=rtl] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h6{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px); transform:translate(-2px, 0);' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>H6</text></svg>\");background-position:calc(100% - 1px) 1px;background-repeat:no-repeat;padding-top:15px}.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) header:not(.ck-widget_selected):not(.ck-widget:hover){outline:1px dashed var(--ck-show-blocks-border-color)}[dir=ltr] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) header{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px);' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='3' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>HEADER</text></svg>\");background-position:1px 1px;background-repeat:no-repeat;padding-top:15px}[dir=rtl] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) header{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px); transform:translate(-2px, 0);' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>HEADER</text></svg>\");background-position:calc(100% - 1px) 1px;background-repeat:no-repeat;padding-top:15px}.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) main:not(.ck-widget_selected):not(.ck-widget:hover){outline:1px dashed var(--ck-show-blocks-border-color)}[dir=ltr] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) main{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px);' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='3' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>MAIN</text></svg>\");background-position:1px 1px;background-repeat:no-repeat;padding-top:15px}[dir=rtl] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) main{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px); transform:translate(-2px, 0);' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>MAIN</text></svg>\");background-position:calc(100% - 1px) 1px;background-repeat:no-repeat;padding-top:15px}.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) nav:not(.ck-widget_selected):not(.ck-widget:hover){outline:1px dashed var(--ck-show-blocks-border-color)}[dir=ltr] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) nav{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px);' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='3' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>NAV</text></svg>\");background-position:1px 1px;background-repeat:no-repeat;padding-top:15px}[dir=rtl] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) nav{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px); transform:translate(-2px, 0);' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>NAV</text></svg>\");background-position:calc(100% - 1px) 1px;background-repeat:no-repeat;padding-top:15px}.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) pre:not(.ck-widget_selected):not(.ck-widget:hover){outline:1px dashed var(--ck-show-blocks-border-color)}[dir=ltr] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) pre{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px);' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='3' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>PRE</text></svg>\");background-position:1px 1px;background-repeat:no-repeat;padding-top:15px}[dir=rtl] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) pre{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px); transform:translate(-2px, 0);' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>PRE</text></svg>\");background-position:calc(100% - 1px) 1px;background-repeat:no-repeat;padding-top:15px}.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) ol:not(.ck-widget_selected):not(.ck-widget:hover){outline:1px dashed var(--ck-show-blocks-border-color)}[dir=ltr] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) ol{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px);' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='3' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>OL</text></svg>\");background-position:1px 1px;background-repeat:no-repeat;padding-top:15px}[dir=rtl] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) ol{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px); transform:translate(-2px, 0);' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>OL</text></svg>\");background-position:calc(100% - 1px) 1px;background-repeat:no-repeat;padding-top:15px}.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) ul:not(.ck-widget_selected):not(.ck-widget:hover){outline:1px dashed var(--ck-show-blocks-border-color)}[dir=ltr] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) ul{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px);' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='3' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>UL</text></svg>\");background-position:1px 1px;background-repeat:no-repeat;padding-top:15px}[dir=rtl] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) ul{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px); transform:translate(-2px, 0);' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>UL</text></svg>\");background-position:calc(100% - 1px) 1px;background-repeat:no-repeat;padding-top:15px}.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) p:not(.ck-widget_selected):not(.ck-widget:hover){outline:1px dashed var(--ck-show-blocks-border-color)}[dir=ltr] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) p{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px);' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='3' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>P</text></svg>\");background-position:1px 1px;background-repeat:no-repeat;padding-top:15px}[dir=rtl] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) p{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px); transform:translate(-2px, 0);' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>P</text></svg>\");background-position:calc(100% - 1px) 1px;background-repeat:no-repeat;padding-top:15px}.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) section:not(.ck-widget_selected):not(.ck-widget:hover){outline:1px dashed var(--ck-show-blocks-border-color)}[dir=ltr] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) section{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px);' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='3' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>SECTION</text></svg>\");background-position:1px 1px;background-repeat:no-repeat;padding-top:15px}[dir=rtl] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) section{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px); transform:translate(-2px, 0);' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>SECTION</text></svg>\");background-position:calc(100% - 1px) 1px;background-repeat:no-repeat;padding-top:15px}.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) :where(figure.image,figure.table) figcaption:not(.ck-widget_selected):not(.ck-widget:hover){outline:1px dashed var(--ck-show-blocks-border-color)}[dir=ltr] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) :where(figure.image,figure.table) figcaption{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px);' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='3' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>FIGCAPTION</text></svg>\");background-position:1px 1px;background-repeat:no-repeat;padding-top:15px}[dir=rtl] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) :where(figure.image,figure.table) figcaption{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px); transform:translate(-2px, 0);' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>FIGCAPTION</text></svg>\");background-position:calc(100% - 1px) 1px;background-repeat:no-repeat;padding-top:15px}");
/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
class r extends t{static get pluginName(){return"ShowBlocksUI"}init(){const e=this.editor;e.ui.componentFactory.add("showBlocks",(()=>{const e=this._createButton(o);return e.set({tooltip:!0,icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m6.395 9.196 2.545-.007V6.498a.598.598 0 0 1 .598-.598h.299a.598.598 0 0 1 .598.598v6.877a.598.598 0 0 1-.598.598h-.299a.598.598 0 0 1-.598-.598v-2.691l-2.545.007v2.691a.598.598 0 0 1-.598.598h-.299a.598.598 0 0 1-.598-.598V6.505a.598.598 0 0 1 .598-.598h.299a.598.598 0 0 1 .598.598v2.691Z"/><path d="M15.094 13.417V6.462a.562.562 0 0 0-.562-.562h-.782a1 1 0 0 0-.39.08l-1.017.43a.562.562 0 0 0-.343.517v.197c0 .4.406.67.775.519l.819-.337v6.111c0 .31.251.562.561.562h.377c.31 0 .562-.251.562-.562Z"/><path d="M0 15.417v1.5h1.5v-1.5H0Z"/><path d="M18.5 15.417v1.5H20v-1.5h-1.5Z"/><path d="M18.5 12.333v1.5H20v-1.5h-1.5Z"/><path d="M18.5 9.25v1.5H20v-1.5h-1.5Z"/><path d="M18.5 6.167v1.5H20v-1.5h-1.5Z"/><path d="M0 18.5v.5a1 1 0 0 0 1 1h.5v-1.5H0Z"/><path d="M3.083 18.5V20h1.5v-1.5h-1.5Z"/><path d="M6.167 18.5V20h1.5v-1.5h-1.5Z"/><path d="M9.25 18.5V20h1.5v-1.5h-1.5Z"/><path d="M12.333 18.5V20h1.5v-1.5h-1.5Z"/><path d="M15.417 18.5V20h1.5v-1.5h-1.5Z"/><path d="M18.5 18.5V20h.5a1 1 0 0 0 1-1v-.5h-1.5Z"/><path clip-rule="evenodd" d="M0 1a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v3.583h-1.5V1.5h-17v12.333H0V1Z"/></svg>'}),e})),e.ui.componentFactory.add("menuBar:showBlocks",(()=>this._createButton(i)))}_createButton(e){const t=this.editor,o=t.locale,i=t.commands.get("showBlocks"),a=new e(o),n=o.t;return a.set({label:n("Show blocks")}),a.bind("isEnabled").to(i),a.bind("isOn").to(i,"value",i,"isEnabled",((e,t)=>e&&t)),this.listenTo(a,"execute",(()=>{t.execute("showBlocks"),t.editing.view.focus()})),a}}
/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class s extends t{static get pluginName(){return"ShowBlocks"}static get requires(){return[n,r]}}export{s as ShowBlocks,a as ShowBlocksCommand,n as ShowBlocksEditing,r as ShowBlocksUI};