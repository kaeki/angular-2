'use strict';

angular
  .module('chatApp')
    .factory('chatService', function () {
    	//DADAA ja muita chatservicen functioita ja parametreja kutsutaan vain chatServicen nimelleä, esim chatService.user
    		var dada= {
    			// 'Dadaan' voi tallentaa ihan muuttujia tai jopa objekteja, kaikki käy
    			user: {}
    		};
    		//Tällä metodilla asetetaan arvoja muuttujalle dadan sisällä
    		//HOX kaikille dadan muuttujille omat funktiot
    		dada.setUser = function(parametri){
    			this.muuttuja = parametri;
    		};
    		return dada;
    		// Returnilla palautellaan asioita mitä halutaan esim. dada.muuttuja
    });