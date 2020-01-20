<template>
    <el-row class="tac height100">
        <el-col :span="24" class="height100">
            <el-menu
                :default-openeds="['basic', 'form']"
                class="el-menu-vertical-demo height100"
                router
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
            >
                <el-submenu
                    v-for="item in menu"
                    :index="item.id"
                    :key="item.id"
                >
                    <template slot="title">
                        <i :class="item.className"></i>
                        <span v-text="item.name"></span>
                    </template>
                    <el-menu-item-group
                        class="over-hide"
                        v-for="sub in item.sub"
                        :key="sub.componentName"
                    >
                        <!-- <template slot="title">分组一</template> -->
                        <el-menu-item
                            :index="sub.componentName"
                            v-text="sub.name"
                        >
                        </el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </el-col>
    </el-row>
</template>

<style scoped>
.over-hide {
    overflow: hidden;
}

.height100 {
    height: 100%;
}
</style>

<script>
import menu from "@/config/menu-config";

export default {
    data() {
        return {
            menu: menu
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
};
</script>
