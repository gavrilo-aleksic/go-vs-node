package controller

import (
	handlers "myserver/handlers"
)

var PathParamController handlers.HandlerFunc = func(req handlers.Request, res handlers.Response) {
	res.Send(200, "This is Path Param")
}
