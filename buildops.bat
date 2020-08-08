:: Build Ops Created By Shawn Luther | Date: 8/6/20
@echo off
color 9
:: Default (App Home)
:SelectMenu
echo ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
echo  ---------------------------
echo   [ Welcome, %username% ]
echo  ---------------------------
echo                            ____                 ___       __      _____                     
echo                           /\  _`\           __ /\_ \     /\ \    /\  __`\                   
echo                           \ \ \L\ \  __  __/\_\\//\ \    \_\ \   \ \ \/\ \  _____     ____  
echo                            \ \  _ '/\ \/\ \/\ \ \ \ \   /'_` \   \ \ \ \ \/\ '__`\  /',__\ 
echo                             \ \ \L\ \ \ \_\ \ \ \ \_\ \_/\ \L\ \   \ \ \_\ \ \ \L\ \/\__, `\
echo                              \ \____/\ \____/\ \_\/\____\ \___,_\   \ \_____\ \ ,__/\/\____/
echo                               \/___/  \/___/  \/_/\/____/\/__,_ /    \/_____/\ \ \/  \/___/ 
echo                                                                                 \ \_\         
echo                                Build Ops: Easily Manage/Rebuild Production Apps! \/_/
echo.
echo ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
echo.
echo  ## BUILD OPTIONS #########################
echo  # 1.) Run Build Application              #
echo  # 2.) Open + Serve Build                 #
echo  # 3.) Serve Build                        #
echo  # 4.) Quit                               #
echo  ##########################################
echo.
:: Define Type Var.
set /p number=:
:: Menu Select Paths.
if %number% == 1 goto OpenRunBuild
if %number% == 2 goto OpenBuildServe
if %number% == 3 goto ServeBuild
if %number% == 4 goto exit

:: If the number value selected is not valid, throw an error.
if %number% == 404 do (
cls
echo.
echo              - - - - - - - - - - - - - - - - - - - - * BUILD OPS ERROR * - - - - - - - - - - - - - - - -
echo              - The option number (%number%) does not exist. Please choose a valid option from the select menu.-
echo              - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
goto SelectMenu
)

:: Run Build Application
:OpenBuildServe
start http://localhost:5000
serve -s build
goto SelectMenu

:: Open + Serve Build
:OpenRunBuild
npm run build
goto SelectMenu

:: Serve Build (Don't Run).
:ServeBuild
serve -s build
goto SelectMenu

:: Close Application.
:exit
exit