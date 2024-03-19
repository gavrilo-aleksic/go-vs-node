package controller

import (
	handlers "myserver/handlers"
)

var RootController handlers.HandlerFunc = func(req handlers.Request, res handlers.Response) {
	res.Send(200, "This is Root")

}
