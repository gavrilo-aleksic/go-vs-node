package controller

import (
	"fmt"
	handlers "myserver/handlers"
)


var InputDataController handlers.HandlerFunc = func(req handlers.Request, res handlers.Response) {
 body, err := req.ParseJson()
 
 if err != nil {
	fmt.Println("Error found", err)
	res.Send(400, "Invalid Request")
	return
 }
 fmt.Println("Body Parsing", body)

	res.Send(200, "This is Home")
}
