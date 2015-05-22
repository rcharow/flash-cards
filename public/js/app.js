var app = angular.module('flashCards', []);

app.filter('cheat', function(){
    return function(answers){
        return answers.filter(function(anAnswer){
            return anAnswer.correct
        })
    }
})