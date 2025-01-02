# TermMaker
텀메이커 프로젝트 : 고령자용 전동휠체어 초단기 대여반납 시스템 
react-native(expo-cli, bare workflow) + express.js

테스트 끝나고 바로 서버에 백엔드 올릴 예정

추상적인 폴더 구조 :
screen -> 
   - 사용자페이지 ->
     - 로그인/회원가입
        - 회원가입 기능
        - 로그인 기능(첫페이지)
        - 찾기 기능
     - 대여
        - 블루투스 연결 안내(블루투스 비활성화시 첫화면) 
        - 지도 페이지(첫화면)
        - 요금 안내
     - 반납
        - 반납 안내
     - 마이페이지
        - 정보 변경 페이지
        - 로그아웃 페이지
     - 커뮤니티
        - 글쓰기 페이지
        - 글내용 페이지
        - 댓글 페이지
        - 커뮤니티 메인페이지(첫화면)
   - 관리자 페이지 ->
     - 대시보드(첫페이지)
     - 사용자 관리
        - 사용자 차단 목록
        - ip 블랙리스트
     - 커뮤니티 관리
        - 신고글 목록
        - 글 삭제 목록
     - 피드백 관리
        - 피드백 목록
  - 알림
     - 공통 알림창
     - 공통 경고창
  - 위쪽 부분
  - 아랫쪽 네비바 부분
네비게이션
통합

실질적인 파일 구조 : 
root/
| - App.js
| - navigation/
|   | - Navigation.js
|   | - StackNavigation.js
|   | - TabNavigation.js
| - screens/
|   | - user/
|   |   | - auth/
|   |   |   | - Login.js
|   |   |   | - SignUp.js
|   |   |   | - FindAccount.js
|   |   | - rental/
|   |   |   | - BluetoothGuide.js
|   |   |   | - MapPage.js
|   |   |   | - PricingInfo.js
|   |   | - return/
|   |   |   | - ReturnGuide.js
|   |   | - mypage/
|   |   |   | - ProfileEdit.js
|   |   |   | - Logout.js
|   |   | - community/
|   |   |   | - CommunityMain.js
|   |   |   | - PostCreate.js
|   |   |   | - PostDetail.js
|   |   |   | - Comments.js
|   | - admin/
|   |   | - Dashboard.js
|   |   | - userManagement/
|   |   |   | - BlockedUsers.js
|   |   |   | - IPBlacklist.js
|   |   | - communityManagement/
|   |   |   | - ReportedPosts.js
|   |   |   | - DeletedPosts.js
|   |   | - feedbackManagement/
|   |   |   | - FeedbackList.js
|   | - common/
|   |   | - AlertModal.js
|   |   | - WarningModal.js