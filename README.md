# Tables Admin

## Backend
###### Initial Setup:
```
cd server
npm install
nodemon run start
Will run on Port 9000
```
###### Collections:
Zones: [
	{
		name: String, 
		color: String
	}
]

Tables: [
	{
		name: String, 
		zone: String,
		active: Boolean
	}
]

###### Endpoints:
- Tables:
  - Create: POST http://localhost:4000/tables
  - Read: GET http://localhost:4000/tables
  - Update: POST http://localhost:4000/tables/edit/:id
  - Delete: DELETE http://localhost:4000/tables:/:id
  - Active Tables: GET http://localhost:4000/tables/active
  - Inactive Tables: GET http://localhost:4000/tables/inactive

- Zones:
  - Create: POST http://localhost:4000/zones
  - Read: GET http://localhost:4000/zones
  - Update: POST http://localhost:4000/zones/edit/:id
  - Delete: DELETE http://localhost:4000/zones:/:id
  - Zones names: GET http://localhost:4000/zones/grouped

## Frontend
###### Initial Setup:
```
cd client
npm install
npm start
Will run on Port 3000
```
