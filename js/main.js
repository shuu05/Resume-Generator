/*
*   @author : abhishek goswami ( hiro )
*   @github : abhishekg785
*   @email : abhishekg785@gmail.com
*
*   main.js : script for creating the resume entirely at client side using js
*/

(function ($, d) {
    var basicInfo = $('#basicInfo'),
        skillForm = $('#skillForm'),
        templateTheme = $('.templateTheme'),
        userExperienceForm = $('#userExperienceForm'),
        userEducationForm = $('#userEducationForm'),
        userHobbiesForm = $('#userHobbiesForm'),
        prevButton = $('#prevButton'),
        currentIndex = 0,
        currentChosenTemplateId = '',
        formHeader = $('#formHeader'),
        formPreviewDiv = $('#formPreview'),
        htmlFormat = $('#htmlFormat'),
        pdfFormat = $('#pdfFormat'),
        htmlFormatHead = '',
        isPreviewCloseButtonVisible = false,
        formIdArray = ['chooseTemplateForm', 'basicInfo', 'skillForm', 'userExperienceForm', 'userEducationForm', 'userProjectForm', 'userHobbiesForm', 'selectFormatForm'],
        formDescriptionArray = ['Choose a Template :)', 'Basic Information', 'Skill Set', 'Experience', 'Education', 'Projects',' Other Notable Info', 'Choose a Format'],
        // templateArray = ['black_genesis', 'blue_genesis', 'blue_3d_genesis', 'black_3d_genesis'],

        //parameters for form values
        userBaicInfoJSON = {},
        userSkillArr = [],

        //parameters for user experience infos
        userJobTitleArr = [],
        userCompanyArr = [],
        jobResponsibilityArr = [],

        //parameters for user education infos
        institutionNameArr = [],
        completionDateArr = [],
        userDegreeArr = [],

        //parameters for user Projects
        projectTitleArr = [],
        projectDescriptionArr = [],
        projectLinkArr = [],

        userHobbiesArr = [],

        //preview form parameters
        t_firstName = $('#t_firstName'),
        t_lastName = $('#t_lastName'),
        t_phone = $('#t_phone'),
        t_email = $('#t_email'),
        t_website = $('#t_website'),
        t_skills = $('#t_skills'),
        t_experience = $('#t_experience'),
        t_education = $('#t_education'),
        t_project = $('#t_project'),
        t_nInfo = $('#t_nInfo');

    /*
    * click event when the user chooses the template
    * show the next form
    */
    templateTheme.on('click', function (e) {
        e.preventDefault();
        var currFormID = "chooseTemplateForm";
        currentChosenTemplateId = this.id; // user selected template id
        prevButton.show();
        basicFunctions.showPreviewForm();
        basicFunctions.initializeTemplate();
        basicFunctions.processNextForm(currFormID);
    });

    /*
    * event for handling the submission of the basic Info of the users
    */
    basicInfo.on('submit', function (e) {
        e.preventDefault();
        var currFormID = this.id;
        var firstName = $('#firstName').val(),
            lastName = $('#lastName').val(),
            contactNumber = $('#contact').val(),
            userEmail = $('#userMail').val(),
            userWebsite = $('#userWebsite').val();
        userBaicInfoJSON = {
            'firstName': firstName,
            'lastName': lastName,
            'contactNumber': contactNumber,
            'userEmail': userEmail,
            'userWebsite': userWebsite
        };
        console.log(userBaicInfoJSON);
        console.log(currentIndex);
        basicFunctions.populateBasicInfoForm();
        basicFunctions.processNextForm(currFormID);
    });


    // addSkill to add the new skill field in the DOM
    $('#addSkill').click(function (e) {
        e.preventDefault();
        $('#addSkill').before("<br/><input type = 'text' required class = 'skill' placeholder = 'enter the skill'/><br/>");
    });

    /*
    * event to handle the submission of the skill form
    * and then show the next form
    */
    skillForm.on('submit', function (e) {
        e.preventDefault();
        userSkillArr = [];
        var currFormID = this.id;
        var skills = document.getElementsByClassName('skill');
        console.log(skills.length);
        for (var i = 0; i < skills.length; i++) {
            userSkillArr.push(skills[i].value);
        }
        console.log(userSkillArr);
        basicFunctions.populateUserSkillsForm();
        basicFunctions.processNextForm(currFormID);
    });

    // addExperience to add the new experience field in the DOM
    $('#addExperience').click(function (e) {
        e.preventDefault();
        var item = "<br/><input type = 'text' required class = 'jobTitle' placeholder = 'Job Title' /><br/><input type = 'text' class = 'companyName' required placeholder = 'Enter Company Name' /><br/><input type = 'text' class = 'jobResponsibility' required placeholder = 'Your Job Responsibilities' /><br/>";
        $('#addExperience').before(item);
    });

    /*
    * event to handle the submission of the user experience form
    * and then show the next form
    */
    userExperienceForm.on('submit', function (e) {
        e.preventDefault();
        userJobTitleArr = []
        userCompanyArr = []
        jobResponsibilityArr = []
        var currFormID = this.id;
        var userJobTitleInput = document.getElementsByClassName('jobTitle'),
            userCompanyInput = document.getElementsByClassName('companyName'),
            jobResponsibilityInput = document.getElementsByClassName('jobResponsibility');
        for (var i = 0; i < userJobTitleInput.length; i++) {
            userJobTitleArr.push(userJobTitleInput[i].value);
            userCompanyArr.push(userCompanyInput[i].value);
            jobResponsibilityArr.push(jobResponsibilityInput[i].value);
        }
        console.log(userJobTitleArr);
        console.log(userCompanyArr);
        console.log(jobResponsibilityArr);
        basicFunctions.populateUserExperienceForm();
        basicFunctions.processNextForm(currFormID);
    });

    // addEducation to add the new education field in the DOM
    $('#addEducation').on('click', function (e) {
        e.preventDefault();
        var item = "<br/><input type = 'text' required  class = 'institutionName' placeholder = 'Institute Name' /><br/><input type = 'text' class = 'completionDate' required placeholder = 'Your completion date' /><br/><input type = 'text' class = 'degree' required placeholder = 'Give Degree' /><br/>";
        $('#addEducation').before(item);
    });


    userEducationForm.on('submit', function (e) {
        e.preventDefault();
        var currFormID = this.id;
        institutionNameArr = [];
        completionDateArr = [];
        userDegreeArr = [];
        var institutionNameInput = document.getElementsByClassName('institutionName'),
            completionDateInput = document.getElementsByClassName('completionDate'),
            userDegreeInput = document.getElementsByClassName('degree');
        for (var i = 0; i < institutionNameInput.length; i++) {
            institutionNameArr.push(institutionNameInput[i].value);
            completionDateArr.push(completionDateInput[i].value);
            userDegreeArr.push(userDegreeInput[i].value);
        }
        // console.log(institutionNameArr);
        // console.log(completionDateArr);
        // console.log(userDegreeArr);
        basicFunctions.populateUserEducationForm();
        basicFunctions.processNextForm(currFormID);
    });


    $('#addProject').on('click', function (e) {
        e.preventDefault();
        var item = "<br/><input type = 'text' required class = 'projectTitle' placeholder = 'Project Title' /><br/><input type = 'text' required class = 'projectDescription' placeholder = 'Project Description' /><input type = 'text' class = 'projectLink' placeholder = 'Provide project URL' /><br/>";
        $('#addProject').before(item);
    });


    $('#userProjectForm').on('submit', function(e){
        e.preventDefault();
        var currFormId = this.id;
        projectTitleArr = [];
        projectDescriptionArr = [];
        projectLinkArr = [];
        var projectTitleInput = document.getElementsByClassName('projectTitle'),
            projectDescriptionInput = document.getElementsByClassName('projectDescription'),
            projectLinkInput = document.getElementsByClassName('projectLink');
        for(var i = 0; i < projectTitleInput.length; i++){
          projectTitleArr.push(projectTitleInput[i].value);
          projectDescriptionArr.push(projectDescriptionInput[i].value);
          projectLinkArr.push(projectLinkInput[i].value);
        }
        console.log(projectTitleArr);
        console.log(projectDescriptionArr);
        console.log(projectLinkArr);
        basicFunctions.populateUserProjectsForm();
        basicFunctions.processNextForm(currFormId);
    });

    $('#addHobby').click(function (e) {
        e.preventDefault();
        var item = "<br/><input type = 'text' class = 'hobbies' required placeholder = 'enter your hobby'/><br/>";
        $('#addHobby').before(item);
    });

    userHobbiesForm.on('submit', function (e) {
        e.preventDefault();
        userHobbiesArr = [];
        var currFormID = this.id;
        var hobbies = document.getElementsByClassName('hobbies');
        for (var i = 0; i < hobbies.length; i++) {
            userHobbiesArr.push(hobbies[i].value);
        }
        console.log(userHobbiesArr);
        basicFunctions.populateNoteworthyInfoForm();
        basicFunctions.processNextForm(currFormID);
    });

    prevButton.click(function (e) {
        e.preventDefault();
        var prevIndex = currentIndex - 1,
            prevFormId = formIdArray[prevIndex],
            currFormID = formIdArray[currentIndex];
        if(prevIndex == 0){
          basicFunctions.addTemplateChooseListener();
        }
        $('#' + currFormID).hide();
        $('#' + prevFormId).show();
        basicFunctions.setFormHeader(prevIndex);
        currentIndex = currentIndex - 1;
        if (prevIndex == 0) {
            prevButton.hide();
            basicFunctions.hidePreviewForm();
        }
    });

    var basicFunctions = {

        //get the index of the required form from the formIdArray
        getFormIndex: function (formString) {
            var index = formIdArray.indexOf(formString);
            if (index != -1) {
                return index;
            }
        },

        //get the count of the no of the total forms
        getFormArrCount: function () {
            var arrLen = formIdArray.length;
            return arrLen;
        },

        //get the index of the next form by passing the current form id
        getIndexOfNextForm: function (currFormID) {
            var currFormIndex = basicFunctions.getFormIndex(currFormID);
            if (currFormIndex + 1 < basicFunctions.getFormArrCount()) {
                return currFormIndex + 1;
            } else {
                return -1;
            }
        },

        //get the index of the previous form by passing the current form id
        getIndexOfPreviousForm: function (currFormID) {
            var currFormIndex = basicFunctions.getFormIndex(currFormID);
            if (currFormIndex - 1 > -1) {
                return currFormIndex - 1;
            } else {
                return -1;
            }
        },

        //show the next form and hide the current form
        processNextForm: function (currFormID) {
            var nextFormIndex = basicFunctions.getIndexOfNextForm(currFormID);
            if (nextFormIndex != -1) {
                currentIndex = nextFormIndex;
                basicFunctions.setFormHeader(nextFormIndex);
                var nextFormID = formIdArray[nextFormIndex];
                $('#' + currFormID).hide();
                $('#' + nextFormID).show();
            }
        },

        setFormHeader: function (index) {
            formHeader.text(formDescriptionArray[index]);
        },

        hidePreviewForm: function () {
            formPreviewDiv.hide();
        },

        showPreviewForm: function () {
            formPreviewDiv.show();
        },

        //functions to hadle info to populate in the preview form
        populateBasicInfoForm: function () {
            var basicInfoJSON = userBaicInfoJSON;
            t_firstName.text(basicInfoJSON.firstName);
            t_lastName.text(basicInfoJSON.lastName);
            t_phone.text(basicInfoJSON.contactNumber);
            t_email.text(basicInfoJSON.userEmail);
            t_website.text(basicInfoJSON.userWebsite);
        },

        populateUserSkillsForm: function () {
            t_skills.empty();
            for (var i = 0; i < userSkillArr.length; i++) {
                var item = '<li>' + userSkillArr[i] + '</li><hr/>';
                t_skills.append(item);
            }
        },

        populateUserExperienceForm: function () {
            t_experience.empty();
            for (var i = 0; i < userJobTitleArr.length; i++) {
                var item = '<li>' +
                    '<p class="t_jobTitle">' + userJobTitleArr[i] + '</p>' +
                    '<p class="t_companyName">' + userCompanyArr[i] + '</p>' +
                    '<p class="t_jobResponsibilities">' + jobResponsibilityArr[i] + '</p>' +
                    '</li><hr/>';
                t_experience.append(item);
            }
        },

        populateUserEducationForm: function () {
            t_education.empty();
            for (var i = 0; i < institutionNameArr.length; i++) {
                var item = '<li>' +
                    '<p class="t_institute">' + institutionNameArr[i] + '</p>' +
                    '<p class="t_pass">' + completionDateArr[i] + '</p>' +
                    '<p class="t_degree">' + userDegreeArr[i] + '</p>' +
                    '</li><hr/>';
                t_education.append(item);
            }
        },

        populateUserProjectsForm :  function(){
          t_project.empty();
          for(var i = 0 ;i < projectTitleArr.length; i++){
            var item =  "<li>" +
                        '<p class="t_project_title">'+ projectTitleArr[i] +'</p>' +
                        '<p class="t_project_desc">'+ projectDescriptionArr[i] +'</p>' +
                        '<p class="t_project_link">'+ projectLinkArr[i] +'</p>' +
                        "</li><hr/>";
            t_project.append(item);
          }
        },

        populateNoteworthyInfoForm: function () {
            t_nInfo.empty();
            for (var i = 0; i < userHobbiesArr.length; i++) {
                var item = "<li>" + userHobbiesArr[i] + "</li><hr/>";
                t_nInfo.append(item);
            }
        },

        initializeTemplate: function () {
            var template = currentChosenTemplateId;
            $('#userFormFillSection').show();
            $('.marginMe h4').css('font-weight', '400');
            $('.marginMe ul').css('list-style', 'none');
            $('.marginMe').css('top', '20px');
            $('.marginMe h2,h6').css('display', 'inline');
            $('.marginMe h2,h4').css('color', 'black');
            $('.marginMe h2').css('color', 'black');
            $('.marginMe h4').css('color', 'black');
            $('.marginMe h4').css('text-align', 'left');
            $('.marginMe h4').css('color', 'white');
            $('.blueDiv').css('background', 'none');
            $('.blackDiv').css('background-color', 'none');
            $('.card-title').css('color', 'black');
            if (template == 'template1') {
              $('#formPreview').css("font-family", "'Rajdhani', sans-serif'");
              htmlFormatHead = '<link href="https://fonts.googleapis.com/css?family=Rajdhani" rel="stylesheet">';
              $('#previewFormSection').css("font-family", "'Rajdhani', sans-serif");
            }
            else if (template == 'template2') {
                $('.marginMe h2,h4').css('color', 'cadetblue');
                $('#formPreview').css("font-family", "'Rajdhani', sans-serif'");
                $('#previewFormSection').css("font-family", "'Rajdhani', sans-serif");
                htmlFormatHead = '<link href="https://fonts.googleapis.com/css?family=Rajdhani" rel="stylesheet">';
            } else if (template == 'template3') {
                $('.marginMe h4').css('color', 'white');
                $('.marginMe h4').css('text-align', 'center');
                $('.blueDiv').css('background', 'cadetblue');
                $('.marginMe h2').css('color', 'cadetblue');
                $('#formPreview').css("font-family", "'Source Code Pro', monospace");
                $('#previewFormSection').css("font-family", "'Source Code Pro', monospace");
                htmlFormatHead = '<link href="https://fonts.googleapis.com/css?family=Source+Code+Pro" rel="stylesheet">';
            } else if (template == 'template4') {
                $('.marginMe h4').css('color', 'white');
                $('.marginMe h4').css('text-align', 'center');
                $('.blackDiv').css('background-color', 'black');
                $('#formPreview').css("font-family", "'Source Code Pro', monospace");
                $('#previewFormSection').css("font-family", "'Source Code Pro', monospace");
                htmlFormatHead = '<link href="https://fonts.googleapis.com/css?family=Source+Code+Pro" rel="stylesheet">';
            } else if (template == 'template5') {
                $('.marginMe h4').css('color', 'white');
                $('.marginMe h4').css('text-align', 'center');
                $('.blackDiv').css('background-color', 'Green');
                $('#formPreview').css("font-family", "'Lora', serif");
                $('#previewFormSection').css("font-family", "'Lora', serif");
                htmlFormatHead = '<link href="https://fonts.googleapis.com/css?family=Source+Code+Pro" rel="stylesheet">';
            }
        },

        addTemplateChooseListener : function(){
          templateTheme.on('click', function (e) {
              e.preventDefault();
              var currFormID = "chooseTemplateForm";
              currentChosenTemplateId = this.id; // user selected template id
              prevButton.show();
              basicFunctions.showPreviewForm();
              basicFunctions.initializeTemplate();
              basicFunctions.processNextForm(currFormID);
          });
        },

    }


    htmlFormat.on('click', function (e) {
        var htmlForm = $('.marginMe').html();
        var htmlString = '<html><head>'+ htmlFormatHead +'</head><body>'+ htmlForm +'</body></html>';
        console.log(htmlString);
        this.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(htmlString);
    });

    // function for creating the pdf of the resume
    var a4 = [595.28, 841.89],
        form = $('.marginMe');

    pdfFormat.click(function (e) {
        e.preventDefault();
        createPDF();
    });

    function createPDF() {
        getCanvas().then(function (canvas) {
            var
                img = canvas.toDataURL("image/png"),
                doc = new jsPDF({
                    unit: 'px',
                    format: 'a4'
                });
            doc.addImage(img, 'JPEG', 10, 10);
            doc.save('resume.pdf');
            form.width(cache_width);
            alert('Your PDF has been created and have been Downloaded!');
        });
    }

    // create canvas object
    function getCanvas() {
      console.log(form.html());
        form.width((a4[0] * 1.33333) - 80).css('max-width', 'none');
        return html2canvas(form, {
            imageTimeout: 2000,
            removeContainer: true
        });
    }

    $(d).ready(function () {
        if (currentIndex == 0) {
            formHeader.text(formDescriptionArray[0]);
            basicFunctions.hidePreviewForm();
            prevButton.hide();
        }
    });

    $('#showPreviewButton').click(function(){
      $('#fillingForm').hide();
      $('#resumePreviewID').css('left', '25%');
      if(!isPreviewCloseButtonVisible){
        $('#resumePreviewID').append('<button class = "btn btn-primary" style = "position:absolute;right:0px;top:-30px" onclick = "closePreviewForm()">Close</button>');
        isPreviewCloseButtonVisible = true;
      }
    });
})(jQuery, document);

function closePreviewForm(){
  $('#resumePreviewID').css('left', '-50%');
  setTimeout(function(){
    $('#fillingForm').show();
  },500);
}
