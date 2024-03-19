package types

import (
	"net/http"
)

type HandlerFunc func(req http.ResponseWriter, res *http.Request)

type Responses struct {
	send func(status int, content string)
}