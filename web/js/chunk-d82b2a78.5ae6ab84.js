(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d82b2a78"],{1083:function(t,e,a){},"120b":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],staticClass:"shortcut__content"},[t._t("default")],2)},i=[],n=a("d4ec"),c=a("bee2"),l=a("262e"),r=a("2caf"),o=a("9ab4"),u=a("60a3"),d=a("b76a"),b=a.n(d),v=function(t){Object(l["a"])(a,t);var e=Object(r["a"])(a);function a(){var t;return Object(n["a"])(this,a),t=e.apply(this,arguments),t.isActive=!1,t}return Object(c["a"])(a,[{key:"mounted",value:function(){this.isActive=this.selected}}]),a}(u["c"]);Object(o["a"])([Object(u["b"])({required:!0})],v.prototype,"name",void 0),Object(o["a"])([Object(u["b"])({required:!1})],v.prototype,"icon",void 0),Object(o["a"])([Object(u["b"])({default:!1})],v.prototype,"selected",void 0),v=Object(o["a"])([Object(u["a"])({name:"ShortcutContent",components:{Draggable:b.a}})],v);var f=v,h=f,p=(a("d3ce"),a("2877")),m=Object(p["a"])(h,s,i,!1,null,"e2694c30",null);e["a"]=m.exports},2890:function(t,e,a){},"36b6":function(t,e,a){},"7a07":function(t,e,a){},8686:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],staticClass:"panel-content"},[t._t("default")],2)},i=[],n=a("d4ec"),c=a("bee2"),l=a("262e"),r=a("2caf"),o=a("9ab4"),u=a("60a3"),d=a("b76a"),b=a.n(d),v=function(t){Object(l["a"])(a,t);var e=Object(r["a"])(a);function a(){var t;return Object(n["a"])(this,a),t=e.apply(this,arguments),t.isActive=!1,t}return Object(c["a"])(a,[{key:"mounted",value:function(){this.isActive=this.selected}}]),a}(u["c"]);Object(o["a"])([Object(u["b"])({required:!0})],v.prototype,"name",void 0),Object(o["a"])([Object(u["b"])({required:!0})],v.prototype,"icon",void 0),Object(o["a"])([Object(u["b"])({default:!1})],v.prototype,"selected",void 0),v=Object(o["a"])([Object(u["a"])({name:"RightPanelContent",components:{Draggable:b.a}})],v);var f=v,h=f,p=(a("b73f"),a("2877")),m=Object(p["a"])(h,s,i,!1,null,"551c562e",null);e["a"]=m.exports},b73f:function(t,e,a){"use strict";var s=a("2890"),i=a.n(s);i.a},c20e:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"shortcut"},[a("a",{staticClass:"header"},[t._v("เมนูลัด")]),a("div",{staticClass:"menu-wrapper"},t._l(t.tabs,(function(e,s){return a("a",{key:s,staticClass:"menu",class:{active:e.isActive},on:{click:function(a){return t.clickedTab(e)}}},[e.icon?a("i",{class:e.icon}):t._e(),a("span",[t._v(t._s(e.name))])])})),0),t._t("default")],2)},i=[],n=(a("4160"),a("b0c0"),a("159b"),a("d4ec")),c=a("bee2"),l=a("262e"),r=a("2caf"),o=a("9ab4"),u=a("60a3"),d=a("b76a"),b=a.n(d),v=a("8686"),f=function(t){Object(l["a"])(a,t);var e=Object(r["a"])(a);function a(){var t;return Object(n["a"])(this,a),t=e.apply(this,arguments),t.tabs=[],t}return Object(c["a"])(a,[{key:"created",value:function(){this.tabs=this.$children}},{key:"clickedTab",value:function(t){this.tabs.forEach((function(e){return e.isActive=e.name===t.name}))}}]),a}(u["c"]);f=Object(o["a"])([Object(u["a"])({name:"ShortcutMenu",components:{PanelContent:v["a"],Draggable:b.a}})],f);var h=f,p=h,m=(a("eb8b"),a("2877")),g=Object(m["a"])(p,s,i,!1,null,"fde2918c",null);e["a"]=g.exports},d3ce:function(t,e,a){"use strict";var s=a("7a07"),i=a.n(s);i.a},e3cb:function(t,e,a){"use strict";var s=a("1083"),i=a.n(s);i.a},eb21:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page__content"},[a("div",{staticClass:"header"},[a("div",{staticClass:"level"},[a("div",{staticClass:"level-left"},[a("b-icon",{staticStyle:{"margin-right":"0.45rem"},attrs:{icon:t.config.icon}}),a("span",{staticClass:"is-size-4 has-text-white",staticStyle:{"font-weight":"500"}},[t._v(t._s(t.config.title))])],1),a("div",{staticClass:"level-right"},[a("div",{staticClass:"buttons"},[a("b-button",{staticClass:"button is-outline",attrs:{"icon-left":"refresh",loading:t.isCalling},on:{click:t.getAll}},[a("span",[t._v("โหลดข้อมูลใหม่")])]),a("b-button",{attrs:{"icon-left":"plus",type:"is-warning"},nativeOn:{click:function(e){t.isAddModalActive=!0}}},[t._v(" เพิ่ม"+t._s(t.config.title)+"ใหม่ ")])],1)])])]),a("div",{staticClass:"content"},[a("div",{staticClass:"columns is-multiline"},[a("div",{staticClass:"column is-8"},[a("div",{staticClass:"box"},[a("b-table",{attrs:{data:t.templates,selected:t.selected,"pagination-simple":!0,paginated:"","per-page":"12",loading:t.isCalling},on:{"update:selected":function(e){t.selected=e}}},[a("b-table-column",{attrs:{field:"id",label:"ไอดี",width:"40",numeric:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.id)+" ")]}}])}),a("b-table-column",{attrs:{field:"name",label:"ชื่อแม่แบบ",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.name)+" ")]}}])}),a("b-table-column",{attrs:{field:"description",label:"คำอธิบาย",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.description)+" ")]}}])}),a("b-table-column",{attrs:{field:"isPublic",label:"สถานะ",width:"60"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s("Draft"===e.row.isPublic?"ฉบับร่าง":"เสร็จ")+" ")]}}])}),a("b-table-column",{attrs:{field:"owner",label:"เจ้าของ",width:"60"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.owner.username)+" ")]}}])})],1)],1)]),t.selected?a("div",{staticClass:"column is-4"},[a("div",{staticClass:"box"},[a("p",{staticClass:"subtitle is-6 is-black is-large"},[t._v("กำลังเลือกข้อมูลของ")]),a("h1",{staticClass:"title is-2 is-black is-large"},[t._v(t._s(t.selected.name))]),a("div",{staticClass:"columns is-multiline"},[a("div",{staticClass:"column is-12"},[a("b-field",{attrs:{label:"ชื่อแม่แบบ"}},[a("b-input",{model:{value:t.selected.name,callback:function(e){t.$set(t.selected,"name",e)},expression:"selected.name"}})],1),a("b-field",{attrs:{label:"คำอธิบาย"}},[a("b-input",{model:{value:t.selected.description,callback:function(e){t.$set(t.selected,"description",e)},expression:"selected.description"}})],1),a("b-field",{attrs:{label:"เจ้าของแม่แบบ"}},[a("b-input",{attrs:{disabled:""},model:{value:t.selected.owner.username,callback:function(e){t.$set(t.selected.owner,"username",e)},expression:"selected.owner.username"}})],1),a("b-field",{attrs:{label:"สถานะ"}},[a("b-select",{staticStyle:{width:"100%"},attrs:{placeholder:"เลือกสถานะ"},model:{value:t.selected.isPublic,callback:function(e){t.$set(t.selected,"isPublic",e)},expression:"selected.isPublic"}},[a("option",{attrs:{value:"Draft"}},[t._v("แบบร่าง (Draft)")]),a("option",{attrs:{value:"Published"}},[t._v("เสร็จ (Published)")])])],1),a("b-field",{attrs:{label:"การกระทำอื่น ๆ"}},[a("div",{staticClass:"buttons are-small"},[a("b-button",{staticClass:"button is-link is-light is-outlined",attrs:{"icon-left":"pencil-box-multiple"},on:{click:t.onDelete}},[t._v("แก้ไขการออกแบบ")]),a("b-button",{staticClass:"button is-danger is-light is-outlined",attrs:{"icon-left":"delete"},on:{click:t.onDelete}},[t._v("ลบแม่แบบนี้")]),a("b-button",{staticClass:"is-warning is-light is-small",attrs:{"icon-left":"close-circle"},on:{click:t.onClearSelected}},[t._v("ยกเลิกการเลือกข้อมูล")])],1)]),a("b-button",{staticClass:"button is-black is-fullwidth",attrs:{"icon-left":"content-save"},on:{click:t.onEdit}},[t._v("บันทึก")])],1)])])]):a("div",{staticClass:"column is-4"},[a("b-message",{attrs:{type:"is-info","aria-close-label":"Close message"}},[a("h4",{staticClass:"title is-4"},[t._v("เลือก"+t._s(t.config.title)+"ที่ต้องการแก้ไขด้านซ้าย")]),a("p",{staticClass:"subtitle is-6"},[t._v("คลิ๊กที่บรรทัดข้อมูลที่ต้องการบนตารางเพื่อเริ่มการจัดการข้อมูล")])])],1)]),a("b-modal",{attrs:{width:450,scroll:"keep"},model:{value:t.isAddModalActive,callback:function(e){t.isAddModalActive=e},expression:"isAddModalActive"}},[a("div",{staticClass:"card has-status"},[a("div",{staticClass:"card-content"},[a("div",{staticClass:"level",staticStyle:{"margin-bottom":"0"}},[a("div",{staticClass:"level-left"},[a("div",[a("h4",{staticClass:"title is-4"},[t._v("เพิ่ม"+t._s(t.config.title)+"ใหม่")]),a("h4",{staticClass:"subtitle is-6 has-text-weight-medium"},[t._v("สร้างแม่แบบ เพื่อแจกแจงงาน")])])]),a("div",{staticClass:"level-right"},[a("div",{staticClass:"has-text-right"},[a("b-button",{attrs:{type:"is-light","icon-left":"book-variant"}})],1)])]),a("b-field",{attrs:{label:"ชื่อแม่แบบ"}},[a("b-input",{model:{value:t.newData.name,callback:function(e){t.$set(t.newData,"name",e)},expression:"newData.name"}})],1),a("b-field",{attrs:{label:"คำอธิบาย"}},[a("b-input",{attrs:{type:"textarea"},model:{value:t.newData.description,callback:function(e){t.$set(t.newData,"description",e)},expression:"newData.description"}})],1),a("b-message",{attrs:{type:"is-warning","aria-close-label":"Close message"}},[t._v(" ค่าอื่น ๆ ในการสร้างแม่แบบในจัดการของ Admin นั้นจะสามารถเพิ่มได้แค่ชื่อและคำอธิบายแม่แบบเท่านั้น หากต้องการการจัดการที่เต็มรูปแบบโปรดทำต่อที่หน้าออกแบบแม่แบบ หลังจากสร้างแม่แบบนี้แล้ว ")]),a("div",{staticClass:"buttons is-right"},[a("b-button",{staticClass:"is-black is-outlined",on:{click:function(e){t.isAddModalActive=!1}}},[t._v("ยกเลิก")]),a("b-button",{staticClass:"is-black",on:{click:t.onCreate}},[t._v("เพิ่ม"+t._s(t.config.title)+"ใหม่")])],1)],1)])])],1)])},i=[],n=(a("b0c0"),a("96cf"),a("1da1")),c=a("d4ec"),l=a("bee2"),r=a("262e"),o=a("2caf"),u=a("9ab4"),d=a("60a3"),b=a("3d8f"),v=a("c20e"),f=a("120b"),h=a("c115"),p=a("d4dc"),m=a("b54a"),g=a("8cca"),w=a("d4bf"),C=a("e348"),_=function(t){Object(r["a"])(a,t);var e=Object(o["a"])(a);function a(){var t;return Object(c["a"])(this,a),t=e.apply(this,arguments),t.templates=[],t.selected=null,t.config={icon:"flag",title:"แม่แบบ",category:m["a"].TEMPLATE},t.isCalling=!1,t.isAddModalActive=!1,t.newData=new h["a"](0,"","",new C["a"]("","",[],[]),[],"",w["a"].getUser(),h["b"].DRAFT,[],0),t}return Object(l["a"])(a,[{key:"beforeMount",value:function(){this.getAll()}},{key:"getAll",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.isCalling=!0,e=new g["a"](this.config.category),e.setRequest(m["b"].GET),t.next=5,e.shoot({});case 5:this.templates=e.getResult(),this.isCalling=e.status;case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"onCreate",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.isCalling=!0,e=new g["a"](this.config.category),e.setRequest(m["b"].CREATE),e.setAttachData(this.newData),t.next=6,e.shoot({});case 6:return this.isCalling=e.status,e.log(),t.next=10,this.getAll();case 10:this.isAddModalActive=!1;case 11:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"onEdit",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.isCalling=!0,e=new g["a"](this.config.category),e.setRequest(m["b"].UPDATE),e.setAttachData(this.selected),t.next=6,e.shoot({});case 6:return this.isCalling=e.status,t.next=9,this.getAll();case 9:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"onDelete",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,a,s=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$buefy.dialog.confirm({title:"ยืนยันการลบแม่แบบ ".concat(this.selected.name),message:'<h4 class="title is-4">ลบแม่แบบ '.concat(null===(e=this.selected)||void 0===e?void 0:e.name,"</h4>โดยการกระทำนี้นักออกแบบที่เป็นเจ้าของแม่แบบ รวมถึงนักการตลาดจะไม่สามารถใช้ข้อมูลจากแม่แบบนี้ได้ <br/><br/>สามารถกู้คืนแม่แบบนี้ได้ที่แท็บ <b>'แม่แบบที่ลบ'</b>"),cancelText:"กลับ",confirmText:"ยืนยันลบแม่แบบ ".concat(null===(a=this.selected)||void 0===a?void 0:a.name),type:"is-danger",hasIcon:!0,icon:"account-cancel",iconPack:"mdi",onConfirm:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s.isCalling=!0,e=new g["a"](s.config.category),e.setRequest(m["b"].DELETE),e.setAttachData(s.selected),t.next=6,e.shoot({});case 6:return s.isCalling=e.status,s.selected=null,t.next=10,s.getAll();case 10:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()});case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"onClearSelected",value:function(){this.selected=null}},{key:"activeTemplate",get:function(){return p["b"].getTemplate()}}]),a}(d["c"]);_=Object(u["a"])([Object(d["a"])({name:"ManageTemplate",components:{ShortcutContent:f["a"],ShortcutMenu:v["a"],Navbar:b["a"]}})],_);var k=_,y=k,O=(a("e3cb"),a("2877")),j=Object(O["a"])(y,s,i,!1,null,"fbf5742a",null);e["default"]=j.exports},eb8b:function(t,e,a){"use strict";var s=a("36b6"),i=a.n(s);i.a}}]);
//# sourceMappingURL=chunk-d82b2a78.5ae6ab84.js.map