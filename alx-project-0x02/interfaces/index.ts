export interface CardProps {
  title: string;
  content: string;
}

export interface PostModalProps {
  onClose: () => void;
  onSubmit: (post: CardProps) => void;
}

export interface Postprops {
  userId: number;
  id: number;
  title: string;
  content: string;
}
