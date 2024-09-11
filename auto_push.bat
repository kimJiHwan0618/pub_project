@echo off
setlocal enabledelayedexpansion

rem 커밋 ID 리스트
set commitIds[0]=b2dbcdcf9194d6bff7f34eb760056add24b42c55
set commitIds[1]=175c49949ff585de71650b7f68da9ef62b7323f5
set commitIds[2]=dce98af25f895266be0c19d7eb9dee60e499d7ea

rem 인덱스 값 초기화 (파일에서 불러오기 또는 기본값 설정)
if exist index.txt (
    for /f "delims=" %%i in (index.txt) do set /a index=%%i
) else (
    set /a index=0
)

rem 커밋 ID 배열의 길이
set /a maxIndex=2

rem 반복 작업
:loop
rem 인덱스가 maxIndex를 넘으면 종료
if !index! GTR !maxIndex! (
    echo Index has exceeded the commit ID list length.
    exit /b
)

rem 현재 커밋 ID 가져오기
set currentCommit=!commitIds[%index%]!

rem 현재 커밋 ID로 리셋 및 푸시
git reset --hard !currentCommit!
git push origin master --force
git merge temp-branch

rem index 증가
set /a index+=1

rem 인덱스를 파일에 저장
echo !index! > index.txt

rem 24시간 대기 (86400초)
ping -n 1 127.0.0.1 > nul
timeout /t 86400 > nul

rem 루프 계속
goto loop