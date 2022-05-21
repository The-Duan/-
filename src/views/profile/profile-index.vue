<template>
  <div class="my-container">
    <el-row>
      <el-col :span="6">
<!--        项目介绍-->
        <project-card class="project-card" :features="featureData"></project-card>
      </el-col>
      <el-col :span="18">
        <el-card>
          <el-tabs v-model="activeName">
<!--            项目功能-->
            <el-tab-pane :label="$t('msg.profile.feature')" name="feature">
              <Feature :features="featureData"/>
            </el-tab-pane>
<!--            项目章节-->
<!--            项目作者-->
            <el-tab-pane :label="$t('msg.profile.author')" name="author">
              <author/>
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProjectCard from '@/views/profile/components/ProjectCard'
import Author from '@/views/profile/components/ProjectAuthor'
import Feature from '@/views/profile/components/ProjectFeature'
import { feature } from '@/api/user'
import { watchSwitchLang } from '@/utils/i18n'

const activeName = ref('feature')
const featureData = ref([])
const getFeatureData = async () => {
  featureData.value = await feature()
}
getFeatureData()
watchSwitchLang(getFeatureData)
</script>

<style lang="scss" scoped>
.project-card{
  margin-right: 20px;
}
</style>
