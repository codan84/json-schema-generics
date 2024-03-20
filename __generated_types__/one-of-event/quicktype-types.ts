export interface QuicktypeTypes {
    entity_name: EntityName;
    operation:   Operation;
    payload:     Property;
}

export enum EntityName {
    Draft = "draft",
    Property = "property",
}

export enum Operation {
    Create = "create",
    Delete = "delete",
    Update = "update",
}

export interface Property {
    address:      string[];
    description?: string;
    price?:       number;
}
