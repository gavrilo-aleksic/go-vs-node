package routes

import (
	"myserver/handlers"
)

type Routes struct {
	routes []Route
}


type Route struct {
	Method string;
	path string;
	handler handlers.HandlerFunc
}

