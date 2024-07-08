
# E-commerce Back End

## Description

Internet retail, also known as e-commerce, plays a significant role within the electronics industry, empowering businesses and consumers alike to conveniently engage in online buying and selling of electronic products. In the latest available data from 2021, the industry in the United States alone was estimated to have generated the substantial amount of US$2.54 trillion, according to the United Nations Conference on Trade and Development. E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes. Due to the prevalence of these platforms, developers should understand the fundamental architecture of e-commerce sites.

This project involves building the back end for an e-commerce site. The task is to take a working Express.js API and configure it to use Sequelize to interact with a PostgreSQL database.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

1. Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2. Navigate to the project directory:
    ```bash
    cd e-commerce-orm
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Create a `.env` file in the root directory and add your PostgreSQL credentials:
    ```
    DB_NAME='your_database_name'
    DB_USER='your_postgresql_username'
    DB_PASSWORD='your_postgresql_password'
    ```

## Usage

1. Create the database:
    ```bash
    psql -U <your_postgresql_username> -d <your_database_name> -f db/schema.sql
    ```
2. Seed the database:
    ```bash
    npm run seed
    ```
3. Start the server:
    ```bash
    npm start
    ```
4. Use Insomnia Core to test the API routes.

### Walkthrough Video

A walkthrough video demonstrating the functionality of the application and all of the acceptance criteria being met can be found 

[here](link-to-walkthrough-video).

## License

This project is licensed under the GPL-3.0 License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## Tests

To run tests, use the following command:

```bash
npm test
```

## Questions

If you have any questions about the project, feel free to reach out:

- GitHub: [Jocoso](https://github.com/jocoso)

