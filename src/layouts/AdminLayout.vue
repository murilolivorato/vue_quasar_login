<template>
  <div id="app">

    <!-- @loading page --->
    <div class="sidebar"  >
      <div class="sidebar-wrapper">
        <div class="columns">
          <div class="column logo-area">
            <q-icon :name="outlinedAccountCircle" />
            <h1>ADMIN Area</h1>
          </div>
        </div>

        <div class="columns">
          <ul class="nav" >
            <li>
              <router-link  :to="{ name: 'AdminHome'}" class="top" >
                <q-icon :name="outlinedHome" />
                <p>Home</p>
              </router-link>
            </li>

            <li>
              <a href="#" @click.prevent="logout()" class="top">
                <q-icon :name="outlinedLogout" />
                <p>Logout</p>
              </a>
            </li>

          </ul>
        </div>
      </div>
    </div>

    <!-- main-panel -->
    <div class="main-panel hero is-fullheight">
      <router-view :key="$route.fullPath" />
    </div>
    <!-- end main-panel -->

    <footer class="footer">
      <div class="container-fluid">
        <div class="row">
          <div class="credits ml-auto">
                      <span class="copyright">
                        Admin
                      </span>
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>

<script setup>
import useMaterial from 'src/use/useMaterialFonsts'
const { outlinedAccountCircle, outlinedHome, outlinedLogout } = useMaterial()

import { useCustomerLoginStore } from 'stores/customerLogin'
const storeCustomerLogin = useCustomerLoginStore()

import { useRouter } from 'vue-router'
const router = useRouter()

const logout = () => {
  // LOGOUT CUSTOMER
  storeCustomerLogin.logout().then((res) => {
    router.push({ name: 'Login' })
  })
}
</script>

<style scoped>
/*  -------------------------  sidebar logo  */
.sidebar .logo-top  {
  width:235px;
  height:105px;
  margin-top:30px;
  float:left;
  margin-bottom:30px;

}

.sidebar .logo-top h1 {
  width:235px;
  height:105px;
  float:left;

}

.sidebar .logo-top  a{
  width:235px;
  height:105px;
  float:left;
  /* background: url(../../images/logo.png) no-repeat center top;*/
  overflow:hidden;
  text-indent:-9000px;

}
div.logo-area {
  padding-top:50px;
  padding-left:30px;
}
div.logo-area .q-icon {
  color:#FFF;
  font-size: 45px;
  float:left;
}
div.logo-area h1 {
  color:#FFF;
  float:left;
  padding-left:20px;
  padding-top:10px;
}
ul.nav {

}
a:hover,
a:focus {
  color:  #b21f24;;
}
.sidebar,
.off-canvas-sidebar {
  position: fixed;
  top: 0;
  height: 100%;
  bottom: 0;
  width: 260px;
  left: 0;
  z-index: 30;
  border-right: 1px solid #ddd;
  overflow:hidden;
}

/*.sidebar .sidebar-wrapper,
.off-canvas-sidebar .sidebar-wrapper {
  position: relative;
  width: 260px;
  z-index: 4;
  padding-bottom: 100px;

}*/

.sidebar .sidebar-wrapper,
.off-canvas-sidebar .sidebar-wrapper {
  position: fixed;
  height: 100%;
  width: 260px;
  z-index: 4;
  padding-bottom: 100px; }

.sidebar-wrapper {
  overflow-y: auto;
  overflow-x:hidden;

  top: 0;
  bottom: 0;

}

div.sidebar-wrapper::-webkit-scrollbar {
  width: 2px;
}
div.sidebar-wrapper::-webkit-scrollbar-thumb
{
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  background-color: #1d263e;
}

div.sidebar-wrapper::-webkit-scrollbar-track
{
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  border-radius: 10px;
  background-color: #2a395e;

}

div.sidebar-wrapper::-webkit-scrollbar
{
  width: 12px;
  background-color: #2a395e;
}

.sidebar .sidebar-wrapper .dropdown .dropdown-backdrop,
.off-canvas-sidebar .sidebar-wrapper .dropdown .dropdown-backdrop {
  display: none !important; }
.sidebar .sidebar-wrapper .navbar-form,
.off-canvas-sidebar .sidebar-wrapper .navbar-form {
  border: none; }

.sidebar .navbar-minimize,
.off-canvas-sidebar .navbar-minimize {
  position: absolute;
  right: 20px;
  top: 2px;
  opacity: 1; }

