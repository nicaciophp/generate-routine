export class Routines {
  log() {
    const log = [
      "log",
      {
        level: "info",
        parameters: [""],
      },
    ];
    return JSON.stringify(log, null, 2);
  }

  accessor() {
    const accessor = [
      "transform",
      {
        var: "",
        output_var: "",
        transformer: [
          "accessor",
          {
            path: "jsonata:",
          },
        ],
      },
    ];
    return JSON.stringify(accessor, null, 2);
  }

  each() {
    const each = [
      "each",
      {
        generator: [
          "variable",
          {
            var: "examples",
          },
        ],
        item_var: "example",
        routine: [],
      },
    ];
    return JSON.stringify(each, null, 2);
  }

  call() {
    const call = [
      "call",
      {
        service: "system:client",
        method: "name_method",
        parameters: [{}],
        response_var: "return",
      },
    ];
    return JSON.stringify(call, null, 2);
  }

  manager_integration_value() {
    const manager_integration_value = [
      "call",
      {
        service: "manager:integration_value",
        method: "get",
        parameters: ["name:integration-value", 1],
        response_var: "return",
      },
    ];
    return JSON.stringify(manager_integration_value, null, 2);
  }

  case() {
    const caseConditional = [
      "case",
      {
        conditional: ["condition1", "equals", "condition2"],
        routine: [],
      },
    ];
    return JSON.stringify(caseConditional, null, 2);
  }

  catch() {
    const catchError = [
      "catch",
      {
        routine: [],
        errors: [
          {
            pattern: {
              "@regex": ".*",
            },
            routine: [
              "log",
              {
                level: "warn",
                parameters: [
                  "erro: ${erro.stack}",
                  {
                    erro: "$error",
                  },
                ],
              },
            ],
          },
        ],
      },
    ];
    return JSON.stringify(catchError, null, 2);
  }

  define() {
    const define = [
      "define",
      {
        var: "",
        value: "",
      },
    ];
    return JSON.stringify(define, null, 2);
  }

  paginator() {
    const paginator = [
      "each",
      {
        generator: {
          type: "paginator",
          configuration: {
            page_var: "page_number",
            generator: {
              type: "call",
              configuration: {
                service: "system:client",
                method: "name_method",
                parameters: [
                  {
                    page: "page_number",
                  },
                ],
              },
            },
          },
        },
        item_var: "return",
        routine: [],
      },
    ];
    return JSON.stringify(paginator, null, 2);
  }

  push() {
    const push = [
      "call",
      {
        method: "push",
        var: "variable.additional_attributes",
        parameters: [
          {
            key: "desactive",
            label: "Desactive",
            value: true,
          },
        ],
      },
    ];
    return JSON.stringify(push, null, 2);
  }

  last_execution_at() {
    const lastExecutionAt = [
      "each",
      {
        generator: [
          "last_execution_at",
          {
            interval: 30,
            iterations: 1,
            name: "import-orders",
          },
        ],
        item_var: "time",
        routine: [],
      },
    ];
    return JSON.stringify(lastExecutionAt, null, 2);
  }

  transform_schema() {
    const transformSchema = [
      "transform",
      {
        var: "variable",
        output_var: "variable_return",
        transformer: {
          type: "schema",
          configuration: {
            properties: {
              field: {
                path: "jsonata: ",
              },
            },
          },
        },
      },
    ];
    return JSON.stringify(transformSchema, null, 2);
  }

  transform_date() {
    const transformDate = [
      "transform",
      {
        var: "myDate",
        output_var: "date",
        transformer: {
          type: "datetime",
          configuration: {
            format: "YYYYMMDD",
          },
        },
      },
    ];
    return JSON.stringify(transformDate, null, 2);
  }

  array_schema() {
    const arraySchema = {
      "array::0::custom_attributes": {
        path: "jsonata:data",
        transformer: {
          type: "schema",
          configuration: {
            properties: {
              attribute_code: {
                default: "default",
              },
              value: {
                path: "jsonata:}",
              },
            },
          },
        },
      },
    };
    return JSON.stringify(arraySchema, null, 2);
  }

  consume() {
    const consume = [
        "consume",
        {
            "queue_name" : "name_queue",
            "number_of_pulls" : 1,
            "entity" : "name_entity",
            "routine" : []
        }
    ]
    return JSON.stringify(consume, null, 2);
  }
}
