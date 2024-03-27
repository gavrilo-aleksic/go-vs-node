package routes

import (
	controller "myserver/controllers"
)
var DefinedRoutes = Routes{routes: []Route {
	{path: "GET/root",  handler: controller.RootController},
	{path: "GET /home", handler: controller.HomeController },
	{path: "POST /post", handler: controller.InputDataController},
	{path: "GET /data/{id}/{id2}", handler: controller.PathParamController},
}}