.sidebar .sidebar-wrapper .dropdown .dropdown-backdrop,
.off-canvas-sidebar .sidebar-wrapper .dropdown .dropdown-backdrop {
  display: none !important;
}

.sidebar .sidebar-wrapper .navbar-form,
.off-canvas-sidebar .sidebar-wrapper .navbar-form {
  border: none;
}

.sidebar .navbar-minimize,
.off-canvas-sidebar .navbar-minimize {
  position: absolute;
  right: 20px;
  top: 2px;
  opacity: 1;
}

.sidebar .nav li>a+div .nav li>a,
.off-canvas-sidebar .nav li>a+div .nav li>a {
  margin-top: 7px;
}
.nav {
  padding: 30px;
}
.sidebar .nav li>a,
.nav li>a {
  margin: 10px 15px 0;
  color: #FFFFFF;
  display: block;
  text-decoration: none;
  position: relative;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 17px;
  padding: 20px 8px;
  line-height: 30px;
  opacity: .7;
}
.nav li a:hover {
  text-decoration: underline !important;
}
.sidebar .sidebar-background:after,
.sidebar-background:after {
  position: absolute;
  z-index: 3;
  width: 100%;
  height: 100%;
  content: "";
  display: block;
  background: #FFFFFF;
  opacity: 1;
}
.nav li>a p {
  float:left;
}
.nav .q-icon{
  float:left;
  font-size: 23px;
  margin-right: 30px;
}

