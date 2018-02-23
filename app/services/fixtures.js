import Service from '@ember/service';
import { Promise } from 'rsvp';

export default Service.extend({

  buildFixturePromise(payload, timer, rejectReason) {
    return new Promise(function(resolve, reject) {
      resolve(payload);
      reject(rejectReason);
    });
  },

  sessionUser() {
    return {
              "jsonapi": {
                "version": "1.0"
              },
              "links": {
                "self": "https://qa.api.healthicity.com:443/app"
              },
              "data": {
                "type": "user",
                "id": "a8fa98d7-4332-4ce8-b9c9-6d64f9c1e089",
                "attributes": {
                  "avatarUrl": "images/superman.jpg",
                  "firstName": "Bob",
                  "middleName": null,
                  "lastName": "Hanson",
                  "email": "bob.hanson@healthicity.com",
                  "phone": "555-555-555"
                },
                "relationships": {
                  "products": {
                    "links": {
                      "related": "https://qa.api.healthicity.com:443/user/a8fa98d7-4332-4ce8-b9c9-6d64f9c1e089/products"
                    },
                    "data": [{
                      "type": "product",
                      "id": "AE908Esadfasdf47ABAF507A9360FF9AAA"
                    }, {
                      "type": "product",
                      "id": "AE908EBA4A9647ABAF507A9360FF9AAA"
                    }, {
                      "type": "product",
                      "id": "CCCA35E731F54932B46DA77328BF21A9"
                    }]
                  },
                  "roles": {
                    "links": {
                      "related": "https://qa.api.healthicity.com:443/user/a8fa98d7-4332-4ce8-b9c9-6d64f9c1e089/roles"
                    },
                    "data": [{
                      "type": "role",
                      "id": "1"
                    }]
                  }
                }
              },
              "included": [{
                "type": "product",
                "id": "AE908Esadfasdf47ABAF507A9360FF9AAA",
                "attributes": {
                  "productkey": "Analytics",
                  "name": "Analytics",
                  // "url": "https://auditmanager.healthicity.com/dashboard"
                  "url": "analytics-providers"
                  }
                }, {
                "type": "product",
                "id": "AE908EBA4A9647ABAF507A9360FF9AAA",
                "attributes": {
                  "productkey": "AuditManager",
                  "name": "Audit",
                  // "url": "https://auditmanager.healthicity.com/dashboard"
                  "url": "audits"
                }
              }, {
                "type": "product",
                "id": "CCCA35E731F54932B46DA77328BF21A9",
                "attributes": {
                  "productkey": "ComplianceManager",
                  "name": "Compliance",
                  // "url": "https://{client-id}.healthicitycompliancemanager.com/clients"
                  "url": "compliance"
                }
              }, {
                "type": "role",
                "id": "1",
                "attributes": {
                  "name": "Platform Admin"
                }
              }]
            };
  },

  fetchOrganizationsFixtures() {
    return this.buildFixturePromise(this.organizationsData());
  },

  organizationsData() {
    return {
      "data": [{
        "type": "organization",
        "id": "1",
        "attributes": {
          "name": "American Fork Hospital",
          "address": "170 N 1100 E",
          "address2": "",
          "city": "American Fork",
          "state": "UT",
          "zip": "84003",
          "isAccountEnabled": true
        },
        "relationships": {
          "contacts": {
            "data": [
              { "type": "contact", "id": "1" },
              { "type": "contact", "id": "2" },
              { "type": "contact", "id": "3" },
              { "type": "contact", "id": "7" },
              { "type": "contact", "id": "8" }
            ]
          },
          "modules": {
            "data": [
              { "type": "module", "id": "1" },
              { "type": "module", "id": "2" }
            ]
          }
        }
      }, {
        "type": "organization",
        "id": "3",
        "attributes": {
          "name": "Utah State Hospital",
          "address": "1300 East Center Street",
          "address2": "",
          "city": "Provo",
          "state": "UT",
          "zip": "84606",
          "isAccountEnabled": true
        },
        "relationships": {
          "contacts": {
            "data": [
              { "type": "contact", "id": "4" },
              { "type": "contact", "id": "2" },
              { "type": "contact", "id": "5" },
              { "type": "contact", "id": "7" },
              { "type": "contact", "id": "8" }
            ]
          },
          "modules": {
            "data": [
              { "type": "module", "id": "1" }
            ]
          }
        }
      }, {
        "type": "organization",
        "id": "2",
        "attributes": {
          "name": "Ashley Regional Medical Center",
          "address": "50 W 100 N, Vernal",
          "address2": "",
          "city": "Vernal",
          "state": "UT",
          "zip": "84078",
          "isAccountEnabled": false
        },
        "relationships": {
          "contacts": {
            "data": [
              { "type": "contact", "id": "2" },
              { "type": "contact", "id": "4" },
              { "type": "contact", "id": "6" },
              { "type": "contact", "id": "7" },
              { "type": "contact", "id": "8" }
            ]
          },
          "modules": {
            "data": [
              { "type": "module", "id": "2" }
            ]
          }
        }
      }],
      "included": [{
        "type": "contact",
        "id": "1",
        "attributes": {
          "name": "John Doe",
          "phoneNumber": "555-555-5555",
          "email": "johndoe@something.com",
          "contactType": "Technical Contact"
        }
      }, {
        "type": "contact",
        "id": "2",
        "attributes": {
          "name": "James Madison",
          "phoneNumber": "555-555-5555",
          "email": "JamesMadison@something.com",
          "contactType": "Main Contact"
        }
      }, {
        "type": "contact",
        "id": "3",
        "attributes": {
          "name": "John Marshall",
          "phoneNumber": "555-555-5555",
          "email": "johndoe@something.com",
          "contactType": "Billing Contact"
        }
      }, {
        "type": "contact",
        "id": "4",
        "attributes": {
          "name": "Ella Fitzgerald",
          "phoneNumber": "555-555-5555",
          "email": "Ela@something.com",
          "contactType": "Billing Contact"
        }
      }, {
        "type": "contact",
        "id": "5",
        "attributes": {
          "name": "Satya Nadella",
          "phoneNumber": "555-555-5555",
          "email": "Satya@something.com",
          "contactType": "Technical Contact"
        }
      }, {
        "type": "contact",
        "id": "6",
        "attributes": {
          "name": "John Connor",
          "phoneNumber": "555-555-5555",
          "email": "connor@skynet.com",
          "contactType": "Technical Contact"
        }
      }, {
        "type": "contact",
        "id": "7",
        "attributes": {
          "name": "Tom Willis",
          "phoneNumber": "555-555-5555",
          "email": "sean.sanchez@healthicity.com",
          "contactType": "Sales Rep"
        }
      }, {
        "type": "contact",
        "id": "8",
        "attributes": {
          "name": "Sara Connor",
          "phoneNumber": "555-555-5555",
          "email": "sara.connor@healthicity.com",
          "contactType": "Account Manager"
        }
      }, {
        "type": "module",
        "id": "1",
        "attributes": {
          "name": "Compliance Manager"
        }
      }, {
        "type": "module",
        "id": "2",
        "attributes": {
          "name": "Audit Manager"
        }
      }]
    };
  },

  fetchOrganizationClientsFixtures() {
    return this.buildFixturePromise(this.clientsData());
  },

  clientsData() {
    return {
      "data": [
        {
          'id': 1,
          'type': 'client',
          'attributes': {
            "name": "Birth Choice Pregnancy Centers",
            "address": "170 N 1100 E",
            "address2": "",
            "city": "American Fork",
            "state": "UT",
            "zip": "84003"
          },
          "relationships": {
            "contacts": {
              "data": [
                { "type": "contact", "id": "4" },
                { "type": "contact", "id": "2" },
                { "type": "contact", "id": "5" },
                { "type": "contact", "id": "7" },
                { "type": "contact", "id": "8" }
              ]
            }
          }
        },
        {
          'id': 2,
          'type': 'client',
          'attributes': {
            "name": "Buena Park Community Clinic",
            "address": "1300 East Center Street",
            "address2": "",
            "city": "Provo",
            "state": "UT",
            "zip": "84606"
          },
          "relationships": {
            "contacts": {
              "data": [
                { "type": "contact", "id": "4" },
                { "type": "contact", "id": "2" },
                { "type": "contact", "id": "5" },
                { "type": "contact", "id": "7" },
                { "type": "contact", "id": "8" }
              ]
            }
          }
        },
        {
          'id': 3,
          'type': 'client',
          'attributes': {
            "name": "Vncoc Asian Health Center",
            "address": "50 w 100 N Vernal",
            "address2": "",
            "city": "Vernal",
            "state": "UT",
            "zip": "84078"
          },
          "relationships": {
            "contacts": {
              "data": [
                { "type": "contact", "id": "2" },
                { "type": "contact", "id": "4" },
                { "type": "contact", "id": "6" },
                { "type": "contact", "id": "7" },
                { "type": "contact", "id": "8" }
              ]
            }
        }
      },
        {
          'id': 4,
          'type': 'client',
          'attributes': {
            "name": "Horizion Pregnancy Center",
            "address": "51 W 101 N Vernal",
            "address2": "",
            "city": "Vernal",
            "state": "UT",
            "zip": "84078"
          },
          "relationships": {
            "contacts": {
              "data": [
                { "type": "contact", "id": "4" },
                { "type": "contact", "id": "2" },
                { "type": "contact", "id": "5" },
                { "type": "contact", "id": "7" },
                { "type": "contact", "id": "8" }
              ]
            }
          }
        },
        {
          'id': 5,
          'type': 'client',
          'attributes': {
            "name": "St Jude Dental Clinic",
            "address": "51 W 101 N Vernal",
            "address2": "",
            "city": "Vernal",
            "state": "UT",
            "zip": "84078"
          },
          "relationships": {
            "contacts": {
              "data": [
                { "type": "contact", "id": "4" },
                { "type": "contact", "id": "2" },
                { "type": "contact", "id": "5" },
                { "type": "contact", "id": "7" },
                { "type": "contact", "id": "8" }
              ]
            }
          }
        },
        {
          'id': 6,
          'type': 'client',
          'attributes': {
            "name": "Smile Mobile",
            "address": "52 W 102 N Vernal",
            "address2": "",
            "city": "Vernal",
            "state": "UT",
            "zip": "84078"
          },
          "relationships": {
            "contacts": {
              "data": [
                { "type": "contact", "id": "4" },
                { "type": "contact", "id": "2" },
                { "type": "contact", "id": "5" },
                { "type": "contact", "id": "7" },
                { "type": "contact", "id": "8" }
              ]
            }
          }
        },
        {
          'id': 7,
          'type': 'client',
          'attributes': {
            "name": "Attamed Medical Group",
            "address": "53 W 103 N Vernal",
            "address2": "",
            "city": "Vernal",
            "state": "UT",
            "zip": "84078"
          },
          "relationships": {
            "contacts": {
              "data": [
                { "type": "contact", "id": "4" },
                { "type": "contact", "id": "2" },
                { "type": "contact", "id": "5" },
                { "type": "contact", "id": "7" },
                { "type": "contact", "id": "8" }
              ]
            }
          }
        },
        {
          'id': 8,
          'type': 'client',
          'attributes': {
            "name": "Healthy Smiles for Kids",
            "address": "53 W 103 N Vernal",
            "address2": "",
            "city": "Vernal",
            "state": "UT",
            "zip": "84078"
          },
          "relationships": {
            "contacts": {
              "data": [
                { "type": "contact", "id": "4" },
                { "type": "contact", "id": "2" },
                { "type": "contact", "id": "5" },
                { "type": "contact", "id": "7" },
                { "type": "contact", "id": "8" }
              ]
            }
          }
        },
        {
          'id': 9,
          'type': 'client',
          'attributes': {
            "name": "Bob's Medical Group",
            "address": "54 W 104 N Vernal",
            "address2": "",
            "city": "Vernal",
            "state": "UT",
            "zip": "84078"
          },
          "relationships": {
            "contacts": {
              "data": [
                { "type": "contact", "id": "4" },
                { "type": "contact", "id": "2" },
                { "type": "contact", "id": "5" },
                { "type": "contact", "id": "7" },
                { "type": "contact", "id": "8" }
              ]
            }
          }
        },
        {
          'id': 10,
          'type': 'client',
          'attributes': {
            "name": "The Jerk Store",
            "address": "55 W 105 N Vernal",
            "address2": "",
            "city": "Vernal",
            "state": "UT",
            "zip": "84078"
          },
          "relationships": {
            "contacts": {
              "data": [
                { "type": "contact", "id": "4" },
                { "type": "contact", "id": "2" },
                { "type": "contact", "id": "5" },
                { "type": "contact", "id": "7" },
                { "type": "contact", "id": "8" }
              ]
            }

          }
        }
      ],
      "included": [{
        "type": "contact",
        "id": "1",
        "attributes": {
          "name": "John Doe",
          "phoneNumber": "555-555-5555",
          "email": "johndoe@something.com",
          "contactType": "Technical Contact"
        }
      }, {
        "type": "contact",
        "id": "2",
        "attributes": {
          "name": "James Madison",
          "phoneNumber": "555-555-5555",
          "email": "JamesMadison@something.com",
          "contactType": "Main Contact"
        }
      }, {
        "type": "contact",
        "id": "3",
        "attributes": {
          "name": "John Marshall",
          "phoneNumber": "555-555-5555",
          "email": "johndoe@something.com",
          "contactType": "Billing Contact"
        }
      }, {
        "type": "contact",
        "id": "4",
        "attributes": {
          "name": "Ella Fitzgerald",
          "phoneNumber": "555-555-5555",
          "email": "Ela@something.com",
          "contactType": "Billing Contact"
        }
      }, {
        "type": "contact",
        "id": "5",
        "attributes": {
          "name": "Satya Nadella",
          "phoneNumber": "555-555-5555",
          "email": "Satya@something.com",
          "contactType": "Technical Contact"
        }
      }, {
        "type": "contact",
        "id": "6",
        "attributes": {
          "name": "John Connor",
          "phoneNumber": "555-555-5555",
          "email": "connor@skynet.com",
          "contactType": "Technical Contact"
        }
      }, {
        "type": "contact",
        "id": "7",
        "attributes": {
          "name": "Tom Willis",
          "phoneNumber": "555-555-5555",
          "email": "sean.sanchez@healthicity.com",
          "contactType": "Sales Rep"
        }
      }, {
        "type": "contact",
        "id": "8",
        "attributes": {
          "name": "Sara Connor",
          "phoneNumber": "555-555-5555",
          "email": "sara.connor@healthicity.com",
          "contactType": "Account Manager"
        }
      }]
    };
  },

  fetchRecordImporterData(timer) {
    return this.buildFixturePromise(this.recordImporterData(), timer);
  },

  recordImporterData() {
    return {
      "tableMetadata": {
        "tableName": 'facilities',
        "columnsMetadata": [
          { "column_name": 'client_id', "is_required": true, "unique_key": true },
          { "column_name": 'facility_name', "is_required": true },
          { "column_name": 'facility_state', "is_required": false },
          { "column_name": 'facility_address_1', "is_required": false },
          { "column_name": 'facility_address_2', "is_required": false },
          { "column_name": 'facility_phone', "is_required": false }
        ],
        "currentMaps": [
          {
            "mapName": "Mapping Numero Uno",
            "map": [
              { "ourColumn": "theirHeader" }
            ]
          }
        ]
      }
    }
  },

  fetchAllClientUserFixtures(timer) {
    return this.buildFixturePromise(this.usersData(), timer);
  },

  usersData() {
    return {
      "data": [
        {
          'id': 2,
          'type': 'user',
          'attributes': {
            'firstName': "Bob",
            'lastName': "Hanson",
            'email': 'bob@sample.com',
            'phone': '801-123-2233'
          }
        },
        {
          'id': 3,
          'type': 'user',
          'attributes': {
            'firstName': "Tim",
            'lastName': "McElwee",
            'email': 'tim@sample.com',
            'phone': '801-123-2233'
          }
        },
        {
          'id': 4,
          'type': 'user',
          'attributes': {
            'firstName': "Srihari",
            'lastName': "Revisankar",
            'email': 'srihari@sample.com',
            'phone': '801-123-2233'
          }
        },
        {
          'id': 5,
          'type': 'user',
          'attributes': {
            'firstName': "Ryan",
            'lastName': "Hess",
            'email': 'ryan@sample.com',
            'phone': '801-123-2233'
          }
        },
        {
          'id': 6,
          'type': 'user',
          'attributes': {
            'firstName': "Bill",
            'lastName': "James",
            'email': 'bill@sample.com',
            'phone': '801-123-2233'
          }
        },
        {
          'id': 7,
          'type': 'user',
          'attributes': {
            'firstName': "Karl",
            'lastName': "Malone",
            'email': 'karl@sample.com',
            'phone': '801-123-2233'
          }
        },
        {
          'id': 8,
          'type': 'user',
          'attributes': {
            'firstName': "John",
            'lastName': "Stockton",
            'email': 'john@sample.com',
            'phone': '801-123-2233'
          }
        },
        {
          'id': 9,
          'type': 'user',
          'attributes': {
            'firstName': "Jeff",
            'lastName': "Hornacek",
            'email': 'jeff@sample.com',
            'phone': '801-123-2233'
          }
        },
        {
          'id': 10,
          'type': 'user',
          'attributes': {
            'firstName': "George",
            'lastName': "Costanza",
            'email': 'george@sample.com',
            'phone': '801-123-2233'
          }
        },
        {
          'id': 11,
          'type': 'user',
          'attributes': {
            'firstName': "Elaine",
            'lastName': "Benes",
            'email': 'elaine@sample.com',
            'phone': '801-123-2233'
          }
        }
      ]
    };
  },

  fetchAllAuditProjectFixtures(timer) {
    return this.buildFixturePromise(this.auditProjectData(), timer);
  },

  auditProjectData() {
    return {
      "data": [
        {
          'id': 2,
          'type': 'audit_project',
          'attributes': {
            'projectName': "Sweet Audits",
            'coderName': "Stephanie Hanson",
            'coderSpecialty': 'Family Medicine',
            'projectType': 'audit',
            'dueDate': '12/25/2017',
            'notStarted': 3
          },
          "relationships": {
            "auditEncounters": {
              "data": [
                { id: "1", type: "audit_encounter" },
                { id: "2", type: "audit_encounter" },
                { id: "3", type: "audit_encounter" },
                { id: "4", type: "audit_encounter" },
                { id: "5", type: "audit_encounter" }
              ]
            }
          }
        },
        {
          'id': 3,
          'type': 'audit_project',
          'attributes': {
            'projectName': "Get Er Dun",
            'coderName': "Bob Hanson",
            'coderSpecialty': 'Nuclear Medicine',
            'projectType': 'audit',
            'dueDate': '03/25/2017',
            'notStarted': 5
          },
          "relationships": {
            "auditEncounters": {
              "data": [
                { type: "audit_encounter", id: "1" },
                { type: "audit_encounter", id: "2" },
                { type: "audit_encounter", id: "3" },
                { type: "audit_encounter", id: "4" },
                { type: "audit_encounter", id: "5" }
              ]
            }
          }
        },
        {
          'id': 4,
          'type': 'audit_project',
          'attributes': {
            'projectName': "Jazzy Audits",
            'coderName': "Ryan Hess",
            'coderSpecialty': 'Psychiatry',
            'projectType': 'audit',
            'dueDate': '01/25/2017',
            'notStarted': 7
          },
          "relationships": {
            "auditEncounters": {
              "data": [
                { "type": "audit_encounter", "id": "1" },
                { "type": "audit_encounter", "id": "2" },
                { "type": "audit_encounter", "id": "3" },
                { "type": "audit_encounter", "id": "4" },
                { "type": "audit_encounter", "id": "5" }
              ]
            }
          }
        },
        {
          'id': 5,
          'type': 'audit_project',
          'attributes': {
            'projectName': "Positive Audits",
            'coderName': "Jeff Young",
            'coderSpecialty': 'Internal Medicine',
            'projectType': 'qa',
            'dueDate': '05/25/2017',
            'notStarted': 0
          },
          "relationships": {
            "auditEncounters": {
              "data": [
                { "type": "audit_encounter", "id": "1" },
                { "type": "audit_encounter", "id": "2" },
                { "type": "audit_encounter", "id": "3" },
                { "type": "audit_encounter", "id": "4" },
                { "type": "audit_encounter", "id": "5" }
              ]
            }
          }
        },
        {
          'id': 6,
          'type': 'audit_project',
          'attributes': {
            'projectName': "Combo Audits",
            'coderName': "Sergio Flores",
            'coderSpecialty': 'Aerospace Medicine',
            'projectType': 'qa',
            'dueDate': '06/25/2017',
            'notStarted': 2
          },
          "relationships": {
            "auditEncounters": {
              "data": [
                { "type": "audit_encounter", "id": "1" },
                { "type": "audit_encounter", "id": "2" },
                { "type": "audit_encounter", "id": "3" },
                { "type": "audit_encounter", "id": "4" },
                { "type": "audit_encounter", "id": "5" }
              ]
            }
          }
        }
      ],
      "included": [{
        "type": "audit_encounter",
        "id": "1",
        "attributes": {
          "dos": "05/12/1972",
          "patientName": "John Tilley",
          "patientId": "11",
          "encounterStatus": "Resume",
          "encounterProgressPercentage": "100%"
        }
      }, {
        "type": "audit_encounter",
        "id": "2",
        "attributes": {
          "dos": "12/12/1988",
          "patientName": "Amy Erickson",
          "patientId": "12",
          "encounterStatus": "Resume",
          "encounterProgressPercentage": "100%"
        }
      }, {
        "type": "audit_encounter",
        "id": "3",
        "attributes": {
          "dos": "06/02/1972",
          "patientName": "Ryan Christensen",
          "patientId": "13",
          "encounterStatus": "Start Audit",
          "encounterProgressPercentage": "100%"
        }
      }, {
        "type": "audit_encounter",
        "id": "4",
        "attributes": {
          "dos": "01/01/1969",
          "patientName": "Jeff Groll",
          "patientId": "14",
          "encounterStatus": "Complete",
          "encounterProgressPercentage": "100%"
        }
      }, {
        "type": "audit_encounter",
        "id": "5",
        "attributes": {
          "dos": "04/15/1990",
          "patientName": "Brian Van Ausdal",
          "patientId": "15",
          "encounterStatus": "Start Audit",
          "encounterProgressPercentage": "100%"
        }
      }]
    };
  },

  auditEncouterRelationships() {
    return [
      { "type": "audit_encounter", "id": "1" },
      { "type": "audit_encounter", "id": "2" },
      { "type": "audit_encounter", "id": "3" },
      { "type": "audit_encounter", "id": "4" },
      { "type": "audit_encounter", "id": "5" }
    ]
  },

  auditEncouterIncludes() {
    return [{
      "type": "audit_encounter",
      "id": "1",
      "attributes": {
        "dos": "05/12/1972",
        "patientName": "John Tilley",
        "patientId": "11",
        "encounterStatus": "Resume",
        "encounterProgressPercentage": "100%"
      }
    }, {
      "type": "audit_encounter",
      "id": "2",
      "attributes": {
        "dos": "12/12/1988",
        "patientName": "Amy Erickson",
        "patientId": "12",
        "encounterStatus": "Resume",
        "encounterProgressPercentage": "100%"
      }
    }, {
      "type": "audit_encounter",
      "id": "3",
      "attributes": {
        "dos": "06/02/1972",
        "patientName": "Ryan Christensen",
        "patientId": "13",
        "encounterStatus": "Start Audit",
        "encounterProgressPercentage": "100%"
      }
    }, {
      "type": "audit_encounter",
      "id": "4",
      "attributes": {
        "dos": "01/01/1969",
        "patientName": "Jeff Groll",
        "patientId": "14",
        "encounterStatus": "Complete",
        "encounterProgressPercentage": "100%"
      }
    }, {
      "type": "audit_encounter",
      "id": "5",
      "attributes": {
        "dos": "04/15/1990",
        "patientName": "Brian Van Ausdal",
        "patientId": "15",
        "encounterStatus": "Start Audit",
        "encounterProgressPercentage": "100%"
      }
    }]
  },

  fetchAuditBoxPayload() {
    return this.buildFixturePromise(this.auditEncounterJson(), 500);
  },

  auditEncounterJson() {
    return {
        "auditEncounterJson": {
            "meta": {
                "is_completed": true,
                "audit_type": "pro",
                "audit_project_id": 56,
                "audit_user_id": 23
            },
            "patientData": {
                "name": "Felix",
                "patientId": 65,
                "dateOfBirth": null,
                "gender": "male",
                "placeOfService": "garfield",
                "rvuPos": "facility",
                "posCorrect": true,
                "payer": "bar",
                "dateOfService": null,
                "auditUserType": "coder",
                "serviceType": "Observation Care",
                "visitType": "bar",
                "additionalData": "foo",
                "admitDate": "5/21/2016",
                "dischargeDate": "5/25/2016",
                "customFormValues": {
                  "fields": [
                    {
                      "fieldId": 1,
                      "value": "bar"
                    }
                  ]
                }
            },
            "auditHistory": {
                "historyUnobtainable": true,
                "chiefComplaintDocumented": null,
                "chiefComplaintAdditionalInfo": "foo",
                "presentIllness": {
                    "quickClickValue": "details",
                    "detailsSelections": ["modifyingFactors", "context"],
                    "presentIllnessStatus": "3 or more",
                    "calculation": "brief"
                },
                "reviewOfSystem": {
                    "quickClickValue": "details",
                    "detailsSelections": ["neuro", "endo", "resp"],
                    "calculation": "brief"
                },
                "medicalHistory": {
                    "quickClickValue": "details",
                    "detailsSelections": {
                        "past": ["allergies", "dietary status"],
                        "family": ["related to cc, hpi, or ros"],
                        "social": ["sexual history" ]
                    },
                    "calculation": "brief"
                },
                "customFormValues": {
                  "fields": [
                    {
                      "fieldId": 3,
                      "value": "bar"
                    }
                  ]
                }
            },
            "examination": {
                "selectedExamKey": "pe97",
                "calculation": "Det",
                "pe95": {
                    "selectedExamAuditType": "foo",
                    "examAuditTypes": {
                        "cms": {
                            "quickClickValue": "foo",
                            "documentedInDetails": true,
                            "completeExamination": false,
                            "details": {
                                "organSystemsSelected": ["foo"],
                                "bodyAreasSelected": ["foo"]
                            }
                        },
                        "noridian": {
                            "quickClickValue": "foo",
                            "completeExamination": false,
                            "details": {
                                "organSystemsSelected": ["foo"],
                                "bodyAreasSelected": ["foo"]
                            }
                        },
                        "novitas": {
                            "quickClickValue": "foo",
                            "completeExamination": false,
                            "selectedMultipleAreas": "foo",
                            "details": {
                                "organSystemsSelected": ["foo"],
                                "bodyAreasSelected": ["foo"]
                            }
                        },
                        "marshfield": {
                            "quickClickValue": "foo",
                            "details": {
                                "organSystemsSelected": ["foo"],
                                "bodyAreasSelected": ["foo"]
                            }
                        },
                        "ngs": {
                            "quickClickValue": "foo",
                            "expandedDocumentation": true,
                            "details": {
                                "organSystemsSelected": ["foo"],
                                "bodyAreasSelected": ["foo"]
                            }
                        }
                    }
                },
                "pe97": {
                    "selectedExamAuditType": "specialtySpecific",
                    "multiSystemAuditType": {
                        "quickClickValue": "foo",
                        "bodyAreas": {
                            "constitutional": {
                                "selectedExamElements": ["foo"],
                                "vitalsSelected": true,
                                "selectedVitals": ["bar"]
                            },
                            "eyes": {
                                "selectedExamElements": ["foo"]
                            },
                            "ent": {
                                "selectedExamElements": ["foo"]
                            },
                            "neck": {
                                "selectedExamElements": ["foo"]
                            },
                            "respiratory": {
                                "selectedExamElements": ["foo"]
                            },
                            "cardiovascular": {
                                "selectedExamElements": ["foo"],
                                "selectedExaminationOfElements": ["foo"]
                            },
                            "chest": {
                                "selectedExamElements": ["foo"]
                            },
                            "gastrointestinal": {
                                "selectedExamElements": ["foo"]
                            },
                            "genitourinary": {
                                "selectedExamElements": ["foo"],
                                "selectedMaleExamElements": ["foo"]
                            },
                            "musculoskeletal": {
                                "selectedExamElements": ["foo"],
                                "selectedHeadElements": ["foo"],
                                "selectedSpineElements": ["foo"],
                                "selectedRightUpperElements": ["foo"],
                                "selectedLeftUpperElements": ["foo"],
                                "selectedRightLowerElements": ["foo"],
                                "selectedLeftLowerElements": ["foo"],
                            },
                            "lymphatic": {
                                "selectedExamElements": ["foo"]
                            },
                            "skin": {
                                "selectedExamElements": ["foo"]
                            },
                            "neurologic": {
                                "selectedExamElements": ["foo"]
                            },
                            "psychiatric": {
                                "selectedExamElements": ["foo"],
                                "selectedMentalStatusElements": ["foo"]
                            }
                        }
                    },
                    "specialtySpecificAuditType": {
                        "selectedSpecialty": "foo",
                        "specialties": {
                            "cardiovascular": {
                                "quickClickValue": "foo",
                                "constitutional": {
                                    "selectedExamElements": ["foo"],
                                    "vitalsSelected": true,
                                    "selectedVitals": ["bar"]
                                },
                                "eyes": {
                                    "selectedExamElements": ["foo"]
                                },
                                "ent": {
                                    "selectedExamElements": ["foo"]
                                },
                                "neck": {
                                    "selectedExamElements": ["foo"]
                                },
                                "respiratory": {
                                    "selectedExamElements": ["foo"]
                                },
                                "cardiovascular": {
                                    "selectedExamElements": ["foo"],
                                    "selectedExaminationOfElements": ["foo"]
                                },
                                "gastrointestinal": {
                                    "selectedExamElements": ["foo"]
                                },
                                "musculoskeletal": {
                                    "selectedExamElements": ["foo"]
                                },
                                "extremites": {
                                    "selectedExamElements": ["foo"]
                                },
                                "skin": {
                                    "selectedExamElements": ["foo"]
                                },
                                "neurologic": {
                                    "selectedExamElements": ["foo"]
                                }
                            },
                            "ent": {
                                "quickClickValue": "foo",
                                "constitutional": {
                                    "selectedExamElements": ["foo"],
                                    "vitalsSelected": true,
                                    "selectedVitals": ["bar"]
                                },
                                "headFace": {
                                    "selectedExamElements": ["foo"]
                                },
                                "eyes": {
                                    "selectedExamElements": ["foo"]
                                },
                                "ent": {
                                    "selectedExamElements": ["foo"]
                                },
                                "neck": {
                                    "selectedExamElements": ["foo"]
                                },
                                "respiratory": {
                                    "selectedExamElements": ["foo"]
                                },
                                "cardiovascular": {
                                    "selectedExamElements": ["foo"]
                                },
                                "lymphatic": {
                                    "selectedExamElements": ["foo"]
                                },
                                "neurologic": {
                                    "selectedExamElements": ["foo"],
                                    "selectedMentalStatusElements": ["foo"]
                                }
                            },
                            "eye": {
                                "quickClickValue": "foo",
                                "eyes": {
                                    "selectedExamElements": ["foo"],
                                    "selectedOphthalmoscopicExamElements": ["foo"]
                                },
                                "neurologic": {
                                    "selectedExamElements": ["foo"]
                                }
                            },
                            "genitourinaryM": {
                                "quickClickValue": "foo",
                                "constitutional": {
                                    "selectedExamElements": ["foo"],
                                    "vitalsSelected": true,
                                    "selectedVitals": ["bar"]
                                },
                                "neck": {
                                    "selectedExamElements": ["foo"]
                                },
                                "respiratory": {
                                    "selectedExamElements": ["foo"]
                                },
                                "cardiovascular": {
                                    "selectedExamElements": ["foo"]
                                },
                                "chest": {
                                    "selectedExamElements": ["foo"]
                                },
                                "gastrointestinal": {
                                    "selectedExamElements": ["foo"]
                                },
                                "genitourinary": {
                                    "selectedExamElements": ["foo"],
                                    "selectedGenitaliaExamElements": ["foo"],
                                    "selectedRectalExamElements": ["foo"]
                                },
                                "lymphatic": {
                                    "selectedExamElements": ["foo"]
                                },
                                "skin": {
                                    "selectedExamElements": ["foo"]
                                },
                                "neurologic": {
                                    "selectedExamElements": ["foo"]
                                }
                            },
                            "genitourinaryF": {
                                "quickClickValue": "foo",
                                "constitutional": {
                                    "selectedExamElements": ["foo"],
                                    "vitalsSelected": true,
                                    "selectedVitals": ["bar"]
                                },
                                "neck": {
                                    "selectedExamElements": ["foo"]
                                },
                                "respiratory": {
                                    "selectedExamElements": ["foo"]
                                },
                                "cardiovascular": {
                                    "selectedExamElements": ["foo"]
                                },
                                "chest": {
                                    "selectedExamElements": ["foo"]
                                },
                                "gastrointestinal": {
                                    "selectedExamElements": ["foo"]
                                },
                                "genitourinary": {
                                    "selectedExamElements": ["foo"],
                                    "selectedPelvicExamElements": ["foo"]
                                },
                                "lymphatic": {
                                    "selectedExamElements": ["foo"]
                                },
                                "skin": {
                                    "selectedExamElements": ["foo"]
                                },
                                "neurologic": {
                                    "selectedExamElements": ["foo"]
                                }
                            },
                            "hematologic": {
                                "quickClickValue": "foo",
                                "constitutional": {
                                    "selectedExamElements": ["foo"],
                                    "vitalsSelected": true,
                                    "selectedVitals": ["bar"]
                                },
                                "headFace": {
                                    "selectedExamElements": ["foo"]
                                },
                                "eyes": {
                                    "selectedExamElements": ["foo"]
                                },
                                "ent": {
                                    "selectedExamElements": ["foo"]
                                },
                                "neck": {
                                    "selectedExamElements": ["foo"]
                                },
                                "respiratory": {
                                    "selectedExamElements": ["foo"]
                                },
                                "cardiovascular": {
                                    "selectedExamElements": ["foo"]
                                },
                                "gastrointestinal": {
                                    "selectedExamElements": ["foo"]
                                },
                                "lymphatic": {
                                    "selectedExamElements": ["foo"]
                                },
                                "skin": {
                                    "selectedExamElements": ["foo"]
                                },
                                "neurologic": {
                                    "selectedExamElements": ["foo"]
                                }
                            },
                            "musculoskeletal": {
                                "quickClickValue": "foo",
                                "constitutional": {
                                    "selectedExamElements": ["foo"],
                                    "vitalsSelected": true,
                                    "selectedVitals": ["bar"]
                                },
                                "cardiovascular": {
                                    "selectedExamElements": ["foo"]
                                },
                                "lymphatic": {
                                    "selectedExamElements": ["foo"]
                                },
                                "musculoskeletal": {
                                    "selectedExamElements": ["foo"],
                                    "selectedHeadElements": ["foo"],
                                    "selectedSpineElements": ["foo"],
                                    "selectedRightUpperElements": ["foo"],
                                    "selectedLeftUpperElements": ["foo"],
                                    "selectedRightLowerElements": ["foo"],
                                    "selectedLeftLowerElements": ["foo"],
                                },
                                "extremites": {
                                    "selectedExamElements": ["foo"]
                                },
                                "skin": {
                                    "selectedExamElements": ["foo"]
                                },
                                "neurologic": {
                                    "selectedExamElements": ["foo"],
                                    "selectedMentalStatusElements": ["foo"]
                                }
                            },
                            "neurological": {
                                "quickClickValue": "foo",
                                "constitutional": {
                                    "selectedExamElements": ["foo"],
                                    "vitalsSelected": true,
                                    "selectedVitals": ["bar"]
                                },
                                "eyes": {
                                    "selectedExamElements": ["foo"]
                                },
                                "cardiovascular": {
                                    "selectedExamElements": ["foo"]
                                },
                                "musculoskeletal": {
                                    "selectedExamElements": ["foo"],
                                    "selected_motor_functions": ["foo"]
                                },
                                "extremites": {
                                    "selectedExamElements": ["foo"]
                                },
                                "neurologic": {
                                    "selectedExamElements": ["foo"],
                                    "selected_cranial_nerve_elements": ["foo"]
                                }
                            },
                            "psychiatric": {
                                "quickClickValue": "foo",
                                "constitutional": {
                                    "selectedExamElements": ["foo"],
                                    "vitalsSelected": true,
                                    "selectedVitals": ["bar"]
                                },
                                "musculoskeletal": {
                                    "selectedExamElements": ["foo"]
                                },
                                "psychiatric": {
                                    "selectedExamElements": ["foo"],
                                    "selectedMentalStatusElements": ["foo"]
                                }
                            },
                            "respiratory": {
                                "quickClickValue": "foo",
                                "constitutional": {
                                    "selectedExamElements": ["foo"],
                                    "vitalsSelected": true,
                                    "selectedVitals": ["bar"]
                                },
                                "ent": {
                                    "selectedExamElements": ["foo"]
                                },
                                "neck": {
                                    "selectedExamElements": ["foo"]
                                },
                                "respiratory": {
                                    "selectedExamElements": ["foo"]
                                },
                                "cardiovascular": {
                                    "selectedExamElements": ["foo"]
                                },
                                "lymphatic": {
                                    "selectedExamElements": ["foo"]
                                },
                                "musculoskeletal": {
                                    "selectedExamElements": ["foo"]
                                },
                                "extremites": {
                                    "selectedExamElements": ["foo"]
                                },
                                "skin": {
                                    "selectedExamElements": ["foo"]
                                },
                                "neurologic": {
                                    "selectedExamElements": ["foo"]
                                }
                            },
                            "skin": {
                                "quickClickValue": "foo",
                                "constitutional": {
                                    "selectedExamElements": ["foo"],
                                    "vitalsSelected": true,
                                    "selectedVitals": ["bar"]
                                },
                                "eyes": {
                                    "selectedExamElements": ["foo"]
                                },
                                "ent": {
                                    "selectedExamElements": ["foo"]
                                },
                                "neck": {
                                    "selectedExamElements": ["foo"]
                                },
                                "cardiovascular": {
                                    "selectedExamElements": ["foo"],
                                    "selectedExaminationOfElements": ["foo"]
                                },
                                "gastrointestinal": {
                                    "selectedExamElements": ["foo"]
                                },
                                "lymphatic": {
                                    "selectedExamElements": ["foo"]
                                },
                                "extremites": {
                                    "selectedExamElements": ["foo"]
                                },
                                "skin": {
                                    "selectedExamElements": ["foo"],
                                    "selectedPelvicExamElements": ["foo"],
                                    "selectedEccrineElements": ["foo"]
                                },
                                "neurologic": {
                                    "selectedExamElements": ["foo"]
                                }
                            }
                        }
                    }
                }
            },
            "medicalDecisionMaking": {
              "isMdmRequired": true,
              "diagnosesOptions": {
                "selfLimitedMinorRating": 2,
                "estProblemImprovedRating": 3,
                "trackedEstProblemWorseningRating": 1,
                "newProblemNoWorkupPlannedRating": 3,
                "trackedNewProblemWorkupPlannedRating": 2
              },
              "dataReviewed": {
                "reviewClinicalTests": true,
                "reviewRadiologyTests": true,
                "reviewMedicineTests": true,
                "physicianDiscussion": false,
                "obtainOldRecords": true,
                "reviewOldRecords": true,
                "independentVisualization": true
              },
              "risk": {
                "selectedRiskQuickClick": "details",
                "diagnosticProceduresOrdered": {
                  "selectedMinimalElements": ['ekgEEG'],
                  "selectedLowElements": [],
                  "selectedModerateElements": ["deepNeedle", "obtainFluid"],
                  "selectedHighElements": []
                },
                "managementOptionsSelected": {
                  "selectedMinimalElements": [],
                  "selectedLowElements": [],
                  "selectedModerateElements": [],
                  "selectedHighElements": []
                },
                "presentingProblems": {
                  "selectedMinimalElements": [],
                  "selectedLowElements": [],
                  "selectedModerateElements": ["undiagnosedProblem"],
                  "selectedHighElements": []
                }
              }
            },
            "timeBasedCoding": {
                "visitType": "foo",
                "patientType": "bar",
                "revealTotalFaceTime": true,
                "moreThanHalfCounseling": false,
                "documentationDescribesContent": true,
                "totalFaceTime": null,
                "calculatedCode": "foo"
            },
            "criticalCareServices": {
                "totalTime": 65
            },
            "procedures": {
                "listedProcedures": [
                    {
                      "procedureType": "EKG",
                      "dynamicObjectId": 1,
                      "procedureQuestions": [
                        {
                            "dynamicObjectId": 1,
                            "procedureAnswer": true
                        },
                        {
                            "dynamicObjectId": 3,
                            "procedureAnswer": true
                        },
                        {
                          "dynamicObjectId": 5,
                          "procedureAnswer": false
                        }
                      ],
                      "additionalInfo": "bar"
                    },
                    {
                      "procedureType": "Lab",
                      "dynamicObjectId": 3,
                      "procedureQuestions": [
                        {
                          "dynamicObjectId": 1,
                          "procedureAnswer": true
                        },
                        {
                          "dynamicObjectId": 2,
                          "procedureAnswer": false
                        },
                        {
                          "dynamicObjectId": 3,
                          "procedureAnswer": true
                        },
                        {
                          "dynamicObjectId": 4,
                          "procedureAnswer": true
                        }
                      ]
                    }
                ]
            },
            "documentationElements": {
                "noIssues": false,
                "elements": ['Incident To does not appear to meet guidelines', 'Medical record appears to have cloned elements'],
                "other": "foo"
            },
            "auditCodes": {
                "diagnosisCodes": [
                    {
                        "reported": "foo",
                        "audited": "bar",
                        "dynamicObjectId": 3,
                        "override": {
                            "scoring": "foo",
                            "reason": "bar"
                        }
                    },
                    {
                        "reported": "15645",
                        "audited": null,
                        "dynamicObjectId": 4,
                        "override": {
                            "scoring": "foo",
                            "reason": "bar"
                        }
                    }
                ],
                "hcpcsCodes": [
                    {
                        "reported": {
                          "code": "bar",
                          "mod1": "foo",
                          "mod2": "foo",
                          "mod3": "foo",
                          "unit": "bar",
                          "rvu": "foo",
                          "map": []
                        },
                        "audited": {
                          "code": "bar",
                          "mod1": "foo",
                          "mod2": "foo",
                          "mod3": "foo",
                          "unit": "bar",
                          "rvu": "foo",
                          "map": []
                        },
                        "override": {
                            "scoring": "foo",
                            "reason": "bar"
                        }
                    }
                ]
            }
        },

        "auditBoxDynamicFormData": {
          "patientData": {
            "customFormElements": {
              "fields": [
                {
                  "fieldId": 1,
                  "fieldType": 1,
                  "label": "foo"
                },
                {
                  "fieldId": 2,
                  "fieldType": 2,
                  "label": "Enter your darkest secrets"
                }
              ]
            }
          },
          "auditHistory": {
            "customFormElements": {
              "fields": [
                {
                  "fieldId": 3,
                  "fieldType": 1,
                  "label": "foo"
                },
                {
                  "fieldId": 4,
                  "fieldType": 2,
                  "label": "Tell us about yourself"
                }
              ]
            }
          },
          "examination": {
            "pe95": {
              "customFormElements": {
                "fields": [
                  {
                    "fieldId": 5,
                    "fieldType": 2,
                    "label": "Some field label"
                  },
                  {
                    "fieldId": 6,
                    "fieldType": 2,
                    "label": "Tell us about yourself"
                  }
                ]
              }
            },
            "pe97": {
              "customFormElements": {
                "fields": [
                  {
                    "fieldId": 7,
                    "fieldType": 2,
                    "label": "Some field label"
                  },
                  {
                    "fieldId": 8,
                    "fieldType": 2,
                    "label": "This is another label"
                  }
                ]
              }
            }
          },
          "medicalDecisionMaking": {
            "customFormElements": {
              "fields": [
                {
                  "fieldId": 9,
                  "fieldType": 1,
                  "label": "We're all crazy"
                },
                {
                  "fieldId": 10,
                  "fieldType": 2,
                  "label": "And misunderstood"
                }
              ]
            }
          },
          "timeBasedCoding": {
            "customFormElements": {
              "fields": [
                {
                  "fieldId": 10,
                  "fieldType": 1,
                  "label": "We're all crazy"
                },
                {
                  "fieldId": 11,
                  "fieldType": 2,
                  "label": "And misunderstood"
                },
                {
                  "fieldId": 12,
                  "fieldType": 2,
                  "label": "Chhese"
                }
              ]
            }
          },
          "criticalCareServices": {
            "customFormElements": {
              "fields": [
                {
                  "fieldId": 10,
                  "fieldType": 1,
                  "label": "BYU football is terrible"
                },
                {
                  "fieldId": 11,
                  "fieldType": 2,
                  "label": "And misunderstood"
                }
              ]
            }
          },
          "procedures": {
            "customFormElements": {
              "fields": [
                {
                  "fieldId": 10,
                  "fieldType": 1,
                  "label": "An additional procedures field"
                },
                {
                  "fieldId": 11,
                  "fieldType": 2,
                  "label": "And misunderstood"
                }
              ]
            },
            "listedProcedures": [
              {
                "procedureType": 'EKG',
                "dynamicObjectId": 1,
                "procedureQuestions": [
                  {
                    "question": "Order / Indication",
                    "dynamicObjectId": 1
                  },
                  {
                    "question": "Interpretation",
                    "dynamicObjectId": 2
                  },
                  {
                    "question": "Signed tracing",
                    "dynamicObjectId": 3
                  },
                  {
                    "question": "Verbal order signed",
                    "dynamicObjectId": 4
                  },
                  {
                    "question": "Comparison documented when available for Medicare",
                    "dynamicObjectId": 5
                  }
                ]
              },
              {
                "procedureType": 'Injection / Immunization',
                "dynamicObjectId": 2,
                "procedureQuestions": [
                  {
                    "question": "foo",
                    "dynamicObjectId": 1
                  },
                  {
                    "question": "bar",
                    "dynamicObjectId": 2
                  }
                ]
              },
              {
                "procedureType": 'Lab',
                "dynamicObjectId": 3,
                "procedureQuestions": [
                  {
                    "question": "Order Indication",
                    "dynamicObjectId": 1
                  },
                  {
                    "question": "Results",
                    "dynamicObjectId": 2
                  },
                  {
                    "question": "Clia Waived",
                    "dynamicObjectId": 3
                  },
                  {
                    "question": "Phlebotomy",
                    "dynamicObjectId": 4
                  }
                ]
              },
              {
                "procedureType": 'Radiology',
                "dynamicObjectId": 4,
                "procedureQuestions": [
                  {
                    "question": "foo",
                    "dynamicObjectId": 1
                  },
                  {
                    "question": "bar",
                    "dynamicObjectId": 2
                  }
                ]
              },
              {
                "procedureType": 'Other',
                "dynamicObjectId": 5,
                "procedureQuestions": [
                  {
                    "question": "foo",
                    "dynamicObjectId": 1
                  },
                  {
                    "question": "bar",
                    "dynamicObjectId": 2
                  }
                ]
              }
            ]
          },
          "documentationElements": {
            "elements": [
              "Handwritten notes are not legible",
              "Incident To does not appear to meet guidelines",
              "Medical record includes inconsistent documentation",
              "Medical record appears to have cloned elements",
              "Ink spilled all over sections"
            ],
            "customFormElements": {
              "fields": [
                {
                  "fieldId": 12,
                  "fieldType": 1,
                  "label": "Doc Element Label"
                },
                {
                  "fieldId": 13,
                  "fieldType": 2,
                  "label": "And misunderstood"
                }
              ]
            }
          }
        }
    }
  }

});
