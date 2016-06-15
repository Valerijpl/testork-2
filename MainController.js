app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'Top 4 questions';
  $scope.promo = 'The most popular questions this month.';
 $scope.products = [
  {
    name: 'How are you ?',
    pubdate: new Date('2014', '03', '08'),
    likes: 5,
    answers: 0
  },
  {
    name: 'Where are you from ?',
    pubdate: new Date('2013', '08', '01'),
    likes: 3,
    answers: 0
  },
  {
    name: 'How old are you?',
    pubdate: new Date('2013', '08', '01'),
    likes: 2,
    answers:1
  },
  {
    name: 'What is your name ?',
    pubdate: new Date('2013', '08', '01'),
    likes: 56,
    answers: 1
  }
]
}]);
