package routes

import (
	controller "myserver/controllers"
)
var DefinedRoutes = Routes{routes: []Route {
	{path: "/root", Method: "GET", handler: controller.RootController},
	{path: "/home", Method: "GET", handler: controller.HomeController },
	{path: "/post", Method: "POST", handler: controller.InputDataController},
	{path: "/data/{id}/{id2}", Method: "GET", handler: controller.PathParamController},
}}

