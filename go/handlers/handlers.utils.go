package handlers

import (
	"io"
)

func (response Response) Send(status int, content string) {
	response.OriginalResponse.WriteHeader(status)
	io.WriteString(response.OriginalResponse, content)
}
