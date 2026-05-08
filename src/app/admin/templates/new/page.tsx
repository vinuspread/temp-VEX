import { AdminShell } from "@/components/admin/AdminShell";
import { TemplateForm } from "@/components/admin/TemplateForm";
import { createTemplateAction } from "@/app/admin/_actions/templates";
import { requireAdminUser } from "@/lib/admin/auth";
import { listTemplateRuntimeOptions } from "@/lib/admin/runtime-routes";
import { listTemplates, listTemplateTypes } from "@/lib/admin/store";

export default async function NewTemplatePage() {
  const admin = await requireAdminUser();
  if (!admin) return null;

  const [templateTypes, allOptions, registeredTemplates] = await Promise.all([
    listTemplateTypes(),
    listTemplateRuntimeOptions(),
    listTemplates(false),
  ]);

  const usedFolders = new Set(
    registeredTemplates.map((t) => {
      const parts = t.previewPath.replace(/\/+$/, "").split("/");
      const staticIdx = parts.indexOf("static");
      return staticIdx >= 0 ? parts[staticIdx + 1] : null;
    }),
  );
  const runtimeOptions = allOptions.filter((opt) => !usedFolders.has(opt.key));

  return (
    <AdminShell
      title="템플릿 등록"
      subtitle="slug는 자동 생성됩니다."
      adminEmail={admin.email}
    >
      <TemplateForm action={createTemplateAction} templateTypes={templateTypes} runtimeOptions={runtimeOptions} />
    </AdminShell>
  );
}
