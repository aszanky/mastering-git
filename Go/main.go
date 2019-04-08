package main

// if only one package
// import "fmt"

// bring package and use it
import (
	"fmt"
	"math"
)

// global variable
var name string = "Zanky"

// params string, return string as well
func greeting(name string) string {
	return "Hello " + name
}

// params two int, return int
func sumIt(num1 int, num2 int) int {
	return num1 + num2
}

func main() {
	// if you want to make variable constant
	const age = 22

	// local variables
	var lastName = "As"

	// we can use shorthand declarations, just local cannot global
	firstName := "Asad"

	// oneline declarations
	// var email, password = "as@gmail.com", "123456"
	// or
	email, password := "as@gmail.com", "123456"

	// to declare Arrays, two forms
	// var fruits [3]string
	// fruits[0] = "Apple"
	// fruits[1] = "Orange"
	// fruits[2] = "Dragon"
	// second form
	fruits := [3]string{"Apple", "Orange", "Dragon"}
	// Slices -> no strict Array
	fruitSlices := []string{"Banana", "Watermelon"}

	//conditionals
	x := 5
	y := 10

	if x < y {
		fmt.Printf("%d is less than %d\n", x, y)
	} else {
		fmt.Printf("%d is more than %d\n", x, y)
	}

	color := "Green"
	switch color {
	case "Red":
		fmt.Printf("The color is %s\n", color)
	case "Blue":
		fmt.Printf("The color is %s\n", color)
	case "Green":
		fmt.Printf("The color is %s\n", color)
	}

	fmt.Println(firstName, name, lastName, age, email, password)
	// to know typeof variables
	fmt.Printf("%T\n", name)
	fmt.Println(math.Floor(2.7))
	fmt.Println(math.Ceil(2.7))
	fmt.Println(greeting("As"))
	fmt.Println(sumIt(3, 10))
	fmt.Println(fruits)
	fmt.Println(fruitSlices)
	//count Array
	fmt.Println(len(fruitSlices))
	//range array -> from index 0 before index 1
	fmt.Println(fruitSlices[0:1])
}
