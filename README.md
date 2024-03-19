# json-schema-generics

## Approaches

### oneOf

https://json-schema.org/understanding-json-schema/reference/combining#oneOf

Pros:
- widely supported
- only 1 file as entry point (dereferencing potentially simpler?)

Cons:
- can have an event with `entity_name=draft` and `payload=Property` - could be solved via [if-then-else](https://json-schema.org/understanding-json-schema/reference/conditionals#ifthenelse) but would quickly blow out of proportion
- when adding new entities we have to modify the central event file
- when generating types we pull all entities even if interested in only few

### dynamicRef

https://json-schema.org/blog/posts/dynamicref-and-generics



## Tools for json schemas

### TypeScript types generation

- [Quicktype](https://github.com/glideapps/quicktype)

### Dereferencing

- [@apidevtools/json-schema-ref-parser](https://www.npmjs.com/package/@apidevtools/json-schema-ref-parser)
- [Quicktype](https://github.com/glideapps/quicktype) - caveat here is passing ALL files when running the command (https://github.com/glideapps/quicktype/issues/2487)
