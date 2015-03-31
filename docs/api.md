---
title: API
order: 3
---

###Example

~~~
# make a request
curl http://goodtables.okfnlabs.org/api/run --data "data=https://raw.githubusercontent.com/okfn/goodtables/master/examples/row_limit_structure.csv&schema=https://raw.githubusercontent.com/okfn/goodtables/master/examples/test_schema.json"

# the response will be like
{
    "report": {
        "summary": {
            "bad_row_count": 1,
            "total_row_count": 10,
            ...
        },
        "results": [
            {
            "result_id": "structure_001", # the ID of this result type
            "result_level": "error", # the severity of this result type (info/warning/error)
            "result_message": "Row 1 is defective: there are more cells than headers", # a message that describes the result
            "result_name": "Defective Row", # a human-readable title for this result
            "result_context": ['38', 'John', '', ''], # the row values from which this result triggered
            "row_index": 1, # the idnex of the row
            "row_name": "", # If the row has an id field, this is displayed, otherwise empty
            "column_index": 4, # the index of the column
            "column_name": "" # the name of the column (the header), if applicable
            },
            ...
        ]
    }
}
~~~
      
###Endpoints
All API endpoints support CORS.

`/api` (API Index)
 
 * A JSON object with an `endpoints` property that describes all API endpoints

`/api/run` (Validation Runner)
 
 * `POST` to validate data
 * `GET` to validate data
Both the `POST` and `GET` methods support the same parameters. These parameters are described below.

###Configuration parameters
The Web API supports a subset of all parameters supported by [Good Tables Python library](http://goodtables.readthedocs.org/en/latest/)

 * `data`: (required) Any file, URL to a file, or string of data
 * `schema`: (default. None) This is a convenience for the `options['schema']['schema']` argument that is passed to the schema validator
 * `report_limit`: (default. 1000, max. 1000) An integer that sets a limit on the amount of report results a validator can generate. Validation will cease when this amount is reached
 * `row_limit`: (default. 20000, max. 30000) An integer that sets a limit on the amount of rows that will be processed. Iteration over the data will stop at this amount.
 * `fail_fast`: (default True) A boolean to set whether the run will fail on first error, or not.
 * `ignore_empty_rows`: (default False) A boolean to set whether empty rows should raise errors, or be ignored.
 * `encoding`: (default None) A string that indicates the encoding of the data. Overrides automatic encoding detection.
 * `format`: (default 'csv') 'csv' or 'excel' - the format of the file.

###Report structure
For details on the report structure, refer to the [Good Tables documentation](http://goodtables.readthedocs.org/en/latest/reports.html).
