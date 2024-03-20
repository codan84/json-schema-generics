export interface QuicktypeDraftEvent {
    entity_name: EntityName;
    operation:   Operation;
    payload:     Draft;
}

export enum EntityName {
    Draft = "draft",
}

export enum Operation {
    Create = "create",
    Delete = "delete",
    Update = "update",
}

export interface Draft {
    address:      string[];
    description?: string;
}
