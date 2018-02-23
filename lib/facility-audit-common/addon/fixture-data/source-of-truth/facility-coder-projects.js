export default [
  {
    "type": "facility_coder_project",
    "id": 1,
    "attributes": {
      "coderName": "John Doe",
      "projectName": "First Facility Project",
      "coderSpecialty": "Specialty 1",
      "endDate": "05/18/1985",
      "projectStatus": "audit",
      "facilityName": "Stanford Hospital",
      "totalEncounters": "8",
      "totalAssignedEncounters": "7",
      "totalInProgressEncounters": "4",
      "totalCompletedEncounters": "4"
    },
    "relationships": {
      "facilityProject": {
        "data": { "type": "facility_project", "id": 1 }
      },
      "facilityCoder": {
        "data": { "type": "facility_coder", "id": 1 }
      }
    }
  },
  {
    "type": "facility_coder_project",
    "id": 2,
    "attributes": {
      "coderName": "Jane Doe",
      "projectName": "Second Facility Project",
      "coderSpecialty": "Specialty 2",
      "endDate": "05/18/1986",
      "projectStatus": "qa",
      "facilityName": "Stanford Hospital",
      "totalEncounters": "9",
      "totalAssignedEncounters": "4",
      "totalInProgressEncounters": "6",
      "totalCompletedEncounters": "2"
    },
    "relationships": {
      "facilityProject": {
        "data": { "type": "facility_project", "id": 2 }
      },
      "facilityCoder": {
        "data": { "type": "facility_coder", "id": 2 }
      }
    }
  },
  {
    "type": "facility_coder_project",
    "id": 3,
    "attributes": {
      "coderName": "John Stocktone",
      "projectName": "Third Facility Project",
      "coderSpecialty": "Specialty 1",
      "endDate": "05/18/1987",
      "projectStatus": "audit",
      "facilityName": "Dr Nick's Clinic",
      "totalEncounters": "10",
      "totalAssignedEncounters": "4",
      "totalInProgressEncounters": "2",
      "totalCompletedEncounters": "2"
    },
    "relationships": {
      "facilityProject": {
        "data": { "type": "facility_project", "id": 3 }
      },
      "facilityCoder": {
        "data": { "type": "facility_coder", "id": 3 }
      }
    }
  },
  {
    "type": "facility_coder_project",
    "id": 4,
    "attributes": {
      "coderName": "Karl Malone",
      "projectName": "Fourth Facility Project",
      "coderSpecialty": "Specialty 1",
      "endDate": "05/18/1988",
      "projectStatus": "qa",
      "facilityName": "American Fork Hospital",
      "totalEncounters": "5",
      "totalAssignedEncounters": "4",
      "totalInProgressEncounters": "1",
      "totalCompletedEncounters": "1"
    },
    "relationships": {
      "facilityProject": {
        "data": { "type": "facility_project", "id": 4 }
      },
      "facilityCoder": {
        "data": { "type": "facility_coder", "id": 4 }
      }
    }
  },
  {
    "type": "facility_coder_project",
    "id": 5,
    "attributes": {
      "coderName": "Bryon Russell",
      "projectName": "Fifth Facility Project",
      "coderSpecialty": "Specialty 1",
      "endDate": "05/18/1989",
      "projectStatus": "audit",
      "facilityName": "Happy Fun Time Surgery",
      "totalEncounters": "12",
      "totalAssignedEncounters": "4",
      "totalInProgressEncounters": "6",
      "totalCompletedEncounters": "2"
    },
    "relationships": {
      "facilityProject": {
        "data": { "type": "facility_project", "id": 5 }
      },
      "facilityCoder": {
        "data": { "type": "facility_coder", "id": 5 }
      }
    }
  }
];
