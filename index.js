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
  const employeeList = $('.employee-list');
  const clearButton = $('a');

  clearButton.addEventListener('click', function(e) {
    const employeeNames = employeeList.children();
    employeeNames.remove();
  });
}
