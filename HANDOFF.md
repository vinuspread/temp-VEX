# 템플릿허브 작업 인수인계 기록 (최종)

작성 시각: 2026-04-11 (Asia/Seoul)

## 1) 현재 운영 구조 요약

- 실행 템플릿 소스는 **GitHub 저장소 코드(`src/app/...`)** 기준
- 관리자 등록은 업로드가 아니라 **카탈로그 매핑 방식**
  - 카탈로그: `template-sources/catalog.json`
  - 선택 항목: `key`, `name`, `runtimeRoute`, `sourcePath`
- 관리자 템플릿 등록/수정 시 `runtimeRoute`를 선택해 `previewPath`로 저장
- 동일 실행 라우트 중복 매핑은 차단

## 2) 최근 반영 완료 항목

### 인증/운영
- Google OAuth 로그인 흐름 안정화
- 관리자 세션 유지 관련 로직 정리
- 로그인 오류 노출 UX 정리 (`session_lost` 사용자 노출 제거)

### 관리자 UI/기능
- 템플릿 리스트
  - 검색 기능 추가
  - slug 컬럼 제거, 썸네일 노출
  - 등록일자 컬럼 추가
  - 템플릿 이름/썸네일 클릭 시 새창 미리보기
- 정렬 기준
  - 템플릿 화면에서 제거, 대시보드로 이동
  - 전역 정렬 설정으로 적용
- 카테고리 화면
  - 문구 `템플릿유형` → `카테고리`
  - `code/상태` 표시 제거
  - 수정/비활성화 버튼 한 줄 정리
  - 수정 완료 토스트 표시

### 데이터/도메인 정리
- 내보내기(export) 기능 **전체 제거**
  - 메뉴/페이지/액션/스토어/타입 전부 삭제
- `sourceRoute` 필드 제거
- `대표페이지목록`, `핵심기능요약` 입력 제거

### 문서 정리
- 삭제: `README.md`, `CLAUDE.md`, 기존 빈 `HANDOFF.md`
- 재작성: `PRD.md` (현재 운영 기준으로 축약)
- 유지: `AGENTS.md`, `template-sources/README.md`, `PRD.md`
- 빈 파일 정리 완료 (워크스페이스 기준 0개)

## 3) 현재 템플릿 파일 현황 (src/app/{template})

- fashion: files 8 / dirs 5
- jewelry: files 10 / dirs 5
- exhibition: files 20 / dirs 15
- furniture: files 26 / dirs 10
- sneaker: files 17 / dirs 10
- studio: files 19 / dirs 8
- portfolio: files 11 / dirs 7
- airline: files 2 / dirs 0

## 4) 핵심 파일 변경 포인트

- 카탈로그/매핑
  - `template-sources/catalog.json`
  - `template-sources/README.md`
  - `src/lib/admin/runtime-routes.ts`
- 템플릿 등록/수정
  - `src/components/admin/TemplateForm.tsx`
  - `src/app/admin/templates/new/page.tsx`
  - `src/app/admin/templates/[id]/page.tsx`
  - `src/app/admin/_actions/templates.ts`
  - `src/lib/admin/store.ts`
  - `src/lib/admin/types.ts`
- 관리자 UI
  - `src/app/admin/templates/page.tsx`
  - `src/app/admin/page.tsx`
  - `src/app/admin/template-types/page.tsx`
  - `src/components/admin/AdminShell.tsx`

## 5) 삭제된 주요 기능/파일

- 내보내기 관련 전부 삭제
  - `src/app/admin/exports/**`
  - `src/app/admin/_actions/exports.ts`
  - `src/lib/admin/export.ts`
- ZIP 업로드 임시 구현 삭제
  - `src/lib/admin/template-archive-upload.ts`

## 6) 환경 변수(현재 기준)

- 필수
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  - `SUPABASE_SERVICE_ROLE_KEY`
  - `ADMIN_ALLOWLIST_EMAILS`
  - `BACKUP_CRON_SECRET`
- 선택
  - `TEMPLATE_THUMBNAIL_BUCKET` (기본값: `template-thumbnails`)

## 7) 배포 상태

- 운영 URL: `https://project-c02ju.vercel.app`
- 최신 변경 반영 완료 (Vercel production alias 확인)

## 8) 다음 작업 권장 순서

1. **카탈로그 운영 규칙 확정**
   - 새 템플릿 추가 시 `template-sources/catalog.json` 업데이트 프로세스 문서화
2. **카탈로그 검증 강화**
   - `sourcePath` 유효성 검사(실제 경로 존재 확인) 추가
3. **썸네일 스토리지 운영정책 정리**
   - 버킷 공개 정책/수명주기/정리 기준 확정
4. **관리자 에러 UX 보강**
   - 서버 액션 에러를 화면 토스트로 일관되게 표준화
