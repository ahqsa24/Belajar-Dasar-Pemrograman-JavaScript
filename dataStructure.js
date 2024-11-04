const employees = [
    {
      name: 'Fulan',
      email: 'fulan@dicoding.com',
      joinYear: 2020,
    },
  ];

    function addEmployee(name, email, joinYear) {
        const employee = { name, email, joinYear };
        employees.push(employee);
    }

    addEmployee('Adid', 'adid@gmail.com', 2020);
    addEmployee('Indra', 'indra@gmail.com', 2024);

    console.log(employees);