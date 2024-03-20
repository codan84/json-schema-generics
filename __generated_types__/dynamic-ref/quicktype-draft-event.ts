export interface QuicktypeDraftEvent {
    entity_name: any;
    operation:   Operation;
    payload:     any;
}

export enum Operation {
    Create = "create",
    Delete = "delete",
    Update = "update",
}
