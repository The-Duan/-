<template>
  <div class="user-info-container">
    <el-card class="print-box">
      <el-button
        type="primary"
        :loading="printLoading"
        v-print="printObj"
      >
        {{ $t('msg.userInfo.print') }}
      </el-button>
    </el-card>
    <el-card>
      <div id="userInfoBox" class="user-info-box">
      <!-- 标题 -->
        <h2 class="title">{{ $t('msg.userInfo.title') }}</h2>
        <!-- 头部 -->
        <div class="header">
          <!-- 头部表格 -->
          <el-descriptions :column="2" border>
            <el-descriptions-item :label="$t('msg.userInfo.name')">{{
                detailDate.username
              }}
            </el-descriptions-item>
            <el-descriptions-item :label="$t('msg.userInfo.sex')">{{
                detailDate.gender
              }}
            </el-descriptions-item>
            <el-descriptions-item :label="$t('msg.userInfo.nation')">{{
                detailDate.nationality
              }}
            </el-descriptions-item>
            <el-descriptions-item :label="$t('msg.userInfo.mobile')">{{
                detailDate.mobile
              }}
            </el-descriptions-item>
            <el-descriptions-item :label="$t('msg.userInfo.province')">{{
                detailDate.province
              }}
            </el-descriptions-item>
            <el-descriptions-item :label="$t('msg.userInfo.date')">{{
                $filters.dateFilter(detailDate.openTime)
              }}
            </el-descriptions-item>
            <el-descriptions-item :label="$t('msg.userInfo.remark')" :span="2">
              <el-tag
                class="remark"
                size="small"
                v-for="(item, index) in detailDate.remark"
                :key="index"
              >{{ item }}
              </el-tag
              >
            </el-descriptions-item>
            <el-descriptions-item
              :label="$t('msg.userInfo.address')"
              :span="2"
            >{{ detailDate.address }}
            </el-descriptions-item
            >
          </el-descriptions>
          <!-- 头像 -->
          <el-image class="avatar" :src="detailDate.avatar"></el-image>
        </div>
        <!-- 内容 -->
        <div class="body">
          <!-- 内容渲染表格 -->
          <el-descriptions direction="vertical" :column="1" border>
            <el-descriptions-item :label="$t('msg.userInfo.experience')">
              <ul>
                <li v-for="(item, index) in detailDate.experience" :key="index">
                  <span>
                    {{ $filters.dateFilter(item.startTime, 'YYYY/MM') }}
                    ----
                    {{ $filters.dateFilter(item.endTime, 'YYYY/MM') }}</span
                  >
                  <span>{{ item.title }}</span>
                  <span>{{ item.desc }}</span>
                </li>
              </ul>
            </el-descriptions-item>
            <el-descriptions-item :label="$t('msg.userInfo.major')">
              {{ detailDate.major }}
            </el-descriptions-item>
            <el-descriptions-item :label="$t('msg.userInfo.glory')">
              {{ detailDate.glory }}
            </el-descriptions-item>
          </el-descriptions>
        </div>
        <!-- 尾部 -->
        <div class="foot">{{ $t('msg.userInfo.foot') }}</div>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue'
import { userDetail } from '@/api/user-manage'
import { watchSwitchLang } from '@/utils/i18n'

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const detailDate = ref({})
const getUserDetail = async () => {
  detailDate.value = await userDetail(props.id)
  console.log(detailDate.value)
}
getUserDetail()
watchSwitchLang(getUserDetail)

// 打印相关
const printLoading = ref(false)
const printObj = {
  // 打印区域
  id: 'userInfoBox',
  // 打印标题
  popTitle: 'imooc-vue-element-admin',
  // 打印前
  beforeOpenCallback (vue) {
    printLoading.value = true
  },
  // 执行打印
  openCallback (vue) {
    printLoading.value = false
  }
}

</script>

<style lang="scss" scoped>
.print-box {
  margin-bottom: 20px;
  text-align: right;
}

.user-info-box {
  width: 1024px;
  margin: 0 auto;

  .title {
    text-align: center;
    margin-bottom: 18px;
  }

  .header {
    display: flex;

    ::v-deep .el-descriptions {
      flex-grow: 1;
    }

    .avatar {
      width: 187px;
      box-sizing: border-box;
      padding: 30px 20px;
      border: 1px solid #ebeef5;
      border-left: none;
    }

    .remark {
      margin-right: 12px;
    }
  }

  .body {
    ul {
      list-style: none;

      li {
        span {
          margin-right: 62px;
        }
      }
    }
  }

  .foot {
    margin-top: 42px;
    text-align: right;
  }
}
</style>
