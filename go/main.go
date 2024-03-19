package main

import (
	"fmt"
	"myserver/routes"
	"net/http"
)

func main() {
	mux := http.NewServeMux()
	routes.MapRoutes(mux, routes.DefinedRoutes)

	err := http.ListenAndServe(":3333", mux)
	if err == nil  {
		fmt.Println(err.Error())
	}
	fmt.Println("Go server started on port 3333")
}