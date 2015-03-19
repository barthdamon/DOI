// DOI1 Landing JAVASCRIPT


// Firebase Functions

var ref= new Firebase("https://dawn-of-industry.firebaseio.com/visitors");

var userName;
var timerStart;
var timerEnd;
var hesitationTime;
var selfCust;
var officeSel;
var industrySel;
var compName;
var compSlogan;
var regView;
var legView;
var userEmail;

var experience;
var experience_num;

var firstPhase=false;
var modalPhase=false;
var finalPhase=false;

function setTimer(){
	timerStart=new Date().getTime();
}
function endTimer(){
	timerEnd=new Date().getTime();
	hesitationTime=timerEnd-timerStart;
}


function sendData(){
	ref.push({
		experience: experience_num,
	    email: userEmail,
	    legalview: legView,
	    regview: regView,
	    selfcust: selfCust,
	    industrysel: industrySel,
	    officesel: officeSel,
	    compname: compName,
	    compslogan: compSlogan,
	    hesitation: hesitationTime,
	    username: userName,
	    firstphase: firstPhase,
	    modalphase: modalPhase,
	    finalphase: finalPhase
  	});
}



// DOC Ready Interactions

$(document).ready(function(){

	//General css manipulation
		$('#contBtn').prop('disabled', true);
		$('#downloadBtn').prop('disabled', true);
		$('#compName').val('');
		$('#compSlogan').val('');
		$('#userName').val('');
		$('#compEmail').val('');

//Experience Dependant

		$('#custRemove').remove();
		$('#contBtn').prop('disabled', false);
		$('#contBtn').attr('data-target','#legModal');
		experience_num=1;
		selfCust=false;
		regView=false;
		legView=true;

/*	if((experience>.25)&&(experience<=.5)){
		$('#custRemove').remove();
		$('#contBtn').prop('disabled', false);
		$('#contBtn').attr('data-target','#regModal');
		experience_num=2;
		selfCust=false;
		regView=true;
		legView=false;
	}
	if((experience>.5)&&(experience<=.75)){
		$('#contBtn').attr('data-target','#legModal');
		experience_num=3;
		selfCust=true;
		regView=false;
		legView=true;
	}
	if(experience>.75){
		$('#contBtn').attr('data-target','#regModal');
		experience_num=4;	
		selfCust=true;
		regView=true;
		legView=false;
	}
*/

	// Button Enabling
	$('.customizations').change(function()	{
		if (($('#compName').val()!='')&&($('#compSlogan').val()!='')&&($('#industrySel').val()!="default")&&($('#officeSel').val()!="default")){
			$('#contBtn').prop('disabled', false);
		}
	});

	$('.finalSignup').change(function()	{
		if (($('#userName').val()!='')&&($('#userEmail').val()!='')&&($('#institutionSel').val()!="default")) {
			$('#downloadBtn').prop('disabled', false);
		}
	});

	// Collecting input values
	$('#userName').change(function()	{
		userName=$(this).val();
	});
	$('#userEmail').change(function()	{
	userEmail=$(this).val();
	});
	$('#compSlogan').change(function()	{
		compSlogan=$(this).val();
	});
	$('#compName').change(function()	{
		compName=$(this).val();
	});
	$('#officeSel').change(function()	{
		officeSel=$(this).val();
	});	
	$('#industrySel').change(function()	{
		industrySel=$(this).val();
	});

	// Marking Phase Completions
	$('#contBtn').click(function(){
		firstPhase=true;
	})
	$('.understandBtn').click(function(){
		modalPhase=true;
	})
	$('#downloadBtn').click(function(){
		finalPhase=true;
	})

});


// DOM Manipulation

function finalMessageDisplay(){

	if ($('#userEmail').includes('@skidmore.edu')){
		sendData();
		$('#sign_comp').css("display","inline");
		$('#desc').css("display","none");
		$('#features').css("display","none");
		$('#self_ident').css("display","none");
		$('#finSignup').css("display","none");
		$('#beta').css("display","none");
		$('#links').css("display","none");
		$('#ratings').css("display","none");
	}
	else{
		$('.contPrevbtns').append("<h4 id='invalidEmail'>School Email Required for Validation Purposes</h4>");
	}
}

function changeDivs(){
	$('#self_ident').remove();
	$('.final_signup').css("display","inline");
}

function invalidKey(){
	$('#invalidKey').css("display","block");
}



