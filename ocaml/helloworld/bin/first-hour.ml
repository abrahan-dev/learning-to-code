(* Some caracteristics of OCaml: - Strongly statically typed - Type inference -
   Do not cast implicitly *)

(* Variables using let keyword are immutable, lowercase and can contain
   underscores. *)
let number_of_items = 50;;

number_of_items * number_of_items;;

(* Combine declaration and usage with let...in is different: the variable x
   exists only betwen the "in" and the ";;" *)
let x = 50 in
x * x
;;

(* Multiple values *)
let hours = 1 in
let wage = 2500 in
hours * wage

(* Functions are declared also with let keyword. *)
let square x = x * x;;

square 50

let square_is_even x = square x mod 2 = 0;;

square_is_even 50;;

square_is_even 51

(* Boolean operators are &&, || *)
let ordered a b c = a <= b && b <= c;;

ordered 1 2 3;;

ordered 1 3 2

(* We can work with floats using the dot notation. Type casts have to be
   explicit. *)
let average a b = (a +. b) /. 2.0

(* Recursive functions are declared with the rec keyword. *)
(* The rec keyword tells the compiler that the function range will call itself
   instead of looking for a function named range above. *)
(* The :: operator is used to prepend an element to a list. *)
let rec range a b = if a > b then [] else a :: range (a + 1) b

let digits = range 0 9;;

(* primitives *)
1 + 2;;

1.0 +. 2.0;;

false;;

'c';;

"Help me!"

(* Pattern matching *)
(* Factorial function with if/else *)
let rec factorial n = if n <= 1 then 1 else n * factorial (n - 1)

(* Factorial function with pattern matching *)
let rec factorial n =
  match n with
  | 0 | 1 -> 1
  | _ -> n * factorial (n - 1)

(* A simpler version without the keyword "match" *)
let rec factorial = function
  | 0 | 1 -> 1
  | n -> n * factorial (n - 1)
;;

factorial 5;;

(* Lists *)
[];;

[ 1; 2; 3 ];;

[ false; true; false ];;

[ [ 1; 2 ]; [ 3; 4 ] ];;

(* Add one element to the front of a list with the :: operator. *)
1 :: [ 2; 3; 4 ];;

(* Concatenate two lists with the @ "append" operator. *)
[ 1; 2; 3 ] @ [ 4; 5; 6 ];;

(* Get the first element of a list with the hd function. *)
List.hd [ 1; 2; 3 ];;

(* Get the rest of the list with the tl function. *)
List.tl [ 1; 2; 3 ]

(* A function over a list with pattern matching. *)
let rec total l =
  match l with
  | [] -> 0
  | h :: t -> h + total t
;;

total [ 1; 3; 5; 3; 1 ]

let rec length l =
  match l with
  | [] -> 0
  | _ :: t -> 1 + length t
;;

length [ 1; 2; 3 ];;

length [ false; true; false ];;

length [ "1"; "2"; "3" ]

(* A function that appends an element to the end of a list. *)
let rec append a b =
  match a with
  | [] -> b
  | h :: t -> h :: append t b
;;

append [ 1; 2; 3 ] [ 4; 5; 6 ]

(* A function that maps a function on each element of a list. *)
let rec map f l =
  match l with
  | [] -> []
  | h :: t -> f h :: map f t
;;

map total [ [ 1; 2 ]; [ 3; 4 ]; [ 5; 6 ] ];;

(* fun -> is used to create anonimous functions. *)
map (fun x -> x * 2) [ 1; 2; 3 ]

(* Partial application of functions *)
let add a b = a + b

let f = add 1;;

f 7;;

map (add 6) [ 1; 2; 3 ];;

map (map (fun x -> x * 2)) [ [ 1; 2 ]; [ 3; 4 ]; [ 5; 6 ] ]

(* Tuple data type *)
let t = (1, "one", '1')

(* Record data type *)
type person =
  { first_name : string
  ; surname : string
  ; age : int
  }

let frank = { first_name = "Frank"; surname = "Smith"; age = 40 }

let s = frank.surname

(* Custom data types *)
type suit =
  | Spades
  | Hearts
  | Diamonds
  | Clubs

let s = [ Spades; Hearts ]

type color =
  | Black
  | RGB of int * int * int

let l = [ Black; RGB (30, 255, 154) ]

(* Polimorphic and recursive custom data types *)
type 'a tree =
  | Leaf
  | Node of 'a tree * 'a * 'a tree
