package routes

import (
	"net/http"

	controller "../controllers"
)

func CreateRoutes (mux *http.ServeMux) Routes{
  routes := Routes{routes: []Route {
		 {path: "/home", Method: "GET", handler: controller.HomeController },
		 {path: "/", Method: "GET", handler: controller.RootController},
	},
}

for i := 0; i < len(routes.routes); i++ {
	mux.HandleFunc(routes.routes[i].path, routes.routes[i].handler)
}

	return routes
}