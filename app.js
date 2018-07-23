var powerThoughts = [
"Mirrors can’t talk, lucky for you they can’t laugh either",
"Violence won’t solve anything…But it sure makes me feel good.",
"If you’ve never met the devil in the road of life, its because you’re both heading in the same direction",
"Oh… I didn’t tell you… Then It must be none of your business",
"Sure I’ll help you out…the same way you came in.",
"If I promise to miss you, will you go away?",
"cjvfekbh efgvvnyg ofhvfjk hrg8b gfeun",
"nfffofjbvyrtfvbfhbithkkonrgvbhtmni8 yurfbhsfj g9 ynb",
"vribhvruhjbjguhbjegihfhemjnhbugfjiounhkm nfdifmvkhuveh",
"fghtukdfj8rgrfbhvyfghb8gryhb4tj90ubfuinvio3rd7gc",
"hfeugvjrhfbijwejhwjrhbkh7gyttjk0yu9ibvfycblhknh"
]

var content = document.getElementById('content');

(function() {
	content.innerHTML= powerThoughts[Math.floor((Math.random() * 10) + 1)];
}());
function generate() {
	content.innerHTML = powerThoughts[Math.floor((Math.random() * 10) + 1)];
}