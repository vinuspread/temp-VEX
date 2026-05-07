export type TemplateVisibility = "PUBLIC" | "PRIVATE";
export type TemplateJsType = "NEXT" | "REACT";
export type SortMode = "LATEST" | "POPULAR";

export type RequestStatus = "RECEIVED" | "REVIEWING" | "DONE" | "ON_HOLD";

export interface TemplateType {
  id: string;
  code: string;
  label: string;
  isDefault: boolean;
  isActive: boolean;
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface TemplateItem {
  id: string;
  name: string;
  slug: string;
  templateTypeId: string;
  description: string;
  summary: string;
  thumbnailUrls: string[];
  coverThumbnailUrl: string;
  jsType: TemplateJsType;
  visibility: TemplateVisibility;
  applicationEnabled: boolean;
  sortOrder: number;
  tags: string[];
  revisions: string[];
  pageInfo: {
    hasMainPage: boolean;
    subPageCount: number;
  };
  previewPath: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface TemplateRequest {
  id: string;
  templateId: string;
  applicantName: string;
  applicantContact: string;
  companyName: string | null;
  message: string;
  status: RequestStatus;
  adminMemo: string | null;
  history: Array<{ at: string; status: RequestStatus; memo: string | null }>;
  createdAt: string;
  updatedAt: string;
}

export interface BackupSnapshot {
  id: string;
  name: string;
  createdAt: string;
  data: AdminStoreState;
}

export interface AdminStoreState {
  templateListSortMode: SortMode;
  hubBgImageUrl: string;
  templateTypes: TemplateType[];
  templates: TemplateItem[];
  requests: TemplateRequest[];
}
