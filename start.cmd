@echo off

title ��ҵ��̨΢����Ŀ
rem author lan

rem dateTime 2017-08-18


rem ������ҵ��̨΢����Ŀ�Ĵ����������

:select
echo ==================��Ŀ����ѡ��=====================

echo    1.��Ŀ���Զ�����
echo    2.��Ŀ�ľ�̬�ļ��Ĵ��
echo    3.��Ŀ�ķ���
echo ==================��Ŀ����ѡ��=====================



:select_line
set /p line=��ѡ����������:

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
   echo ѡ������
   goto select_line
)