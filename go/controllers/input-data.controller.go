package controller

import (
	"fmt"
	handlers "myserver/handlers"
)


var InputDataController handlers.HandlerFunc = func(req handlers.Request, res handlers.Response) {
 _, err := req.ParseJson()
 
 if err != nil {
	fmt.Println("Error found", err)
	res.Send(400, "Invalid Request")
	return
 }

  res.Send(200, "Got the response")
}
