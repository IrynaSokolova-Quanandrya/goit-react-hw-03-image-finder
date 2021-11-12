(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(7),c=n.n(r),s=(n(16),n(10)),i=n(3),l=n(4),u=n(6),m=n(5),d=(n(17),n(18),n(8)),h=(n(19),n(20),n(1)),g=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={query:""},e.handleChange=function(t){e.setState({query:t.target.value.toLowerCase()})},e.handleSubmit=function(t){if(t.preventDefault(),""===e.state.query.trim())return d.b.error("Enter search query!");e.props.onSubmit(e.state.query),e.setState({query:""})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(h.jsx)("header",{className:"Searchbar",children:Object(h.jsxs)("form",{onSubmit:this.handleSubmit,className:"SearchForm",children:[Object(h.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(h.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(h.jsx)("input",{className:"SearchForm-input",onChange:this.handleChange,value:this.state.query,name:"query",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),n}(o.Component),p=g,j=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.webformatURL,n=e.tags,o=e.largeImageURL,a=e.onOpen,r=e.onGetImg;return Object(h.jsx)("li",{className:"ImageGalleryItem",onClick:function(){return r(o,n)},children:Object(h.jsx)("img",{src:t,alt:n,className:"ImageGalleryItem-image",showModal:a})})}}]),n}(o.Component),b=j,y=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.images,n=e.showModal,o=e.onGetImg;return console.log({onGetImg:o}),Object(h.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){var t=e.id,a=e.webformatURL,r=e.tags,c=e.largeImageURL;return Object(h.jsx)(b,{webformatURL:a,tags:r,largeImageURL:c,onOpen:n,onGetImg:o},t)}))})}}]),n}(o.Component),f=y,O=n(11),v=n.n(O),w=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(h.jsx)("button",{type:"button",className:"Button",onClick:this.props.onClick,children:"Load more"})}}]),n}(o.Component),C=w,k=document.querySelector("#modal-root"),I=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).onCloseByClick=function(t){"DIV"===t.target.nodeName&&e.props.onClose()},e.onCloseByKedown=function(t){"Escape"===t.code&&e.props.onClose()},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){console.log("componentDidMount"),window.addEventListener("click",this.onCloseByClick),window.addEventListener("keydown",this.onCloseByKedown)}},{key:"componentWillUnmount",value:function(){console.log("componentWillUnmount"),window.removeEventListener("keydown",this.onCloseByKedown)}},{key:"render",value:function(){var e=this.props,t=e.onGetImg,n=e.onClose;return console.log({onGetImg:t,onClose:n}),Object(r.createPortal)(Object(h.jsx)("div",{className:"Overlay",onClose:n,children:Object(h.jsx)("div",{className:"Modal",children:Object(h.jsx)("img",{src:t.img,alt:t.alt})})}),k)}}]),n}(o.Component),x=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={mainURL:"https://pixabay.com/api/",secondaryURL:"&image_type=photo&orientation=horizontal&per_page=12",images:[],myKey:"24253422-4477825d93e6eb518eebc16ed",query:"",page:1,status:"idle",error:null,showModal:!1,modalImage:""},e.searchQuery=function(t){e.setState({query:t}),e.setState({page:1})},e.loadMore=function(){e.setState((function(e){return{page:e.page+1}}));var t=e.state,n=t.mainURL,o=t.secondaryURL,a=t.query,r=t.page,c=t.myKey;fetch("".concat(n,"?q=").concat(a,"&page=").concat(r,"&key=").concat(c).concat(o)).then((function(e){return e.ok?e.json():Promise.reject(new Error("Can not find ".concat(a,"!")))})).then((function(t){e.setState((function(e){return{images:[].concat(Object(s.a)(e.images),Object(s.a)(t.hits)),status:"resolved"}}))}))},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.setImgModal=function(t,n){e.setState({modalImage:{img:t,alt:n}})},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("click",(function(t){"IMG"===t.target.nodeName&&e.toggleModal()}))}},{key:"componentDidUpdate",value:function(e,t){var n=this,o=this.state,a=o.mainURL,r=o.secondaryURL,c=o.query,s=o.page,i=o.myKey;window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),t.query!==c&&(this.setState({status:"pending"}),setTimeout((function(){fetch("".concat(a,"?q=").concat(c,"&page=").concat(s,"&key=").concat(i).concat(r)).then((function(e){return e.ok?e.json():Promise.reject(new Error("Can not find ".concat(c,"!")))})).then((function(e){n.setState({images:e.hits,page:s+1,status:"resolved"})}))}),1e3))}},{key:"render",value:function(){console.log(this.state.modalImage);var e=this.state,t=e.status,n=e.images,o=e.showModal,a=e.modalImage;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(p,{onSubmit:this.searchQuery}),Object(h.jsx)(d.a,{autoClose:3e3}),"resolved"===t&&Object(h.jsx)(f,{images:n,showModal:this.toggleModal,onGetImg:this.setImgModal}),"pending"===t&&Object(h.jsx)(v.a,{className:"Loader",type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3,style:{margin:"0 50%"}}),0!==n.length&&Object(h.jsx)(C,{onClick:this.loadMore}),o&&Object(h.jsx)(I,{onClose:this.toggleModal,onGetImg:a})]})}}]),n}(o.Component),S=x;c.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(S,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.95a8284c.chunk.js.map