const courseNameInput = document.querySelector('#input-course-name');
const courseNameRating = document.querySelector('#input-course-rating');
const addBtn = document.querySelector('#btn-add');
const courseList = document.querySelector('#course-list');
const alertCtrl =document.querySelector('ion-alert-controller');

addBtn.addEventListener('click',()=>{
	const enteredCourseName=courseNameInput.value;
	const enteredCourseRating=courseNameRating.value;


	const newItem = document.createElement('ion-item');
	newItem.innerHTML = `<strong>${enteredCourseName}:</strong>&nbsp;${enteredCourseRating}/5`;

	courseList.appendChild(newItem);

	courseNameInput.value = '';
	courseNameRating.value ='';
});
