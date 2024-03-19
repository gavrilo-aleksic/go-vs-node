package controller

import (
	"net/http"

	"../handlers"
)

var HomeController handlers.HandlerFunc = func(req *http.Request, res handlers.Response) {
	res.Send(200, "This is Home")
}
