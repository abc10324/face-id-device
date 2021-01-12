Vue.component('top-bar',{
    template: `<div class="d-flex justify-content-between w-100 p-2 bg-primary">
                    <span class="h5 text-white font-weight-bold">
                        {{ title }}
                    </span>
                    <a href="/index.html">
                        <i class="fa fa-2x fa-home text-white" aria-hidden="true"></i>
                    </a>
               </div>`,
    data: function(){
        return {
            title: "AI驗票機後台系統 v1.17"
        }
    }
})

Vue.component('side-nav', {
    template: `<div id="side-nav" class="vh-100 bg-light">
                <ul class="nav flex-column">
                    <li class="nav-item border-bottom" v-for="navItem in navItemList">
                        <a class="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">
                            {{navItem.title}}
                        </a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" v-for="item in navItem.itemList" :href="item.link">{{item.name}}</a>
                        </div>
                    </li>
                </ul>
            </div>`,
    data: function () {
        return {
            navItemList: [
               {
                   title: "驗票機管理",
                   itemList: [
                       { name:"驗票機新增", link: "/app/device/insert.html"},
                       { name:"驗票機租借", link: "/app/device/rent.html"},
                    //    { name:"驗票機查詢", link: "/app/device/query.html"}
                   ]
               },
               {
                   title: "帳號管理",
                   itemList: [
                        { name:"權限設定", link: "/app/account/permission.html"},
                        { name:"系統人員", link: "/app/account/admin.html"},
                        { name:"驗票人員", link: "/app/account/inspector.html"}
                   ]
               },
               {
                   title: "票券核銷",
                   itemList: [
                       { name:"核銷統計", link: "/app/ticket/list.html"},
                       { name:"核銷明細", link: "/app/ticket/detail.html"},
                       { name:"即時入場", link: "/app/ticket/realtime.html"}
                   ]
               },
               {
                   title: "活動管理",
                   itemList: [
                       { name:"建立活動", link: "/app/activity/insert.html"},
                       { name:"扣款明細", link: "/app/activity/detail.html"},
                       { name:"請款報表", link: "/app/activity/report.html"}
                   ]
               },
               {
                   title: "訊息管理",
                   itemList: [
                       { name:"訊息投放後台", link: "/app/message/message-backstage.html"}
                   ]
               },
               {
                   title: "數據分析",
                   itemList: [
                       { name:"入場效率", link: "/app/analyze/efficeicy.html"},
                       { name:"票證票券", link: "/app/analyze/ticket.html"},
                       { name:"GAE", link: "/app/analyze/GAE.html"}
                   ]
               },
               {
                   title: "系統管理",
                   itemList: [
                       { name:"系統參數維護", link: "/app/system/config.html"}
                   ]
               },
               {
                   title: "使用教學",
                   itemList: [
                        { name:"使用手冊", link: "/app/manual/manual.html"}
                   ]
               },
           ]
        }
    }
});

Vue.component('breadcrumb',{
    template: `<nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                     <template v-for="(breadcrumb,index) in breadcrumblist">
                        <li v-if="index != (breadcrumblist.length - 1)" class="breadcrumb-item active" aria-current="page">
                            {{ breadcrumb.name }}
                        </li>
                        <li v-else class="breadcrumb-item">
                            <a :href="breadcrumb.link">{{ breadcrumb.name }}</a>
                        </li>
                     </template>
                  </ol>
               </nav>`,
    props:["breadcrumblist"]
    
})

