function fibonacci(num) {
// your code here
	def fibonacci(num):
    if num == 0:
        return 0
    elif num == 1:
        return 1
    else:
        a, b = 0, 1
        for _ in range(2, num):
            a, b = b, a + b
        return b

# Test cases
print(fibonacci(1))  # Output: 0
print(fibonacci(5))  # Output: 3

}

module.exports = fibonacci;
