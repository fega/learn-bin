--function declaration
doubleUs x y = x*2 + y*2
doubleSmallNumber x = if x  > 100
  then x
  else x*2
--you can use ' in function names, us a valid character
doubleSmallNumber' x = (if x > 100 then x else x*2) + 1
-- list declaration
lostNumbers = [2,3,4,6,3,3,23]
--list concatenation
addList = [1,2,3,4] ++ [9,10,11,12]
hello = "hello " ++ "Fabian"
-- : operator to add things to the beginning
notHello = 'A': " is baka"
-- get elements in an array, the first index is 0, you cannot use negative sintax like python
steve = "Steve Buscemi"-- steve !! 2 => e
-- list of list
listOflist = [[1,2,3,4],[5,3,3,3],[1,2,2,3,4],[1,2,3]] -- listOflist !! 1 => [5,3,3,3]
-- let's check some arrays operations
aList = [1,2,3,4]

headList = head aList
tailList = tail aList
lastList = last aList
initList = init aList
lengthList = length aList
nullList = null aList
reverseList = reverse aList
takeList = take 2 aList -- => [1,2]
dropList = drop 2 aList -- => [2,4],because deletes the first elements of the list
maximumList = maximum aList
minimumList = minimum aList
sumList = sum aList
productList = product aList
--look this
isElem x y = elem x y
elemList = 3  `isElem` aList -- true
-- or
elemList' = 7  `elem` aList -- false
-- Texas range
oneToN n = [1..n]
oneToFourty = oneToN 40
abc = ['a'..'z']
-- Texas range step
twoStep=[2,4..100]
reverseStep=[100,90..1]
floatStep=[0.1,0.11.. 0.5]
-- Multiples
multiples24 = take 24 [13,26..] -- this is an infinite list
-- infinite lists functions
cycleList = cycle aList -- take 100 cycleList => you will get a very long 1,2,3,4,5,1,2,3... repeated list
repeatNumber = repeat 5 -- really?, well you also could use: replicate 3 10 =>[10,10,10]

--comprehension Set, read more in http://learnyouahaskell.com/starting-out#an-intro-to-lists I'm a list comprehension
-- there are also in python
-- Syntax: [outputFn | inputSet, Predicate], the predicate is a filter
lc1 = [x*2 | x <- [1..10]] -- => [2,4,6,8,10,12,14,16,18,20]
lc2 = [x*2 | x <- [1..10], x*2 >= 12] -- => [12,14,16,18,20]
lc3 = [x | x <- [50..100], x `mod` 7 == 3]
boomBangs ls = [if x < 10 then "BOOM" else "BANG" | x <- xs, odd x] -- comprehension that replaces each odd number greater than 10 with "BANG!" and each odd number that's less than 10 with "BOOM!". If a number isn't odd, we throw it out of our list
multiplePredicates = [x | x <-[10..20], x /= 13, x /= 15, x /= 19]
multipleList = [x*y | x <-[2, 5, 10], y <-[8, 10, 11]]
-- Something fun
adjectives = ["lazy","grouchy","scheming"]
nouns = ["hobo","frog","pope"]
combinator = [adjective ++ " " ++ noun | adjective <- adjectives, noun <- nouns] -- => ["lazy hobo","lazy frog"...
length' xs = sum [1 | _ <- xs]  -- => _ mean something like, I doesn't care about the list content
