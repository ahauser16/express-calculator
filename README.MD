# Express Calculator

This is a simple calculator application built using Express.js. It allows users to perform basic mathematical operations such as addition, subtraction, multiplication, and division.

## Exercise Instructions

For this exercise, you will build an Express.js application that performs three statistical operations given an arbitrary amount of numbers:

1. **mean** (average)
2. **median** (midpoint)
3. **mode** (most frequent)

The operations are invoked via **one route per operation**.

### Exercise Requirements

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

## Steps taken to create this project

### 1. Initialize Node.js

Run `npm init -y` to create a `package.json` file with default values.

### 2. Install Express and Nodemon:

In the same directory, run `npm install express` to install Express and add it to your project's dependencies.

In the same directory, run `npm install --save-dev nodemon` to install Nodemon and add it to your project's dependencies.

### 3. Create Project Structure

Manually create the folders and files as described, or use the terminal commands below to create them.

```
mkdir -p express-calculator/src/routes express-calculator/src/utils express-calculator/test
touch express-calculator/src/app.js express-calculator/src/routes/stats.js express-calculator/src/utils/calculateMean.js express-calculator/src/utils/calculateMedian.js express-calculator/src/utils/calculateMode.js express-calculator/test/calculateMean.test.js express-calculator/test/calculateMedian.test.js express-calculator/test/calculateMode.test.js express-calculator/.gitignore express-calculator/README.MD
```

### 4. Set Up Express Server:

- Edit `express-calculator/src/app.js` to set up your Express server. You can start with a simple server setup:

```
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
```

### 5. Implement Routes and Utilities:

- Implement the statistical operations in `express-calculator/src/utils/` as separate files (`calculateMean.js`, `calculateMedian.js`, `calculateMode.js`).
- Implement the routes in `express-calculator/src/routes/stats.js` and use the utility functions to perform calculations.

### 6. Update `.gitignore`:

- Make sure to include `node_modules/` and any environment files (like `.env`) in your `.gitignore` file to avoid committing them to version control.

### 7. Write unit tests:

Ensure Jest is installed in your project (`npm install --save-dev jest`) and update your `package.json` to include a test script `"test": "jest"`.

### 8. Run Your Server:

- Navigate to your src directory in the terminal.
- Run `node server.js` to start your server.

This guide sets up a basic Express project structure. You can expand it by adding more routes, utilities, and tests as needed.

## Installation

1. Clone the repository: `git clone https://github.com/your-username/express-calculator.git`
2. Navigate to the project directory: `cd express-calculator`
3. Install the dependencies: `npm install`

## Usage

1. Start the server: `npm start`
2. Open your browser and navigate to `http://localhost:3000`
3. To perform an operation, you will construct a URL that includes the operation you want to perform and the numbers you want to analyze. The numbers should be a comma-separated list provided as a query parameter. Here are the steps for each operation:
   - **Mean**: To calculate the mean (average) of a set of numbers, use the `/mean` route. For example, to calculate the mean of 10, 200, and 3000, enter the following URL in your browser's address bar and press Enter. Here is the constructed URL from the aforementioned instructions: `http://localhost:3000/stats/mean?nums=10,200,3000`.
   - **Median**: To calculate the median (the middle value) of a set of numbers, use the `/median` route. For example, to find the median of 5, 1, and 9. Here is the constructed URL from the aforementioned instructions `http://localhost:3000/stats/median?nums=5,1,9`.
   - **Mode**: To find the mode (the most frequently occurring number) of a set of numbers, use the `/mode` route. For example, to determine the mode of 1, 2, 2, and 3. Here is the constructed URL from the aforementioned instructions: `http://localhost:3000/stats/mode?nums=1,2,2,3`.

### Further Study

1. Make a route called `/all` that does all three operations at the same time, with the response from each of them as a key in the JSON response. It can look like this:

```
response: {
  operation: "all",
  mean: 12
  median: 10,
  mode: 8
}
```

2. Provide special handling for an optional query key called **_save_** that can be set to **_true_**. This means the operation will write to a file. For example, **_/median?nums=1,3,5&save=false_** will return a json response and will write to a file called **_results.json_**.
   - `http://localhost:3000/stats/mean?nums=10,200,3000&save=true`
3. Insert a timestamp for every operation that writes to a file.
4. Honor the Accept header. Return json if the client requests application/json and return html if the client requests text/html.


### Error Handling

The application will respond with a `400 Bad Request` status code and an appropriate error message if you pass an invalid number or leave the `nums` query parameter empty. Make sure to input valid numbers and not to leave the `nums` parameter empty to avoid errors.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
