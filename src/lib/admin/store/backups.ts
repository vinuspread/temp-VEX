import { randomUUID } from "node:crypto";

import type { BackupSnapshot, RequestStatus } from "@/lib/admin/types";
import { nowIso } from "@/lib/admin/utils";
import { buildBackupName, cloneState, getStore, hydrateStoreFromSupabase, persistStoreToSupabase } from "./core";

export async function createBackupSnapshot(): Promise<BackupSnapshot> {
  await hydrateStoreFromSupabase();
  const store = getStore();
  const backup: BackupSnapshot = {
    id: randomUUID(),
    name: buildBackupName(),
    createdAt: nowIso(),
    data: cloneState(store.state),
  };
  store.backups = [backup, ...store.backups].slice(0, 4);
  await persistStoreToSupabase();
  return backup;
}

export async function listBackups(): Promise<BackupSnapshot[]> {
  await hydrateStoreFromSupabase();
  return getStore().backups.slice();
}

export async function restoreBackupSnapshot(backupId: string): Promise<void> {
  await hydrateStoreFromSupabase();
  const store = getStore();
  const target = store.backups.find((b) => b.id === backupId);
  if (!target) throw new Error("복구할 백업 파일을 찾을 수 없습니다.");

  const rollback: BackupSnapshot = {
    id: randomUUID(),
    name: `${buildBackupName()}_rollback`,
    createdAt: nowIso(),
    data: cloneState(store.state),
  };
  store.backups = [rollback, ...store.backups].slice(0, 4);
  store.state = cloneState(target.data);
  await persistStoreToSupabase();
}

export async function getDashboardStats(): Promise<{
  requestTotal: number;
  requestByStatus: Record<RequestStatus, number>;
  templateTotal: number;
}> {
  await hydrateStoreFromSupabase();
  const { requests, templates } = getStore().state;
  const requestByStatus: Record<RequestStatus, number> = { RECEIVED: 0, REVIEWING: 0, DONE: 0, ON_HOLD: 0 };
  requests.forEach((r) => { requestByStatus[r.status] += 1; });
  return {
    requestTotal: requests.length,
    requestByStatus,
    templateTotal: templates.filter((t) => !t.deletedAt).length,
  };
}
