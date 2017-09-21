// Wait for PhoneGap to load
document.addEventListener("deviceready", onDeviceReady, false);

// PhoneGap is ready
function onDeviceReady() {
	$( "#qrScanBtn" ).click(function() {
  		doScan();
	});
	StatusBar.overlaysWebView(false);
}



function doScan(){
	cordova.plugins.barcodeScanner.scan(
		function (result) {
			alert("We got a barcode\n" +
				"Result: " + result.text + "\n" +
				"Format: " + result.format + "\n" +
				"Cancelled: " + result.cancelled);
	  	},
	  	function (error) {
			alert("Scanning failed: " + error);
	  	}
	);
}
'use strict';
var app = angular.module('app', ['pascalprecht.translate']);
  app.config(function ($translateProvider) {
    $translateProvider.fallbackLanguage('en');
    $translateProvider.registerAvailableLanguageKeys(['en', 'es', 'it' ],{
      'en_*':'en',
      'es_*':'es',
			'it_*':'it'

    })
    $translateProvider.translations('en', {
      BUTTON_LANG_EN:"English",
      BUTTON_LANG_ES:"Spanish",
			BUTTON_LANG_IT:"Italian",
			LOGIN:"Login",
			REGISTER:"Register",
			SOCIAL_MEDIA:"Social Media",
			DIGITAL_ART:"Digital Art",
			SCIENCE:"Science",
			HISTORY:"History",
			CREATE_POST:"Create Post",
			REPLAY_POST:"Reply Post",
			ADD:"Add",
			REPLAY:"Reply",
			FIRST_NAME:"First Name: ",
			LAST_NAME:"Last Name: ",
			OCUPATION:"Ocupation: ",
			PASSWORD:"Password: ",
			EDIT:"Edit",
			NAME:"Name: ",
			EDIT_USER:"Edit User",
			BLOG_LIST:"Blog List",
			VIEW_POST:"User Posts",







    });
    $translateProvider.translations('es', {
      BUTTON_LANG_EN:"Inglés",
      BUTTON_LANG_ES:"Español",
			BUTTON_LANG_IT:"Italiano",
			LOGIN:"Entrar",
			REGISTER:"Registrar",
			SOCIAL_MEDIA:"Redes Sociales",
			DIGITAL_ART:"Arte Digital",
			SCIENCE:"Ciencia",
			HISTORY:"Historia",
			CREATE_POST:"Crear Mensaje",
			REPLAY_POST:"Responder Mensaje",
			ADD:"Añadir",
			REPLAY:"Responder",
			FIRST_NAME:"Primer Nombre: ",
			LAST_NAME:"Apellido: ",
			OCUPATION:"Ocupación: ",
			PASSWORD:"Contraseña: ",
			EDIT:"Editar",
			NAME:"Nombre",
			EDIT_USER:"Editar Usuaje",
			BLOG_LIST:"Lista de Blogs",
			VIEW_POST:"Puestos de Usuario",




    });
    $translateProvider.translations('it', {
      QUESTION:"entrar",
      BUTTON_LANG_EN:"Inglese",
      BUTTON_LANG_ES:"Spagnolo",
			BUTTON_LANG_IT:"Italiano",
			LOGIN:"Accesso",
			REGISTER:"Registrare",
			SOCIAL_MEDIA:"I social media",
			DIGITAL_ART:"Arte digitale",
			SCIENCE:"Scienza",
			HISTORY:"Storia",
			CREATE_POST:"Crea post",
			REPLAY_POST:"Risposta post",
			ADD:"Inserisci",
			REPLAY:"Rispondere",
			FIRST_NAME:"Primo Nome: ",
			LAST_NAME:"Ultimo Nome: ",
			OCUPATION:"Occupazione: ",
			PASSWORD:"Parola d'ordine: ",
			EDIT:"Modifica",
			NAME:"Nome",
			EDIT_USER:"Modifica Utente",
			BLOG_LIST:"Lista dei Blog",
			VIEW_POST:"Messaggi Utente",



    });
    $translateProvider.useSanitizeValueStrategy('escape');
    $translateProvider.preferredLanguage('en');

  });
  app.controller('Ctrl',['$scope', '$translate', function ($scope, $translate) {
    $scope.changeLanguage = function(key){
      $translate.use(key);
    };
  }]);
