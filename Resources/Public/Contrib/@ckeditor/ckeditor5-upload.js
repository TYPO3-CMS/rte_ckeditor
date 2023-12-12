import{Plugin as e,PendingActions as t}from"@ckeditor/ckeditor5-core";import{ObservableMixin as s,uid as i,CKEditorError as r,Collection as o,logWarning as a}from"@ckeditor/ckeditor5-utils";import{ButtonView as d,View as n}from"@ckeditor/ckeditor5-ui";
/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class l extends(s()){constructor(){super();const e=new window.FileReader;this._reader=e,this._data=void 0,this.set("loaded",0),e.onprogress=e=>{this.loaded=e.loaded}}get error(){return this._reader.error}get data(){return this._data}read(e){const t=this._reader;return this.total=e.size,new Promise(((s,i)=>{t.onload=()=>{const e=t.result;this._data=e,s(e)},t.onerror=()=>{i("error")},t.onabort=()=>{i("aborted")},this._reader.readAsDataURL(e)}))}abort(){this._reader.abort()}}
/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class h extends e{constructor(){super(...arguments),this.loaders=new o,this._loadersMap=new Map,this._pendingAction=null}static get pluginName(){return"FileRepository"}static get requires(){return[t]}init(){this.loaders.on("change",(()=>this._updatePendingAction())),this.set("uploaded",0),this.set("uploadTotal",null),this.bind("uploadedPercent").to(this,"uploaded",this,"uploadTotal",((e,t)=>t?e/t*100:0))}getLoader(e){return this._loadersMap.get(e)||null}createLoader(e){if(!this.createUploadAdapter)return a("filerepository-no-upload-adapter"),null;const t=new p(Promise.resolve(e),this.createUploadAdapter);return this.loaders.add(t),this._loadersMap.set(e,t),e instanceof Promise&&t.file.then((e=>{this._loadersMap.set(e,t)})).catch((()=>{})),t.on("change:uploaded",(()=>{let e=0;for(const t of this.loaders)e+=t.uploaded;this.uploaded=e})),t.on("change:uploadTotal",(()=>{let e=0;for(const t of this.loaders)t.uploadTotal&&(e+=t.uploadTotal);this.uploadTotal=e})),t}destroyLoader(e){const t=e instanceof p?e:this.getLoader(e);t._destroy(),this.loaders.remove(t),this._loadersMap.forEach(((e,s)=>{e===t&&this._loadersMap.delete(s)}))}_updatePendingAction(){const e=this.editor.plugins.get(t);if(this.loaders.length){if(!this._pendingAction){const t=this.editor.t,s=e=>`${t("Upload in progress")} ${parseInt(e)}%.`;this._pendingAction=e.add(s(this.uploadedPercent)),this._pendingAction.bind("message").to(this,"uploadedPercent",s)}}else e.remove(this._pendingAction),this._pendingAction=null}}class p extends(s()){constructor(e,t){super(),this.id=i(),this._filePromiseWrapper=this._createFilePromiseWrapper(e),this._adapter=t(this),this._reader=new l,this.set("status","idle"),this.set("uploaded",0),this.set("uploadTotal",null),this.bind("uploadedPercent").to(this,"uploaded",this,"uploadTotal",((e,t)=>t?e/t*100:0)),this.set("uploadResponse",null)}get file(){return this._filePromiseWrapper?this._filePromiseWrapper.promise.then((e=>this._filePromiseWrapper?e:null)):Promise.resolve(null)}get data(){return this._reader.data}read(){if("idle"!=this.status)throw new r("filerepository-read-wrong-status",this);return this.status="reading",this.file.then((e=>this._reader.read(e))).then((e=>{if("reading"!==this.status)throw this.status;return this.status="idle",e})).catch((e=>{if("aborted"===e)throw this.status="aborted","aborted";throw this.status="error",this._reader.error?this._reader.error:e}))}upload(){if("idle"!=this.status)throw new r("filerepository-upload-wrong-status",this);return this.status="uploading",this.file.then((()=>this._adapter.upload())).then((e=>(this.uploadResponse=e,this.status="idle",e))).catch((e=>{if("aborted"===this.status)throw"aborted";throw this.status="error",e}))}abort(){const e=this.status;this.status="aborted",this._filePromiseWrapper.isFulfilled?"reading"==e?this._reader.abort():"uploading"==e&&this._adapter.abort&&this._adapter.abort():(this._filePromiseWrapper.promise.catch((()=>{})),this._filePromiseWrapper.rejecter("aborted")),this._destroy()}_destroy(){this._filePromiseWrapper=void 0,this._reader=void 0,this._adapter=void 0,this.uploadResponse=void 0}_createFilePromiseWrapper(e){const t={};return t.promise=new Promise(((s,i)=>{t.rejecter=i,t.isFulfilled=!1,e.then((e=>{t.isFulfilled=!0,s(e)})).catch((e=>{t.isFulfilled=!0,i(e)}))})),t}}
/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class u extends d{constructor(e){super(e),this.buttonView=this,this._fileInputView=new c(e),this._fileInputView.bind("acceptedType").to(this),this._fileInputView.bind("allowMultipleFiles").to(this),this._fileInputView.delegate("done").to(this),this.on("execute",(()=>{this._fileInputView.open()})),this.extendTemplate({attributes:{class:"ck-file-dialog-button"}})}render(){super.render(),this.children.add(this._fileInputView)}}class c extends n{constructor(e){super(e),this.set("acceptedType",void 0),this.set("allowMultipleFiles",!1);const t=this.bindTemplate;this.setTemplate({tag:"input",attributes:{class:["ck-hidden"],type:"file",tabindex:"-1",accept:t.to("acceptedType"),multiple:t.to("allowMultipleFiles")},on:{change:t.to((/* istanbul ignore next -- @preserve */()=>{this.element&&this.element.files&&this.element.files.length&&this.fire("done",this.element.files),this.element.value=""}))}})}open(){this.element.click()}}
/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class _ extends e{static get requires(){return[h]}static get pluginName(){return"Base64UploadAdapter"}init(){this.editor.plugins.get(h).createUploadAdapter=e=>new f(e)}}class f{constructor(e){this.loader=e}upload(){return new Promise(((e,t)=>{const s=this.reader=new window.FileReader;s.addEventListener("load",(()=>{e({default:s.result})})),s.addEventListener("error",(e=>{t(e)})),s.addEventListener("abort",(()=>{t()})),this.loader.file.then((e=>{s.readAsDataURL(e)}))}))}abort(){this.reader.abort()}}
/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class g extends e{static get requires(){return[h]}static get pluginName(){return"SimpleUploadAdapter"}init(){const e=this.editor.config.get("simpleUpload");e&&(e.uploadUrl?this.editor.plugins.get(h).createUploadAdapter=t=>new m(t,e):a("simple-upload-adapter-missing-uploadurl"))}}class m{constructor(e,t){this.loader=e,this.options=t}upload(){return this.loader.file.then((e=>new Promise(((t,s)=>{this._initRequest(),this._initListeners(t,s,e),this._sendRequest(e)}))))}abort(){this.xhr&&this.xhr.abort()}_initRequest(){const e=this.xhr=new XMLHttpRequest;e.open("POST",this.options.uploadUrl,!0),e.responseType="json"}_initListeners(e,t,s){const i=this.xhr,r=this.loader,o=`Couldn't upload file: ${s.name}.`;i.addEventListener("error",(()=>t(o))),i.addEventListener("abort",(()=>t())),i.addEventListener("load",(()=>{const s=i.response;if(!s||s.error)return t(s&&s.error&&s.error.message?s.error.message:o);const r=s.url?{default:s.url}:s.urls;e({...s,urls:r})})),
/* istanbul ignore else -- @preserve */
i.upload&&i.upload.addEventListener("progress",(e=>{e.lengthComputable&&(r.uploadTotal=e.total,r.uploaded=e.loaded)}))}_sendRequest(e){const t=this.options.headers||{},s=this.options.withCredentials||!1;for(const e of Object.keys(t))this.xhr.setRequestHeader(e,t[e]);this.xhr.withCredentials=s;const i=new FormData;i.append("upload",e),this.xhr.send(i)}}export{_ as Base64UploadAdapter,u as FileDialogButtonView,h as FileRepository,g as SimpleUploadAdapter};