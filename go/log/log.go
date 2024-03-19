package log

import (
	"fmt"
	"net/url"
	"time"
)
func LogRequest(method string, url *url.URL) {
	now := time.Now()
	fmt.Println(fmt.Sprintf("[%s] Method: %s, URL: %s",now.Format("2006-01-02 15:04:05"), method, url.Path))

}