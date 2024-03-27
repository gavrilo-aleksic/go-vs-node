package controller

import (
	handlers "myserver/handlers"
)

var PathParamController handlers.HandlerFunc = func(req handlers.Request, res handlers.Response) {
	var id1 = req.OriginalRequest.PathValue("id")
	var id2 = req.OriginalRequest.PathValue("id2")
	var m = make(map[string] any)
	var pathParams = make(map[string] any)
	pathParams["id"] = id1;
	pathParams["id2"] = id2;
	m["pathParams"] = pathParams
	m["queryParams"] = req.QueryParams
	res.Send(200, m)
}
