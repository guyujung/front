"use strict";(self["webpackChunkco_work"]=self["webpackChunkco_work"]||[]).push([[59],{4544:function(e,t,a){a.r(t),a.d(t,{default:function(){return Q}});var o=a(3396),s=a(7139),n=a(9242);const d=e=>((0,o.dD)("data-v-79fbb6f9"),e=e(),(0,o.Cn)(),e),i={key:0,class:"loading-container"},l={key:1},r={class:"white-bg"},c=d((()=>(0,o._)("div",{class:"icon-box"},[(0,o._)("div",{class:"icon-circle"},[(0,o._)("i",{class:"fa fa-users","aria-hidden":"true"})])],-1))),u={class:"update-modal-overlay"},p={class:"footer"},m={class:"dialog-footer"},v={class:"content"},h={class:"top"},w={class:"choose"},_={key:0,class:"teams"},b={class:"container1"},g={class:"projectName"},f=["onClick"],k=d((()=>(0,o._)("i",{class:"fi fi-rs-menu-dots-vertical"},null,-1))),y={class:"teamName"},D={class:"participant"},I={class:"teamNumber"},N={key:1,class:"teams"},O={class:"container1"},j={class:"projectName"},T=["onClick"],B=d((()=>(0,o._)("i",{class:"fi fi-rs-menu-dots-vertical"},null,-1))),C={class:"teamName"},S={class:"participant"},M={class:"teamNumber"};function P(e,t,a,d,P,z){const W=(0,o.up)("Loader"),Z=(0,o.up)("Dropdown"),U=(0,o.up)("StudentModButton"),$=(0,o.up)("Avatar"),A=(0,o.up)("router-link");return P.loading?((0,o.wg)(),(0,o.iD)("div",i,[(0,o.Wm)(W)])):((0,o.wg)(),(0,o.iD)("div",l,[(0,o._)("div",{class:"black-bg",style:(0,s.j5)({display:P.updateModalDisplay})},[(0,o._)("div",r,[c,(0,o._)("div",u,[(0,o.wy)((0,o._)("input",{style:{"margin-top":"10px"},"onUpdate:modelValue":t[0]||(t[0]=e=>P.updateTeamName=e),class:"custom-input-style"},null,512),[[n.nr,P.updateTeamName]])]),(0,o._)("div",p,[(0,o._)("span",m,[(0,o._)("button",{onClick:t[1]||(t[1]=e=>z.updateClose()),class:"cancel"},"취소"),(0,o._)("button",{type:"primary",onClick:t[2]||(t[2]=e=>z.updateTeams()),class:"ok"},"수정")])])])],4),(0,o._)("div",v,[(0,o._)("div",h,[(0,o._)("div",w,[(0,o.Wm)(Z,{onSelected:z.watchBySemester2},null,8,["onSelected"])])]),"전체"==P.option?((0,o.wg)(),(0,o.iD)("div",_,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(P.teams,(e=>((0,o.wg)(),(0,o.j4)(A,{key:e.teamId,class:"team",to:{name:"Work",params:{teamId:e.teamId}}},{default:(0,o.w5)((()=>[(0,o._)("div",b,[(0,o._)("div",g,(0,s.zw)(e.projectName),1),(0,o._)("div",{class:"more-button",onClick:[t[3]||(t[3]=(0,n.iM)((()=>{}),["prevent"])),t=>z.modButtonControl(e.teamId)]},[k,(0,o.Wm)(U,{moreButtonOpen:P.moreButtonOpen[e.teamId.toString()],onUpdateProject:t=>z.updateGenerate(e)},null,8,["moreButtonOpen","onUpdateProject"])],8,f)]),(0,o._)("div",y,(0,s.zw)(e.teamName),1),(0,o._)("div",D,[(0,o.Wm)($,{number:e.teamNumber},null,8,["number"]),(0,o._)("div",I,(0,s.zw)(e.teamNumber)+"명 참여",1)])])),_:2},1032,["to"])))),128))])):((0,o.wg)(),(0,o.iD)("div",N,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(P.teams.filter((e=>e.semester==P.option)),(e=>((0,o.wg)(),(0,o.j4)(A,{key:e.teamId,class:"team",to:{name:"Work",params:{teamId:e.teamId}}},{default:(0,o.w5)((()=>[(0,o._)("div",O,[(0,o._)("div",j,(0,s.zw)(e.projectName),1),(0,o._)("div",{class:"more-button",onClick:[t[4]||(t[4]=(0,n.iM)((()=>{}),["prevent"])),t=>z.modButtonControl(e.teamId)]},[B,(0,o.Wm)(U,{moreButtonOpen:P.moreButtonOpen[e.teamId.toString()],onUpdateProject:t=>z.updateGenerate(e)},null,8,["moreButtonOpen","onUpdateProject"])],8,T)]),(0,o._)("div",C,(0,s.zw)(e.teamName),1),(0,o._)("div",S,[(0,o.Wm)($,{number:e.teamNumber},null,8,["number"]),(0,o._)("div",M,(0,s.zw)(e.teamNumber)+"명 참여",1)])])),_:2},1032,["to"])))),128))]))])]))}var z=a(6565),W=a(8418),Z=a(4085);const U=e=>((0,o.dD)("data-v-64adece6"),e=e(),(0,o.Cn)(),e),$={key:0,class:"modification"},A=U((()=>(0,o._)("div",{class:"icon"},[(0,o._)("i",{class:"fi fi-rr-pencil"})],-1))),x=[A];var G={__name:"StudentModButton",props:{moreButtonOpen:{type:Boolean}},emits:["updateProject","closeMod"],setup(e,{emit:t}){const a=e,s=()=>{t("updateProject"),a.moreButtonOpen=!1};return(t,a)=>e.moreButtonOpen?((0,o.wg)(),(0,o.iD)("div",$,[(0,o._)("div",{class:"options"},[(0,o._)("div",{class:"mod",onClick:s},x)])])):(0,o.kq)("",!0)}},H=a(89);const K=(0,H.Z)(G,[["__scopeId","data-v-64adece6"]]);var Y=K,q=a(4217),L={pops:["teams"],components:{Dropdown:Z.Z,StudentModButton:Y,Avatar:W.Z,Loader:q.Z},computed:{studentId(){return this.$route.params.studentId},updateSetParams(){const e={projectId:this.updateProjectId,teamId:this.updateTeamId,teamName:this.updateTeamName,teamNumber:this.updateTeam.teamNumber};return console.log("params: ",e),e}},mounted(){this.getTeams()},data(){return{teams:null,projects:null,updateModalDisplay:"none",updateTeam:null,updateProjectId:null,updateTeamId:null,updateTeamName:null,updateTeamNumber:null,moreButtonOpen:{},option:"전체",loading:!0}},methods:{async getTeams(){try{const e=await z.be.get(`/dashboard-service/dashboard/student/${this.studentId}`);"Success"===e.data.message&&(console.log(e),this.teams=e.data.data),this.loading=!1}catch(e){console.log(e)}},updateGenerate(e){this.updateModalDisplay="flex",this.updateTeam=e,this.updateProjectId=e.projectId,this.updateTeamId=e.teamId,this.updateTeamName=e.teamName,this.updateTeamNumber=e.teamNumber},updateTeams(){z.be.post(`/dashboard-service/dashboard/teams/${this.updateTeamId}`,this.updateSetParams).then((e=>{"Success"==e.data.message&&(this.updateTeam=e.data.data),this.$router.go(0)})).catch((e=>{console.log(e)}))},updateClose(){this.updateModalDisplay="none",this.updateTeam=null,this.updateProjectId=null,this.updateTeamId=null,this.updateTeamName=null,this.updateTeamNumber=null},modButtonControl(e){const t=e.toString();1==this.moreButtonOpen[t]?this.moreButtonOpen[t]=!1:this.moreButtonOpen[t]=!0},watchBySemester2(e){console.log(e),this.option=e}}};const F=(0,H.Z)(L,[["render",P],["__scopeId","data-v-79fbb6f9"]]);var Q=F},8418:function(e,t,a){a.d(t,{Z:function(){return l}});var o=a(3396),s=a(4870);const n={class:"card flex justify-content-center"};var d={__name:"Avatar",props:{number:{type:Number}},setup(e){const t=e;let a=0,d=0;t.number>3?(a=3,d=t.number-a):a=t.number;const i=`+${d}`;return(e,t)=>{const l=(0,o.up)("Avatar",!0),r=(0,o.up)("AvatarGroup");return(0,o.wg)(),(0,o.iD)("div",n,[(0,o.Wm)(r,null,{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,s.SU)(a),(e=>((0,o.wg)(),(0,o.j4)(l,{key:e,image:"https://cdn-icons-png.flaticon.com/128/149/149071.png",size:"large",shape:"circle"})))),128)),(0,s.SU)(d)>0?((0,o.wg)(),(0,o.j4)(l,{key:0,label:i,shape:"circle",size:"large",style:{color:"'#ffffff'"}})):(0,o.kq)("",!0)])),_:1})])}}};const i=d;var l=i},4085:function(e,t,a){a.d(t,{Z:function(){return b}});var o=a(3396),s=a(7139),n=a(9242);const d=e=>((0,o.dD)("data-v-c8c16460"),e=e(),(0,o.Cn)(),e),i={class:"dropdown"},l=d((()=>(0,o._)("div",{class:"dropdown-label"},"학기",-1))),r={class:"selected-content"},c=d((()=>(0,o._)("div",{class:"icon"},[(0,o._)("i",{class:"fi fi-rr-caret-down"})],-1))),u=["onClick"];function p(e,t,a,d,p,m){const v=(0,o.Q2)("click-outside");return(0,o.wg)(),(0,o.iD)("div",i,[l,(0,o.wy)(((0,o.wg)(),(0,o.iD)("button",{onClick:t[0]||(t[0]=(...e)=>m.Dropdown&&m.Dropdown(...e)),class:"dropdown-button"},[(0,o._)("div",r,(0,s.zw)(p.selectedOption),1),c])),[[v,m.closeDropdown]]),(0,o.wy)((0,o._)("ul",{class:"dropdown-list",onMouseenter:t[1]||(t[1]=(...e)=>m.openDropdown&&m.openDropdown(...e)),onMouseleave:t[2]||(t[2]=(...e)=>m.closeDropdown&&m.closeDropdown(...e))},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(p.options,((e,t)=>((0,o.wg)(),(0,o.iD)("li",{key:t,onClick:t=>m.selectOption(e)},(0,s.zw)(e),9,u)))),128))],544),[[n.F8,p.isOpen]])])}var m=a(3051),v=a.n(m),h={directives:{clickOutside:v().directive},mounted(){this.selectedOption="전체"},data(){return{isOpen:!1,selectedOption:"전체",options:["전체","2022-1","2022-2","2023-1","2023-2","2024-1","2024-2","2025-1","2025-2"]}},methods:{openDropdown(){this.isOpen=!0},closeDropdown(){this.isOpen=!1},selectOption(e){this.selectedOption=e,this.$emit("selected",e),this.isOpen=!1},Dropdown(){this.isOpen=!this.isOpen}}},w=a(89);const _=(0,w.Z)(h,[["render",p],["__scopeId","data-v-c8c16460"]]);var b=_}}]);
//# sourceMappingURL=59.9ea25971.js.map