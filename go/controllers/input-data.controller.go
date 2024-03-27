package controller

import (
	handlers "myserver/handlers"
)


var InputDataController handlers.HandlerFunc = func(req handlers.Request, res handlers.Response) {
 body, _ := req.ParseJson()
 
  res.Send(200, body)
}
