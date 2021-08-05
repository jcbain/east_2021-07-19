# W03D04 - Security and Real World http Server

- [X] hashing passwords and why
- [X] cookie encryption and why
- [X] http and https
- [ ] what is REST


## What is REST
A pattern to orgainize our endpoint structure
- REpresentation State Transfer

CRUD => BREAD

B browse GET /maps
R read   GET /maps/:id
E edit   POST /maps/:id
A add    POST /maps
D delete POST /maps/:id/delete

it also represents the structure of our data

B GET /maps/:mapId/pins

- other methods: (PUT, DELETE, PATCH)
PUT : update a single resource it its entirety
PATCH: update an attribute to a single resource
DELETE: delete a single resource

B browse GET /maps
R read   GET /maps/:id
E edit   PATCH /maps/:id
A add    POST /maps
D delete DELETE /maps/:id