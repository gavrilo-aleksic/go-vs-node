package routes

import (
	"myserver/handlers"
	"myserver/log"
	"net/http"
)

func MapRoutes (mux *http.ServeMux, routes Routes) {
	for i := 0; i < len(routes.routes); i++ {
		mux.HandleFunc(routes.routes[i].path, func(res http.ResponseWriter, req *http.Request)  {
			if(req.Method != routes.routes[i].Method) {
				http.Error(res, "Method not allowed", http.StatusMethodNotAllowed)
				return
			}
			log.LogRequest(req.Method, req.URL)
			 routes.routes[i].handler(handlers.Request{OriginalRequest:  req}, handlers.Response{OriginalResponse: res }) 
				} )
	}
	}
	