package routes

import (
	controller "myserver/controllers"
)
var DefinedRoutes = Routes{routes: []Route {
	{path: "/home", Method: "GET", handler: controller.HomeController },
	{path: "/", Method: "GET", handler: controller.RootController},
	{path: "/post", Method: "POST", handler: controller.InputDataController},

}}

