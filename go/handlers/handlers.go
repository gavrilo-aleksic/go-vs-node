package handlers

import (
	"io"
	"net/http"
)

type HandlerFunc func(req *http.Request, res Response)

type Response struct {
	OriginalResponse http.ResponseWriter
}


func (response Response) Send(status int, content string) {
	response.OriginalResponse.WriteHeader(status)
	io.WriteString(response.OriginalResponse, content)
}
