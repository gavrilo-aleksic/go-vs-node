package controller

import (
	"net/http"

	"../handlers"
)

var RootController handlers.HandlerFunc = func(req *http.Request, res handlers.Response) {
	res.Send(200, "This is Root")

}
