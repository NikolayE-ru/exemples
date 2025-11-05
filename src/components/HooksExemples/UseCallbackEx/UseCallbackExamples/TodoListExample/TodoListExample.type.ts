export interface TodoItem {
    id: number;
    text: string;
    completed: boolean;
}

export type ListItemProps = {
    item: TodoItem;
    onRemove: (id: number) => void;
    onToggle: (id: number) => void;
};
