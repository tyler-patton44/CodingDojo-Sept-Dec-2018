x = [ [5,2,3], [10,8,9] ] 
students = [
    {'first_name':  'Michael', 'last_name' : 'Jordan'},
    {'first_name' : 'John', 'last_name' : 'Rosales'}
]
sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
z = [ {'x': 10, 'y': 20} ]

# #1.1)
x[1][0] = 15
print(x)

# #1.2)
students[0]['last_name'] = 'Bryant'
print(students)

#1.3)
sports_directory['soccer'][0] = 'Andres'
print(sports_directory)

#1.4)
z[0]['y'] = 30
print(z)

#2.)
def printOut():
    people = [

        {'first_name':  'Michael', 'last_name' : 'Jordan'},
        {'first_name' : 'John', 'last_name' : 'Rosales'},
        {'first_name' : 'Mark', 'last_name' : 'Guillen'},
        {'first_name' : 'KB', 'last_name' : 'Tonel'}
]
    for i in range(0,len(people)):
        print('first_name - ',people[i]['first_name'],',','last_name - ',people[i]['last_name'])

printOut()

#3.)
people = [

        {'first_name':  'Michael', 'last_name' : 'Jordan'},
        {'first_name' : 'John', 'last_name' : 'Rosales'},
        {'first_name' : 'Mark', 'last_name' : 'Guillen'},
        {'first_name' : 'KB', 'last_name' : 'Tonel'}
]
def sortThis(x, y):
    for i in range(0,len(x)):
        print(people[i][y])

sortThis(people, 'first_name')

#4.)
dojo = {
   'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
   'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}
def dojoLocation(dict):
    for i in dict:
        name = i.upper()
        print(len(dict[i]), name)
        for x in dict[i]:
            print(x)
        print("")
        
dojoLocation(dojo)