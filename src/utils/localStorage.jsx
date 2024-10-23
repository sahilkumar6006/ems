
  const employees = [
    {
      "id": 1,
      "email": "sahil@me.com",
      "password": "123",
      "taskCount": {
        "total": 4,
        "active": 2,
        "newTask": 1,
        "failed": 1,
        "completed": 1
      },
      "tasks": [
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "title": "Prepare Report",
          "description": "Prepare the weekly sales report",
          "date": "2024-10-20",
          "category": "Reporting"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Update Client Database",
          "description": "Add new clients to the CRM system",
          "date": "2024-10-18",
          "category": "Data Entry"
        },
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Attend Team Meeting",
          "description": "Participate in the monthly team meeting",
          "date": "2024-10-21",
          "category": "Meetings"
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "password123",
      "tasks": [
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "title": "Design New Feature",
          "description": "Work on the design of the new app feature",
          "date": "2024-10-22",
          "category": "Development"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Fix Bugs",
          "description": "Resolve reported bugs in the system",
          "date": "2024-10-15",
          "category": "Bug Fixes"
        },
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Code Review",
          "description": "Review code submitted by team members",
          "date": "2024-10-23",
          "category": "Development"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "title": "Client Presentation",
          "description": "Prepare and present project updates to the client",
          "date": "2024-10-18",
          "category": "Client Interaction"
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "password123",
      "taskCount": {
        "total": 4,
        "active": 2,
        "newTask": 1,
        "failed": 1,
        "completed": 1
      },
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Test New API",
          "description": "Perform testing on the newly developed API",
          "date": "2024-10-20",
          "category": "Testing"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Write Documentation",
          "description": "Document the features of the latest release",
          "date": "2024-10-14",
          "category": "Documentation"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "title": "Server Setup",
          "description": "Set up a new server for testing",
          "date": "2024-10-17",
          "category": "Infrastructure"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "title": "Client Feedback",
          "description": "Analyze client feedback from the latest sprint",
          "date": "2024-10-21",
          "category": "Client Interaction"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "title": "Security Audit",
          "description": "Perform a security audit on the application",
          "date": "2024-10-25",
          "category": "Security"
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "password123",
      "taskCount": {
        "total": 4,
        "active": 2,
        "newTask": 1,
        "failed": 1,
        "completed": 1
      },
      "tasks": [
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Employee Onboarding",
          "description": "Assist in onboarding new employees",
          "date": "2024-10-10",
          "category": "HR"
        },
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Performance Review",
          "description": "Conduct performance reviews for the team",
          "date": "2024-10-22",
          "category": "HR"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "title": "Organize Workshop",
          "description": "Organize a workshop on soft skills",
          "date": "2024-10-28",
          "category": "Training"
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "password123",
      "tasks": [
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Update Inventory",
          "description": "Update the inventory with new stock",
          "date": "2024-10-12",
          "category": "Operations"
        },
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Supplier Meeting",
          "description": "Meet with suppliers for contract negotiations",
          "date": "2024-10-24",
          "category": "Logistics"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "title": "Delivery Tracking",
          "description": "Track deliveries of goods",
          "date": "2024-10-23",
          "category": "Operations"
        }
      ]
    }
  ]


  const admin = [
       {
        "id": 1,
        "email": "admin@example.com",
        "password": "password123"
      }
  ]


  export const  setLocalStorage  = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
  } 

  export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));
    return {employees, admin}; 
  } 