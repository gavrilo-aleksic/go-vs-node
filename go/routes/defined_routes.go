package routes

import (
	"net/http"

	controller "../controllers"
	handlers "../handlers"
)

func CreateRoutes (mux *http.ServeMux) Routes{
  routes := Routes{routes: []Route {
		 {path: "/home", Method: "GET", handler: controller.HomeController },
		 {path: "/", Method: "GET", handler: controller.RootController},
	},
}

for i := 0; i < len(routes.routes); i++ {
	mux.HandleFunc(routes.routes[i].path, func(res http.ResponseWriter, req *http.Request)  {
		if(req.Method != routes.routes[i].Method) {
			http.Error(res, "Method not allowed", http.StatusMethodNotAllowed)
			return
		}
		 routes.routes[i].handler(req, handlers.Response{OriginalResponse: res }) 
		  } )
}

	return routes
}
