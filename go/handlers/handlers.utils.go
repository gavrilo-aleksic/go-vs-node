package handlers

import (
	"encoding/json"
	"io"
	"reflect"
)

func (response Response) Send(status int, content any) {
	if reflect.TypeOf(content) == reflect.TypeOf("string"){
		response.OriginalResponse.WriteHeader(status)
		io.WriteString(response.OriginalResponse, content.(string))
	} else {
		response.OriginalResponse.Header().Set("Content-Type", "application/json")
		response.OriginalResponse.WriteHeader(status)
		json.NewEncoder(response.OriginalResponse).Encode(content)
	}


}

func (request Request) ParseJson() (value any, err error) {
	body, err := io.ReadAll(request.OriginalRequest.Body)
    if err != nil {
        return nil, err
    }

		var genericType interface{}

    err = json.Unmarshal(body, &genericType)
    if err != nil {
			return nil, err
    }

		return genericType, nil

}
