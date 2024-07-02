# Express Calculator

This is a simple calculator application built using Express.js. It allows users to perform basic mathematical operations such as addition, subtraction, multiplication, and division.

## Exercise Criteria

For this exercise, you will build an Express.js application that performs three statistical operations given an arbitrary amount of numbers:

1. **mean** (average)
2. **median** (midpoint)
3. **mode** (most frequent)

The operations are invoked via **one route per operation**.

### Requirements

The three base routes are **_/mean_**, **_/median_**, **_/mode_**. All accept GET requests

Each route takes a query key of **_nums_** which is a comma-separated list of numbers. For example, if I want to get the mean of 1, 3, 5, and 7, that would look like be a GET request to **_/mean?nums=1,3,5,7_**.

The response of each operation should be JSON which looks like this:

```
response: {
  operation: "mean",
  value: 4
}
```

The app should “gracefully” handle the following errors:

- Passing in an invalid number (NaN errors). For instance, **_/mean?nums=foo,2,3_** should respond with a **_400 Bad Request_** status code and a response that saying something like: **_foo is not a number._**
- Empty input: **_/mean_** without passing any nums should respond with a **_400 Bad Request_** status code saying something like **_nums are required._**

Make sure you have unit tests for **_mean_**, **_median_** and **_mode_**.

### Further Study

1. Make a route called /all that does all three operations at the same time, with the response from each of them as a key in the JSON response. It can look like this:

```
response: {
  operation: "all",
  mean: 12
  median: 10,
  mode: 8
}
```

2. Provide special handling for an optional query key called **_save_** that can be set to **_true_**. This means the operation will write to a file. For example, **_/median?nums=1,3,5&save=false_** will return a json response and will write to a file called **_results.json_**.
3. Insert a timestamp for every operation that writes to a file.
4. Honor the Accept header. Return json if the client requests application/json and return html if the client requests text/html.

## Installation

1. Clone the repository: `git clone https://github.com/your-username/express-calculator.git`
2. Navigate to the project directory: `cd express-calculator`
3. Install the dependencies: `npm install`

## Usage

1. Start the server: `npm start`
2. Open your browser and navigate to `http://localhost:3000`
3. Enter the numbers and select the operation you want to perform
4. Click on the "Calculate" button to get the result

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
