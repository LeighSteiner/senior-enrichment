const db = require('./db/index');

const Campus = require('./db/models/campus');
const User = require('./db/models/user');

const Campuses =  [
{name: 'Luna',
image: 'https://unsplash.it/200',
motto: 'At the Top of the Well'
}, 
{name: 'Ares', 
image:'https://unsplash.it/200',
motto: 'Fight for Knowledge'
}, 
{name: 'Europa', 
image:'https://unsplash.it/200',
motto: 'A Sea Of Script'
}, 
{name: 'Ganymede',
image: 'https://unsplash.it/200',
motto: 'Magnetic and Welcoming'
}
];

const Users = [
{
	name: 'Friday Jones', 
	email:'homebody@BotanyBay.com',
	campusId: 1
},
{
	name: 'Gillian Boardman', 
	email:'grokIt@TheNest.edu',
	campusId: 1
},
{
	name: 'Podkayne Fries', 
	email:'spaceBaby@Creche.com',
	campusId: 1
}, 
{
	name: 'Halo Jones', 
	email:'goingOut@pirateQueen.org',
	campusId: 2
}, 
{
	name: 'Carmencita Ibanez', 
	email:'CIbanez@royalSpaceNavy.gov',
	campusId: 2
}, 
{
	name: 'Ishtar Hardy', 
	email:'director@tertiusrejeuve.net',
	campusId: 2
}, 
{
	name: 'Toy Molto', 
	email:'halo5ever@claraPandy.com', 
	campusId: 3
}, 
{
	name: 'Lilith Iyapo', 
	email:'frontdesk@newEarth.edu',
	campusId: 3
}, 
{
	name: 'Dora Brandon', 
	email:'rangyLil@newBeginnings.net',
	campusId: 3
}, 
{
	name: 'Alicia Kew', 
	email:'heart@gestalt.edu',
	campusId: 4
}, 
{
	name: 'Naomi Nagata', 
	email:'rememberTheCant@Roci.gov',
	campusId: 4
},

{
	name: 'Laurie Juspeczyk', 
	email:'silkspectre2@aol.com',
	campusId: 4
}

];


const seed = () =>
  Promise.all(Campuses.map(campus =>
    Campus.create(campus))
  )
  .then(() =>
  Promise.all(Users.map(user =>
    User.create(user))
  ));



 const main = () => {
 console.log('Syncing db...');
  db.sync({ force: true })
    .then(() => {
      console.log('Seeding databse...');
      return seed();
    })
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};

main();
