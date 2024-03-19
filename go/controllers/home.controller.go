package controller

import (
	handlers "myserver/handlers"
)

var HomeController handlers.HandlerFunc = func(req handlers.Request, res handlers.Response) {
	res.Send(200, "This is Home")
}
