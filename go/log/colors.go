package log

var Black = "30m"
var Red = "31m"
var Green = "32m"
var Yellow = "33m"
var Blue = "34m"
var Magenta = "35m"
var White = "37m"




func ColorText(text string, color string) string{
	return "\033[0;" + color + " " + text + " " + "\033[0m"
}

// const Colors = {
//   black: "30m",
//   red: "31m",
//   green: "32m",
//   yellow: "33m",
//   blue: "34m",
//   magenta: "35m",
//   cyan: "36m",
//   white: "37m",
// };
