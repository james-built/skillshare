
exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {id: 1001, username: 'Tim', name: 'Tim', email: 'tim@example.com', profile_picture: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', skills: 'Drone Pilot, PCB Design, Soldering'},
        {id: 1002, username: 'Sarah', name: 'Sarah', email: 'sarah@example.com', profile_picture: 'https://images.pexels.com/photos/157741/woman-confident-happy-confident-woman-157741.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', skills: 'Circuitry Design, Horticulture, Project Management'},
        {id: 1003, username: 'Angela', name: 'Angela', email: 'angela@example.com', profile_picture: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', skills: 'CAD, Animal Welfare Specialist, Data Visualisation'},
        {id: 1004, username: 'Paul', name: 'Paul', email: 'paul@example.com', profile_picture: 'https://images.pexels.com/photos/462680/pexels-photo-462680.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', skills: 'Carpentry, Rapid Prototyping, Marketing'}
      ]);
    });
};
