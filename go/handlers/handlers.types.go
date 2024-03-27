package handlers

import (
	"net/http"
)

type HandlerFunc func(req Request, res Response)

type Response struct {
	OriginalResponse http.ResponseWriter
}

type Request struct {
	OriginalRequest *http.Request;
	QueryParams map[string]string;
}

func CreateRequest(req  *http.Request) Request {
	var request = Request{OriginalRequest: req}
	var queryParams = req.URL.Query()
	var parsedQueryParams = make(map[string]string)
	for k, v := range queryParams {
		parsedQueryParams[k] = v[0];
	}
	request.QueryParams = parsedQueryParams
	return request
}

