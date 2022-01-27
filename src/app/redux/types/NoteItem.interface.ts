export interface NoteItemInterface {
  content: string;
  category: string;
  id: string;
  created?: string;
  isDraft?: boolean;
  isEditing?: boolean;
  isArchived?: boolean;
}
