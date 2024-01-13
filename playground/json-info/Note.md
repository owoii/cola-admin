# 这里记录下关于 JSON 文件的一些信息

### $

比如下面这个 JSON,这是一个 Schema,用来验证

```json
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "这个 B的名字"
    },
    "age": {
      "type": "number",
      "description": "这个 B 的年纪"
    },
    "sex": {
      "type": "string",
      "description": "这个 B 的性别"
    }
  }
}
```

接着一个 JSON 就可以使用这个 stream 作为验证方式

```json
{
  "$schema": "./schema/person.json",
  "name": "坤子",
  "age": 2.5,
  "sex": "篮球"
}
```