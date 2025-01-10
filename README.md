# Automated Configuration and Assessment of Network Devices in a single administrative domain (Software Defined Networking)

This project is a SDN-based network device configuration and assessment tool. It is designed to automate the process of configuring and assessing network devices in a single administrative domain.

## Getting Started

To get started with this project, you need to follow the steps below.

### Prerequisites

Ensure you have the following installed on your system:

- **Python 3.12**: This project is built using Python 3.12. Make sure you have this version installed to avoid compatibility issues.
- **Cisco Packet Tracer**: This project requires Cisco Packet Tracer to be installed on your system. You can download it from the official website.

### Setup Instructions

1. **Create an Input File**:
    - Create a text file named `routing_table_input.txt` in the root directory of the project.
    - This file will contain the routing table data required by the simulator.

2. **Populate the Input File**:
    - Add your routing table data from the simulated router to the `routing_table_input.txt` file.
    - Ensure that the file is properly formatted and contains the necessary information.
    - You can use the `routing.py` script provided in the project to parse the routing table data and generate the JSON format.

### Running the Project

To run the simulator, follow these steps:

1. Open a terminal and navigate to the project directory.
2. Execute the following command:

   ```bash
   python routing_simulator.py
   ```

### Output

The simulator will process the data in `routing_table_input.txt` and generate the output. The output will be displayed in the terminal or saved to a file, depending on the project configuration.

### Additional Notes

- Ensure that `routing_table_input.txt` is properly formatted as per the project requirements.
- If you encounter any issues, check for compatibility with Python 3.12 and verify the correctness of the input file.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgments

- The project was developed by Biswarup Naha, Dona Murmu, Sourav Karmakar, Avanish, and Hemdatta Das under the guidance of Mrs. Nabanita Das.
- [Python](https://www.python.org/) & [Cisco Packet Tracer](https://www.cisco.com/c/en/us/products/routers/packet-tracer/index.html) are used in this project.
- The contributors and maintainers for their hard work and dedication.
