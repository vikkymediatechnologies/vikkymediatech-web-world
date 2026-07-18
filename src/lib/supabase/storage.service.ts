import { supabase } from "./client";

const BUCKET = "enrollment-documents";

export async function uploadDocument(file: File, folder: string): Promise<string> {
  const fileExt = file.name.split(".").pop();
  const filePath = `${folder}/${Date.now()}-${Math.random()
    .toString(36)
    .slice(2)}.${fileExt}`;

  const { error } = await supabase.storage.from(BUCKET).upload(filePath, file);
  if (error) throw error;

  const { data } = supabase.storage.from(BUCKET).getPublicUrl(filePath);
  return data.publicUrl;
}
