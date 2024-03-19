package handlers

import (
	"encoding/json"
	"io"
)

func (response Response) Send(status int, content any) {
	response.OriginalResponse.WriteHeader(status)
	io.WriteString(response.OriginalResponse, content)
}

func (request Request) ParseJson() (value any, err error) {
	body, err := io.ReadAll(request.OriginalRequest.Body)
    if err != nil {
        return "", err
    }

		var genericType interface{}

    err = json.Unmarshal(body, &genericType)
    if err != nil {
			return "", err
    }

		return genericType, nil

}
