package main

import (
	"net/http"

	"./routes"
)

func main() {
	mux := http.NewServeMux()
	routes.CreateRoutes(mux)
}