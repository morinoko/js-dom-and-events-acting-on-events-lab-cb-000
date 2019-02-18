function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault();
    })
}

preventRefreshOnSubmit();

let input = document.querySelector('input[name="name"]');

function retrieveEmployeeInformation() {
  return input.value;
}

function addNewElementAsLi() {
  const employeeList = document.querySelector('.employee-list');
  const employeeName = retrieveEmployeeInformation();

  const li = document.createElement('li');
  li.innerHTML = employeeName;

  employeeList.append(li);
}

function addNewLiOnClick() {
  const submit = document.querySelector('input[type="submit"]');

  submit.addEventListener('click', function(e) {
    addNewElementAsLi();
    input.value = "";
  });
}

function clearEmployeeListOnLinkClick() {
  const clearButton = document.querySelector('a');

  clearButton.addEventListener('click', function(e) {
    let employeeList = document.querySelector('.employee-list');
    employeeList.innerHTML = '';
  });
}
