# Golang learning Journey

## Day 01: the basics

There are couple of key points to discuss when learning golang. Golang is a concurrent, typed, general purpose language. go focuses on simplicity.

### packages, variables and functions

#### packages

- every program in go starts with a main package that runs a main function.
- every package starts with the name of the package on top.
- every capitalized declaration is exported from the package as a named export.
- every package is named after its last segment of its path.
- package imports are generally grouped on the top of the file.

#### variables

##### types

go supports a range of permeative variables namely:

- boolean
- int, int8, int16, int32, int64
- uint, uint8, uint16, uint32, uint64, unitptr
- float32, float64
- complex64 complex128
- byte (alias for int8)
- rune (alias for int32)

note that int, uint and unitptr size is 32 bits on 32-bit system and 64 bit on a 64-bit system.

a variable type is can be specified or inferred from the right side of the assignment.

you can cast the type of a variable in go using the type name like T(x) where x will be converted into type T.

```go
i := 5 // type int inferred from the right side
j := float32(5) // j of type float32
```

##### declaration and assignment

you can declare a variable in 2 ways

var keyword followed with any number of variable name followed with the variable type then the assignment.
or with inferred types. using the assignment operator :=.

```go
var x int = 1; var y int = 2; var z int = 3 // <--- separate
var x,y,z int = 1,2,3 // <--- grouped
```

```go
x := 1; y := 2; z := 3 // <--- separate
x,y,z := 1,2,3 // <--- grouped
```

the := constructor is allowed in place. meaning inside functions, var can be placed in package or function level.

unless you explicitly assign a value to a variable it will be automatically assigned its zero value namely.

- booleans // <--- false
- int // <--- 0
- string // <--- ""

##### constants

you can only declare a constant using the const keyword

```go
const name = "souhaib"
```

numeric constants are high-precision values.

```go
const (
    // Create a huge number by shifting a 1 bit left 100 places.
    // In other words, the binary number that is 1 followed by 100 zeroes.
    Big = 1 << 62
    // Shift it right again 99 places, so we end up with 1<<1, or 2.
    Small = Big >> 99
)
```

#### functions

##### declaration

you can declare a function with the func keyword followed by 0 or more arguments then 0 or more returned values.

```go
package main

import (
    "fmt"
    "math"
)

func add(x, y int) int { // <--- multiple arguments
    return x + y
}

func sayHi(name string) { // <--- no returns
    fmt.Println("hi " + name)
}

func getSqrt(x, y float64) (sqrtX, sqrtY float64) { //  <-- naked return
    sqrtX = math.Sqrt(x)
    sqrtY = math.Sqrt(y)
    return
}

func main() {
    sayHi("souhaib")
    fmt.Println(add(5,10))
    fmt.Println(getSqrt(25, 20))
}
```

a naked return will return the named return values in the declaration. sqrtX, sqrtY here in the eg.

## Day 02: flow Control

### Loops

- go has one loop. `for` loop; init statement optional,condition statement required, post statement optional
- `range` allows simplify looping over slices

```go
package main

import "fmt"

var names = []string {"souhaib", "ali", "zaki", "aboubakr"}

func main() {
    sum := 0
    for i := 0; i < 10; i++ { // <-- full for loop
        sum +=i
    }
    fmt.Println(sum)

    for sum < 1000 { // <-- short-hand for loop
        sum += sum
    }
    fmt.Println(sum)

    for index, name := range names {
        fmt.Println(index, name)
    }

}
```

### conditionals

- if statement conditions similarly are written without brackets
- you can start with a short statement before the condition but the declared variables are only available at in the scope of the if else statement block.
- similarly switch statements can start with a short statement
- switch can write long if else statements by omitting the condition

```go
package main

import (
 "fmt"
 "time"
)


func main() {
    const truth = true

    if truth {
        fmt.Println("Go is awesome")
    }

    if lie := !truth; truth  {
        fmt.Printf("is go complex ?: %v", lie)
    }

    switch awesomeness := 100; awesomeness {
    case 100:
        fmt.Println("go is the goat")
    case 0:
        fmt.Println("go is bad")
    default:
        fmt.Println("go is okay")
    }

    t := time.Now()
    switch { // <-- no condition evaluates to true
    case t.Hour() < 12:
        fmt.Println("Good morning!")
    case t.Hour() < 17:
        fmt.Println("Good afternoon.")
    default:
        fmt.Println("Good evening.")
    }
}
```

