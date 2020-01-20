<template>
    <div id="app">
        <el-container  style="height:100%;">
            <el-header class="header">
                <vheader />
            </el-header>
            <el-container style="height:100%;">
                <el-aside width="200px" style="height:100%;">
                    <navmenu></navmenu>
                </el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
import NavMenu from "@/components/NavMenu";
import Header from "@/components/Header";

export default {
    name: "app",
    components: {
        navmenu: NavMenu,
        vheader: Header
    }
};
</script>

<style>
html, body {
    height: 100%;
}
#app {
    height: 100%;
}
.header {
    background-color: #409eff;
    color: #fff;
    line-height: 60px;
}
</style>
