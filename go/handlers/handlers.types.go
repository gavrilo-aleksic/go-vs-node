package handlers

import (
	"net/http"
)

type HandlerFunc func(req Request, res Response)

type Response struct {
	OriginalResponse http.ResponseWriter
}

type Request struct {
	OriginalRequest *http.Request
}

