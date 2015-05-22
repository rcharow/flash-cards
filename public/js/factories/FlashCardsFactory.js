app.factory('FlashCardsFactory',function($http){

    return {
        getFlashCards: function(category){
            var url = '/cards'
           
            var config = {}
            if(category)
                config.params = {category:category}

            return $http.get(url,config)
            .success(function(response){
                return response.data
            })
            .error(function(response,status){
                console.log('Error',status)
            })

        }
    }
})