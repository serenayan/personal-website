(window["webpackJsonppersonal-website"]=window["webpackJsonppersonal-website"]||[]).push([[0],{137:function(e,t,a){e.exports=a.p+"static/media/github.76d344f0.svg"},138:function(e,t,a){e.exports=a.p+"static/media/email.8e462b04.png"},139:function(e,t,a){e.exports=a.p+"static/media/linkedin.e6afdbc1.jpg"},141:function(e,t,a){e.exports=a.p+"static/media/1.4cfe23be.jpg"},142:function(e,t,a){e.exports=a.p+"static/media/2.ea7e8b9f.jpg"},143:function(e,t,a){e.exports=a.p+"static/media/3.e4dd5835.jpg"},144:function(e,t,a){e.exports=a.p+"static/media/4.1776fcd5.jpg"},145:function(e,t,a){e.exports=a.p+"static/media/5.d16ba144.jpg"},146:function(e,t,a){e.exports=a.p+"static/media/6.5db53b03.jpg"},147:function(e,t,a){e.exports=a.p+"static/media/7.265dc6d7.jpg"},148:function(e,t,a){e.exports=a.p+"static/media/8.ef88a276.jpg"},149:function(e,t,a){e.exports=a.p+"static/media/9.017012a8.jpg"},150:function(e,t,a){e.exports=a.p+"static/media/10.c9f0d180.jpg"},151:function(e,t,a){e.exports=a.p+"static/media/serena_hero.7eddda2e.jpg"},153:function(e,t,a){e.exports=a.p+"static/media/caltech.cf529dec.jpg"},154:function(e,t,a){e.exports=a.p+"static/media/Magic-Leap-Tile.bf0d7827.jpg"},155:function(e,t,a){e.exports=a.p+"static/media/me.9c0ee760.jpg"},158:function(e,t,a){e.exports=a(287)},184:function(e,t){},186:function(e,t){},221:function(e,t){},222:function(e,t){},264:function(e,t,a){},265:function(e,t,a){},266:function(e,t,a){},267:function(e,t,a){},268:function(e,t,a){},269:function(e,t,a){},278:function(e,t,a){},284:function(e,t,a){},287:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(75),i=a.n(r),c=a(7),o=a(5),m=a(8),s=a(9),u=a(10),d=a(20),b=a(31),p=a(33),h=a(24),g=a(135),E=a.n(g),A=a(136),f=a.n(A),y=a(181);var v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(s.a)(t).call(this,e))).state={username:"",password:"",submitted:!1,loading:!1,error:""},a.handleChange=a.handleChange.bind(Object(h.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(h.a)(a)),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(p.a)({},a,n))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),this.setState({submitted:!0});var a=this.state,n=a.username,l=a.password;a.returnUrl;if(n&&l){this.setState({loading:!0});var r;r=l,l=y.createHash("sha1").update(r,"binary").digest("hex"),E.a.post("/api/auth/signin",f.a.stringify({username:n,password:l}),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(e){console.log("Authenticated!"),localStorage.setItem("user",n),t.props.history.push("/main")}).catch(function(){alert("error")})}}},{key:"render",value:function(){var e=this.state,t=e.username,a=e.password,n=e.submitted,r=e.loading,i=e.error;return l.a.createElement("div",{class:"container"},l.a.createElement("div",{className:"col-md-6 col-md-offset-3",style:{marginTop:100}},l.a.createElement("div",{className:"alert alert-info"},"Username: P176100",l.a.createElement("br",null),"Password: 10086"),l.a.createElement("h2",null,"Login"),l.a.createElement("form",{name:"form",onSubmit:this.handleSubmit},l.a.createElement("div",{className:"form-group"+(n&&!t?" has-error":"")},l.a.createElement("label",{htmlFor:"username"},"Username"),l.a.createElement("input",{type:"text",className:"form-control",name:"username",value:t,onChange:this.handleChange}),n&&!t&&l.a.createElement("div",{className:"help-block"},"Username is required")),l.a.createElement("div",{className:"form-group"+(n&&!a?" has-error":"")},l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("input",{type:"password",className:"form-control",name:"password",value:a,onChange:this.handleChange}),n&&!a&&l.a.createElement("div",{className:"help-block"},"Password is required")),l.a.createElement("div",{className:"form-group"},l.a.createElement("button",{className:"btn btn-primary",disabled:r},"Login"),r&&l.a.createElement("img",{src:"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="})),i&&l.a.createElement("div",{className:"alert alert-danger"},i))))}}]),t}(l.a.Component),C=(a(264),a(137)),w=a.n(C),j=a(138),k=a.n(j),I=a(139),S=a.n(I),x=(a(265),function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container",style:{paddingTop:"50px",paddingBottom:"150px"}},l.a.createElement("h2",{className:"text-center",style:{paddingTop:"90px",color:"rgb(75,75,75)"}},"Connect with me through ..."),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("a",{href:"https://github.com/serenayan/",target:"_blank"},l.a.createElement("img",{class:"rounded-circle mx-auto hover-light",src:w.a,alt:"github Logo"})),l.a.createElement("h5",null,"GitHub")),l.a.createElement("div",{className:"col"},l.a.createElement("a",{href:"https://www.linkedin.com/in/serena-yan-475824178/",target:"_blank"},l.a.createElement("img",{class:"rounded-circle mr-3 hover-light",src:S.a,alt:"linkedin Logo"})),l.a.createElement("h5",null,"LinkedIn")),l.a.createElement("div",{className:"col"},l.a.createElement("a",{href:"mailto:syan@caltech.edu"},l.a.createElement("img",{class:"rounded-circle mr-3 hover-light",src:k.a,alt:"email Logo"})),l.a.createElement("h5",null,"Email"))))}}]),t}(l.a.Component)),N=(a(266),a(267),a(268),a(140)),O=a.n(N),T=a(141),D=a.n(T),M=a(142),G=a.n(M),Q=a(143),P=a.n(Q),B=a(144),L=a.n(B),R=a(145),H=a.n(R),U=a(146),V=a.n(U),Y=a(147),K=a.n(Y),J=a(148),W=a.n(J),z=a(149),_=a.n(z),F=a(150),Z=a.n(F),q=window.jQuery,X=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(s.a)(t).call(this,e))).setCurr=function(e){a.setState({currImg:e,autoCycleState:!1})},a.state={img_info:null,currImg:null},a.CreateImage=a.CreateImage.bind(Object(h.a)(a)),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"CreateImage",value:function(e,t,a){var n=this,r={backgroundImage:"url("+e+")",height:a},i=t.title+"\n\n"+t.ctgry+"\n"+t.date+"\n"+t.media+"\n"+t.info;return l.a.createElement("div",{"data-toggle":"modal","data-target":"#exampleModalCenter",onClick:function(){return n.setCurr(e)}},l.a.createElement("div",{class:"textOverImage",style:r,"data-text":i}))}},{key:"componentDidMount",value:function(){var e=this;q.get("/img_info.json",function(t){e.setState({img_info:t})})}},{key:"render",value:function(){var e=this,t=this.state,a=t.currImg,n=t.img_info;return n?l.a.createElement("div",{style:{paddingBottom:"100px"}},l.a.createElement("h2",{class:"d-flex justify-content-center",style:{paddingTop:"70px",paddingBottom:"20px",color:"rgb(75,75,75)"}},"Art Gallery"),l.a.createElement(O.a,{id:"carousel",breakpoints:[{breakpoint:900,settings:{slidesToShow:2,slidesToScroll:2}}],autoCycle:!1,cycleInterval:3500,animationDuration:500,dots:!0,showSides:!0,sidesOpacity:.5,sideSize:.15,slidesToScroll:1,slidesToShow:4,scrollOnDevice:!0},this.CreateImage(D.a,n[0],450),this.CreateImage(G.a,n[1],450),this.CreateImage(P.a,n[2],450),this.CreateImage(L.a,n[3],450),this.CreateImage(H.a,n[4],450),this.CreateImage(V.a,n[5],450),this.CreateImage(K.a,n[6],450),this.CreateImage(W.a,n[7],450),this.CreateImage(_.a,n[8],450),this.CreateImage(Z.a,n[9],450)),l.a.createElement("div",{class:"modal fade",id:"exampleModalCenter",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true","data-backdrop":"true",ref:function(t){return e.modalRef=t}},l.a.createElement("div",{class:"modal-dialog",role:"document"},l.a.createElement("img",{class:"img-responsive",src:a})))):""}}]),t}(l.a.Component),$=(a(269),a(151)),ee=a.n($),te=function(e){function t(e){return Object(c.a)(this,t),Object(m.a)(this,Object(s.a)(t).call(this,e))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e={backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("+ee.a+")",height:"100vh",backgroundPosition:"50% 30%",backgroundRepeat:"no-repeat",backgroundSize:"cover",position:"relative"};return l.a.createElement("div",{style:e},l.a.createElement("div",{class:"hero-text"},l.a.createElement("h1",null,"I am Serena Yan"),l.a.createElement("p",null,"I'm a Programmer, Game Designer, and Artist"),l.a.createElement(d.b,{to:"/personal/main/about",className:"btn btn-outline-light",role:"button"},"About me"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(d.b,{to:"/personal/main/connect",className:"btn btn-outline-light",role:"button"},"Connect with me")))}}]),t}(l.a.Component),ae=a(79),ne=a.n(ae),le=(a(278),a(153)),re=a.n(le),ie=a(154),ce=a.n(ie),oe=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("ul",{class:"list-untyled"},l.a.createElement("li",{class:"media my-4"},l.a.createElement("img",{class:"rounded-circle mr-3",src:"/logo192.png",alt:"React Logo",height:"200",width:"200",style:{marginTop:"70px",backgroundColor:"white"}}),l.a.createElement("div",{class:"media-body",style:{marginTop:"70px"}},l.a.createElement("h3",{class:"mt-0 mb-1"},"Personal Website"),l.a.createElement("h5",{class:"mt-0 mb-1"},"Web development"),"This website is my first web development project using React.js. I made this as a learning project during my second internship at Keymobile.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("button",{type:"button",class:"btn btn-dark mr-2",disabled:!0},"Web Dev"),l.a.createElement("button",{type:"button",class:"btn btn-secondary mr-2",disabled:!0},"JavaScript"),l.a.createElement("button",{type:"button",class:"btn btn-secondary mr-2",disabled:!0},"HTML"),l.a.createElement("button",{type:"button",class:"btn btn-secondary mr-2",disabled:!0},"CSS"),l.a.createElement("button",{type:"button",class:"btn btn-info mr-2",disabled:!0},"React.js"),l.a.createElement("button",{type:"button",class:"btn btn-info mr-2",disabled:!0},"Axios"),l.a.createElement("button",{type:"button",class:"btn btn-info mr-2",disabled:!0},"Bootstrap"))),l.a.createElement("li",{class:"media my-4"},l.a.createElement("img",{class:"rounded-circle mr-3",src:ce.a,alt:"Magic Leap Logo",height:"200",width:"200"}),l.a.createElement("div",{class:"media-body"},l.a.createElement("h3",{class:"mt-0 mb-1"},"AR Data Visualization Prototype"),l.a.createElement("h5",{class:"mt-0 mb-1"},"AR demo"),"During my first internship at Virtualitics, I prototyped for the company\u2019s data visualization software on the augmented reality platform Magic Leap. The finished product is a working demo that generates various 3D plots from the given data set and let the users interact with the plots through hand gestures, voice command, and/or the controller. (Unable to show demo or source code due to copyright issue.)",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("button",{type:"button",class:"btn btn-dark mr-2",disabled:!0},"Augmented Reality"),l.a.createElement("button",{type:"button",class:"btn btn-dark mr-2",disabled:!0},"Magic Leap"),l.a.createElement("button",{type:"button",class:"btn btn-secondary mr-2",disabled:!0},"C#"),l.a.createElement("button",{type:"button",class:"btn btn-info mr-2",disabled:!0},"Unity3D"))),l.a.createElement("li",{class:"media my-4"},l.a.createElement(ne.a,{classNmae:"react-player",url:"https://youtu.be/fsQYOWj2rOE",width:"30%",height:"300px",playing:!1,controls:!0}),l.a.createElement("div",{class:"media-body"},l.a.createElement("h3",{class:"mt-0 mb-1"},"Potion Commotion"),l.a.createElement("h5",{class:"mt-0 mb-1"},"VR video game"),'"Potion Commotion" allows players to directly interact with almost anything in the game world and get a hands-on experience of potion mixing. ',l.a.createElement("br",null),"The game was developed on Unity3D. Its VR platforms are Oculus Touch and Leap Motion.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("a",{href:"https://github.com/serenayan/Potion_Commotion_Scripts",class:"btn btn-outline-dark btn-md",target:"_blank",role:"button","aria-disabled":"true"},"GITHUB"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("button",{type:"button",class:"btn btn-dark mr-2",disabled:!0},"Virtual Reality"),l.a.createElement("button",{type:"button",class:"btn btn-secondary mr-2",disabled:!0},"C#"),l.a.createElement("button",{type:"button",class:"btn btn-info mr-2",disabled:!0},"Unity3D"),l.a.createElement("button",{type:"button",class:"btn btn-info mr-2",disabled:!0},"Maya"),l.a.createElement("button",{type:"button",class:"btn btn-info",disabled:!0},"Photoshop"))),l.a.createElement("li",{class:"media my-4"},l.a.createElement(ne.a,{url:"https://youtu.be/jqiEqaZ4Y0Y",width:"30%",height:"300px",playing:!1,controls:!0}),l.a.createElement("div",{class:"media-body"},l.a.createElement("h3",{class:"mt-0 mb-1"},"Zooger"),l.a.createElement("h5",{class:"mt-0 mb-1"},"2D video game"),'"Zooger" follows the mechanics of the classic arcade game "Frogger". Although a remake, it has an original theme, additional obstacles and fighting mechanics, and a two player mode that are different from the original arcade game. ',l.a.createElement("br",null),"The game was developed on Unity2D.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("a",{href:"https://github.com/serenayan/Zooger",class:"btn btn-outline-dark btn-md",target:"_blank",role:"button","aria-disabled":"true"},"GITHUB"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("button",{type:"button",class:"btn btn-dark mr-2",disabled:!0},"Game Dev"),l.a.createElement("button",{type:"button",class:"btn btn-secondary mr-2",disabled:!0},"C#"),l.a.createElement("button",{type:"button",class:"btn btn-info mr-2",disabled:!0},"Unity2D"),l.a.createElement("button",{type:"button",class:"btn btn-info",disabled:!0},"Photoshop"))),l.a.createElement("li",{class:"media my-4"},l.a.createElement("img",{class:"rounded-circle mr-3",src:re.a,alt:"Caltech Logo",height:"200",width:"200"}),l.a.createElement("div",{class:"media-body"},l.a.createElement("h3",{class:"mt-0 mb-1"},"Computer Systems"),l.a.createElement("h5",{class:"mt-0 mb-1"},"course projects"),"CS 24 is the famous Caltech computer systems course that focuses on hardware-software interface, computer architecture, and operating systems. Specific topics include assembly language, memory allocator, garbage collection, performance optimization, parallel programming, semaphore, and virtual memory system.",l.a.createElement("br",null),"8 personal projects and 2 exams included in source code (final grade: A)",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("a",{href:"https://github.com/serenayan/CS_24_Computer_Systems",class:"btn btn-outline-dark btn-md",target:"_blank",role:"button","aria-disabled":"true"},"GITHUB"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("button",{type:"button",class:"btn btn-dark mr-2",disabled:!0},"Operating Systems"),l.a.createElement("button",{type:"button",class:"btn btn-dark mr-2",disabled:!0},"Unix"),l.a.createElement("button",{type:"button",class:"btn btn-secondary mr-2",disabled:!0},"C"))))}}]),t}(l.a.Component),me=a(28),se=(a(282),a(50)),ue=a.n(se),de=a(51),be=a.n(de),pe=a(156),he=a.n(pe),ge=a(155),Ee=a.n(ge),Ae=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{class:"row justify-content-md-center"},l.a.createElement("div",{class:"col-md-2"},l.a.createElement("h1",{style:{color:"rgb(75,75,75)",paddingTop:"90px",paddingRight:"0px"}},"Serena Yan"),l.a.createElement("h6",{style:{color:"rgb(85,85,85)",paddingRight:"0px"}},"Student at Caltech")),l.a.createElement("img",{class:"rounded-circle mr-3",src:Ee.a,alt:"React Logo",height:"100",width:"100",style:{marginTop:"80px",opacity:"0.9"}})),l.a.createElement(me.VerticalTimeline,null,l.a.createElement(me.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:"2019 summer",iconStyle:{background:"rgb(33, 150, 243)",color:"#fff"},icon:l.a.createElement(ue.a,null)},l.a.createElement("h3",{className:"vertical-timeline-element-title"},"Keymobile"),l.a.createElement("h5",{className:"vertical-timeline-element-subtitle"},"Web Development Intern"),l.a.createElement("h5",{className:"vertical-timeline-element-subtitle"},"Guangzhou, China"),l.a.createElement("p",null,"Full stack web development; develop data governance and visualization application for financial institutions")),l.a.createElement(me.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:"2019 summer",iconStyle:{background:"rgb(33, 150, 243)",color:"#fff"},icon:l.a.createElement(ue.a,null)},l.a.createElement("h3",{className:"vertical-timeline-element-title"},"Virtualitics"),l.a.createElement("h5",{className:"vertical-timeline-element-subtitle"},"Software Development Intern"),l.a.createElement("h5",{className:"vertical-timeline-element-subtitle"},"Pasadena, CA"),l.a.createElement("p",null,"Prototype data visualization and analysis software in Augmented Reality environments (Hololens and Magic Leap)")),l.a.createElement(me.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:"2018 - 2019 summer",iconStyle:{background:"rgb(33, 150, 243)",color:"#fff"},icon:l.a.createElement(ue.a,null)},l.a.createElement("h3",{className:"vertical-timeline-element-title"},"TechX Academy"),l.a.createElement("h5",{className:"vertical-timeline-element-subtitle"},"Academic Lead"),l.a.createElement("h5",{className:"vertical-timeline-element-subtitle"},"Shanghai, China"),l.a.createElement("p",null,"TA the Video Game Development course and Human Computer Interaction course for high school technology academy")," ",l.a.createElement("br",null),l.a.createElement("a",{href:"https://www.techx.academy",class:"btn btn-outline-dark btn-md",target:"_blank",role:"button","aria-disabled":"true"},"WEBSITE")),l.a.createElement(me.VerticalTimelineElement,{className:"vertical-timeline-element--education",date:"2018 - 2022",iconStyle:{background:"rgb(233, 30, 99)",color:"#fff"},icon:l.a.createElement(be.a,null)},l.a.createElement("h3",{className:"vertical-timeline-element-title"},"California Institute of Technology"),l.a.createElement("h5",{className:"vertical-timeline-element-subtitle"},"Bachelor of Science"),l.a.createElement("h5",{className:"vertical-timeline-element-subtitle"},"Pasadena, CA"),l.a.createElement("p",null,"Computer Science and Business, Economics, Management major ",l.a.createElement("br",null),"GPA: 4.0 / 4.0 ",l.a.createElement("br",null),"Executive Director of Student Investment Funds, NCAA Division III varsity swimmer, Women in STEM member")),l.a.createElement(me.VerticalTimelineElement,{className:"vertical-timeline-element--education",date:"2017 summer",iconStyle:{background:"rgb(255, 95, 95)",color:"#fff"},icon:l.a.createElement(be.a,null)},l.a.createElement("h3",{className:"vertical-timeline-element-title"},"National High School Game Academy"),l.a.createElement("h5",{className:"vertical-timeline-element-subtitle"},"Summer program @Carnegie Mellon University"),l.a.createElement("h5",{className:"vertical-timeline-element-subtitle"},"Pittsburgh, PA"),l.a.createElement("p",null,"Producer, Programmer, Artist ",l.a.createElement("br",null),"Develop virtual reality simulation on Oculus and Leap Motion"),l.a.createElement("br",null),l.a.createElement("a",{href:"https://admission.enrollment.cmu.edu/pages/pre-college-nhsga",class:"btn btn-outline-dark btn-md",target:"_blank",role:"button","aria-disabled":"true"},"WEBSITE")),l.a.createElement(me.VerticalTimelineElement,{className:"vertical-timeline-element--education",date:"2014 - 2018",iconStyle:{background:"rgb(233, 30, 99)",color:"#fff"},icon:l.a.createElement(be.a,null)},l.a.createElement("h3",{className:"vertical-timeline-element-title"},"North Allegheny High School"),l.a.createElement("h5",{className:"vertical-timeline-element-subtitle"},"High School Diploma"),l.a.createElement("h5",{className:"vertical-timeline-element-subtitle"},"Pittsburgh, PA"),l.a.createElement("p",null,"GPA: 4.69 / 4.00 ",l.a.createElement("br",null),"ACT: 35 / 36 ",l.a.createElement("br",null),"National Merit Scholarship recipient, Coca-Cola Scholarship finalist, National Honor Society member, Dean's List")),l.a.createElement(me.VerticalTimelineElement,{iconStyle:{background:"rgb(16, 204, 82)",color:"#fff"},icon:l.a.createElement(he.a,null)})))}}]),t}(l.a.Component),fe=(a(284),function(e){function t(e){return Object(c.a)(this,t),Object(m.a)(this,Object(s.a)(t).call(this,e))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{class:"main-container"},l.a.createElement("div",{className:"row"},l.a.createElement("nav",{className:"fixed-top"},l.a.createElement("ul",null,l.a.createElement(d.b,{to:"/main/home",className:"tab"},"home"),l.a.createElement(d.b,{to:"/main/portfolio",className:"tab"},"portfolio"),l.a.createElement(d.b,{to:"/main/project",className:"tab"},"project"),l.a.createElement(d.b,{to:"/main/about",className:"tab"},"about"),l.a.createElement(d.b,{to:"/main/connect",className:"tab"},"connect")))),l.a.createElement("div",{style:{height:"100%"}},l.a.createElement(b.d,null,l.a.createElement(b.b,{path:"/main/home",component:te}),l.a.createElement(b.b,{path:"/main/Connect",component:x}),l.a.createElement(b.b,{path:"/main/portfolio",component:X}),l.a.createElement(b.b,{path:"/main/project",component:oe}),l.a.createElement(b.b,{path:"/main/about",component:Ae}),l.a.createElement(b.b,{component:function(){return l.a.createElement(b.a,{to:"/main/home"})}}))),l.a.createElement("footer",null,l.a.createElement("p",null," \xa9 2019 Serena Yan - All rights reserved ")))}}]),t}(l.a.Component)),ye=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement(b.d,null,l.a.createElement(b.b,{path:"/main",component:fe}),l.a.createElement(b.b,{path:"/login",component:v}),l.a.createElement(b.b,{component:function(){return l.a.createElement(b.a,{to:"/main"})}})))}}]),t}(l.a.Component);a(285);i.a.render(l.a.createElement(ye,null),document.getElementById("app"))}},[[158,1,2]]]);
//# sourceMappingURL=main.b90bd863.chunk.js.map