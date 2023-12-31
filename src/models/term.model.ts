export interface TermInput {
    name: string;
    description?: string;
    parent_id?: number;
    texonomy: string;
    action_taken_by: object;
    business_id: number;
    deleted_at?: Date;
}