.sidebar:before,
.sidebar:after,
.off-canvas-sidebar:before,
.off-canvas-sidebar:after {
  display: block;
  content: "";
  opacity: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.sidebar:after,
.off-canvas-sidebar:after {
  background: #2b354e;

  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;

  border: none;

  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;

  background: -webkit-radial-gradient(closest-side, #334160 0, #303c59 49%, #2b354e 100%);
  background: -moz-radial-gradient(closest-side, #334160 0, #303c59 49%, #2b354e 100%);
  background: radial-gradient(closest-side, #334160 0, #303c59 49%, #2b354e 100%);
  background-position: 50% 50%;
  -webkit-background-origin: padding-box;
  background-origin: padding-box;
  -webkit-background-clip: border-box;
  background-clip: border-box;
  -webkit-background-size: auto auto;
  background-size: auto auto;

  z-index: 3;
}

.sidebar[data-color="white"]:after,
.off-canvas-sidebar[data-color="white"]:after {
  background: #FFFFFF;
}

.sidebar[data-color="white"] .nav li a,
.sidebar[data-color="white"] .nav li a i,
.sidebar[data-color="white"] .nav li a[data-toggle="collapse"],
.sidebar[data-color="white"] .nav li a[data-toggle="collapse"] i,
.sidebar[data-color="white"] .nav li a[data-toggle="collapse"]~div>ul>li .sidebar-mini-icon,
.sidebar[data-color="white"] .nav li a[data-toggle="collapse"]~div>ul>li>a,
.off-canvas-sidebar[data-color="white"] .nav li a,
.off-canvas-sidebar[data-color="white"] .nav li a i,
.off-canvas-sidebar[data-color="white"] .nav li a[data-toggle="collapse"],
.off-canvas-sidebar[data-color="white"] .nav li a[data-toggle="collapse"] i,
.off-canvas-sidebar[data-color="white"] .nav li a[data-toggle="collapse"]~div>ul>li .sidebar-mini-icon,
.off-canvas-sidebar[data-color="white"] .nav li a[data-toggle="collapse"]~div>ul>li>a {
  color: #66615B;
  opacity: .7;
}

.sidebar[data-color="white"] .nav li:hover:not(.active)>a,
.sidebar[data-color="white"] .nav li:focus:not(.active)>a,
.off-canvas-sidebar[data-color="white"] .nav li:hover:not(.active)>a,
.off-canvas-sidebar[data-color="white"] .nav li:focus:not(.active)>a {
  opacity: 1;
}

.sidebar[data-color="white"] .logo .simple-text,
.off-canvas-sidebar[data-color="white"] .logo .simple-text {
  color: #66615B;
}

.sidebar[data-color="white"] .logo:after,
.off-canvas-sidebar[data-color="white"] .logo:after {
  background-color: #66615B;
  opacity: .4;
}

.sidebar[data-color="white"] .user .info a span,
.sidebar[data-color="white"] .user .nav .sidebar-mini-icon,
.sidebar[data-color="white"] .user .nav .sidebar-normal,
.off-canvas-sidebar[data-color="white"] .user .info a span,
.off-canvas-sidebar[data-color="white"] .user .nav .sidebar-mini-icon,
.off-canvas-sidebar[data-color="white"] .user .nav .sidebar-normal {
  color: #66615B !important;
}

.sidebar[data-color="white"] .user:after,
.off-canvas-sidebar[data-color="white"] .user:after {
  background-color: #66615B;
  opacity: .4;
}

.sidebar[data-color="black"]:after,
.off-canvas-sidebar[data-color="black"]:after {
  background: #212120;
}

.sidebar[data-active-color="primary"] .nav li.active>a,
.sidebar[data-active-color="primary"] .nav li.active>a i,
.sidebar[data-active-color="primary"] .nav li.active>a[data-toggle="collapse"],
.sidebar[data-active-color="primary"] .nav li.active>a[data-toggle="collapse"] i,
.sidebar[data-active-color="primary"] .nav li.active>a[data-toggle="collapse"]~div>ul>li.active .sidebar-mini-icon,
.sidebar[data-active-color="primary"] .nav li.active>a[data-toggle="collapse"]~div>ul>li.active>a,
.off-canvas-sidebar[data-active-color="primary"] .nav li.active>a,
.off-canvas-sidebar[data-active-color="primary"] .nav li.active>a i,
.off-canvas-sidebar[data-active-color="primary"] .nav li.active>a[data-toggle="collapse"],
.off-canvas-sidebar[data-active-color="primary"] .nav li.active>a[data-toggle="collapse"] i,
.off-canvas-sidebar[data-active-color="primary"] .nav li.active>a[data-toggle="collapse"]~div>ul>li.active .sidebar-mini-icon,
.off-canvas-sidebar[data-active-color="primary"] .nav li.active>a[data-toggle="collapse"]~div>ul>li.active>a {
  color: #b21f24;
  opacity: 1;
  font-weight:normal;
}

.sidebar[data-active-color="info"] .nav li.active>a,
.sidebar[data-active-color="info"] .nav li.active>a i,
.sidebar[data-active-color="info"] .nav li.active>a[data-toggle="collapse"],
.sidebar[data-active-color="info"] .nav li.active>a[data-toggle="collapse"] i,
.sidebar[data-active-color="info"] .nav li.active>a[data-toggle="collapse"]~div>ul>li.active .sidebar-mini-icon,
.sidebar[data-active-color="info"] .nav li.active>a[data-toggle="collapse"]~div>ul>li.active>a,
.off-canvas-sidebar[data-active-color="info"] .nav li.active>a,
.off-canvas-sidebar[data-active-color="info"] .nav li.active>a i,
.off-canvas-sidebar[data-active-color="info"] .nav li.active>a[data-toggle="collapse"],
.off-canvas-sidebar[data-active-color="info"] .nav li.active>a[data-toggle="collapse"] i,
.off-canvas-sidebar[data-active-color="info"] .nav li.active>a[data-toggle="collapse"]~div>ul>li.active .sidebar-mini-icon,
.off-canvas-sidebar[data-active-color="info"] .nav li.active>a[data-toggle="collapse"]~div>ul>li.active>a {
  color: #51bcda;
  opacity: 1;
}

.sidebar[data-active-color="success"] .nav li.active>a,
.sidebar[data-active-color="success"] .nav li.active>a i,
.sidebar[data-active-color="success"] .nav li.active>a[data-toggle="collapse"],
.sidebar[data-active-color="success"] .nav li.active>a[data-toggle="collapse"] i,
.sidebar[data-active-color="success"] .nav li.active>a[data-toggle="collapse"]~div>ul>li.active .sidebar-mini-icon,
.sidebar[data-active-color="success"] .nav li.active>a[data-toggle="collapse"]~div>ul>li.active>a,
.off-canvas-sidebar[data-active-color="success"] .nav li.active>a,
.off-canvas-sidebar[data-active-color="success"] .nav li.active>a i,
.off-canvas-sidebar[data-active-color="success"] .nav li.active>a[data-toggle="collapse"],
.off-canvas-sidebar[data-active-color="success"] .nav li.active>a[data-toggle="collapse"] i,
.off-canvas-sidebar[data-active-color="success"] .nav li.active>a[data-toggle="collapse"]~div>ul>li.active .sidebar-mini-icon,
.off-canvas-sidebar[data-active-color="success"] .nav li.active>a[data-toggle="collapse"]~div>ul>li.active>a {
  color: #6bd098;
  opacity: 1;
}

.sidebar[data-active-color="warning"] .nav li.active>a,
.sidebar[data-active-color="warning"] .nav li.active>a i,
.sidebar[data-active-color="warning"] .nav li.active>a[data-toggle="collapse"],
.sidebar[data-active-color="warning"] .nav li.active>a[data-toggle="collapse"] i,
.sidebar[data-active-color="warning"] .nav li.active>a[data-toggle="collapse"]~div>ul>li.active .sidebar-mini-icon,
.sidebar[data-active-color="warning"] .nav li.active>a[data-toggle="collapse"]~div>ul>li.active>a,
.off-canvas-sidebar[data-active-color="warning"] .nav li.active>a,
.off-canvas-sidebar[data-active-color="warning"] .nav li.active>a i,
.off-canvas-sidebar[data-active-color="warning"] .nav li.active>a[data-toggle="collapse"],
.off-canvas-sidebar[data-active-color="warning"] .nav li.active>a[data-toggle="collapse"] i,
.off-canvas-sidebar[data-active-color="warning"] .nav li.active>a[data-toggle="collapse"]~div>ul>li.active .sidebar-mini-icon,
.off-canvas-sidebar[data-active-color="warning"] .nav li.active>a[data-toggle="collapse"]~div>ul>li.active>a {
  color: #fbc658;
  opacity: 1;
}

.sidebar[data-active-color="danger"] .nav li.active>a,
.sidebar[data-active-color="danger"] .nav li.active>a i,
.sidebar[data-active-color="danger"] .nav li.active>a[data-toggle="collapse"],
.sidebar[data-active-color="danger"] .nav li.active>a[data-toggle="collapse"] i,
.sidebar[data-active-color="danger"] .nav li.active>a[data-toggle="collapse"]~div>ul>li.active .sidebar-mini-icon,
.sidebar[data-active-color="danger"] .nav li.active>a[data-toggle="collapse"]~div>ul>li.active>a,
.off-canvas-sidebar[data-active-color="danger"] .nav li.active>a,
.off-canvas-sidebar[data-active-color="danger"] .nav li.active>a i,
.off-canvas-sidebar[data-active-color="danger"] .nav li.active>a[data-toggle="collapse"],
.off-canvas-sidebar[data-active-color="danger"] .nav li.active>a[data-toggle="collapse"] i,
.off-canvas-sidebar[data-active-color="danger"] .nav li.active>a[data-toggle="collapse"]~div>ul>li.active .sidebar-mini-icon,
.off-canvas-sidebar[data-active-color="danger"] .nav li.active>a[data-toggle="collapse"]~div>ul>li.active>a {
  color: #ef8157;
  opacity: 1;
}

.visible-on-sidebar-regular {
  display: inline-block !important;
}

.visible-on-sidebar-mini {
  display: none !important;
}

.off-canvas-sidebar .nav>li>a,
.off-canvas-sidebar .nav>li>a:hover {
  color: #FFFFFF;
}

.off-canvas-sidebar .nav>li>a:focus {
  background: rgba(200, 200, 200, 0.2);
}

.main-panel {
  position: relative;
  float: right;
  width: calc(100% - 260px);
  border: 2px solid;
}

.footer {
  background-color: #f4f3ef !important;
}

.main-panel>.content {
  padding: 30px;
  min-height: calc(100vh - 123px);
  margin-top: 30px;
}

.main-panel>.content.form_list {
  margin-top: 0px !important;
}

.main-panel>.navbar {
  margin-bottom: 0;
}

.main-panel .header {
  margin-bottom: 50px;
}

.perfect-scrollbar-on .sidebar,
.perfect-scrollbar-on .main-panel {
  height: 100%;
  max-height: 100%;
}
.panel-header .header .title {
  color: #FFFFFF;
}

.panel-header .header .category {
  max-width: 600px;
  color: rgba(255, 255, 255, 0.5);
  margin: 0 auto;
  font-size: 13px;
}

.panel-header .header .category a {
  color: #FFFFFF;
}

</style>
