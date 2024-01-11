export interface ActionTakenBy {
    created_by: number,
    updated_by?: number,
    deleted_by?: number,
}

export interface TermInput {
    name: string;
    description?: string;
    parent_id?: number;
    taxonomy: string;
    action_taken_by: ActionTakenBy;
    business_id: number;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
    user: any;
}
