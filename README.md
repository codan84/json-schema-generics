# json-schema-generics

## Approaches

### oneOf

https://json-schema.org/understanding-json-schema/reference/combining#oneOf

Pros:
- widely supported
- only 1 file as entry point (dereferencing potentially simpler?)
- changes to the event schema apply to all events

Cons:
- can have an event with `entity_name=draft` and `payload=Property`
- when adding new entities we have to modify the central event file
- when generating types we pull all entities even if interested in only few

Codegen support
- Quicktype - :x:
- json2ts - :white_check_mark:

### dynamicRef + dynamicAnchor

https://json-schema.org/blog/posts/dynamicref-and-generics  

https://json-schema.org/draft/2020-12/draft-bhutton-json-schema-00#rfc.section.8.2.3.2  

https://json-schema.org/draft/2020-12/draft-bhutton-json-schema-00#recursive-example

Pros:
- closely resembles generics
- add new specific event per entity
- changes to the event schema apply to all events

Cons:
- latest draft, support might be sketchy (support needs investigation)
- hard to read/understand

Codegen support
- Quicktype - :x:
- json2ts - :x:

### copy-paste

Create a `template-event`, this event then can be copy-pasted and certain attributes changed to get entity-specific event.

Pros:
- add new specific event per entity

Cons:
- changes to the base event require changes to all entity-specific events
- codegen has to run against each specific event unless they are all collected in some kind of `root` schema

---

## Tools for json schemas

### TypeScript types generation

[_**Quicktype**_](https://github.com/glideapps/quicktype)

**Pros**:
- can convert to/from many languages, so using *go* in the futurte could potentially be covered

**cons**:
- merges subschemas when using `oneOf`, rather than using unions: [GH Issue](https://github.com/glideapps/quicktype/issues/2213)

[_**json-schema-to-typescript**_](https://www.npmjs.com/package/json-schema-to-typescript)

**Pros**:
- Correctly handles union types

**Cons**:
- Issue with dereferencing, limiting how we structure schemas: [GH Issue](https://github.com/bcherny/json-schema-to-typescript/issues/324)


### Dereferencing

- [@apidevtools/json-schema-ref-parser](https://www.npmjs.com/package/@apidevtools/json-schema-ref-parser)

### Validation

- [jsonschema](https://www.npmjs.com/package/jsonschema) - validate JSON against the schema
