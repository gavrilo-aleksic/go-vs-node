package log

import (
	"fmt"
	"net/url"
	"time"
)
func LogRequest(method string, url *url.URL, path string) {
	now := time.Now()
	if path == "" {
		fmt.Println(fmt.Sprintf("[%s] Method: %s, URL: %s %s" ,
		ColorText(now.Format("2006-01-02 15:04:05"), Black), 
		ColorText(method, Yellow), 
		ColorText(url.Path, Magenta),
		ColorText("Not Found", Red),
	))
	} else {
		fmt.Println(fmt.Sprintf("[%s] Route: %s Method: %s, URL: %s" ,
		ColorText(now.Format("2006-01-02 15:04:05"), Black), 
		ColorText(path, Blue),
		ColorText(method, Yellow), 
		ColorText(url.Path, Magenta)),
	)
	}

}