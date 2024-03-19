package routes

import (
	"../types"
)

type Routes struct {
	routes []Route
}


type Route struct {
	Method string;
	path string;
	handler types.HandlerFunc
}

