package routes

import (
	"myserver/handlers"
	"myserver/log"
	"net/http"
)

func MapRoutes (mux *http.ServeMux, routes Routes) {
	mux.HandleFunc("/", func(res http.ResponseWriter, req *http.Request) {
		var response = handlers.Response{OriginalResponse:  res}
		log.LogRequest(req.Method, req.URL, "")
		response.Send(404, "Not Found")
	})
	for i := 0; i < len(routes.routes); i++ {
		mux.HandleFunc(routes.routes[i].path, func(res http.ResponseWriter, req *http.Request)  {
			log.LogRequest(req.Method, req.URL, routes.routes[i].path)
			 routes.routes[i].handler(handlers.CreateRequest(req), handlers.Response{OriginalResponse: res,  }) 
				} )
	}
	}
	