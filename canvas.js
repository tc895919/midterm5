var homework = document.querySelector('homework');
homework.width = window.innerWidth;
homework.height = window.innerHeight;

var c = homework.getContext('2d');

c.fillStyle="pink";
c.fillRect(20,20,20,20);
c.fillStyle="purple";
c.fillRect(30,30,30,30);
c.fillStyle="violet";
c.fillRect(40,40,40,40);
