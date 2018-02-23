export default [
  {
    "id": 1,
    "type": "facility_project",
    "attributes": {
      "projectName": "First Facility Project",
      "startDate": "04/18/1985",
      "endDate": "05/18/1985",
      "totalEncounters": "8",
      "totalAssignedEncounters": "7",
      "totalInProgressEncounters": "4",
      "totalCompletedEncounters": "4",
      "projectStatus": "audit"
    },
    "relationships": {
      "facilityEncounters": {
        "data": [
          { "type": "facility_encounter", "id": 1 },
          { "type": "facility_encounter", "id": 2 },
          { "type": "facility_encounter", "id": 3 },
          { "type": "facility_encounter", "id": 4 },
          { "type": "facility_encounter", "id": 5 }
        ]
      }
    }
  },
  {
    "id": 2,
    "type": "facility_project",
    "attributes": {
      "projectName": "Second Facility Project",
      "startDate": "04/18/1986",
      "endDate": "05/18/1986",
      "totalEncounters": "9",
      "totalAssignedEncounters": "4",
      "totalInProgressEncounters": "6",
      "totalCompletedEncounters": "2",
      "projectStatus": "qa"
    },
    "relationships": {
      "facilityEncounters": {
        "data": [
          { "type": "facility_encounter", "id": 1 },
          { "type": "facility_encounter", "id": 2 },
          { "type": "facility_encounter", "id": 3 },
          { "type": "facility_encounter", "id": 4 },
          { "type": "facility_encounter", "id": 5 }
        ]
      }
    }
  },
  {
    "id": 3,
    "type": "facility_project",
    "attributes": {
      "projectName": "Third Facility Project",
      "startDate": "04/18/1987",
      "endDate": "05/18/1987",
      "totalEncounters": "10",
      "totalAssignedEncounters": "4",
      "totalInProgressEncounters": "2",
      "totalCompletedEncounters": "2",
      "projectStatus": "audit"
    },
    "relationships": {
      "facilityEncounters": {
        "data": [
          { "type": "facility_encounter", "id": 1 },
          { "type": "facility_encounter", "id": 2 },
          { "type": "facility_encounter", "id": 3 },
          { "type": "facility_encounter", "id": 4 },
          { "type": "facility_encounter", "id": 5 }
        ]
      }
    }
  },
  {
    "id": 4,
    "type": "facility_project",
    "attributes": {
      "projectName": "Fourth Facility Project",
      "startDate": "04/18/1988",
      "endDate": "05/18/1988",
      "totalEncounters": "5",
      "totalAssignedEncounters": "4",
      "totalInProgressEncounters": "1",
      "totalCompletedEncounters": "1",
      "projectStatus": "qa"
    },
    "relationships": {
      "facilityEncounters": {
        "data": [
          { "type": "facility_encounter", "id": 1 },
          { "type": "facility_encounter", "id": 2 },
          { "type": "facility_encounter", "id": 3 },
          { "type": "facility_encounter", "id": 4 },
          { "type": "facility_encounter", "id": 5 }
        ]
      }
    }
  },
  {
    "id": 5,
    "type": "facility_project",
    "attributes": {
      "projectName": "Fifth Facility Project",
      "startDate": "04/18/1989",
      "endDate": "05/18/1989",
      "totalEncounters": "12",
      "totalAssignedEncounters": "4",
      "totalInProgressEncounters": "6",
      "totalCompletedEncounters": "2",
      "projectStatus": "audit"
    },
    "relationships": {
      "facilityEncounters": {
        "data": [
          { "type": "facility_encounter", "id": 1 },
          { "type": "facility_encounter", "id": 2 },
          { "type": "facility_encounter", "id": 3 },
          { "type": "facility_encounter", "id": 4 },
          { "type": "facility_encounter", "id": 5 }
        ]
      }
    }
  }
]
