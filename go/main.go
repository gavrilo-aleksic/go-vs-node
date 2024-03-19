package main

import (
	"fmt"
	"io"
	"net/http"
)


func getRoot(w http.ResponseWriter, r *http.Request) {
	fmt.Print(("got /request\n"))
	io.WriteString(w, "This is mu website")
}

func main() {
	http.HandleFunc("/", getRoot)

	http.ListenAndServe(":3333", nil)
}