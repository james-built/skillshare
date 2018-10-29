
exports.seed = function(knex, Promise) {
  return knex('projects').del()
    .then(function () {
      return knex('projects').insert([
        {id: 2001, user_id: 1001, name: 'Battle Bot Competition', description: 'Building a robot for an upcoming battlebot competition', image: 'https://media.wired.com/photos/5ae226425581121251d2feb0/master/pass/battlebots-598125354.jpg', my_skills_equipment: 'Soldering, PCB Design', required_skills_equipment: 'Welding, CAD, 3D Scanner'},
        {id: 2002, user_id: 1002, name: '', description: '', image: '', my_skills_equipment: '', required_skills_equipment: ''},
        {id: 2003, user_id: 1003, name: '', description: '', image: '', my_skills_equipment: '', required_skills_equipment: ''},
        {id: 2004, user_id: 1004, name: '', description: '', image: '', my_skills_equipment: '', required_skills_equipment: ''}        
      ]);
    });
};
