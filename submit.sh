#!/bin/shell
###
 # @Author: 程英明
 # @Date: 2022-03-09 15:38:03
 # @LastEditTime: 2022-03-09 15:38:06
 # @LastEditors: 程英明
 # @Description: 
 # @FilePath: \unit_info_admin\submit.sh
 # QQ:504875043@qq.com
### 

time=$(date "+%Y-%m-%d %H:%M:%S")
git add .
git commit -m "$* $time"
git push