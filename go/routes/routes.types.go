package routes

import (
	"myserver/handlers"
)

type Routes struct {
	routes []Route
}


type Route struct {
	path string;
	handler handlers.HandlerFunc
}

