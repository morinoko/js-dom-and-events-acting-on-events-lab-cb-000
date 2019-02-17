function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault();
    })
}

preventRefreshOnSubmit();

function retrieveEmployeeInformation() {
  const input = $('input[name="name"]')[0];
  return input.value;
}

function addNewElementAsLi() {
  const employeeList = $('.employee-list');
  const employeeName = retrieveEmployeeInformation();

  const li = document.createElement('li');
  li.innerHTML = employeeName;

  employeeList.append(li);
}

function addNewLiOnClick() {
  const submit = $('input[type="submit"]')[0];

  submit.addEventListener('click', function(e) {
    addNewElementAsLi();
    input.value = "";
  });
}

addNewLiOnClick();

function clearEmployeeListOnLinkClick() {

}
