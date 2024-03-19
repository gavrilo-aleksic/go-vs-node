package routes

import (
	"myserver/handlers"
	"net/http"
)

func MapRoutes (mux *http.ServeMux, routes Routes) {
	for i := 0; i < len(routes.routes); i++ {
		mux.HandleFunc(routes.routes[i].path, func(res http.ResponseWriter, req *http.Request)  {
			if(req.Method != routes.routes[i].Method) {
				http.Error(res, "Method not allowed", http.StatusMethodNotAllowed)
				return
			}
			 routes.routes[i].handler(req, handlers.Response{OriginalResponse: res }) 
				} )
	}
	}
	