# Golang learning Journey

Day 01

## the basics

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
