# # Sample routing table data (simulated output from 'show ip route')
# routing_table = """
# Gateway of last resort is not set

#      192.168.1.0/24 is variably subnetted, 2 subnets, 2 masks
# C       192.168.1.0/24 is directly connected, GigabitEthernet0/0
# L       192.168.1.1/32 is directly connected, GigabitEthernet0/0
#      192.168.2.0/24 is variably subnetted, 2 subnets, 2 masks
# C       192.168.2.0/24 is directly connected, GigabitEthernet0/1
# L       192.168.2.1/32 is directly connected, GigabitEthernet0/1
# """

# # Parse routing table into JSON format
# import json

# def parse_routing_table(table):
#     routes = []
#     lines = table.strip().split("\n")
#     for line in lines:
#         if "is directly connected" in line:
#             parts = line.split()
#             routes.append({
#                 "destination": parts[1],
#                 "next_hop": "directly connected",
#                 "interface": parts[-1]
#             })
#         elif "via" in line:
#             parts = line.split()
#             routes.append({
#                 "destination": parts[1],
#                 "next_hop": parts[3],
#                 "protocol": parts[0],
#                 "metric": parts[2][1:-1],
#                 "interface": parts[-1]
#             })
#     return routes

# # Convert to JSON
# routes_json = json.dumps({"routes": parse_routing_table(routing_table)}, indent=4)

# # Display the JSON output
# # print("Routing Table in JSON format:")
# # print(routes_json)

# # Save to a file
# with open("routing_table.json", "w") as file:
#     file.write(routes_json)

import json

def parse_routing_table(table):
    routes = []
    lines = table.strip().split("\n")
    for line in lines:
        if "is directly connected" in line:
            parts = line.split()
            routes.append({
                "destination": parts[1],
                "next_hop": "directly connected",
                "interface": parts[-1]
            })
        elif "via" in line:
            parts = line.split()
            routes.append({
                "destination": parts[1],
                "next_hop": parts[3],
                "protocol": parts[0],
                "metric": parts[2][1:-1],
                "interface": parts[-1]
            })
    return routes

# Read routing table from a text file
with open("routing_table_input.txt", "r") as file:
    routing_table = file.read()

# Convert to JSON
routes_json = json.dumps({"routes": parse_routing_table(routing_table)}, indent=4)

# Save to a file
with open("routing_table.json", "w") as file:
    file.write(routes_json)
print("Routing Table is saved to 'routing_table.json' file.")
