(this.webpackJsonpfinal_project_react=this.webpackJsonpfinal_project_react||[]).push([[0],{103:function(e,t,s){},107:function(e,t,s){"use strict";s.r(t);var n=s(1),r=s(2),c=s(38),i=s.n(c),a=(s(67),s(18)),o=s(7),d=s(8),l=s(20),j=s(10),u=s(9),b=s(6),m=s(4),h="http://localhost:3000/api/v1",O=function(){return fetch("".concat(h,"/users"),{headers:{"Cache-Control":"no-cache"}}).then((function(e){return e.json()}))},x=function(e){return fetch("".concat(h,"/users"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()}))},p=function(e){return fetch("".concat(h,"/users/").concat(e)).then((function(e){return e.json()}))},f=function(){return fetch("".concat(h,"/customers"),{headers:{"Cache-Control":"no-cache"}}).then((function(e){return e.json()}))},v=function(e){return fetch("".concat(h,"/customers"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()}))},g=function(e){return fetch("".concat(h,"/customers/").concat(e)).then((function(e){return e.json()}))},N=function(e){return fetch("".concat(h,"/users/").concat(e.id,"/reviews"),{headers:{"Cache-Control":"no-cache"}}).then((function(e){return e.json()}))},_=function(e){return fetch("".concat(h,"/users/").concat(e.user_id,"/reviews"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()}))},y=function(){return fetch("".concat(h,"/ride_requests"),{headers:{"Cache-Control":"no-cache"}}).then((function(e){return e.json()}))},w=function(e){return fetch("".concat(h,"/users/").concat(e.id,"/ride_requests"),{headers:{"Cache-Control":"no-cache"}}).then((function(e){return e.json()}))},S=function(e){return fetch("".concat(h,"/users/").concat(e.user_id,"/ride_requests"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()}))},q=function(e){return fetch("".concat(h,"/ride_requests/").concat(e.id),{method:"PATCH",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json}))},F=function(e){return fetch("".concat(h,"/sessions"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()}))},D=function(){return fetch("".concat(h,"/sign_out"),{method:"DELETE",credentials:"include"}).then((function(e){return e.json()}))},C=function(){return fetch("".concat(h,"/current_user"),{credentials:"include"}).then((function(e){return e.json()}))},k=function(e){var t=e.handleSubmit,s=e.history;return Object(n.jsxs)("main",{className:"bgImg",id:"sign-style",children:[Object(n.jsx)("h4",{className:"sign-heading",children:"Sign In"}),Object(n.jsxs)("form",{className:"sign-form",onSubmit:function(e){e.preventDefault();var n=e.currentTarget,r=new FormData(n);t({email:r.get("email"),password:r.get("password")}),s.push("/")},children:[Object(n.jsxs)("div",{className:"form-group row",children:[Object(n.jsx)("label",{htmlFor:"email",className:"col-sm-2 col-form-label",children:"Email*"}),Object(n.jsx)("input",{id:"email",type:"email",name:"email",required:"required"})]}),Object(n.jsxs)("div",{className:"form-group row",children:[Object(n.jsx)("label",{htmlFor:"password",className:"col-sm-2 col-form-label",children:"Password*"}),Object(n.jsx)("input",{id:"password",type:"password",name:"password",required:"required"})]}),Object(n.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Sign In"})]})]})};var R=function(e){return Object(n.jsxs)("main",{className:"bgImage",id:"sign-style",children:[Object(n.jsx)("h5",{className:"sign-heading",children:"Sign Up As New Customer"}),Object(n.jsxs)("form",{className:"sign-form",onSubmit:function(t){t.preventDefault();var s=t.currentTarget,n=new FormData(s),r={first_name:n.get("first_name"),last_name:n.get("last_name"),email:n.get("email"),password:n.get("password"),password_confirmation:n.get("password_confirmation"),address:n.get("address"),destination_address:n.get("destination_address"),phone_number:n.get("phone_number")};v(r).then((function(t){t.id&&e.history.push("/sign_in")}))},children:[Object(n.jsxs)("div",{className:"form-group row",children:[Object(n.jsx)("label",{htmlFor:"first_name",className:"col-sm-4 col-form-label",children:"First Name*"}),Object(n.jsx)("input",{type:"text",name:"first_name",required:"required",id:"first_name"})]}),Object(n.jsxs)("div",{className:"form-group row",children:[Object(n.jsx)("label",{htmlFor:"last_name",className:"col-sm-4 col-form-label",children:"Last Name*"}),Object(n.jsx)("input",{type:"text",name:"last_name",required:"required",id:"last_name"})]}),Object(n.jsxs)("div",{className:"form-group row",children:[Object(n.jsx)("label",{htmlFor:"address",className:"col-sm-4 col-form-label",children:"Address*"}),Object(n.jsx)("input",{type:"text",name:"address",required:"required",id:"address"})]}),Object(n.jsx)("p",{children:Object(n.jsxs)("small",{children:[Object(n.jsx)("b",{children:"Note : "}),"The address should be in this format, e.g. 2916, McBride Ave/St, Surrey, BC "]})}),Object(n.jsxs)("div",{className:"form-group row",children:[Object(n.jsx)("label",{htmlFor:"destination_address",className:"col-sm-4 col-form-label",children:"Destination Address*"}),Object(n.jsx)("input",{type:"text",name:"destination_address",required:"required",id:"destination_address"})]}),Object(n.jsxs)("div",{className:"form-group row",children:[Object(n.jsx)("label",{htmlFor:"phone_number",className:"col-sm-4 col-form-label",children:"Phone Number*"}),Object(n.jsx)("input",{type:"number",name:"phone_number",required:"required",id:"phone_number"})]}),Object(n.jsxs)("div",{className:"form-group row",children:[Object(n.jsx)("label",{htmlFor:"email",className:"col-sm-4 col-form-label",children:"Email*"}),Object(n.jsx)("input",{type:"email",name:"email",required:"required",id:"email"})]}),Object(n.jsxs)("div",{className:"form-group row",children:[Object(n.jsx)("label",{htmlFor:"password",className:"col-sm-4 col-form-label",children:"Password*"}),Object(n.jsx)("input",{type:"password",name:"password",required:"required",id:"password"})]}),Object(n.jsxs)("div",{className:"form-group row",children:[Object(n.jsx)("label",{htmlFor:"password_confirmation",className:"col-sm-4 col-form-label",children:"Confirm Password*"}),Object(n.jsx)("input",{type:"password",name:"password_confirmation",required:"required",id:"password_confirmation"})]}),Object(n.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Sign Up"})]})]})};var L=function(e){return Object(n.jsxs)("main",{className:"bgImage",id:"sign-style",children:[Object(n.jsx)("h5",{className:"sign-heading",children:"Sign Up As New Driver"}),Object(n.jsxs)("form",{className:"sign-form",onSubmit:function(t){t.preventDefault();var s=t.currentTarget,n=new FormData(s),r={first_name:n.get("first_name"),last_name:n.get("last_name"),email:n.get("email"),password:n.get("password"),password_confirmation:n.get("password_confirmation"),address:n.get("address"),driver_license_number:n.get("driver_license_number"),description:n.get("description"),phone_number:n.get("phone_number")};x(r).then((function(t){t.id&&e.history.push("/sign_in")}))},children:[Object(n.jsxs)("div",{className:"form-group row",children:[Object(n.jsx)("label",{htmlFor:"first_name",className:"col-sm-4 col-form-label",children:"First Name*"}),Object(n.jsx)("input",{type:"text",name:"first_name",required:"required",id:"first_name"})]}),Object(n.jsxs)("div",{className:"form-group row",children:[Object(n.jsx)("label",{htmlFor:"last_name",className:"col-sm-4 col-form-label",children:"Last Name*"}),Object(n.jsx)("input",{type:"text",name:"last_name",required:"required",id:"last_name"})]}),Object(n.jsxs)("div",{className:"form-group row",children:[Object(n.jsx)("label",{htmlFor:"address",className:"col-sm-4 col-form-label",children:"Address*"}),Object(n.jsx)("input",{type:"text",name:"address",required:"required",id:"address"})]}),Object(n.jsx)("p",{children:Object(n.jsxs)("small",{children:[Object(n.jsx)("b",{children:"Note : "}),"The address should be in this format, e.g. 2916, McBride Ave/St, Surrey, BC "]})}),Object(n.jsxs)("div",{className:"form-group row",children:[Object(n.jsx)("label",{htmlFor:"phone_number",className:"col-sm-4 col-form-label",children:"Phone Number*"}),Object(n.jsx)("input",{type:"number",name:"phone_number",required:"required",id:"phone_number"})]}),Object(n.jsxs)("div",{className:"form-group row",children:[Object(n.jsx)("label",{htmlFor:"driver_license_number",className:"col-sm-4 col-form-label",children:"Driving License Number*"}),Object(n.jsx)("input",{type:"number",name:"driver_license_number",required:"required",id:"driver_license_number"})]}),Object(n.jsxs)("div",{className:"form-group row",children:[Object(n.jsx)("label",{htmlFor:"description",className:"col-sm-4 col-form-label",children:"Description*"}),Object(n.jsx)("input",{type:"string",name:"description",required:"required",id:"description"})]}),Object(n.jsxs)("div",{className:"form-group row",children:[Object(n.jsx)("label",{htmlFor:"email",className:"col-sm-4 col-form-label",children:"Email*"}),Object(n.jsx)("input",{type:"email",name:"email",required:"required",id:"email"})]}),Object(n.jsxs)("div",{className:"form-group row",children:[Object(n.jsx)("label",{htmlFor:"password",className:"col-sm-4 col-form-label",children:"Password*"}),Object(n.jsx)("input",{type:"password",name:"password",required:"required",id:"password"})]}),Object(n.jsxs)("div",{className:"form-group row",children:[Object(n.jsx)("label",{htmlFor:"password_confirmation",className:"col-sm-4 col-form-label",children:"Confirm Password*"}),Object(n.jsx)("input",{type:"password",name:"password_confirmation",required:"required",id:"password_confirmation"})]}),Object(n.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Sign Up"})]})]})},T=s(56),A=s(57),P=s.n(A),I=function(e){Object(j.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).state={destinationLat:e.latitude,destinationLong:e.longitude,distance:[]},n}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var e=this;f().then((function(t){C().then((function(s){var n=t.filter((function(e){return e.id===s.id}))[0],r=Object(T.getDistance)({latitude:n.latitude,longitude:n.longitude},{latitude:e.state.destinationLat,longitude:e.state.destinationLong});e.setState({distance:[P.a.round(r/1e3,1)]})}))}))}},{key:"render",value:function(){var e=this.state.distance,t=this.props,s=t.id,r=t.first_name,c=t.last_name;return Object(n.jsx)("div",{children:e>0&&e<10&&Object(n.jsxs)("li",{children:[Object(n.jsx)("u",{children:Object(n.jsxs)(b.b,{to:"/users/".concat(s),className:"driverName",children:[r," ",c]},s)}),Object(n.jsx)("p",{children:Object(n.jsxs)("button",{children:[e," km away"]})}),Object(n.jsx)("br",{})]},s)})}}]),s}(r.Component),M=function(e){Object(j.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).state={users:[]},n}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var e=this;O().then((function(t){e.setState((function(e){return{users:t}}))}))}},{key:"render",value:function(){var e=this.state.users;return Object(n.jsxs)("main",{className:"bgImage",children:[Object(n.jsx)("h3",{className:"headerStyle",children:"Drivers Within 10 km :"}),Object(n.jsx)("ol",{className:"list",children:e.map((function(e){return Object(n.jsx)(I,Object(a.a)({},e))}))})]})}}]),s}(r.Component);var U=function(){return Object(n.jsx)("div",{style:{fontSize:"50px"},className:"container"})},B=s(27),J=function(e){var t=e.isAuth,s=e.component,r=Object(B.a)(e,["isAuth","component"]);return Object(n.jsx)(m.b,Object(a.a)(Object(a.a)({},r),{},{render:function(e){return t?Object(n.jsx)(s,Object(a.a)({},e)):Object(n.jsx)(m.a,{to:"/sign_in"})}}))},E=s(59),H=function(e){return Object(n.jsxs)("nav",{className:"navbar navbar-dark bg-dark",children:[Object(n.jsxs)("span",{children:[Object(n.jsx)(E.a,{className:"carIcon"}),Object(n.jsx)("span",{className:"appName",children:"Ride share"})]}),Object(n.jsxs)("span",{className:"navStyle",children:[Object(n.jsx)(b.c,{to:"/",children:Object(n.jsx)("button",{className:"btn btn-primary btn-sm",type:"button",children:"Home"})}),e.currentUser?Object(n.jsxs)(n.Fragment,{children:[e.currentUser.driver_license_number?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(b.c,{to:"/driver",children:Object(n.jsx)("button",{className:"btn btn-primary btn-sm",type:"button",id:"buttonSpace",children:"Driver"})}),Object(n.jsx)(b.c,{to:"/ride_requests",children:Object(n.jsx)("button",{className:"btn btn-primary btn-sm",type:"button",id:"buttonSpace",children:"Ride Requests List"})})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(b.c,{to:"/users",children:Object(n.jsx)("button",{className:"btn btn-primary btn-sm",type:"button",id:"buttonSpace",children:"Drivers List"})}),Object(n.jsx)(b.c,{to:"/customer",children:Object(n.jsx)("button",{className:"btn btn-primary btn-sm",type:"button",id:"buttonSpace",children:"Customer"})})]}),Object(n.jsxs)("span",{className:"username",children:["Hello! ",e.currentUser.first_name," ",e.currentUser.last_name]}),Object(n.jsx)("button",{onClick:function(){e.destroySession(),window.location="/"},className:"btn btn-danger btn-sm",id:"buttonSpace",children:"Sign Out"})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(b.c,{to:"/sign_in",children:Object(n.jsx)("button",{className:"btn btn-primary btn-sm",type:"button",id:"buttonSpace",children:"SignIn"})}),Object(n.jsxs)(b.c,{to:"/sign_up/driver",children:[" ",Object(n.jsx)("button",{className:"btn btn-primary btn-sm",type:"button",id:"buttonSpace",children:"SignUp As Driver"})]}),Object(n.jsx)(b.c,{to:"/sign_up/customer",children:Object(n.jsx)("button",{className:"btn btn-primary btn-sm",type:"button",id:"buttonSpace",children:"SignUp As Customer"})})]})]})]})},z=s(22),W=s(28),Y=s(13),G=function(e){Object(j.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).state={customer:{},ride_requests:[],users:[]},n}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var e=this;C().then((function(t){e.setState((function(e){return{customer:t}})),y().then((function(s){e.setState((function(e){return{ride_requests:s.filter((function(e){return e.customer_id===t.id}))}})),e.state.ride_requests.map((function(t){p(t.user_id).then((function(t){e.setState((function(e){return{users:[].concat(Object(z.a)(e.users),[t])}}))}))}))}))}))}},{key:"render",value:function(){var e=this.state,t=e.customer,s=e.ride_requests,r=e.users;return Object(n.jsxs)("main",{className:"bgImage",children:[Object(n.jsx)("h3",{className:"headerStyle",children:"Your Profile Page"}),Object(n.jsxs)("div",{className:"pfList",children:[Object(n.jsx)("p",{children:" "},t.id),Object(n.jsxs)("h5",{className:"pfName",children:[" ",t.first_name," ",t.last_name]}),Object(n.jsxs)("p",{children:[Object(n.jsx)(Y.a,{})," ",t.address]}),Object(n.jsxs)("p",{children:[Object(n.jsx)(Y.c,{})," ",t.destination_address]}),Object(n.jsxs)("p",{children:[Object(n.jsx)(Y.b,{})," ",t.email]}),Object(n.jsxs)("p",{children:[Object(n.jsx)(Y.d,{}),"  ",t.phone_number]})]}),Object(n.jsxs)("div",{className:"tableStyle",children:[Object(n.jsx)("h5",{className:"title",children:Object(n.jsx)("u",{children:"Ride Request List"})}),Object(n.jsxs)(W.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",children:[Object(n.jsx)("thead",{className:"tableList",children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"First Name"}),Object(n.jsx)("th",{children:"Last Name"}),Object(n.jsx)("th",{children:"Address"}),Object(n.jsx)("th",{children:"Ride Date"}),Object(n.jsx)("th",{children:"Ride Time"}),Object(n.jsx)("th",{children:"Status"})]})}),Object(n.jsx)("tbody",{className:"tableList",children:s.map((function(e){var t;if(r.map((function(s){s.id===e.user_id&&(t=s)})),t)return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:t.first_name}),Object(n.jsx)("td",{children:t.last_name}),Object(n.jsxs)("td",{children:[t.address," "]}),Object(n.jsx)("td",{children:e.ride_date}),Object(n.jsx)("td",{children:e.ride_time.substring(11,16)}),Object(n.jsx)("td",{children:e.status})]},e.id)}))})]})]})]})}}]),s}(r.Component),K=s(25),Q=function(e){return Object(n.jsxs)("main",{className:"bgImage",style:{color:"white"},children:[Object(n.jsx)("h3",{className:"headerStyle",children:"Create A Ride Request"}),Object(n.jsxs)("form",{className:"rideRequestForm",onSubmit:function(t){t.preventDefault();var s=t.currentTarget,n=new FormData(s),r={ride_date:n.get("ride_date"),ride_time:n.get("ride_time"),status:"",user_id:e.match.params.id};S(r).then((function(e){K.toast.success("Ride request \ud83d\ude97 \ud83d\ude97 created ! "),setTimeout((function(){window.location.reload(!0)}),3e3)}))},children:[Object(n.jsxs)("div",{className:"form-group row",children:[Object(n.jsx)("label",{htmlFor:"ride_date",className:"col-sm-3 col-form-label",children:"Select Day*"}),Object(n.jsx)("input",{type:"date",name:"ride_date",required:"required"})]}),Object(n.jsxs)("div",{className:"form-group row",children:[Object(n.jsx)("label",{htmlFor:"ride_time",className:"col-sm-3 col-form-label",children:"Select Time*"}),Object(n.jsx)("input",{type:"time",name:"ride_time",required:"required"})]}),Object(n.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit Ride Request"})]})]})},V=s(60);var X=function(e){var t=e.max,s=e.current;return Object(n.jsx)("div",{className:"StarRating",children:Array.from({length:t}).map((function(e,t){return Object(n.jsx)(Z,{style:{height:".7em",color:t<s?"gold":"whitesmoke"}},t)}))})};function Z(e){var t=e.style,s=void 0===t?{}:t,r=Object(B.a)(e,["style"]),c=s.color,i=void 0===c?"black":c,o=Object(B.a)(s,["color"]);return Object(n.jsx)("svg",Object(a.a)(Object(a.a)({xmlns:"http://www.w3.org/2000/svg"},r),{},{style:o,viewBox:"0 0 576 512",children:Object(n.jsx)("path",{fill:i,d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"})}))}var $=function(e){var t=e.body,s=e.created_at,r=e.customer,c=e.rating;return Object(n.jsxs)("div",{className:"padding-10",children:[Object(n.jsx)(V.a,{className:"reviewIcon"}),Object(n.jsx)("span",{className:"reviewPerson",children:Object(n.jsx)("u",{children:r})}),Object(n.jsx)("small",{className:"reviewDate",children:s.toLocaleString()}),Object(n.jsx)("p",{className:"ratingStyle",children:Object(n.jsx)(X,{max:5,current:c})}),Object(n.jsx)("p",{className:"reviewBody",children:t})]})},ee=function(e){var t=e.reviews,s=e.customers;return Object(n.jsx)("ul",{style:{listStyle:"none"},children:t?t.map((function(e){var t;if(s.map((function(s){s.id===e.customer_id&&(t=s)})),t)return Object(n.jsx)("li",{children:Object(n.jsx)($,{id:e.id,customer:t.first_name,body:e.body,rating:e.rating,created_at:new Date(e.created_at).toDateString()})},e.id)})):null})},te=s(61),se=function(e){Object(j.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).state={user:{},customers:[],reviews:[]},n}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var e=this;C().then((function(t){e.setState((function(e){return{user:t}})),N(t).then((function(t){e.setState((function(e){return{reviews:t}})),t.map((function(t){g(t.customer_id).then((function(t){e.setState((function(e){return{customers:[].concat(Object(z.a)(e.customers),[t])}}))}))}))}))}))}},{key:"render",value:function(){var e=this.state,t=e.user,s=e.reviews,r=e.customers;return Object(n.jsxs)("main",{className:"bgImage",children:[Object(n.jsx)("h3",{className:"headerStyle",children:"Your Profile Page"}),Object(n.jsxs)("div",{className:"pfList",children:[Object(n.jsxs)("h5",{className:"pfName",children:[" ",t.first_name," ",t.last_name]}),Object(n.jsxs)("p",{children:[" ",t.description," "]}),Object(n.jsxs)("p",{children:[Object(n.jsx)(Y.a,{})," ",t.address," "]}),Object(n.jsxs)("p",{children:[Object(n.jsx)(Y.b,{})," ",t.email]}),Object(n.jsxs)("p",{children:[Object(n.jsx)(Y.d,{})," ",t.phone_number," "]}),Object(n.jsxs)("p",{children:[Object(n.jsx)(te.a,{})," ",t.driver_license_number," "]})]}),Object(n.jsxs)("div",{className:"reviewList",children:[Object(n.jsx)("h5",{className:"title",children:Object(n.jsx)("u",{children:"Reviews"})}),Object(n.jsx)(ee,{reviews:s,customers:r})]})]})}}]),s}(r.Component),ne=function(e){var t=e.first_name,s=e.last_name,r=e.description,c=e.email,i=e.address,a=e.phone_number;return Object(n.jsxs)("div",{children:[Object(n.jsxs)("h5",{className:"pfName",children:[t," ",s]}),Object(n.jsxs)("p",{children:[" ",r," "]}),Object(n.jsxs)("p",{children:[Object(n.jsx)(Y.a,{})," ",i," "]}),Object(n.jsxs)("p",{children:[Object(n.jsx)(Y.b,{})," ",c]}),Object(n.jsxs)("p",{children:[Object(n.jsx)(Y.d,{})," ",a," "]})]})},re=function(e){Object(j.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).state={user:{},reviews:[],customers:[]},n.handleSubmit=n.handleSubmit.bind(Object(l.a)(n)),n}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var e=this;p(this.props.match.params.id).then((function(t){e.setState((function(e){return{user:t}})),N(t).then((function(t){e.setState((function(e){return{reviews:t}})),t.map((function(t){g(t.customer_id).then((function(t){e.setState((function(e){return{customers:[].concat(Object(z.a)(e.customers),[t])}}))}))}))}))}))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=new FormData(e.currentTarget),s={body:t.get("body"),rating:t.get("rating"),user_id:this.state.user.id};_(s).then((function(e){K.toast.success("Thank you for your review \ud83d\ude0a "),setTimeout((function(){window.location.reload(!0)}),3e3)}))}},{key:"render",value:function(){var e=this.state,t=e.user,s=e.reviews,r=e.customers;return Object(n.jsxs)("main",{className:"bgImage",children:[Object(n.jsx)("h3",{className:"headerStyle",children:"Driver Details"}),Object(n.jsxs)("div",{className:"pfList",children:[Object(n.jsx)(ne,{first_name:t.first_name,last_name:t.last_name,address:t.address,email:t.email,phone_number:t.phone_number,description:t.description}),Object(n.jsxs)("div",{className:"padding-10",children:[Object(n.jsx)("h5",{className:"title",children:Object(n.jsx)("u",{children:"Make a ride request"})}),Object(n.jsx)(b.b,{to:"/users/".concat(t.id,"/ride_requests"),children:Object(n.jsx)("button",{className:"btn btn-primary btn",type:"button",children:" Ride Request"})})]}),Object(n.jsxs)("div",{className:"padding-10",children:[Object(n.jsx)("h5",{className:"title",children:Object(n.jsx)("u",{children:"Write a review"})}),Object(n.jsxs)("form",{className:"reviewForm",onSubmit:this.handleSubmit,children:[Object(n.jsxs)("div",{id:"rating",children:[Object(n.jsx)("input",{type:"radio",name:"rating",value:"5",id:"5"}),Object(n.jsx)("label",{htmlFor:"5",children:"\u2606"}),Object(n.jsx)("input",{type:"radio",name:"rating",value:"4",id:"4"}),Object(n.jsx)("label",{htmlFor:"4",children:"\u2606"}),Object(n.jsx)("input",{type:"radio",name:"rating",value:"3",id:"3"}),Object(n.jsx)("label",{htmlFor:"3",children:"\u2606"}),Object(n.jsx)("input",{type:"radio",name:"rating",value:"2",id:"2"}),Object(n.jsx)("label",{htmlFor:"2",children:"\u2606"}),Object(n.jsx)("input",{type:"radio",name:"rating",value:"1",id:"1"}),Object(n.jsx)("label",{htmlFor:"1",children:"\u2606"})]}),Object(n.jsx)("textarea",{name:"body",id:"body",cols:"30",rows:"1"}),Object(n.jsx)("button",{className:"btn btn-primary btn-sm",id:"button-s",type:"submit",children:"Submit"})]})]}),Object(n.jsxs)("div",{className:"padding-10",children:[Object(n.jsx)("h6",{className:"title",children:Object(n.jsx)("u",{children:"Reviews"})}),Object(n.jsx)(ee,{reviews:s,customers:r})]})]})]})}}]),s}(r.Component),ce=function(e){Object(j.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).state={user:{},ride_requests:[],customers:[]},n.acceptRequest=n.acceptRequest.bind(Object(l.a)(n)),n}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var e=this;C().then((function(t){e.setState((function(e){return{user:t}})),w(t).then((function(t){e.setState((function(e){return{ride_requests:t}})),t.map((function(t){g(t.customer_id).then((function(t){e.setState((function(e){return{customers:[].concat(Object(z.a)(e.customers),[t])}}))}))}))}))}))}},{key:"acceptRequest",value:function(e,t){q({id:e,status:t}).then((function(){window.location.reload(!0)}))}},{key:"render",value:function(){var e=this,t=this.state,s=t.ride_requests,r=t.customers;return Object(n.jsxs)("main",{className:"bgImage",children:[Object(n.jsx)("h3",{className:"headerStyle",children:"Ride Requests Information"}),Object(n.jsxs)("div",{className:"tableStyle",children:[Object(n.jsx)("h5",{className:"title",children:Object(n.jsx)("u",{children:"Ride Requests Pending List"})}),Object(n.jsxs)(W.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",children:[Object(n.jsx)("thead",{className:"tableList",children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"First Name"}),Object(n.jsx)("th",{children:"Last Name"}),Object(n.jsx)("th",{children:"Address"}),Object(n.jsx)("th",{children:"Destination Address"}),Object(n.jsx)("th",{children:"Ride Date"}),Object(n.jsx)("th",{children:"Ride Time"}),Object(n.jsx)("th",{children:"Accept"}),Object(n.jsx)("th",{children:"Decline"})]})}),Object(n.jsx)("tbody",{className:"tableList",children:s.filter((function(e){return""===e.status})).map((function(t){var s;if(r.map((function(e){e.id===t.customer_id&&(s=e)})),s)return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:s.first_name}),Object(n.jsx)("td",{children:s.last_name}),Object(n.jsx)("td",{children:s.address}),Object(n.jsx)("td",{children:s.destination_address}),Object(n.jsx)("td",{children:t.ride_date}),Object(n.jsx)("td",{children:t.ride_time.substring(11,16)}),Object(n.jsx)("td",{children:Object(n.jsx)("button",{onClick:function(){return e.acceptRequest(t.id,"accepted")},className:"btn btn-success btn-sm",children:"Accept"})}),Object(n.jsx)("td",{children:Object(n.jsx)("button",{onClick:function(){return e.acceptRequest(t.id,"declined")},className:"btn btn-danger btn-sm",children:"Decline"})})]},t.id)}))})]}),Object(n.jsx)("br",{}),Object(n.jsx)("h5",{className:"title",children:Object(n.jsx)("u",{children:"Ride Requests Accepted List"})}),Object(n.jsxs)(W.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",children:[Object(n.jsx)("thead",{className:"tableList",children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"First Name"}),Object(n.jsx)("th",{children:"Last Name"}),Object(n.jsx)("th",{children:"Address"}),Object(n.jsx)("th",{children:"Destination Address"}),Object(n.jsx)("th",{children:"Ride Date"}),Object(n.jsx)("th",{children:"Ride Time"})]})}),Object(n.jsx)("tbody",{className:"tableList",children:s.filter((function(e){return"accepted"===e.status})).map((function(e){var t;if(r.map((function(s){s.id===e.customer_id&&(t=s)})),t)return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:t.first_name}),Object(n.jsx)("td",{children:t.last_name}),Object(n.jsx)("td",{children:t.address}),Object(n.jsx)("td",{children:t.destination_address}),Object(n.jsx)("td",{children:e.ride_date}),Object(n.jsx)("td",{children:e.ride_time.substring(11,16)})]},e.id)}))})]})]})]})}}]),s}(r.Component);var ie=function(){return Object(n.jsx)("div",{className:"errorImage"})},ae=(s(103),s(104),function(e){Object(j.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).state={user:null},n.handleSubmit=n.handleSubmit.bind(Object(l.a)(n)),n.destroySession=n.destroySession.bind(Object(l.a)(n)),n}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var e=this;C().then((function(t){e.setState((function(e){return{user:t}}))}))}},{key:"handleSubmit",value:function(e){var t=this;F(e).then((function(){return C()})).then((function(e){t.setState((function(t){return{user:e}}))}))}},{key:"destroySession",value:function(){var e=this;D().then((function(t){e.setState((function(e){return{user:null}}))}))}},{key:"render",value:function(){var e=this,t=this.state.user;return Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)(b.a,{children:[Object(n.jsx)(K.ToastContainer,{}),Object(n.jsx)(H,{currentUser:t,destroySession:this.destroySession}),Object(n.jsxs)(m.d,{children:[Object(n.jsx)(m.b,{exact:!0,path:"/",component:U}),Object(n.jsx)(J,{exact:!0,path:"/users",isAuth:t,component:M}),Object(n.jsx)(m.b,{exact:!0,path:"/users/:id",component:re}),Object(n.jsx)(m.b,{exact:!0,path:"/users/:id/ride_requests",component:Q}),Object(n.jsx)(m.b,{exact:!0,path:"/customer",component:G}),Object(n.jsx)(m.b,{exact:!0,path:"/driver",component:se}),Object(n.jsx)(m.b,{exact:!0,path:"/ride_requests",component:ce}),Object(n.jsx)(m.b,{exact:!0,path:"/sign_in",render:function(t){return Object(n.jsx)(k,Object(a.a)({handleSubmit:e.handleSubmit},t))}}),Object(n.jsx)(m.b,{exact:!0,path:"/sign_up/driver",component:L}),Object(n.jsx)(m.b,{exact:!0,path:"/sign_up/customer",component:R}),Object(n.jsx)(m.b,{component:ie})]})]})})}}]),s}(r.Component)),oe=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,108)).then((function(t){var s=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;s(e),n(e),r(e),c(e),i(e)}))};s(105),s(106);i.a.render(Object(n.jsx)(ae,{}),document.getElementById("root")),oe()},67:function(e,t,s){}},[[107,1,2]]]);
//# sourceMappingURL=main.57315904.chunk.js.map