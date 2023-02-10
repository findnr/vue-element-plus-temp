<!--
 * @Author: 程英明
 * @Date: 2022-02-28 14:43:11
 * @LastEditTime: 2023-02-10 16:04:43
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \vue-element-plus-temp\src\views\admin\user\password.vue
 * QQ:504875043@qq.com
-->
<template>
    <div class='index'>
        <el-form label-position="right" label-width="100px" :model="user" style="max-width: 460px" :rules="rules"
            ref="ruleUserRef" status-icon>
            <el-form-item label="旧密码">
                <el-input :type="show ? 'text' : 'password'" v-model="user.passwordo" />
            </el-form-item>
            <el-form-item label="新密码" prop="passwordn">
                <el-input :type="show ? 'text' : 'password'" v-model="user.passwordn" />
            </el-form-item>
            <el-form-item label="重复新密码" prop="passwordc">
                <el-input :type="show ? 'text' : 'password'" v-model="user.passwordc" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm(ruleUserRef)">确认修改</el-button>
                <el-button @click="resetForm(ruleUserRef)">重置信息</el-button>
                <el-button type="danger" text @click="show = !show">{{ show?'隐藏密码': '显示密码' }}</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup>
import { reactive, ref } from "vue"
import { ElMessage } from 'element-plus'
import { password } from '@/api/admin'
const user = reactive({
    passwordo: '',
    passwordn: '',
    passwordc: '',
})
const ruleUserRef = ref(null)
const show = ref(false);

const submitForm = (formEl) => {

    if (!formEl) return
    formEl.validate((valid, fields) => {
        if (valid) {
            password('user/password/mid', user).then(res => {
                if (res.code == 200) {
                    user.passwordo = ''
                    resetForm(ruleUserRef.value);
                }
            })
        } else {
            ElMessage.success({
                message: '数据格式不对',
                type: 'warning',
            })
        }
    })
}
const resetForm = (formEl) => {
    if (!formEl) return
    user.passwordo = ''
    formEl.resetFields()
}


const checkPassword = (rule, value, callback) => {
    if (!value) {
        return callback(new Error('密码不能为空'))
    } else {
        const reg =
            /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_]+$)(?![a-z0-9]+$)(?![a-z\W_]+$)(?![0-9\W_]+$)[a-zA-Z0-9\W_]{8,30}$/
        if (reg.test(value)) {
            callback()
        } else {
            return callback(
                new Error('密码为数字，小写字母，大写字母，特殊符号 至少包含三种，长度为 8 - 30位')
            )
        }
    }
}
const checkTwoPassword = (rule, value, callback) => {
    if (!value) {
        return callback(new Error('密码不能为空'))
    } else {
        const reg =
            /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_]+$)(?![a-z0-9]+$)(?![a-z\W_]+$)(?![0-9\W_]+$)[a-zA-Z0-9\W_]{8,30}$/
        if (reg.test(value)) {
            if (value === user.passwordn) {
                callback()
            } else {
                return callback(
                    new Error('两次密码输入不一致，请认真输入！！！')
                )
            }

        } else {
            return callback(
                new Error('密码为数字，小写字母，大写字母，特殊符号 至少包含三种，长度为 8 - 30位')
            )
        }
    }
}

const checkTel = (rule, value, callback) => {
    if (!value) {
        return callback(new Error('手机号不能为空'))
    } else {
        const reg = /^1[3456789]\d{9}$/

        if (reg.test(value)) {
            callback()
        } else {
            return callback(new Error('请输入正确的手机号'))
        }
    }
}
const rules = reactive({
    passwordo: [
        { required: true, validator: checkPassword, trigger: 'change' },
        { validator: checkPassword, trigger: 'blur' },
    ],
    passwordn: [
        { required: true, validator: checkPassword, trigger: 'change' },
        { validator: checkPassword, trigger: 'blur' },
    ],
    passwordc: [
        { required: true, validator: checkTwoPassword, trigger: 'change' },
        { validator: checkTwoPassword, trigger: 'blur' },
    ],

})

</script>

<script>
export default { route: { meta: { auth: true, type: 1 } } };
</script>

<style scoped lang="scss">
:deep(.el-form-item__error) {
    position: static !important;
}
</style>
