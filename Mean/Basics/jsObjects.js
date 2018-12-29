let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];
function pips(arr){
    for(var x in arr){
        console.log("Name: "+arr[x].name+" Cohort: "+arr[x].cohort);
    }
    // for(var i=0; i<arr.length; i++){
    //     console.log("Name: "+arr[i].name+" Cohort: "+arr[i].cohort);
    // }
    return;
}
pips(students);

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

 function jobSite(info){
     for (var pip in info){
        console.log(pip.toUpperCase()+":")
         for(var user in info[pip]){
             console.log(user+" - "+info[pip][user]['first_name'].toUpperCase());
         }
     }
 }
 jobSite(users);