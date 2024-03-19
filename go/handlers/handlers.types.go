package handlers

import (
	"net/http"
)

type HandlerFunc func(req *http.Request, res Response)

type Response struct {
	OriginalResponse http.ResponseWriter
}
