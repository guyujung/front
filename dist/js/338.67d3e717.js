"use strict";(self["webpackChunkco_work"]=self["webpackChunkco_work"]||[]).push([[338],{9338:function(e,t,o){o.r(t),o.d(t,{default:function(){return Pe}});var s=o(3396),n=o(7139),a=o(9242);const r=e=>((0,s.dD)("data-v-14c49baf"),e=e(),(0,s.Cn)(),e),c={key:0,class:"loading-container"},i={key:1},d={class:"white-bg"},l=r((()=>(0,s._)("div",{class:"icon-box"},[(0,s._)("div",{class:"icon-circle"},[(0,s._)("i",{class:"fi fi-sr-briefcase"})])],-1))),p={class:"update-modal-overlay"},u={class:"footer"},m={class:"dialog-footer"},h={class:"white-bg"},v=r((()=>(0,s._)("div",{class:"icon-box"},[(0,s._)("div",{class:"icon-circle"},[(0,s._)("i",{class:"fi fi-sr-briefcase"})])],-1))),w={class:"post-modal-overlay"},j={class:"footer"},_={class:"dialog-footer"},b={class:"white-bg-delete"},g=(0,s.uE)('<div class="icon-box" data-v-14c49baf><div class="icon-circle delete-icon-circle" data-v-14c49baf><i class="fi fi-rs-trash" data-v-14c49baf></i></div></div><div class="delete-text" data-v-14c49baf><div class="large" data-v-14c49baf>이 프로젝트를 삭제하시겠습니까?</div><div class="small" data-v-14c49baf>삭제 후에는 다시 복구할 수 없습니다.</div></div>',2),f={class:"delete-footer"},D={class:"content"},y={class:"top"},O={class:"choose"},k=r((()=>(0,s._)("i",{class:"fi fi-br-plus"},null,-1))),P={key:0,class:"projects"},S={class:"container1"},C={class:"projectName"},I=["onClick"],M=r((()=>(0,s._)("i",{class:"fi fi-rs-menu-dots-vertical"},null,-1))),B={class:"semester"},N={class:"participant"},z={class:"projectNumber"},U={key:1,class:"projects"},x={class:"container1"},$={class:"projectName"},Z=["onClick"],W=r((()=>(0,s._)("i",{class:"fi fi-rs-menu-dots-vertical"},null,-1))),A={class:"semester"},H={class:"participant"},G={class:"projectNumber"};function K(e,t,o,r,K,Y){const q=(0,s.up)("Loader"),F=(0,s.up)("UpdateModalDropdown"),Q=(0,s.up)("Dropdown"),L=(0,s.up)("el-button"),V=(0,s.up)("ModButton"),E=(0,s.up)("Avatar"),J=(0,s.up)("router-link");return K.loading?((0,s.wg)(),(0,s.iD)("div",c,[(0,s.Wm)(q)])):((0,s.wg)(),(0,s.iD)("div",i,[(0,s._)("div",{class:"black-bg",style:(0,n.j5)({display:K.updateModalDisplay})},[(0,s._)("div",d,[l,(0,s._)("div",p,[""!=K.updateSemester?((0,s.wg)(),(0,s.j4)(F,{key:0,updateSemester:K.updateSemester,onSelected:Y.changeUpdateSemester},null,8,["updateSemester","onSelected"])):(0,s.kq)("",!0),(0,s.wy)((0,s._)("input",{style:{"margin-top":"10px"},"onUpdate:modelValue":t[0]||(t[0]=e=>K.updateProjectName=e),class:"custom-input-style"},null,512),[[a.nr,K.updateProjectName]])]),(0,s._)("div",u,[(0,s._)("span",m,[(0,s._)("button",{onClick:t[1]||(t[1]=e=>Y.updateClose()),class:"cancel"},"취소"),(0,s._)("button",{type:"primary",onClick:t[2]||(t[2]=e=>Y.updateProjects()),class:"ok"},"수정")])])])],4),(0,s._)("div",{class:"black-bg",style:(0,n.j5)({display:K.postModalDisplay})},[(0,s._)("div",h,[v,(0,s._)("div",w,[(0,s.Wm)(F,{updateSemester:K.postSemester,onSelected:Y.changeSemester},null,8,["updateSemester","onSelected"]),(0,s.wy)((0,s._)("input",{style:{"margin-top":"10px"},placeholder:"프로젝트명을 입력해 주세요.","onUpdate:modelValue":t[3]||(t[3]=e=>K.postProjectName=e),class:"custom-input-style"},null,512),[[a.nr,K.postProjectName]])]),(0,s._)("div",j,[(0,s._)("span",_,[(0,s._)("button",{class:"cancel",onClick:t[4]||(t[4]=e=>Y.postClose())},"취소"),(0,s._)("button",{class:"ok",type:"primary",onClick:t[5]||(t[5]=e=>Y.postProjects())},"생성")])])])],4),(0,s._)("div",{class:"black-bg",style:(0,n.j5)({display:K.deleteModalDisplay})},[(0,s._)("div",b,[g,(0,s._)("div",f,[(0,s._)("button",{type:"danger",onClick:t[6]||(t[6]=e=>Y.deleteProjects()),class:"delete"},"삭제"),(0,s._)("button",{type:"primary",onClick:t[7]||(t[7]=e=>Y.deleteClose()),class:"cancel"},"취소")])])],4),(0,s._)("div",D,[(0,s._)("div",y,[(0,s._)("div",O,[(0,s.Wm)(Q,{onSelected:Y.viewProjects},null,8,["onSelected"])]),(0,s.Wm)(L,{type:"primary",class:"new",onClick:t[8]||(t[8]=e=>Y.postGenerate())},{default:(0,s.w5)((()=>[k,(0,s.Uk)("새 프로젝트")])),_:1})]),"전체"==K.option?((0,s.wg)(),(0,s.iD)("div",P,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(K.projects,(e=>((0,s.wg)(),(0,s.j4)(J,{key:e.projectId,to:{name:"DashboardPro2",params:{projectId:e.projectId}},class:"project"},{default:(0,s.w5)((()=>[(0,s._)("div",S,[(0,s._)("div",C,(0,n.zw)(e.projectName),1),(0,s._)("div",{class:"more-button",onClick:[t[10]||(t[10]=(0,a.iM)((()=>{}),["prevent"])),t=>Y.modButtonControl(e.projectId)]},[M,(0,s.Wm)(V,{moreButtonOpen:K.moreButtonOpen[e.projectId.toString()],onDeleteProject:t[9]||(t[9]=e=>K.deleteModalDisplay="flex"),onUpdateProject:t=>Y.updateGenerate(e)},null,8,["moreButtonOpen","onUpdateProject"])],8,I)]),(0,s._)("div",B,(0,n.zw)(e.semester)+"학기",1),(0,s._)("div",N,[(0,s.Wm)(E,{number:e.projectNumber},null,8,["number"]),(0,s._)("div",z,(0,n.zw)(e.projectNumber)+"명 참여",1)])])),_:2},1032,["to"])))),128))])):((0,s.wg)(),(0,s.iD)("div",U,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(K.projects.filter((e=>e.semester==K.option)),(e=>((0,s.wg)(),(0,s.j4)(J,{key:e.projectId,to:{name:"DashboardPro2",params:{projectId:e.projectId}},class:"project"},{default:(0,s.w5)((()=>[(0,s._)("div",x,[(0,s._)("div",$,(0,n.zw)(e.projectName),1),(0,s._)("div",{class:"more-button",onClick:[t[12]||(t[12]=(0,a.iM)((()=>{}),["prevent"])),t=>Y.modButtonControl(e.projectId)]},[W,(0,s.Wm)(V,{moreButtonOpen:K.moreButtonOpen[e.projectId.toString()],onDeleteProject:t[11]||(t[11]=e=>K.deleteModalDisplay="flex"),onUpdateProject:t=>Y.updateGenerate(e)},null,8,["moreButtonOpen","onUpdateProject"])],8,Z)]),(0,s._)("div",A,(0,n.zw)(e.semester)+"학기",1),(0,s._)("div",H,[(0,s.Wm)(E,{number:e.projectNumber},null,8,["number"]),(0,s._)("div",G,(0,n.zw)(e.projectNumber)+"명 참여",1)])])),_:2},1032,["to"])))),128))]))])]))}var Y=o(6565),q=o(8418),F=o(4085);const Q=e=>((0,s.dD)("data-v-2bd2e8d1"),e=e(),(0,s.Cn)(),e),L={class:"dropdown"},V={class:"selected-content"},E=Q((()=>(0,s._)("div",{class:"icon"},[(0,s._)("i",{class:"fi fi-rr-caret-down"})],-1))),J=["onClick"];function R(e,t,o,r,c,i){const d=(0,s.Q2)("click-outside");return(0,s.wg)(),(0,s.iD)("div",L,[(0,s.wy)(((0,s.wg)(),(0,s.iD)("button",{onClick:t[0]||(t[0]=(...e)=>i.Dropdown&&i.Dropdown(...e)),class:"dropdown-button"},[(0,s._)("div",V,(0,n.zw)(c.selectedOption)+" 학기 ",1),E])),[[d,i.closeDropdown]]),(0,s.wy)((0,s._)("ul",{class:"dropdown-list",onMouseenter:t[1]||(t[1]=(...e)=>i.openDropdown&&i.openDropdown(...e)),onMouseleave:t[2]||(t[2]=(...e)=>i.closeDropdown&&i.closeDropdown(...e))},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(c.options,((e,t)=>((0,s.wg)(),(0,s.iD)("li",{key:t,onClick:t=>i.selectOption(e)},(0,n.zw)(e),9,J)))),128))],544),[[a.F8,c.isOpen]])])}var T=o(3051),X=o.n(T),ee={props:["updateSemester"],directives:{clickOutside:X().directive},mounted(){this.selectedOption=this.updateSemester,console.log(this.updateSemester)},data(){return{isOpen:!1,selectedOption:this.updateSemester,options:["2022-1","2022-2","2023-1","2023-2","2024-1","2024-2","2025-1","2025-2"]}},methods:{openDropdown(){this.isOpen=!0},closeDropdown(){this.isOpen=!1},selectOption(e){this.selectedOption=e,this.$emit("selected",e),this.isOpen=!1},Dropdown(){this.isOpen=!this.isOpen}}},te=o(89);const oe=(0,te.Z)(ee,[["render",R],["__scopeId","data-v-2bd2e8d1"]]);var se=oe;const ne=e=>((0,s.dD)("data-v-7b6bb004"),e=e(),(0,s.Cn)(),e),ae={class:"dropdown"},re={class:"selected-content"},ce=ne((()=>(0,s._)("div",{class:"icon"},[(0,s._)("i",{class:"fi fi-rr-caret-down"})],-1))),ie=["onClick"];function de(e,t,o,r,c,i){const d=(0,s.Q2)("click-outside");return(0,s.wg)(),(0,s.iD)("div",ae,[(0,s.wy)(((0,s.wg)(),(0,s.iD)("button",{onClick:t[0]||(t[0]=(...e)=>i.Dropdown&&i.Dropdown(...e)),class:"dropdown-button"},[(0,s._)("div",re,(0,n.zw)(c.selectedOption)+" 학기 ",1),ce])),[[d,i.closeDropdown]]),(0,s.wy)((0,s._)("ul",{class:"dropdown-list",onMouseenter:t[1]||(t[1]=(...e)=>i.openDropdown&&i.openDropdown(...e)),onMouseleave:t[2]||(t[2]=(...e)=>i.closeDropdown&&i.closeDropdown(...e))},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(c.options,((e,t)=>((0,s.wg)(),(0,s.iD)("li",{key:t,onClick:t=>i.selectOption(e)},(0,n.zw)(e),9,ie)))),128))],544),[[a.F8,c.isOpen]])])}var le={props:["updateSemester"],directives:{clickOutside:X().directive},mounted(){this.selectedOption=this.updateSemester,console.log(this.updateSemester)},data(){return{isOpen:!1,selectedOption:this.updateSemester,options:["2022-1","2022-2","2023-1","2023-2","2024-1","2024-2","2025-1","2025-2"]}},methods:{openDropdown(){this.isOpen=!0},closeDropdown(){this.isOpen=!1},selectOption(e){this.selectedOption=e,this.$emit("selected",e),this.isOpen=!1},Dropdown(){this.isOpen=!this.isOpen}}};const pe=(0,te.Z)(le,[["render",de],["__scopeId","data-v-7b6bb004"]]);var ue=pe;const me=e=>((0,s.dD)("data-v-9c5a0748"),e=e(),(0,s.Cn)(),e),he={key:0,class:"modification"},ve=me((()=>(0,s._)("div",{class:"icon"},[(0,s._)("i",{class:"fi fi-rr-pencil"})],-1))),we=[ve],je=me((()=>(0,s._)("div",{class:"icon"},[(0,s._)("i",{class:"fi fi-rs-trash"})],-1))),_e=[je];var be={__name:"ModButton",props:{moreButtonOpen:{type:Boolean}},emits:["deleteProject","updateProject","closeMod"],setup(e,{emit:t}){const o=e,n=()=>{t("deleteProject"),o.moreButtonOpen=!1,console.log("delete")},a=()=>{t("updateProject"),o.moreButtonOpen=!1,console.log("mod")};return(t,o)=>e.moreButtonOpen?((0,s.wg)(),(0,s.iD)("div",he,[(0,s._)("div",{class:"options"},[(0,s._)("div",{class:"mod",onClick:a},we),(0,s._)("div",{class:"delete",onClick:n},_e)])])):(0,s.kq)("",!0)}};const ge=(0,te.Z)(be,[["__scopeId","data-v-9c5a0748"]]);var fe=ge,De=o(4217),ye=o(4870);var Oe={pops:["projects"],components:{Avatar:q.Z,Dropdown:F.Z,UpdateModalDropdown:se,CreateModalDropdown:ue,ModButton:fe,Loader:De.Z},computed:{professorId(){return this.$route.params.professorId},postSetParams(){const e={professorId:this.professorId,projectName:this.postProjectName,semester:this.postSemester,projectNumber:1};return console.log("params: ",e),e},updateSetParams(){const e={projectId:this.updateProjectId,professorId:this.professorId,projectName:this.updateProjectName,semester:this.updateSemester,projectNumber:this.updateProject.projectNumber};return console.log("params: ",e),e}},created(){this.showProjects()},data(){return{projects:[],watchBySemester:"All",postProject:null,postSemester:"2023-2",postProjectName:null,postModalDisplay:"none",updateProject:null,updateProjectId:null,updateModalDisplay:"none",updateProjectName:null,updateSemester:"",deleteModalDisplay:"none",option:"전체",moreButtonOpen:(0,ye.iH)({}),loading:!0}},methods:{postGenerate(){this.postModalDisplay="flex"},postProjects(){Y.be.post(`/dashboard-service/dashboard/projects/${this.professorId}`,this.postSetParams).then((e=>{"Success"==e.data.message&&(this.postProject=e.data.data,console.log("postProject: ",this.postProject)),this.$router.go(0)})).catch((e=>{console.log(e)}))},postClose(){this.postModalDisplay="none",this.postProject=null,this.postSemester="2023-2",this.postProjectName=null},async getProjects(){try{const e=await Y.be.get(`/dashboard-service/dashboard/professor/${this.professorId}`);"Success"===e.data.message&&(this.projects=e.data.data),this.loading=!1}catch(e){console.log(e)}},async showProjects(){"All"==this.watchBySemester?await this.getProjects():await this.getProjectsBySemester()},updateGenerate(e){this.updateProject=e,this.updateProjectId=e.projectId,this.updateProjectName=e.projectName,this.updateSemester=e.semester,this.updateModalDisplay="flex"},updateProjects(){Y.be.patch(`/dashboard-service/dashboard/projects/${this.updateProjectId}`,this.updateSetParams).then((e=>{"Success"==e.data.message&&(this.updateProject=e.data.data),this.$router.go(0)})).catch((e=>{console.log(e)}))},updateClose(){this.updateModalDisplay="none",this.updateProject=null,this.updateProjectId=null,this.updateSemester="",this.updateProjectName=null},deleteClose(){this.deleteModalDisplay="none"},deleteProjects(){Y.be.delete(`/dashboard-service/dashboard/projects/${this.updateProjectId}`).then((e=>{"Success"==e.data.message&&console.log("Completely Delete"),this.$router.go(0)})).catch((e=>{console.log(e)}))},deleteConfirm(){this.deleteModalDisplay="flex"},viewProjects(e){this.option=e},modButtonControl(e){this.updateProjectId=e;const t=e.toString();1==this.moreButtonOpen[t]?this.moreButtonOpen[t]=!1:this.moreButtonOpen[t]=!0},closeModButton(e){console.log(this.moreButtonOpen[e.toString()]),this.moreButtonOpen[e.toString()]=!1,console.log(this.moreButtonOpen[e.toString()])},changeSemester(e){this.postSemester=e},changeUpdateSemester(e){this.updateSemester=e}}};const ke=(0,te.Z)(Oe,[["render",K],["__scopeId","data-v-14c49baf"]]);var Pe=ke},8418:function(e,t,o){o.d(t,{Z:function(){return i}});var s=o(3396),n=o(4870);const a={class:"card flex justify-content-center"};var r={__name:"Avatar",props:{number:{type:Number}},setup(e){const t=e;let o=0,r=0;t.number>3?(o=3,r=t.number-o):o=t.number;const c=`+${r}`;return(e,t)=>{const i=(0,s.up)("Avatar",!0),d=(0,s.up)("AvatarGroup");return(0,s.wg)(),(0,s.iD)("div",a,[(0,s.Wm)(d,null,{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)((0,n.SU)(o),(e=>((0,s.wg)(),(0,s.j4)(i,{key:e,image:"https://cdn-icons-png.flaticon.com/128/149/149071.png",size:"large",shape:"circle"})))),128)),(0,n.SU)(r)>0?((0,s.wg)(),(0,s.j4)(i,{key:0,label:c,shape:"circle",size:"large",style:{color:"'#ffffff'"}})):(0,s.kq)("",!0)])),_:1})])}}};const c=r;var i=c},4085:function(e,t,o){o.d(t,{Z:function(){return _}});var s=o(3396),n=o(7139),a=o(9242);const r=e=>((0,s.dD)("data-v-c8c16460"),e=e(),(0,s.Cn)(),e),c={class:"dropdown"},i=r((()=>(0,s._)("div",{class:"dropdown-label"},"학기",-1))),d={class:"selected-content"},l=r((()=>(0,s._)("div",{class:"icon"},[(0,s._)("i",{class:"fi fi-rr-caret-down"})],-1))),p=["onClick"];function u(e,t,o,r,u,m){const h=(0,s.Q2)("click-outside");return(0,s.wg)(),(0,s.iD)("div",c,[i,(0,s.wy)(((0,s.wg)(),(0,s.iD)("button",{onClick:t[0]||(t[0]=(...e)=>m.Dropdown&&m.Dropdown(...e)),class:"dropdown-button"},[(0,s._)("div",d,(0,n.zw)(u.selectedOption),1),l])),[[h,m.closeDropdown]]),(0,s.wy)((0,s._)("ul",{class:"dropdown-list",onMouseenter:t[1]||(t[1]=(...e)=>m.openDropdown&&m.openDropdown(...e)),onMouseleave:t[2]||(t[2]=(...e)=>m.closeDropdown&&m.closeDropdown(...e))},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(u.options,((e,t)=>((0,s.wg)(),(0,s.iD)("li",{key:t,onClick:t=>m.selectOption(e)},(0,n.zw)(e),9,p)))),128))],544),[[a.F8,u.isOpen]])])}var m=o(3051),h=o.n(m),v={directives:{clickOutside:h().directive},mounted(){this.selectedOption="전체"},data(){return{isOpen:!1,selectedOption:"전체",options:["전체","2022-1","2022-2","2023-1","2023-2","2024-1","2024-2","2025-1","2025-2"]}},methods:{openDropdown(){this.isOpen=!0},closeDropdown(){this.isOpen=!1},selectOption(e){this.selectedOption=e,this.$emit("selected",e),this.isOpen=!1},Dropdown(){this.isOpen=!this.isOpen}}},w=o(89);const j=(0,w.Z)(v,[["render",u],["__scopeId","data-v-c8c16460"]]);var _=j}}]);
//# sourceMappingURL=338.67d3e717.js.map