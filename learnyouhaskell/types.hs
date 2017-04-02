--Declare variable tipes
removeNonUppercase :: String -> String
removeNonUppercase st = [ c | c <- st, c `elem` ['A'..'Z']]

addThree :: Int -> Int -> Int -> Int -- int Max: 2147483647, Min: -2147483648
addThree x y z = x + y + z
addThree' :: Integer -> Integer -> Integer -> Integer -- integer Max: Arbitrary, Min: Arbitrary
addThree' x y z = x + y + z


circumference :: Float -> Float -- circumference 4.0 => 25.132742
circumference r = 2 * pi * r
circumference' :: Double -> Double -- circumference' 4.0 => 25.132741228718345
circumference' r = 2 * pi * r
-- Another types: Bool, Char

------------------------
--TYPECLASSES 101
------------------------
-- TYPE VARIABLE
-- ghci> :t head
-- head :: [a] -> a
-- The "a" means that can be any type
--
-- ghci> :t fst
-- fst :: (a, b) -> a
-- takes a two pair touple and returns the first element

-- ghci> :t (==)
-- (==) :: (Eq a) => a -> a -> Bool
-- (Eq a) is a class constr