#### defer statement

- defer statement defers the execution of a function until the surrounding function returns.
- defer use a Last In first out stack (LIFO) to execute the deferred functions.

```go
package main

import "fmt"

func main() {
 fmt.Println("counting")

 for i := 0; i < 10; i++ {
  defer fmt.Println(i)
 }

 fmt.Println("done")
}
```

## Complex Data types

Go supports 3 types of complex structures structs, slices, and maps.

### pointers

similar to C a pointer in Go holds an address to a memory.

```go
package main

import "fmt"

func main() {
 i := 1.0
 p := &i                                                       // point to i
 fmt.Printf("i is in memory address %v with value %v", &i, *p) // see the new value of i
}
```

### Struct

- a struct is a collection of fields
- struct uses dot notation
- you can create a struct with assigning one or more of its fields. the rest will be zero valued based on the field type.

```go
package main

import "fmt"

type Coordinates struct {
    latitude float64
    longitude float64
}

func main() {
    coordinates1 := Coordinates{100.25, 51.2}
    coordinates2 := Coordinates{latitude: 100.25}
    coordinatesPointer := &coordinates1
    fmt.Println(coordinates1.latitude,coordinatesPointer.longitude )
    fmt.Println(coordinates2)
}
```

### Arrays

- in go `[n]T` denotes an array of `n` values of type `T`.
- array size is fixed an cannot be resized.
- to make a dynamic array you use built in make function
- `make([]int, 5)` creates a zero based array and returns a slice that refers to it

```go
package main

import "fmt"

func main() {
    s := make(int[], 5)
    s2 := make(int[],0, 5)
    // s2 := make(type,length, capcity)
    fmt.Println(len(slice), cap(slice))
}
```

### Slices

- slices are dynamically sized array
- in go `[]T` denotes a slice of elements of type `T`
- you can create a slice with `array[low: high]`
- slices don't hold data
- slices points to the underling array
- modification on a slice will change the underling array
- slices can be referenced by it low (0) or high (length of the slice) bond only
- `len(slice)` length of slice which is the number of elements
- `cap(slice)` capacity of slice which is the number of elements in the underlying array, counting from the first element in the slice.
- a zero value for slice is `nil`
- A nil slice has a length and capacity of 0 and has no underlying array.
- `append` append an element to a slice and increase its length and capacity accordingly

```go
package main

import "fmt"

func main() {
    primes := [6]int{2, 3, 5, 7, 11, 13} // <-- array of 6 elements
    var s []int = primes[1:5] // <-- slice of 4 elements
    fmt.Println(s)

    fmt.Println(primes)
    s[0] = 11
    s[3] = 3
    fmt.Println(primes)

    array := [2]int{1,2} // <-- array
    slice := array[1:2] // <-- slice
    fmt.Println(array,slice, [2]int{1,2} /** <-- arrayLiteral */,[]int{1,2} /** >-- sliceLiteral */ )
    fmt.Println(len(slice), cap(slice))
}
```

### Maps

- maps in go are a collection of key value pairs
- create a map with `make(map[key]value)`
- maps are bracket indexed `m[key]`
- assign a value to a key with `m[key] = value`
- remove key from a map m with `delete(m, key)`
- test key value present with `elem, ok = m[key]` where `ok` is boolean and `elem` is either the value or zero value

```go
package main

import (
 "golang.org/x/tour/wc"
 "strings"
)

func WordCount(s string) map[string]int {
 words := strings.Fields(s)
 wordmap := make(map[string]int)

 for i := 0; i < len(words); i++ {
  wordmap[words[i]] = wordmap[words[i]] + 1
 }

 return wordmap
}

func main() {
 wc.Test(WordCount)
}

```

## Day 03: Methods and Interfaces

- you can declare a method on a type in go.
-
