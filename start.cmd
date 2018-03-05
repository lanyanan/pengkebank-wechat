@echo off

title 商业后台微信项目
rem author lan

rem dateTime 2017-08-18


rem 用于商业后台微信项目的打包开发工作

:select
echo ==================项目开发选项=====================

echo    1.项目的自动构建
echo    2.项目的静态文件的打包
echo    3.项目的发布
echo ==================项目开发选项=====================



:select_line
set /p line=请选择命令配置:

:select_line2
if %line%=="" goto select_line
if %line%==1 (
    npm run start
) else if %line%==2 (
    npm run build
    pause
) else if %line%==3 (
   rd/s/q "../pengkebank-wechat-public/"
   md "../pengkebank-wechat-public"
   xcopy /s /e "public" "..\pengkebank-wechat-public\public\"
   xcopy /s /e "dist" "..\pengkebank-wechat-public\static\"
   pause
) 
else (
   echo 选择有误
   goto select_line
)