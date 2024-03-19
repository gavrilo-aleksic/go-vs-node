package main

import (
	"fmt"
	"myserver/routes"
	"net/http"
)

func main() {
	mux := http.NewServeMux()
	routes.CreateRoutes(mux)

	err := http.ListenAndServe(":3333", mux)
	if err != nil  {
		fmt.Println(err.Error())
	}
}