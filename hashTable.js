let user = {
    age: 54,
    name: 'Dadabhau',
    magic: true,
    scream: function () {
        console.log('ahhhhhh!');
    }

}
user.age //O(1)
user.spell = 'test message';//O(1)
user.scream(); //O(1)
